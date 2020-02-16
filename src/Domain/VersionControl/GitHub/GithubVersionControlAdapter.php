<?php

declare(strict_types=1);

namespace App\Domain\VersionControl\GitHub;

use App\Domain\VersionControl\GitHubEnums;
use Symfony\Contracts\HttpClient\ResponseInterface;
use VersionControl\VersionControlAdapter;

/**
 * Class GithubVersionControlAdapter
 * @package VersionControl
 */
class GithubVersionControlAdapter extends VersionControlAdapter
{
    public function getRepos(string $userName):array
    {
        $url = $this->createUrl([
            GitHubEnums::GITHUB_API_URL()->getValue(),
            GitHubEnums::GITHUB_USERS_URL()->getValue(),
            $userName,
            GitHubEnums::GITHUB_REPOS_URL()->getValue(),
        ]);

        $request =  $this->apiClient->request('GET', $url)->toArray();

        $response = [];
        foreach ($request as $item) {
            $owner = $this->getOwnerData($item['owner']['login'], $item['owner']['avatar_url']);

            $response[] = [
                'name' => $item['name'],
                'owner' => $owner,
                'fork' => $item['fork'],
                'forksCount' => $item['forks_count'],
                'language' => $item['language']
            ];
        }

        return $response;
    }

    public function getRepo(string $userName, string $repoName): array
    {
        $url = $this->createUrl([
            GitHubEnums::GITHUB_API_URL()->getValue(),
            GitHubEnums::GITHUB_REPOS_URL()->getValue(),
            $userName,
            $repoName,
        ]);

        $request =  $this->apiClient->request('GET', $url)->toArray();

        $owner = $this->getOwnerData($request['owner']['login'], $request['owner']['avatar_url']);

        $fork = $request['fork'];
        $parent = [];

        if ($fork) {
            $parent = $this->getParentData($request['name'], $request['parent']['owner']['login']);
        }

        $langugaes = $this->getLanguages($userName, $repoName);

        $response = [
            'name' => $request['name'],
            'owner' => $owner,
            'fork' => $fork,
            'parent' => $parent,
            'languages' => $langugaes,
        ];

        return $response;
    }
    public function getForks(string $userName, string $repoName):array{
        $url = $this->createUrl([
            GitHubEnums::GITHUB_API_URL()->getValue(),
            GitHubEnums::GITHUB_REPOS_URL()->getValue(),
            $userName,
            $repoName,
            GitHubEnums::GITHUB_FORKS_URL()->getValue(),
        ]);

        $request =  $this->apiClient->request('GET', $url)->toArray();

        $response = [];
        foreach ($request as $item) {
            $owner = $this->getOwnerData($item['owner']['login'], $item['owner']['avatar_url']);
            $response[] = [
                'name' => $item['name'],
                'owner' => $owner,
            ];
        }

        return $response;
    }

    public function getLanguages(string $userName, string $repoName): array
    {
        $url = $this->createUrl([
            GitHubEnums::GITHUB_API_URL()->getValue(),
            GitHubEnums::GITHUB_REPOS_URL()->getValue(),
            $userName,
            $repoName,
            GitHubEnums::GITHUB_LANGUAGES_URL()->getValue(),
        ]);

        $request =  $this->apiClient->request('GET', $url)->toArray();

        return array_keys($request);
    }

    public function parseResponse(ResponseInterface $response): array
    {
        $statusCode = $response->getStatusCode();
        $parsedResponse = json_decode($response->getBody()->getContents(), true);

        switch ($statusCode) {
            case 200:
                return $parsedResponse;
                break;
            case 404:
                throw new InvalidResponse('Repository ' . $this->repo . ' '. mb_strtolower($parsedResponse['message']));
                break;
            case 500:
                throw new InvalidResponse('There was a problem with connecting to the server');
                break;
            default:
                throw new InvalidResponse('We could not process your request');
                break;
        }
    }

    public function getRepoDetails()
    {

    }

    private function getParentData(string $userName, string $repoName)
    {
        return [
            'name' => $repoName,
            'ownerLogin' => $userName,
        ];
    }

    private function getOwnerData(string $userName, string $avatarUrl)
    {
        return [
            'ownerLogin' => $userName,
            'avatarUrl' => $avatarUrl
        ];
    }
}