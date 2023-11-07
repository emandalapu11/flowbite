import React from 'react'

const Secondhalf = () => {
  return (
    <>
    <div class="second-half">
      <div class="part1">
      <div class="user">
                    
      <a href="#" class="block max-w-xs p-6 bg-gray-900 rounded-lg shadow hover:bg-gray-100 
      ">
    <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-100 dark:text-white">User Prompt</h5>
    <p class="font-normal text-gray-300 dark:text-gray-400">   Write a small marketing blurb
     about Soundwave Pro headphones.</p>   
     </a>
      </div>
      <div class="Eval">
      <div class=" relative">
      <input type="text" id="filled_success" aria-describedby="filled_success_help" 
      class="block rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900
       bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-900 dark:border-green-500 
       appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0
        focus:border-green-600 peer" placeholder=" " />
            <label for="outlined_success" class="absolute text-3xl margin:auto
            text-blue-600  dark:text-blue-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 
            origin-[0] bg-gray-100 dark:bg-gray-100 px-3 peer-focus:px-2 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2
             peer-focus:scale-75 peer-focus:-translate-y-2 left-3">Select Evaluators</label>
        </div>
        <p id="outlined_success_help" class="mt-2 text-lg text-gray-100 dark:text-gray-400">
          Evaluators uses a variety of techniques to provide you the best evaluation</p>    
      </div>
      </div>
      <div class="part2">
      <div class=" flex items-center mb-4 ml-3 mt-4">
  
  <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 
  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
  focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
  <label for="checked-checkbox" class="ml-2 text-sm font-medium 
  text-gray-900 dark:text-gray-300">Factual Accuracy</label>
                                     </div>
 <div class="flex items-center mb-4 ml-3 mt-2">
  <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 
  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
  dark:bg-gray-700 dark:border-gray-600"/>
  <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Brand Guidelines</label>
    </div>
    <div class="flex items-center mb-4 ml-3 mt-2">
  <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 
  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
  dark:bg-gray-700 dark:border-gray-600"/>
   <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Toxicity</label>
 </div>
 <div class="flex items-center mb-4 ml-3 mt-2">
  <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 
  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
  dark:bg-gray-700 dark:border-gray-600"/>
  <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Harmfulness</label>
 </div>
 <div class="flex items-center mb-4 ml-3 mt-2">
   <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 
  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
  dark:bg-gray-700 dark:border-gray-600"/>
   <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Voice and Tone</label>
 </div>
 <div class="flex items-center mb-4 ml-3 mt-2">
  <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 
    border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
   dark:bg-gray-700 dark:border-gray-600"/>
    <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hallucinations</label>
 </div>
 <div class="flex items-center mb-4 ml-3 mt-2">
<input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 
  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
  dark:bg-gray-700 dark:border-gray-600"/>
<label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Brevity</label>
 </div>
 <div class="flex items-center mb-4 ml-3 mt-2">
<input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 
border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
dark:bg-gray-700 dark:border-gray-600"/>
<label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Precision</label>
 </div>
 <div class="flex items-center mb-4 ml-3 mt-2">
<input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 
border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
dark:bg-gray-700 dark:border-gray-600"/>
<label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">US English</label>
 </div>
 <div class="flex items-center mb-4 ml-3 mt-2">
<input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 
border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
dark:bg-gray-700 dark:border-gray-600"/>
<label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
Marketing blerb</label>
 </div>
      </div>
         <div class="part3 max-w-sm p-6 bg-black">
          <a href="#">
               <h5 class="mb-2 text-xl font-bold tracking-tight
             text-gray-100 dark:text-white">How to quickly deploy  a static website.</h5>
          </a>
          <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">Static websites are now used to bootstrap
         lots of websites and are becoming the basis for a variety of tools that even 
         influence both web designers and developers.</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
          text-blue-700  hover:bg-white-800 focus:ring-4 focus:outline-none 
          focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
              Read more
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                  stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
          </div></div>
          
  
 
    </>
  )
}

export default Secondhalf;
