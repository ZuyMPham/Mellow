  
import { loadStripe } from '@stripe/stripe-js';
// require("dotenv").config();
let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51LbAI2JqqrIKNMYoprA20posXNnt3ly60s89YbYU2yXTnXVJ6kPD8xiNgq4qh4sMolHTLmyg8kCyjCPleN3Sdg2f00FDskC3PD');
  }

  return stripePromise;
}

export default getStripe;