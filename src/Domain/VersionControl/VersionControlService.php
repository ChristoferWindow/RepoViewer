<?php

declare(strict_types=1);

namespace App\Domain\VersionControl;

use VersionControl\VersionControlAdapter;

class VersionControlService
{
    /**
     * @var VersionControlAdapterFactory
     */
    public $versionControlAdapterFactory;

    /**
     * VersionControlService constructor.
     * @param VersionControlAdapterFactory $versionControlAdapterFactory
     */
    public function __construct(VersionControlAdapterFactory $versionControlAdapterFactory)
    {
        $this->versionControlAdapterFactory = $versionControlAdapterFactory;
        $adapter = null;
    }

    public function getRepos(VersionControlQuery $query): array
    {
        return $this->getAdapter($query->getVersionControl())->getRepos($query);
    }

    public function getRepo(VersionControlQuery $query): array
    {
        return $this->getAdapter($query->getVersionControl())->getRepo($query);
    }

    public function getForks(VersionControlQuery $query): array
    {
        return $this->getAdapter($query->getVersionControl())->getForks($query);
    }

    private function getAdapter(string $name): VersionControlAdapter
    {
        return $this->versionControlAdapterFactory->createByName($name);
    }
}