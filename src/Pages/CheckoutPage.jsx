import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const CheckoutPage = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_APP_PAYMENT_PK);
    return (
        <div className="py-24 w-11/12 mx-auto ">
         <div className="text-center text-3xl font-bold p-6">
         <h1>Payment for contact Info</h1>
         </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
           

        </div>
    );
};

export default CheckoutPage;