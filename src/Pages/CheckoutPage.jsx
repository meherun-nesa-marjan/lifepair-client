import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const CheckoutPage = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_APP_PAYMENT_PK);
    return (
        <div className="py-20 w-11/12 mx-auto">
            <h1>Payment for contact</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
           

        </div>
    );
};

export default CheckoutPage;