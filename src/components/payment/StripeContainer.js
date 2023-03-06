import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"
import './payment.css';

const PUBLIC_KEY = "pk_test_51MaNalGdyr4z0iOx3KzFLX8m9ACl95KfAzYMgQ4WaSouFYmca8bLoexkCNwJ2DjUsVUjN3aWbjgsDU4DMwgH0PcE00EvPAPLC4"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer({total}) {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm  total={total}/>
		</Elements>
	)
}