<?php

declare(strict_types=1);

namespace VersionControl;

use App\Domain\Common\ApiClient;
use App\Domain\VersionControl\VersionControlQuery;

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

    public function getRepos(VersionControlQuery $query):array{}
    public function getRepo(VersionControlQuery $query):array{}
    public function getForks(VersionControlQuery $query):array{}
    public function getLanguages(VersionControlQuery $query):array{}
    public function createUrl(array $urlParts):string
    {
        return implode('/', $urlParts);
    }
}
