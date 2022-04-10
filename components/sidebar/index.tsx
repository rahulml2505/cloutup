import SidebarRow from './SidebarRow';

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import {
  CalenderIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
    return (
        <div className="hidden sm:block p-2 pt-4 w-1/6 lg:-1/4  space-y-4 md:space-y-0">
            <div className="flex md:p-1.5 items-center md:hover:bg-gray-200 rounded-md cursor-pointer">
              <img
                src="/avatars/rahul.gif"
                className="h-8 w-8 rounded-full"
                alt=""/>
              <p className="hidden md:inline ml-2">Rahul Mondal</p>
            </div>

            <SidebarRow Icon={UsersIcon} title="Friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalenderIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="See More"/>
            <div className="flex md:p-1.5 items-center md:hover:bg-gray-200 rounded-md cursor-pointer">
              <svg width="25" height="25"
                 className="h-5 md:h-6 text-blue-500"
                 viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"/>
              </svg>
              <p className="hidden md:inline ml-2">Friends</p>
            </div>
            <div className="flex md:p-1.5 items-center md:hover:bg-gray-200 rounded-md cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                className="h-5 md:h-6 text-blue-500"
                fill="currentColor"
                baseProfile="tiny" version="1.2" viewBox="0 0 24 24"><path d="M12 14c1.381 0 2.631-.56 3.536-1.465C16.44 11.631 17 10.381 17 9s-.56-2.631-1.464-3.535C14.631 4.56 13.381 4 12 4s-2.631.56-3.536 1.465C7.56 6.369 7 7.619 7 9s.56 2.631 1.464 3.535A4.985 4.985 0 0 0 12 14zm8 1a2.495 2.495 0 0 0 2.5-2.5c0-.69-.279-1.315-.732-1.768A2.492 2.492 0 0 0 20 10a2.495 2.495 0 0 0-2.5 2.5A2.496 2.496 0 0 0 20 15zm0 .59c-1.331 0-2.332.406-2.917.968C15.968 15.641 14.205 15 12 15c-2.266 0-3.995.648-5.092 1.564C6.312 15.999 5.3 15.59 4 15.59c-2.188 0-3.5 1.09-3.5 2.182 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.406 2 6.417 2 3.762 0 6.417-1 6.417-2l-.02-.255c.463.073.995.118 1.603.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zM4 15c.69 0 1.315-.279 1.768-.732A2.492 2.492 0 0 0 6.5 12.5 2.495 2.495 0 0 0 4 10a2.496 2.496 0 0 0-2.5 2.5A2.495 2.495 0 0 0 4 15z"/>
              </svg>
              <p className="hidden md:inline ml-2">Groups</p>
            </div>
            <div className="flex md:p-1.5 items-center md:hover:bg-gray-200 rounded-md cursor-pointer">
              <svg width="24" height="24" fill="currentColor"
                className="md:-m-0.5 h-6 w-6 md:h-7 md:w-7 text-blue-500"
                viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M28.908,12.571a.952.952,0,0,0-.1-.166,3.146,3.146,0,0,0-.118-.423c-.006-.016-.012-.032-.02-.048L25.917,5.6A1,1,0,0,0,25,5H7a1,1,0,0,0-.917.6l-2.77,6.381a2.841,2.841,0,0,0,0,2.083A4.75,4.75,0,0,0,6,16.609V27a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V16.609a4.749,4.749,0,0,0,2.687-2.543,2.614,2.614,0,0,0,.163-.655A1.057,1.057,0,0,0,28.908,12.571ZM13,26V20h2v6Zm4,0V20h2v6Zm7,0H21V19a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1v7H8V17a5.2,5.2,0,0,0,4-1.8,5.339,5.339,0,0,0,8,0A5.2,5.2,0,0,0,24,17Zm2.837-12.7A3.015,3.015,0,0,1,24,15a2.788,2.788,0,0,1-3-2.5,1,1,0,0,0-2,0A2.788,2.788,0,0,1,16,15a2.788,2.788,0,0,1-3-2.5,1,1,0,0,0-2,0A2.788,2.788,0,0,1,8,15a3.016,3.016,0,0,1-2.838-1.7.836.836,0,0,1,0-.571L7.656,7H24.344l2.477,5.7A.858.858,0,0,1,26.837,13.3Z"/></svg>
              <p className="hidden md:inline ml-2">Marketplace</p>
            </div>
            <div className="flex md:p-1.5 items-center hover:bg-gray-200 rounded-md cursor-pointer">
              <svg width="24" height="24"
                fill="currentColor"
                className="h-[1.25rem] md:h-[2rem] text-blue-500"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 1H2C.899 1 0 1.9 0 3v11c0 1.1.882 2.178 1.961 2.393l4.372.875S2.57 19 5 19h10c2.43 0-1.334-1.732-1.334-1.732l4.373-.875C19.117 16.178 20 15.1 20 14V3c0-1.1-.9-2-2-2zm0 13H2V3h16v11z"/></svg>
              <p className="hidden md:inline ml-2">Watch</p>
            </div>
            <div className="flex md:p-1.5 items-center hover:bg-gray-200 rounded-md cursor-pointer">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	    width="24" height="24" viewBox="0 0 600.111 600.111"
                fill="currentColor"
                className="h-[1.25rem] md:h-[1.75rem] text-blue-500"
    	    xmlSpace="preserve">
                <g><g><g>
    			<path d="M537.423,52.562h-59.836V21.92c0-11.83-9.59-21.42-21.42-21.42s-21.42,9.59-21.42,21.42v30.642H165.364V21.92
    				c0-11.83-9.59-21.42-21.42-21.42s-21.42,9.59-21.42,21.42v30.642H62.688c-32.059,0-58.14,26.082-58.14,58.14v430.77
    				c0,32.059,26.082,58.14,58.14,58.14h474.737c32.059,0,58.139-26.081,58.139-58.14v-430.77
    				C595.563,78.643,569.481,52.562,537.423,52.562z M47.387,110.702c0-8.45,6.85-15.3,15.3-15.3h59.835v24.444
    				c0,11.83,9.59,21.42,21.42,21.42c11.83,0,21.42-9.59,21.42-21.42V95.401h269.384v24.444c0,11.83,9.59,21.42,21.42,21.42
    				s21.42-9.59,21.42-21.42V95.401h59.836c8.449,0,15.301,6.851,15.301,15.3v53.856H47.387V110.702z M552.724,541.471
    				c0,8.45-6.85,15.301-15.301,15.301H62.688c-8.451,0-15.3-6.851-15.3-15.301V207.397h505.336V541.471L552.724,541.471z"/>
    			<path d="M537.425,600.111H62.688c-32.334,0-58.64-26.306-58.64-58.64v-430.77c0-32.334,26.306-58.64,58.64-58.64h59.336V21.92
    				c0-12.087,9.833-21.92,21.92-21.92c12.086,0,21.92,9.833,21.92,21.92v30.142h268.383V21.92c0-12.087,9.833-21.92,21.92-21.92
    				s21.92,9.833,21.92,21.92v30.142h59.336c32.335,0,58.641,26.306,58.641,58.64v430.77
    				C596.063,573.806,569.758,600.111,537.425,600.111z M62.688,53.062c-31.783,0-57.64,25.857-57.64,57.64v430.77
    				c0,31.782,25.857,57.64,57.64,57.64h474.737c31.782,0,57.639-25.857,57.639-57.64v-430.77c0-31.783-25.857-57.64-57.641-57.64
    				h-60.336V21.92c0-11.535-9.385-20.92-20.92-20.92s-20.92,9.385-20.92,20.92v31.142H164.864V21.92
    				c0-11.535-9.385-20.92-20.92-20.92s-20.92,9.385-20.92,20.92v31.142H62.688z M537.423,557.271H62.688
    				c-8.712,0-15.8-7.088-15.8-15.801V206.897h506.336v334.573C553.224,550.184,546.136,557.271,537.423,557.271z M47.887,207.897
    				v333.573c0,8.161,6.639,14.801,14.8,14.801h474.735c8.161,0,14.801-6.64,14.801-14.801V207.897H47.887z M553.224,165.058H46.887
    				v-54.356c0-8.712,7.088-15.8,15.8-15.8h60.335v24.944c0,11.535,9.385,20.92,20.92,20.92c11.535,0,20.92-9.385,20.92-20.92V94.901
    				h270.384v24.944c0,11.535,9.385,20.92,20.92,20.92s20.92-9.385,20.92-20.92V94.901h60.336c8.713,0,15.801,7.088,15.801,15.8
    				V165.058z M47.887,164.058h504.336v-53.356c0-8.161-6.64-14.8-14.801-14.8h-59.336v23.944c0,12.086-9.833,21.92-21.92,21.92
    				s-21.92-9.833-21.92-21.92V95.901H165.863v23.944c0,12.086-9.833,21.92-21.92,21.92s-21.92-9.833-21.92-21.92V95.901H62.688
    				c-8.161,0-14.8,6.639-14.8,14.8V164.058z"/>
    		</g>
    		<g>
    			<path d="M292.914,534.512h18.691c32.059,0,58.141-26.081,58.141-58.14v-18.691c0-32.058-26.082-58.14-58.141-58.14h-18.691
    				c-32.058,0-58.14,26.082-58.14,58.14v18.691C234.774,508.431,260.855,534.512,292.914,534.512z M277.614,457.681
    				c0-8.436,6.864-15.3,15.3-15.3h18.691c8.438,0,15.301,6.864,15.301,15.3v18.691c0,8.437-6.863,15.3-15.301,15.3h-18.691
    				c-8.436,0-15.3-6.863-15.3-15.3V457.681L277.614,457.681z"/>
    			<path d="M311.604,535.012h-18.691c-32.334,0-58.64-26.306-58.64-58.64v-18.691c0-32.334,26.306-58.64,58.64-58.64h18.691
    				c32.335,0,58.641,26.306,58.641,58.64v18.691C370.245,508.706,343.939,535.012,311.604,535.012z M292.914,400.041
    				c-31.783,0-57.64,25.857-57.64,57.64v18.691c0,31.782,25.857,57.64,57.64,57.64h18.691c31.783,0,57.641-25.857,57.641-57.64
    				v-18.691c0-31.782-25.857-57.64-57.641-57.64H292.914z M311.604,492.172h-18.691c-8.712,0-15.8-7.088-15.8-15.8v-18.691
    				c0-8.712,7.088-15.8,15.8-15.8h18.691c8.713,0,15.801,7.088,15.801,15.8v18.691C327.405,485.084,320.317,492.172,311.604,492.172
    				z M292.914,442.881c-8.161,0-14.8,6.64-14.8,14.8v18.691c0,8.16,6.639,14.8,14.8,14.8h18.691c8.161,0,14.801-6.64,14.801-14.8
    				v-18.691c0-8.16-6.64-14.8-14.801-14.8H292.914z"/>
    		</g>
    		<g>
    			<path d="M126.036,534.512h18.691c32.059,0,58.14-26.081,58.14-58.14v-18.691c0-32.058-26.082-58.14-58.14-58.14h-18.691
    				c-32.059,0-58.14,26.082-58.14,58.14v18.691C67.896,508.431,93.977,534.512,126.036,534.512z M110.735,457.681
    				c0-8.436,6.864-15.3,15.3-15.3h18.691c8.437,0,15.3,6.864,15.3,15.3v18.691c0,8.437-6.863,15.3-15.3,15.3h-18.691
    				c-8.437,0-15.3-6.863-15.3-15.3V457.681L110.735,457.681z"/>
    			<path d="M144.727,535.012h-18.691c-32.334,0-58.64-26.306-58.64-58.64v-18.691c0-32.334,26.306-58.64,58.64-58.64h18.691
    				c32.334,0,58.64,26.306,58.64,58.64v18.691C203.367,508.706,177.061,535.012,144.727,535.012z M126.036,400.041
    				c-31.783,0-57.64,25.857-57.64,57.64v18.691c0,31.782,25.857,57.64,57.64,57.64h18.691c31.783,0,57.64-25.857,57.64-57.64
    				v-18.691c0-31.782-25.857-57.64-57.64-57.64H126.036z M144.727,492.172h-18.691c-8.712,0-15.8-7.088-15.8-15.8v-18.691
    				c0-8.712,7.088-15.8,15.8-15.8h18.691c8.712,0,15.8,7.088,15.8,15.8v18.691C160.526,485.084,153.438,492.172,144.727,492.172z
    				 M126.036,442.881c-8.161,0-14.8,6.64-14.8,14.8v18.691c0,8.16,6.639,14.8,14.8,14.8h18.691c8.161,0,14.8-6.64,14.8-14.8v-18.691
    				c0-8.16-6.639-14.8-14.8-14.8H126.036z"/>
    		</g>
    		<g>
    			<path d="M458.894,534.512h18.691c32.057,0,58.139-26.081,58.139-58.14v-18.691c0-32.058-26.082-58.14-58.139-58.14h-18.691
    				c-32.059,0-58.141,26.082-58.141,58.14v18.691C400.753,508.431,426.835,534.512,458.894,534.512z M443.593,457.681
    				c0-8.436,6.863-15.3,15.301-15.3h18.691c8.436,0,15.299,6.864,15.299,15.3v18.691c0,8.437-6.863,15.3-15.299,15.3h-18.691
    				c-8.438,0-15.301-6.863-15.301-15.3V457.681z"/>
    			<path d="M477.585,535.012h-18.691c-32.335,0-58.641-26.306-58.641-58.64v-18.691c0-32.334,26.306-58.64,58.641-58.64h18.691
    				c32.333,0,58.639,26.306,58.639,58.64v18.691C536.224,508.706,509.918,535.012,477.585,535.012z M458.894,400.041
    				c-31.783,0-57.641,25.857-57.641,57.64v18.691c0,31.782,25.857,57.64,57.641,57.64h18.691c31.782,0,57.639-25.857,57.639-57.64
    				v-18.691c0-31.782-25.856-57.64-57.639-57.64H458.894z M477.585,492.172h-18.691c-8.713,0-15.801-7.088-15.801-15.8v-18.691
    				c0-8.712,7.088-15.8,15.801-15.8h18.691c8.712,0,15.799,7.088,15.799,15.8v18.691
    				C493.384,485.084,486.297,492.172,477.585,492.172z M458.894,442.881c-8.161,0-14.801,6.64-14.801,14.8v18.691
    				c0,8.16,6.64,14.8,14.801,14.8h18.691c8.16,0,14.799-6.64,14.799-14.8v-18.691c0-8.16-6.639-14.8-14.799-14.8H458.894z"/>
    		</g>
    		<g>
    			<path d="M292.914,367.742h18.691c32.059,0,58.141-26.082,58.141-58.14v-18.691c0-32.059-26.082-58.14-58.141-58.14h-18.691
    				c-32.058,0-58.14,26.082-58.14,58.14v18.691C234.774,341.66,260.855,367.742,292.914,367.742z M277.614,290.911
    				c0-8.437,6.864-15.3,15.3-15.3h18.691c8.438,0,15.301,6.863,15.301,15.3v18.691c0,8.437-6.863,15.3-15.301,15.3h-18.691
    				c-8.436,0-15.3-6.863-15.3-15.3V290.911L277.614,290.911z"/>
    			<path d="M311.604,368.242h-18.691c-32.334,0-58.64-26.306-58.64-58.64v-18.691c0-32.334,26.306-58.64,58.64-58.64h18.691
    				c32.335,0,58.641,26.306,58.641,58.64v18.691C370.245,341.937,343.939,368.242,311.604,368.242z M292.914,233.271
    				c-31.783,0-57.64,25.857-57.64,57.64v18.691c0,31.782,25.857,57.64,57.64,57.64h18.691c31.783,0,57.641-25.857,57.641-57.64
    				v-18.691c0-31.783-25.857-57.64-57.641-57.64H292.914z M311.604,325.402h-18.691c-8.712,0-15.8-7.088-15.8-15.8v-18.691
    				c0-8.712,7.088-15.8,15.8-15.8h18.691c8.713,0,15.801,7.088,15.801,15.8v18.691C327.405,318.314,320.317,325.402,311.604,325.402
    				z M292.914,276.111c-8.161,0-14.8,6.639-14.8,14.8v18.691c0,8.16,6.639,14.8,14.8,14.8h18.691c8.161,0,14.801-6.64,14.801-14.8
    				v-18.691c0-8.161-6.64-14.8-14.801-14.8H292.914z"/>
    		</g>
    		<g>
    			<path d="M458.894,367.742h18.691c32.057,0,58.139-26.082,58.139-58.14v-18.691c0-32.059-26.082-58.14-58.139-58.14h-18.691
    				c-32.059,0-58.141,26.082-58.141,58.14v18.691C400.753,341.66,426.835,367.742,458.894,367.742z M443.593,290.911
    				c0-8.437,6.863-15.3,15.301-15.3h18.691c8.436,0,15.299,6.863,15.299,15.3v18.691c0,8.437-6.863,15.3-15.299,15.3h-18.691
    				c-8.438,0-15.301-6.863-15.301-15.3V290.911z"/>
    			<path d="M477.585,368.242h-18.691c-32.335,0-58.641-26.306-58.641-58.64v-18.691c0-32.334,26.306-58.64,58.641-58.64h18.691
    				c32.333,0,58.639,26.306,58.639,58.64v18.691C536.224,341.937,509.918,368.242,477.585,368.242z M458.894,233.271
    				c-31.783,0-57.641,25.857-57.641,57.64v18.691c0,31.782,25.857,57.64,57.641,57.64h18.691c31.782,0,57.639-25.857,57.639-57.64
    				v-18.691c0-31.783-25.856-57.64-57.639-57.64H458.894z M477.585,325.402h-18.691c-8.713,0-15.801-7.088-15.801-15.8v-18.691
    				c0-8.712,7.088-15.8,15.801-15.8h18.691c8.712,0,15.799,7.088,15.799,15.8v18.691
    				C493.384,318.314,486.297,325.402,477.585,325.402z M458.894,276.111c-8.161,0-14.801,6.639-14.801,14.8v18.691
    				c0,8.16,6.64,14.8,14.801,14.8h18.691c8.16,0,14.799-6.64,14.799-14.8v-18.691c0-8.161-6.639-14.8-14.799-14.8H458.894z"/>
    		</g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
              </svg>
              <p className="hidden md:inline ml-2">Events</p>
            </div>
            <div className="flex md:p-1.5 items-center md:hover:bg-gray-200 rounded-md cursor-pointer">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	    viewBox="0 0 512 512"
                width="24" height="24"
                className="h-5 md:h-6 text-blue-500"
                fill="currentColor" xmlSpace="preserve">
                <path d="M507.203,205.836C487.977,105.187,406.813,24.023,306.164,4.797C126.117-29.594-29.594,126.117,4.797,306.164
    	    c19.227,100.648,100.391,181.813,201.039,201.039C385.883,541.594,541.594,385.883,507.203,205.836z M374.625,374.625
    	    C368.375,380.875,360.188,384,352,384s-16.375-3.125-22.625-9.375l-96-96c-6-6-9.375-14.125-9.375-22.625V128
    	    c0-17.688,14.328-32,32-32s32,14.313,32,32v114.75l86.625,86.625C387.125,341.875,387.125,362.125,374.625,374.625z"/>
                <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
              </svg>
              <p className="hidden md:inline ml-2">Memories</p>
            </div>
            <div className="flex md:p-1.5 items-center md:hover:bg-gray-200 rounded-md cursor-pointer">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330"
              width="24" height="24"
              className="h-3 md:h-4 text-blue-500"
              fill="currentColor" xmlSpace="preserve"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
              <p className="hidden md:inline ml-2">See More</p>
            </div>
          </div>
  );
}

export default Sidebar;
