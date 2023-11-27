import React, { useEffect } from "react";

function MentorInfo() {
  useEffect(() => {
    // This will be called after the component is mounted
    document.body.style.backgroundColor = "#FABEBD";

    // Clean up the effect if the component is unmounted
    return () => {
      document.body.style.backgroundColor = ""; // Reset the background color
    };
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  return <div></div>;
}

export default MentorInfo;
