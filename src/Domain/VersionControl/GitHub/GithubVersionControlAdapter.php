<?php

declare(strict_types=1);

namespace App\Domain\VersionControl\GitHub;

use App\Domain\VersionControl\GitHubEnums;
use App\Domain\VersionControl\VersionControlQuery;
use Symfony\Contracts\HttpClient\ResponseInterface;
use VersionControl\VersionControlAdapter;

/**
 * Class GithubVersionControlAdapter
 * @package VersionControl
 */
class GithubVersionControlAdapter extends VersionControlAdapter
{
    public function getRepos(VersionControlQuery $query):array
    {
        $url = sprintf(GitHubEnums::GITHUB_USER_REPOS_URL()->getValue(), $query->getUserName());

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

    public function getRepo(VersionControlQuery $query): array
    {
        $url = sprintf(GitHubEnums::GITHUB_USER_REPO_URL()->getValue(), $query->getUserName(), $query->getRepoName());

        $request =  $this->apiClient->request('GET', $url)->toArray();

        $owner = $this->getOwnerData($request['owner']['login'], $request['owner']['avatar_url']);

        $fork = $request['fork'];
        $parent = [];

        if ($fork) {
            $parent = $this->getParentData($request['name'], $request['parent']['owner']['login']);
        }

        $languages = $this->getLanguages($query);

        $response = [
            'name' => $request['name'],
            'owner' => $owner,
            'fork' => $fork,
            'parent' => $parent,
            'languages' => $languages,
        ];

        return $response;
    }
    public function getForks(VersionControlQuery $query):array
    {
        $url = sprintf(GitHubEnums::GITHUB_USER_REPO_FORKS_URL()->getValue(), $query->getUserName(), $query->getRepoName());

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

    public function getLanguages(VersionControlQuery $query): array
    {
        $url = sprintf(GitHubEnums::GITHUB_USER_REPO_LANGUAGES_URL()->getValue(), $query->getUserName(), $query->getRepoName());

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