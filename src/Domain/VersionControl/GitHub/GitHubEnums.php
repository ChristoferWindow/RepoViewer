<?php

declare(strict_types=1);

namespace App\Domain\VersionControl;

use MyCLabs\Enum\Enum;

/**
 * Class GitHubEnums
 * @package App\Domain\VersionControl
 *
 * @method static GitHubEnums GITHUB_API_URL()
 * @method static GitHubEnums GITHUB_USERS_URL()
 * @method static GitHubEnums GITHUB_REPOS_URL()
 * @method static GitHubEnums GITHUB_FORKS_URL()
 * @method static GitHubEnums GITHUB_LANGUAGES_URL()
 */
class GitHubEnums extends Enum
{
    private const GITHUB_API_URL = 'https://api.github.com';
    private const GITHUB_USERS_URL = 'users';
    private const GITHUB_REPOS_URL = 'repos';
    private const GITHUB_FORKS_URL = 'forks';
    private const GITHUB_LANGUAGES_URL = 'languages';
}