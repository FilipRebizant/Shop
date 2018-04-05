<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class HomeController extends Controller
{
    /**
     * @Route("/home", name="home")
     */
    public function index()
    {
        $products = ['produkt 1', 'produkt 2', 'produkt 3'];


        return $this->render('home.html.twig', [
            'products' => $products
        ]);
    }
}
