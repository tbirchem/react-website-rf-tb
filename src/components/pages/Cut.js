import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'
import "./Styles.css";

export default function Color() {
  return (
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 lg:py-12">
  <div class="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
    <div class="mx-auto max-w-prose lg:text-lg">
    </div>
    <div class="prose prose-slate mx-auto mt-8 lg:prose-lg">
    <h1 class= "" > The Cut of a Diamond </h1>
    <br></br>
      <p class="lead">3 types of cuts -</p>
      <p class="font-serif">When it comes to cuts, you have three options, shallow, ideal & deep. The cut that you chose
      will determine the wow factor of your diamond. Even a diamond with a perfect clarity grade can
      look dull if it is cut too deep or shallow. While there are only 3 types of cuts, there are multiple instances
      of each cut (see image below), some better than others and that is what you have to look for. For your diamond to have
      that wow factor everyone is looking for, you don't have to pay for the ideal cut, but you cannot settle for a
      cut that is too shallow or deep.
      </p>
      <p class="lead">From Blue Nile -</p>
      <blockquote>
      <p class="font-serif">A diamond’s cut refers to how well-proportioned the dimensions of a diamond are, and how these surfaces,
      or facets, are positioned to create sparkle and brilliance. For example, what is the ratio of the diamond’s
      diameter in comparison to its depth? These small, yet essential, factors determine the diamond’s beauty and price.
      </p>
      </blockquote>
      <p class="lead">Cut on a scale -</p>
      <img src="https://abluediamond.com/wp-content/uploads/2016/06/Diamond-Cut-4cs-by-GIA-Diamond-Education-1.png" alt="" />
      <br>
      </br>
      <footer class="text-xl">

        <Link to='/cut' onClick={() => window.scrollTo(0, 0)} ><i className='far fa-gem'/></Link>

      </footer>
    </div>
  </div>
</div>

   );
}
