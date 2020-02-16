<?php

declare(strict_types=1);

namespace App\Domain\VersionControl;

use MyCLabs\Enum\Enum;

/**
 * Class VersionControlEnums
 * @package App\Domain\VersionControl
 *
 * @method static VersionControlEnums VERSION_CONTROL_GITHUB()
 */
class VersionControlEnums extends Enum
{
    private const VERSION_CONTROL_GITHUB = 'github';
}