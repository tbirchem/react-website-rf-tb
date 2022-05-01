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
    <h1 class= "" > Color </h1>
    <br></br>
      <p class="lead">Color in a diamond - </p>
      <p>When it comes to choosing the "color" of your diamond, it is extremely important. Choosing the right color
      is important because it is one of the most noticeable things about the diamond. The worst the color grade is,
      the more yellow the diamond is. I would suggest that if you have a few extra dollars to spend, make sure some of
      that extra money in invested into the color of the diamond... you can thank me later.
      </p>
      <p class="lead">Fluorescent diamonds-</p>
      <p>You probably thought it was a joke when you saw the word fluorescent, but no, it is indeed a factor! In fact,
      This could possibly be one of the biggest factors when choosing a diamond. You want to be sure that your diamond is not
      fluorescent at all, as this can cause your diamond to look very blue and much less appealing when under natural light.
      You will only see this effect under natural light, so don't be fooled when shopping at the jewelers!
      </p>
      <p class="lead">Which color to chose -</p>
      <p>Per the graph shown below, you can see that there can be a pretty drastic difference between the colors of diamonds.
      When deciding what color is the best, it would be wise to stay above K. When choosing a diamond that has the color
      of K or lower, it starts to become very noticable to eye and the diamond becomes much less appealing to the eye.
      </p>
      <p class="lead">Color on a scale - </p>
      <img src="https://www.pricescope.com/wp-content/uploads/2020/12/pricescope-education-103.1-diamond-color-chart-ss-1024x576.jpg" alt="" />
      <br>
      </br>
      <footer class="footer">

        <Link to='/' > --- <i className='far fa-gem'/> --- </Link>

      </footer>
    </div>
  </div>
</div>

   );
}
