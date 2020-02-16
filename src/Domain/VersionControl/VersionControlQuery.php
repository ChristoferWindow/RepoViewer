<?php

declare(strict_types=1);

namespace App\Domain\VersionControl;

class VersionControlQueryCommand
{
    private $versionControl;
    private $userName;
    private $repoName;

    public function __construct(string $versionControl, string $userName, ?string $repoName = null)
    {
        $this->versionControl = $versionControl;
        $this->userName = $userName;
        $this->repoName = $repoName;
    }

    public function getVersionControl(): string
    {
        return $this->versionControl;
    }

    public function getUserName(): string
    {
        return $this->userName;
    }

    public function getRepoName(): ?string
    {
        return $this->repoName;
    }
}