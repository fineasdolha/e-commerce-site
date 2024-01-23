<?php 

namespace App\Service;
use App\Entity\Product;
use App\Model\ShoppingCart;
use Stripe\Checkout\Session;
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

    public function createCheckOutSession(ShoppingCart $shoppingCart) :Session
    {
        $lineItems=[];

        foreach ($shoppingCart->items as $item){
            $lineItems[]= [
                'price' => $item->product->getStripePriceId(),
                'quantity' => $item->quantity, 
            ];    
        }
        return $this->getStripe()->checkout->sessions->create([
            'mode' => 'payment',
            'currency' => 'EUR',
            'line_items' => $lineItems,
            'success_url' => 'https://127.0.0.1:8000/stripe/success?session_id={CHECKOUT_SESSION_ID}',
        ]);

    }

    public function getCheckOutSession(string $sessionId) :Session
    {
       return $this->getStripe()->checkout->sessions->retrieve($sessionId);
    }

    private function getStripe(): StripeClient 
    {
       return $this->stripe ?? new StripeClient($_ENV['STRIPE_API_SECRET']); 
    }


}