import { useEffect, useState } from "react";

const useAnime = (position1,position2,position3,position4) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
      const offset = window.scrollY;
      if (window.screen.width>=0 &&  window.screen.width<=640 ) {
         offset>position1 ? setScrolled(true) : setScrolled(false);
      }
      else if (window.screen.width>=641 &&  window.screen.width<=768 ) {
          offset>position2 ? setScrolled(true) : setScrolled(false);
      }
      else if (window.screen.width>=769 &&  window.screen.width<=1024 ) {
          offset>position3 ? setScrolled(true) : setScrolled(false);
      }
      else{
          offset>position4 ? setScrolled(true) : setScrolled(false);
      }

  }
  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  })
    return [scrolled, setScrolled];
  };
  
  export default useAnime;