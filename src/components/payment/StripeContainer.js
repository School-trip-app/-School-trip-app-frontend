import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"
import './payment.css';

const PUBLIC_KEY = "pk_test_51LuDqsLCkHELEFnRFsUBdN3NDyXQh7ja6wOb2FODIDDBTdieECtB9YQy94A8OalcKaQG7FDb6weitHlfoNgQdTCp003hhuVdXY"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer({total}) {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm  total={total}/>
		</Elements>
	)
}