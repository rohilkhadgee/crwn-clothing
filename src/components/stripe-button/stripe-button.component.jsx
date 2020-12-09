import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_51HwPuBAm1gcYeREYXWgyAvuZWctN2VuaR32Sq2iZyKG81nmV3hgtzou0QINBY384YdrzR7DihD3Vav8lkELCB86H00PcSfcFP3';
     const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout 
            label ='Pay Now'
            name ='CRWN Cloathing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Total is ${price}`}
            amoutn ={priceForStripe}
            panelLabel='Pay Now'
            token ={onToken}
            stripeKey={publishableKey}
        
        
        />
    );
};

export default StripeCheckout;