import React from 'react'
import { ErrorOutline } from '@carbon/icons-react'

const Card = () => {
  return (
    
    <div class="left">
    <div class="card">
         <div class="card1">
  <a href="#" class="block max-w-lg p-4 bg-gray-700
 rounded-lg shadow hover:bg-gray-900 
  ">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">User Prompt</h5>
  <p class="font-normal text-gray-300 ">Write a short blurb about Bill Gates in 20 words.</p>
  </a></div>
    <div class="border2">
  <div class="card2">
    <a href="#" class="block max-w-3xl p-4 bg-gray-400  border border-red-600 rounded-lg shadow
   hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold 
    tracking-tight text-white dark:text-white">Output</h5>
    <p class="font-normal text-gray-300 ">William Henry 
    Gates III(born October 28,1955) is an American <a href="#" class="font-medium 
    text-gray-300 underline dark:text-gray-300 dark:hover:text-gray-300 
    hover:text-gray-300 hover:no-underline">business magnate</a>,investor,
    philanthropist,and writer best known for co-founding 
    the  <a href="#" class="font-medium text-gray-300 underline dark:text-gray-300 dark:hover:text-gray-300 
    hover:text-gray-300 hover:no-underline">software</a> giant  <a href="#" class="font-medium text-gray-300 
    underline dark:text-gray-300 dark:hover:text-gray-300 hover:text-gray-300
     hover:no-underline">Microsoft</a>,along with his childhood friend Paul Allen.</p>
    </a>
    <div id="alert-border-1" class="flex items-center max-w-xl p-6 mb-4 text-red-800 border-l-4 border-red-300 
    bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" 
    xmlns="https://www.freepik.com/icon/diagonal-line_7720897#fromView=search&term=slash&page=1&position=61&track=ais" 
    fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 
      1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg><ErrorOutline fill="red"/>
    <div class="ml-3 mb-2 text-sm font-medium text-bold"><h5 class="mt-2 text-sm font-bold 
    tracking-tight text-gray-900 dark:text-white">World limit exceded</h5>
    <p class="font-normal text-gray-700">Output did not follow world limit.</p>
    </div>
    <button type="button" class="ml-auto -mx-1 -my-1
     text-black  " data-dismiss-target="#alert-border-1" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-3 h-3" aria-hidden="true" 
      xmlns="https://www.freepik.com/icon/diagonal-line_7720897#fromView=search&term=slash&page=1&position=61&track=ais"
       fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
      </div></div>
      <div class="border3">
      <div class="card3">
      <a href="#" class="block max-w-lg p-4 bg-gray-700
rounded-lg shadow hover:bg-gray-900 ">
 <h5 class="mb-2 text-2xl font-bold tracking-tight
  text-gray-100 dark:text-white">Follow up Prompt</h5>
 <p class="font-normal text-gray-300 dark:text-gray-400">This does not look like a short blurb.</p>
 </a></div>
     
    <div class="border4">
      <div class="card4">
      <a href="#" class="block max-w-3xl p-6 bg-gray-500 border  border-red-600 rounded-lg shadow 
 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <h5 class="mb-2 text-2xl font-bold 
  tracking-tight text-white dark:text-white">Output</h5>
  <p class="font-normal text-gray-300 dark:text-gray-400">Microsoft Corporation is an American multinational
   <a href="#" class="font-medium 
  text-gray-300 underline dark:text-gray-300 dark:hover:text-gray-300 
  hover:text-gray-300 hover:no-underline"> technology corporation</a> headquartered in 
  <a href="#" class="font-medium text-gray-300 underline dark:text-gray-300 dark:hover:text-gray-300 
  hover:text-gray-300 hover:no-underline"> Redmond,Washington.</a></p>
  </a>
  <div id="alert-border-2" class="flex items-center  max-w-xl  
  mr-3 p-1 mb-4 text-red-800 border-l-4 border-red-300 
bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-blue-800" role="alert">
<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" 
xmlns="https://www.freepik.com/icon/diagonal-line_7720897#fromView=search&term=slash&page=1&position=61&track=ais" 
fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 
  10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 
  1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<div class="  mr-4 ml-8 text-sm font-medium text-bold"><h5 class=" mt-2 text-sm font-bold 
tracking-tight text-gray-900 dark:text-white">Hallucination</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Output talks about Microsoft & not Bill Gates</p>
</div>
<button type="button" class="ml-auto -mx-1.5 -my-1.5 
 text-black focus:ring-2 focus:ring-blue-400 p-1.5
  hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 
  dark:hover:bg-gray-700" data-dismiss-target="#alert-border-1" aria-label="Close">
  <span class="sr-only">Dismiss</span>
  <svg class="w-3 h-3" aria-hidden="true" 
  xmlns="https://www.freepik.com/icon/diagonal-line_7720897#fromView=search&term=slash&page=1&position=61&track=ais"
   fill="none" viewBox="0 0 14 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
  </svg>
</button>
  </div>
</div></div></div></div> </div>
 <div class="right">
           
  <div class="max-w-sm p-6 bg-black">
   <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight
      text-white dark:text-white">How to quickly deploy  a static website.</h5>
   </a>
   <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">Static websites are now used to bootstrap
  lots of websites and are becoming the basis for a variety of tools that even 
  influence both web designers and developers.</p>
   <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
   text-blue-700  rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none 
   focus:ring-gray-300 dark:bg-gay-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
       Read more
       <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
       fill="none" viewBox="0 0 14 10">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
           stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
       </svg>
   </a>
</div></div></div>
 )
}

export default Card
