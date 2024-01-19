<?php 

namespace App\Service;
use App\Entity\Product;
use Stripe\StripeClient;
use Stripe\Price;

class StripeService 
{   
    private StripeClient $stripe;

    public function createProduct(Product $product): \Stripe\Product
    {
        return $this->getStripe()->products->create([
            'name' => $product ->getName(),
            'description' => $product ->getDescription(),
            'active' => $product ->isActive()
        ]);
    }

    public function updateProduct(Product $product) :\Stripe\Product 
    {
        return $this->getStripe()->products->update($product->getStripeProductId(),[
            'name' => $product ->getName(),
            'description' => $product ->getDescription(),
            'active' => $product ->isActive()
        ]);
    }

    public function createPrice(Product $product): Price
    {
        return $this->getStripe()->prices->create([
            'unit_amount' => $product ->getPrice(),
            'currency' => 'EUR',
            'product' => $product ->getStripeProductId()

        ]);
    }


    private function getStripe(): StripeClient 
    {
       return $this->stripe ?? new StripeClient($_ENV['STRIPE_API_SECRET']); 
    }
}