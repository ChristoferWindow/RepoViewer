<?php

declare(strict_types=1);

namespace App\Domain\VersionControl;

use App\Domain\Common\ApiClient;
use App\Domain\VersionControl\GitHub\GithubVersionControlAdapter;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use VersionControl\VersionControlAdapter;

/**
 * Class VersionControlAdapterFactory
 * @package VersionControl
 */
class VersionControlAdapterFactory
{
    /**
     * @var ApiClient $apiClient
     */
    private $apiClient;

    /**
     * VersionControlAdapterFactory constructor.
     * @param ApiClient $apiClient
     */
    public function __construct(ApiClient $apiClient)
    {
        $this->apiClient = $apiClient;
    }

    /**
     * @param string $name
     * @return VersionControlAdapter
     */
    public function createByName(string $name): VersionControlAdapter
    {
        switch ($name) {
            case VersionControlEnums::VERSION_CONTROL_GITHUB()->getValue() :
                return new GithubVersionControlAdapter($this->apiClient);
            default:
                throw new NotFoundHttpException('Sorry we could not find specified url');
        }
    }
}