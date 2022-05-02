import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'
import "./Styles.css";

export default function Clarity() {
  return (
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 lg:py-12">
  <div class="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
    <div class="mx-auto max-w-prose lg:text-lg">
    </div>
    <div class="prose prose-slate mx-auto mt-8 lg:prose-lg">
    <h1>What Exactly is Clarity & How Much Does it Matter?</h1>
    <br></br>
      <p class="lead">Clarity in short - </p>
      <p>Clarity refers to the purity of the stone, the purity of the diamond is determined by the blemishes the diamond does or does not have.</p>
      <p class="lead">How to approach clarity in a diamond - </p>
      <p>Yes, clarity is a very important factor to consider when purchasing a ring. Although it is
      important to note that at a certain point with clarity, you are paying for something that you
      can't even see with a naked eye. Instead you can save that extra money, and spend it on
      other factors that are more noticeable such as color,cut and the carrot!
      If you get any clarity above S12 you will not be able to see any of the impurities with
      your naked eye. Although, if you decided to get anything above VS2, you will be overpaying for something that you
      will not be able to see with your naked eye.
      </p>
      <p class="lead">Clarity on a scale - </p>
      <img src="https://loversrockdiamonds.co.uk/uploads/backend/education/897c00bdc79f192be8d5da0407e20a72.png" alt="" />
      <br>
      </br>
      <footer class="text-xl">

        <Link to='/clarity' onClick={() => window.scrollTo(0, 0)}>T<i className='far fa-gem'/>P</Link>

      </footer>
    </div>
  </div>
</div>

   );
}
