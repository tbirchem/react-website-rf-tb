import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'
import "./Styles.css";

export default function Shop() {
  return (<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 lg:py-12">
    <div class="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
      <div class="mx-auto max-w-prose lg:text-lg">
      </div>
      <div class="prose prose-slate mx-auto mt-8 lg:prose-lg">
      <h1>Buy Your Ring!</h1>
      <br></br>
        <p class="lead">Buying a Ring - </p>
        <p class='font-serif'>
        No, I do not sell rings myself, although below you will find some of the top rated
        places to buy a ring from!
        </p>
        <p class="lead">Recommended Stores-</p>
        <p class="font-serif">
        <a href="https://www.bluenile.com/engagement-rings">Blue Nile</a> -
        </p>
        <p class='font-serif'>
        Blue Nile played a large role in paving the way for online ring shopping, and there is a reason
        they are atop of this list. Blue Nile sells rings directly from the manufacturers, leaving the
        middle-men out of the equation, ensuring you some of the best prices.
        </p>
        <p class="font-serif">
        <a href="https://www.jamesallen.com/engagement-rings/">James Allen</a> -
        </p>
        <p class='font-serif'>
        Best known for their high quality videos, James Allen brings an immersive online shoping experince,
        leaving nothing to the imagination for their customers. Knowing excatly what you are getting
        when shopping for a ring is a huge plus, and why James Allen is on this list.
        </p>
        <p class="font-serif">
        <a href="https://www.leibish.com/engagement-rings">Leibish & Co.</a> -
        </p>
        <p class='font-serif'>
        If you want color, then look no further! Leibish & Co. sells an aray of
        stunning colorful diamonds, sure to leave your special someone beaming with joy.
        Although color is their speciality, don't think they sacrifices this for quality, as
        the quality of their diamonds are equally as impressive.
        </p>
        <br></br>
        <p class="font-serif text-center text-lg">Happy Shopping!</p>
        <br></br>
        <br></br>
        <footer class="text-xl">

          <Link to='/color' onClick={() => window.scrollTo(0, 0)}><i className='far fa-gem'/></Link>

        </footer>
      </div>
    </div>
  </div>
  );
  }
