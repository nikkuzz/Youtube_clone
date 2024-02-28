import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/barSlice";
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
   const [searchQuery,setsearchQuery] = useState("");
   const [suggestionsList,setsuggestionsList] = useState([]);
   const [showSuggestions,setshowSuggestions] = useState(false);

   const searchCache = useSelector((store) => store.search);

   const dispatch = useDispatch();

   // Debouncing applied
   useEffect(() => {
      
      // find 1st if searchquery is there in cache then set list of it otherwise call API 
      const timer = setTimeout(() => {
         if(searchCache[searchQuery]){
            setsuggestionsList(searchCache[searchQuery]);
         }else{
            searchedList();
         }}, 200);
      
// with every searchQuery state value, react will attach the timer() with it hence before re-rendering for new value,
   //  clear the timer
     return () => {
      clearTimeout(timer)
     }

   },[searchQuery]);

   const searchedList = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      // console.log(json[1]);
      setsuggestionsList(json[1]);
      

      dispatch(cacheResults({
         [searchQuery] : json[1],
      }));

      // searchCache : 
      //    "iphone" : [iphone 12, iphone pro max, iphone unboxing,...,..]
      
   };

   const toggleMenuHandler = () => {
        dispatch(toggleMenu());
   }

    return (
    <div className="grid grid-flow-col mt-2 p-2 shadow-lg">
       <div className="flex col-span-1">
        <img
         onClick={() => toggleMenuHandler()}
         className="h-8 cursor-pointer"
         alt="hamburger icon" 
         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
         />

         <a href="/" >
         <img
         className="h-8 cursor-pointer"
         alt="Youtube icon" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
         </a>
       </div>

       {/* SEARCH BAR */}
         <div className="col-span-10 ml-40">
            <div>
            <input 
            type="text"
            className="border border-gray-400 rounded-l-full p-2 w-1/2"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
            />
            <button className="border border-gray-400 bg-gray-100 rounded-r-full p-2">🔍</button>
            </div>

            {showSuggestions && 
            <div className="shadow-lg rounded-md px-2 py-1 w-[28rem] fixed bg-white">
               <ul>{suggestionsList.map((s) => (
                   <li key={s}  className="hover:bg-gray-100 py-1 px-2">🔍 {s}</li>
               ))
               }
               </ul>
               </div>
}
         </div>
            
         <div className="col-span-1">
            <img 
            className="h-10"
            alt="profile icon" 
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
         </div>
    </div>
    )
}

export default Header;