import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'
import "/Users/taylorbirchem/react-website-rf-tb/src/components/pages/Questionnair.css";



export default function Questionnair() {
  return (
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 lg:py-12">
  <div class="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
    <div class="mx-auto max-w-prose lg:text-lg">
    </div>
    <div class="prose prose-slate mx-auto mt-8 lg:prose-lg">
    <h1 class= "" > Find Your Perfect <i className='far fa-gem'/></h1>
    <br></br>
    <label class="block">
      <span class="text-gray-700">Name</span>
      <input class="form-input mt-1 block w-full" placeholder="Please enter your full name"></input>
    </label>
    <br></br>
  <label class="block mt-4">
    <span class="text-gray-700">First off...are you sure you're ready for Marriage? (; </span>
     <select class="form-select mt-1 block w-full">
        <option>-</option>
        <option>Yes!</option>
        <option>No Way!</option>
     </select>
  </label>
  <label class="block mt-4">
    <span class="text-gray-700">Budget</span>
     <select class="form-select mt-1 block w-full" >
        <option>-</option>
        <option>$0-1,999</option>
        <option>$2,000-4,999</option>
        <option>$5,000-9,999</option>
        <option>$10,000+</option>
     </select>
  </label>
  <label class="block mt-4">
    <span class="text-gray-700">Grade of cut you are looking for?</span>
     <select class="form-select mt-1 block w-full">
        <option>-</option>
        <option>Excellent</option>
        <option>Very Good</option>
        <option>Good</option>
        <option>Fair</option>
        <option>Poor</option>
     </select>
  </label>
  <label class="block mt-4">
    <span class="text-gray-700">What color range are you looking for?</span>
     <select class="form-select mt-1 block w-full">
        <option>-</option>
        <option>Colorless</option>
        <option>Near-Colorless</option>
        <option>Faint</option>
        <option>Very Light</option>
        <option>Light</option>
     </select>
  </label>
  <label class="block mt-4">
    <span class="text-gray-700">What clarity range are you looking for?</span>
     <select class="form-select mt-1 block w-full">
        <option>-</option>
        <option>Colorless</option>
        <option>FL-IF</option>
        <option>VVS1-VVS2</option>
        <option>SI1-SI2</option>
        <option>I1-I3</option>
     </select>
  </label>
  <br></br>
  <div class="flex items-center">
    <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
      <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900">
      <p> I agree to getting married </p>
          </label>
        </div>
  <div>
    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-blue-200 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">Submit</button>
  </div>
  <br></br>
  <br></br>
      <footer class="footer">

        <Link to='/' > --- <i className='far fa-gem'/> --- </Link>

      </footer>
    </div>
  </div>
</div>

   );
}
