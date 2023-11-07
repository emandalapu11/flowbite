import React from 'react'
import { Assembly } from '@carbon/icons-react';

const Header = () => {
  return (
    
    <div className='container1'> 
        
        <nav>
  
    <div class="sticky top-0  max-w-screen-xl flex items-center justify-between ">
    

    <Assembly size="32" fill="white" background="white" class="hexa self-center
     whitespace-nowrap md:text-3xl font-semibold dark:text-white"/>

 
 <span class="self-center text-white font-bold  whitespace-nowrap light:text-white ">
        Metaculars
  <a href="https://flowbite.com/" class="flex items-center padding-right:3px"></a>
      </span>

  <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request a Demo</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-6 md:mt-0 
    md:border-0 md:bg-blue dark:bg-gray-800 md:dark:bg-gray-900 ">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 
        text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 
        text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Features</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 
        text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li> 
   </ul>
   <li id="li-right">
   <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 
   md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 
   dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
   dark:border-gray-700">Login</a>
   </li>
  </div>
  </div>
</nav>
</div>
      
  )
}

export default Header;
