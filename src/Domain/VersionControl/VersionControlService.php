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

    public function getRepos(VersionControlQuery $command): array
    {
        return $this->getAdapter($command->getVersionControl())->getRepos($command->getUserName());
    }

    public function getRepo(VersionControlQuery $command): array
    {
        return $this->getAdapter($command->getVersionControl())->getRepo($command->getUserName(), $command->getRepoName());
    }

    public function getForks(VersionControlQuery $command): array
    {
        return $this->getAdapter($command->getVersionControl())->getForks($command->getUserName(), $command->getRepoName());
    }

    private function getAdapter(string $name)
    {
        return $this->versionControlAdapterFactory->createByName($name);
    }
}