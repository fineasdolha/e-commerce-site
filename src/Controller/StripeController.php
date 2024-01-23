<?php

namespace App\Controller;

use App\Service\SessionService;
use App\Service\StripeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;

class StripeController extends AbstractController
{
    public function __construct(
        private readonly StripeService $stripeService
    )
    {
        
    }
    
    #[Route('/stripe/checkout-session', name:'create_checkout_session', methods: ['GET', 'POST'])]
    public function createCheckOutSession(SessionService $sessionService): HttpFoundationResponse
    {
        return $this->json([
            'url' => $this->stripeService->createCheckOutSession($sessionService->getShoppingCart())->url
        ]);
    }

    #[Route('/stripe/success', name:'success', methods: ['GET', 'POST'])]
    public function success(Request $request): HttpFoundationResponse
    {
        $sessionId = $request->query->getString('session_id');
        return $this->render('stripe/success.html.twig', [
            'amountTotal' => $this->stripeService->getCheckOutSession($sessionId)->amount_total
        ]);
    }

}