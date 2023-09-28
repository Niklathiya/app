// import axios from "axios";
// import { useEffect, useState } from "react";

// import axios from "axios"
// import { useEffect, useState } from "react"

// function Api() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Data from API:</h1>
//       <ul>
//         {data.map((item) => (
//           <div>
//             <li key={item.id}>{item.id}</li>
//             <li key={item.id}>{item.title}</li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Api;

import {useState, useEffect} from 'react';
import axios from 'axios'

function Api(){
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((responce)=>{
            setData(responce.data)
        })
        .catch((error)=>{
            console.log('Api calling error', error)
        })

    }, [])

    return(
        <>
            <h1>Api data</h1>
            <ul>
                {
                    data.map((i,index)=>{
                        return(
                            <div>
                                <li key={index.id}>{i.id}</li>
                                <li key={index.id}>{i.title}</li>
                            </div>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default Api;


