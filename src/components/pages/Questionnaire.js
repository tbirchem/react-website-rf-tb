import React from 'react'
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import '../../App.css'
import "./Questionnaire.css";

// class RingForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: '$0-1,999'};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }
// }

export default function Questionnair(RingForm) {
  return (
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 lg:py-12">
  <div class="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
    <div class="mx-auto max-w-prose lg:text-lg">
    </div>
    <div class="prose prose-slate mx-auto mt-8 lg:prose-lg">
    <h1 class= "" > Find Your Perfect <i className='far fa-gem'/></h1>
    <br></br>
    <label class="block">
      <span class="font-serif text-gray-700">Name</span>
      <input class="form-input mt-1 block w-full text-gray-900" placeholder="Please enter your full name"></input>
    </label>
    <br></br>
  <label class="block mt-4">
    <span class="font-serif text-gray-700">First off...are you sure you're ready for Marriage? (; </span>
     <select class="form-select mt-1 block w-full">
        <option>-</option>
        <option>Yes!</option>
        <option>No Way!</option>
     </select>
  </label>
  <label class="block mt-4">
    <span class="font-serif text-gray-700">Budget</span>
     <select class="form-select mt-1 block w-full" /*class={this.state.value} onChange={this.handleChange }*/>
        <option>-</option>
        <option value='$0-1,999'>$0-1,999</option>
        <option value='$2,000-4,999'>$2,000-4,999</option>
        <option value='$5,000-9,999'>$5,000-9,999</option>
        <option value='$10,000+'>$10,000+</option>
     </select>
  </label>
  <label class="block mt-4">
    <span class="font-serif text-gray-700">Grade of cut you are looking for?</span>
     <select class="form-select mt-1 block w-full">
        <option>-</option>
        <option value='Excellent'>Excellent</option>
        <option value='Very Good'>Very Good</option>
        <option value='Good'>Good</option>
        <option value='Fair'>Fair</option>
        <option value='Poor'>Poor</option>
     </select>
  </label>
  <label class="block mt-4">
    <span class="font-serif text-gray-700">What color range are you looking for?</span>
     <select class="form-select mt-1 block w-full">
        <option>-</option>
        <option value='Colorless'>Colorless</option>
        <option value='Near-Colorless'>Near-Colorless</option>
        <option value='Faint'>Faint</option>
        <option value='Very Light'>Very Light</option>
        <option value='Light'>Light</option>
     </select>
  </label>
  <label class="block mt-4">
    <span class="font-serif text-gray-700">What clarity range are you looking for?</span>
     <select class="form-select mt-1 block w-full">
        <option>-</option>
        <option value='Colorless'>Colorless</option>
        <option value='FL-IF'>FL-IF</option>
        <option value='VVS1-VVS2'>VVS1-VVS2</option>
        <option value='SI1-SI2'>SI1-SI2</option>
        <option value='I1-I3'>I1-I3</option>
     </select>
  </label>
  <br></br>
  <div class="flex items-center">
    <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
      <label for="terms-and-privacy" class="ml-2 block text-gray-700 font-serif">
      <p> I agree to getting married </p>
          </label>
        </div>
  <div>
    <button type="submit" value='submit' class="font-serif w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm text-black bg-blue-200 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">Submit</button>
  </div>
  <br></br>
  <br></br>
      <footer class="text-xl">
        <Link to='/Questionnaire' onClick={() => window.scrollTo(0, 0)} ><i className='far fa-gem'/></Link>
      </footer>
    </div>
  </div>
</div>
   );
}

// ReactDOM.render(
//   <RingForm/>,
//   document.getElementById('')
// );
