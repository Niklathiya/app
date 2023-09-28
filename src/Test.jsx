import React from "react";

const Test = () => {
    const a = [1,2,3,4,5]
  return <div>
    {
        a.filter((i)=> i > 2 && i<4).map((ii)=>{
            console.log(ii);
            return false 
        })
    }
  </div>;
};

export default Test;
