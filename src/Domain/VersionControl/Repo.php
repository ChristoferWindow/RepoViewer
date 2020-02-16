<?php

declare(strict_types=1);


namespace App\Domain\VersionControl;


class Repo
{
    private $name;
    private $owner;
    private $forks;
    private $forksCount;
    private $languages;

    /**
     * Repo constructor.
     * @param $name
     * @param $owner
     * @param $forks
     * @param $forksCount
     * @param $languages
     */
    public function __construct(string $name, string $owner, string $forks, string $forksCount, string $languages)
    {
        $this->name = $name;
        $this->owner = $owner;
        $this->forks = $forks;
        $this->forksCount = $forksCount;
        $this->languages = $languages;
    }
}