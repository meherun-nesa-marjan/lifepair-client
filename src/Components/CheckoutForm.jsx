import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    console.log(id)
    const { user } = useContext(AuthContext);
    const totalPrice = 5;
    const { data: contact = [],  } = useQuery({
        queryKey: ["contact", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contactDetails/${id}`);
            console.log(res.data)
            return res.data;
        },
    });
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })

    }, [axiosSecure, totalPrice])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymouse',
                    name: user?.displayName || 'anonymouse'
                }

            }
        })

        if (confirmError) {
            console.log('confirm errror')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                const payment = {
                    transactionId: paymentIntent.id,
                    userName: user.displayName,
                    userEmail: user.email,
                    name:contact.Name,
                    email:contact.ContactEmail,
                    mobileNumber:contact.MobileNumber,
                    biodataId: id,
                    price: totalPrice,
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log(res)
                Swal.fire("Success", " Payment successfully!", "success");
            }
        }




    };
    return (
        <div className="lg:w-6/12 w-full mx-auto border-2 p-3 lg:p-10">
            <form onSubmit={handleSubmit}>
                <div className="">
                    <div className="mb-4 flex items-center">
                        <label className="text-sm w-20 font-bold text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="ContactEmail"
                            value={user.email}
                            className=" px-3 py-2 lg:w-2/3 w-full border rounded-md focus:outline-none"
                            readOnly
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="text-sm w-20 font-bold text-gray-700">Bioata Id:</label>
                        <input
                            type="text"
                            name="ContactEmail"
                            value={id}
                            className="lg:w-2/3 w-full px-3 py-2 border rounded-md focus:outline-none"
                            readOnly
                        />
                    </div>
                </div>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-red-700 text-white my-5 px-5 py-2 rounded" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p>{error}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;
