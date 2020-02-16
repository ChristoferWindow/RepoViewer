<?php

declare(strict_types=1);

namespace VersionControl;

use App\Domain\Common\ApiClient;

/**
 * Class VersionControlAdapter
 * @package VersionControl
 */
abstract class VersionControlAdapter
{

    protected $apiClient;

    public function __construct(ApiClient $apiClient)
    {
        $this->apiClient = $apiClient;
    }

    public function getRepos(string $userName):array{}
    public function getRepo(string $userName, string $repoName):array{}
    public function getForks(string $userName, string $repoName):array{}
    public function getLanguages(string $userName, string $repoName):array{}
    public function createUrl(array $urlParts):string
    {
        return implode('/', $urlParts);
    }
}
