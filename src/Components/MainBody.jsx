// import React from "react";

// function Main() {
//   return (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search for cryptocurrency..."
//         />
//         <button type="button" className="search-button">SEARCH</button>
//       </div>
//     </>
//   );
// }

// export default Main;


// import React, { useState } from "react";


// // Import your JSON data
// const airdropData = "http://localhost:3000/Node_Airdrops"

// function Main() {
//   const [searchQuery, setSearchQuery] = useState(""); // To store the user input
//   const [result, setResult] = useState(null); // To store the search result

//   // Handle search functionality
//   const handleSearch = () => {
//     const found = airdropData.Node_Airdrops.find(
//       (item) => item.name.toLowerCase() === searchQuery.toLowerCase()
//     );
//     setResult(found || "No results found!");
//   };

//   return (
//     <div className="main-container">
//       {/* Search Section */}
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search for cryptocurrency..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
//         />
//         <button type="button" className="search-button" onClick={handleSearch}>
//           SEARCH
//         </button>
//       </div>

//       {/* Result Section */}
//       <div className="result-container">
//         {result && (
//           <div className="result">
//             {typeof result === "string" ? (
//               <p>{result}</p>
//             ) : (
//               <>
//                 <h3>{result.name}</h3>
//                 <p>{result.desc}</p>
//                 <p>Funding: ${result.funding}</p>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Main;





import React, { useState, useEffect } from "react";
import axios from "axios";
import './Main.css';


function Main() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [data, setData] = useState([]); 
  const [result, setResult] = useState(null); 

  useEffect(() => {
    axios
      .get("http://localhost:3000/Node_Airdrops")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

 
  const handleSearch = () => {
    const found = data.find(
      (item) => item.name.toLowerCase() === searchQuery.toLowerCase()
    );
    setResult(found || "No results found!");
  };

  return (
    <div className="main-container">
      {/* Search Section */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for cryptocurrency..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" className="search-button" onClick={handleSearch}>
          SEARCH
        </button>
      </div>

      {/* Result Section */}
      <div className="result-container">
        {result && (
          <div className="result">
            {typeof result === "string" ? (
              <p>{result}</p>
            ) : (
              <>
                <h3>{result.name}</h3>
                <p>{result.desc}</p>
                <p>Funding: ${result.funding}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;


// import React, { useState, useEffect } from "react"
// import axios from "axios"
// import "./Main.css"

// function Main() {
//   const [searchQuery, setSearchQuery] = useState(""); // To store the user input
//   const [data, setData] = useState([]); // To store the data fetched from the server
//   const [filteredResults, setFilteredResults] = useState([]); // To store filtered results

//   // Fetch the data from the JSON server on component mount
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/Node_Airdrops")
//       .then((response) => {
//         setData(response.data); // Assuming the response contains an array of airdrop data
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   // Handle input changes for suggestions
//   const handleInputChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     if (query.trim() === "") {
//       setFilteredResults([]); // Clear suggestions if input is empty
//     } else {
//       // Filter results based on input
//       const matches = data.filter((item) =>
//         item.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredResults(matches);
//     }
//   };

//   return (
//     <div className="main-container">
//       {/* Search Section */}
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search for cryptocurrency..."
//           value={searchQuery}
//           onChange={handleInputChange} // Update search query and filter results
//         />
//       </div>

//       {/* Suggestions Section */}
//       <div className="result-container">
//         {filteredResults.length > 0 && (
//           <ul className="suggestions">
//             {filteredResults.map((item) => (
//               <li key={item.name} className="suggestion-item">
//                 <h4>{item.name}</h4>
//                 <p>{item.desc}</p>
//                 <p>Funding: ${item.funding}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Main;
