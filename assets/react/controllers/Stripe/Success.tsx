import { CheckCircleOutline } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { formatPrice, visit } from "../../../utils";
import useShoppingCart from "../../hooks/useShoppingCart";

export default function Success({ amountTotal }) {
    const {emptyShoppingCart} = useShoppingCart();
    React.useEffect(() => emptyShoppingCart(), []);
    return (
        <Container onLoad={() => emptyShoppingCart()}>
            <Box>
                <CheckCircleOutline color="success"/>
                <Typography component="h1" variant="h4">
                    Paiement efectué avec success
                </Typography>
                <Typography>
                    Merci pour votre achat de {formatPrice(amountTotal)} !
                </Typography>
                <Box marginTop={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => visit('/')}
                    >
                        Retour à la boutique
                    </Button>
                </Box>
                {/* <Box marginTop={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        
                    >
                        empty
                    </Button>
                </Box> */}
            </Box>
        </Container>
    )
}