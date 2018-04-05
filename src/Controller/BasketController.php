<?php

namespace App\Controller;

use App\Entity\Product;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class BasketController extends Controller
{
    /**
     * @Route("/basket", name="basket")
     */
    public function index(Request $request)
    {
        $session = $request->getSession();
        $products = $session->get('products');

        return $this->render('basket/index.html.twig', [
            'products' => $products
        ]);
    }

    /**
     * @Route("/addToBasket")
     */
    public function add(Request $request)
    {
        $productName = $request->get('name');
        $quantity = $request->get('quantity');
        $session = $request->getSession();

        if ($session->has('products')) {
            $currentProducts = $session->get('products');

            foreach ($currentProducts as $product) {
                if ($product->getName() == $productName) {
                    $newQuantity = (intval($product->getQuantity()) + intval($quantity));
                    $product->setQuantity($newQuantity);

                    return new JsonResponse('Dodano do koszyka', 200);
                }
            }

        } else {
            $currentProducts = [];
        }
        $newProduct = new Product($productName, $quantity);
        array_push($currentProducts, $newProduct);
        $session->set('products', $currentProducts);

        return new JsonResponse('Dodano do koszyka', 200);
    }

    /**
     * @Route("/removeFromBasket")
     */
    public function remove(Request $request)
    {
        $productName = $request->get('name');
        $quantity = $request->get('quantity');
        $session = $request->getSession();

        if ($session->has('products')) {
            $currentProducts = $session->get('products');

            foreach ($currentProducts as $key => $product) {
                if ($product->getName() == $productName) {
                    $newQuantity = (intval($product->getQuantity()) - intval($quantity));
                    if ($newQuantity >= 0) {
                    } else {
                        $newQuantity = 0;
                    }
                    $product->setQuantity($newQuantity);

                    return new JsonResponse([
                        'info' => 'Usunięto z koszyka',
                        'newQuantity' => $newQuantity
                    ], 200);
                }
            }
        }

        return new JsonResponse('Nie znaleziono produktu');
    }

}
