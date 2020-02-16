<?php

declare(strict_types=1);

namespace App\Domain\Common;

use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\ResponseInterface;

/**
 * Class HttpClientApiClient
 * @package App\Domain\Common
 */
class HttpClientApiClient implements ApiClient
{
    /**
     * @var HttpClient
     */
    private $client;

    /**
     * HttpClientApiClient constructor.
     * @param HttpClient $client
     */
    public function __construct(HttpClient $client)
    {
        $this->client = $client::create();
    }

    public function request(string $method, string $url, array $options = []): ResponseInterface
    {
        return $this->client->request($method, $url, $options);
    }
}