<?php

declare(strict_types=1);

namespace VersionControl;

use ApiClient;
use Psr\Http\Message\ResponseInterface;

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
}
