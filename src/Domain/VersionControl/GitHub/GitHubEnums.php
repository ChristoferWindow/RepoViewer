<?php

declare(strict_types=1);

namespace App\Domain\VersionControl;

use MyCLabs\Enum\Enum;

/**
 * Class GitHubEnums
 * @package App\Domain\VersionControl
 *
 * @method static GitHubEnums GITHUB_API_URL()
 * @method static GitHubEnums GITHUB_USER_REPOS_URL()
 * @method static GitHubEnums GITHUB_USER_REPO_URL()
 * @method static GitHubEnums GITHUB_USER_REPO_LANGUAGES_URL()
 * @method static GitHubEnums GITHUB_USER_REPO_FORKS_URL()
 */
class GitHubEnums extends Enum
{
    private const GITHUB_API_URL = 'https://api.github.com';
    private const GITHUB_USER_REPOS_URL = self::GITHUB_API_URL . '/users/%s/repos';
    private const GITHUB_USER_REPO_URL = self::GITHUB_API_URL . '/repos/%s/%s';
    private const GITHUB_USER_REPO_LANGUAGES_URL = self::GITHUB_USER_REPO_URL . '/languages';
    private const GITHUB_USER_REPO_FORKS_URL = self::GITHUB_USER_REPO_URL . '/forks';
}