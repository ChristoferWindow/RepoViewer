<?php

declare(strict_types=1);


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RepoSearchController
 * @package App\Controller
 */
class RepoSearchController extends AbstractController
{
    /**
     * @Route("/hello", name="blog_list")
     */
    public function query()
    {
        return json_encode(['helo']);
    }
}