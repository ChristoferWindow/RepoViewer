<?php

declare(strict_types=1);

namespace App\Controller;

use App\Domain\VersionControl\VersionControlQuery;
use App\Domain\VersionControl\VersionControlService;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * @Route("/api")
 */
class RepoController extends AbstractController
{
    /**
     * VersionControlService
     */
    private $service;

    public function __construct(VersionControlService $service)
    {
        $this->service = $service;
    }

    /**
     * @Get("/{versionControl}/users/{userName}/repos", name="get_repos")
     */
    public function getRepos(string $versionControl, string $userName): Response
    {
        $query = new VersionControlQuery($versionControl, $userName);
        return $this->json($this->service->getRepos($query));
    }

    /**
     * @Get("/{versionControl}/users/{userName}/repos/{repoName}", name="get_repo")
     */
    public function getRepo(string $versionControl, string $userName, string $repoName): Response
    {
        $query = new VersionControlQuery($versionControl, $userName, $repoName);
        return $this->json($this->service->getRepo($query));
    }

    /**
     * @Get("/{versionControl}/users/{userName}/repos/{repoName}/forks", name="get_forks")
     */
    public function getForks(string $versionControl, string $userName, string $repoName): Response
    {
        $query = new VersionControlQuery($versionControl, $userName, $repoName);
        return $this->json($this->service->getForks($query));
    }
}