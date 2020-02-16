<?php

declare(strict_types=1);

namespace App\Domain\Common;

use Symfony\Contracts\HttpClient\ResponseInterface;

/**
 * Interface ApiClient
 */
interface ApiClient
{
    public function request(string $method, string $url, array $options = []): ResponseInterface;
}