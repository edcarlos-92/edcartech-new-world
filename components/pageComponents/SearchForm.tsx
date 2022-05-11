import  Router,{ useRouter }  from 'next/router';
import { useState } from 'react';
import { SearchIcon } from '../icons';
import NextLink from 'next/link';
import SvgSearchIcon from '../icons/SearchIcons';

   export default function SearchForm(props:any){

    const [searchQuery,setSearchQuery] = useState("");
    //const router = useRouter()

     /*
    router.push({
      pathname: '/posts/[searchedblog]',
      query: { searchedblog: searchQuery },
    })
    */

  return (

    <>
    <div className="flex justify-center items-center pt-8 ">
            {/* Centered using Tailwind Flex onSubmit={handleSearchFormSubmit}*/}
        <form className="flex w-6/12" >
            <div className="block relative w-4/5 pr-5">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <SearchIcon className="h-4 w-4 fill-current text-gray-500"/>
                    </span>
                <input
                placeholder="Search..."
                value={searchQuery}
                onChange={( event ) => setSearchQuery( event.target.value )}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md  appearance-none rounded-r rounded-l sm:rounded-l-none border  border-b  pl-8 pr-6 py-2  bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"/>
            </div>
           
            <NextLink  href={`/searchedblog?keywords=${searchQuery}`} passHref >
              <span className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                <SvgSearchIcon fill="white" id="s-icon" className="-ml-1 mr-2 pl-3 w-8 sm:h-5 sm:w-6" aria-hidden="true" />
              </span>   
            </NextLink>
        </form>
    </div>
    
    </>
    
  );
};

// SearchForm.propTypes = {
//   searchQuery: PropTypes.string,
//   setSearchQuery: PropTypes.func,
//   handleSearchFormSubmit: PropTypes.func
// };

// SearchForm.defaultProps = {
//   searchQuery: '',
//   setSearchQuery: () => null,
//   handleSearchFormSubmit: () => null
// };

;
