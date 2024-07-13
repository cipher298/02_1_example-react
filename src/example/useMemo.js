/**
 * =================================================================
 * Add this code into App.js
 * =================================================================
 */
// import { useMemo, useRef, useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [products, setProducts] = useState([]);

//   const nameRef = useRef();

//   const handleSubmit = () => {
//     setProducts([
//       ...products,
//       {
//         name,
//         price: +price,
//       },
//     ]);

//     setName("");
//     setPrice("");
//     nameRef.current.focus();
//   };

//   const total = useMemo(() => {
//     const final = products.reduce((result, curr) => {
//       return result + curr.price;
//     }, 0);
//     return final;
//   }, [products]);

//   return (
//     <div style={{ padding: 20 }}>
//       <input
//         ref={nameRef}
//         value={name}
//         placeholder="Enter Name"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         value={price}
//         placeholder="Enter Price"
//         onChange={(e) => setPrice(e.target.value)}
//       />

//       <button onClick={handleSubmit}>Add</button>
//       <br></br>
//       <label>Total: {total} </label>

//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>
//             {product.name} - {product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
