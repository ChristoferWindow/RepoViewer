<?php

declare(strict_types=1);

namespace App\Domain\VersionControl;

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
    }

    public function getRepos(VersionControlQueryCommand $command): array
    {
        $adapter = $this->versionControlAdapterFactory->createByName($command->getVersionControl());
        return $adapter->getRepos($command->getUserName());
    }

    public function getRepo(VersionControlQueryCommand $command): array
    {
        $adapter = $this->versionControlAdapterFactory->createByName($command->getVersionControl());
        return $adapter->getRepo($command->getUserName(), $command->getRepoName());
    }

    public function getForks(VersionControlQueryCommand $command): array
    {
        $adapter = $this->versionControlAdapterFactory->createByName($command->getVersionControl());
        return $adapter->getForks($command->getUserName(), $command->getRepoName());
    }
}