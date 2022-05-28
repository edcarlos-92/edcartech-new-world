import { useCallback, useState } from "react";
import { useEventListener } from "./useEventListener";

function onClick() {
    console.log("scroll!");

    //let contexThemeChange = window.localStorage.getItem('theme');
    //setTheme(contexThemeChange);
    return window.localStorage.getItem('theme');

  }
  
  window.addEventListener("click", onClick);
  
  export default function click(props:any) {
//     let contexTheme = window && window.localStorage.getItem('theme');
//     const [getTheme,setTheme] = useState(contexTheme);
//     const handler = useCallback(() => {
//     let contexThemeChange = window.localStorage.getItem('theme');
//       setTheme(contexThemeChange);
//       console.log(`contexTheme`,getTheme);
//     },
//     [getTheme]
//     );
//   // // Add event listener using the hook
//    useEventListener('click', handler);

    return null;
  }