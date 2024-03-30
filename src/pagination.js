// pagination using frontend Logic 💻💻💻💻💻💻💻💻💻💻

// import React, { useEffect, useState } from "react";

// const Pagination = () => {
//   const [post, setPost] = useState([]);
//   const [page,setPage]=useState(1);

//   const fetchData = async () => {
//     const url = "https://dummyjson.com/products";
//     const res = await fetch(url);
//     let data = await res.json();
//     setPost(data.products);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   const selectedPage =(selectPage)=>{
//     if(
//         selectPage>=1 && 
//         selectPage<=post.length/6 && 
//         selectPage!==page)
//     setPage(selectPage);
//   }
//   return (
//     <>
//       <div className="container">
//         <h1 className="mt-5 mb-4">Products</h1>
//         <div className="row">
//           {post.slice(page*6-6,page*6).map((item) => (
//             <div className="col-md-3 mb-4" key={item.id}>
//               <div className="card">
//                 <img
//                   src={item.thumbnail}
//                   className="card-img-top"
//                   alt="Product Thumbnail"
//                   style={{ height: "200px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5>
//                   <p className="card-text">Price: ${item.price}</p>
//                   <p className="card-text">Category: {item.category}</p>
//                   {/* Add more fields as needed */}
//                 </div>
//               </div>
//             </div>
//           ))}

//           {post.length > 0 && <div className="d-flex p-2 my-4 justify-content-center">
//             <span onClick={()=>selectedPage(page-1)} className= {`${ page>1 ? "":"invisible"} border border-danger p-2 `} style={{ cursor: 'pointer' }}>◀️</span>
//             {[...Array(post.length/6)].map((_,i)=>{
//                return <span onClick={()=>selectedPage(i+1)} key={i} className={`${page===i+1?"bg-success text-white":""} border border-danger p-2 `} style={{ cursor: 'pointer' }}>{i+1}</span>
//             })   
//             }
//             <span onClick={()=>selectedPage(page+1)} className= {`${page<post.length/6 ? "":"invisible"} border border-danger p-2 `} style={{ cursor: 'pointer' }}>▶️</span>
//             </div>}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Pagination;





// pagination using backend Logic 🤖🤖🤖🤖🤖🤖🤖🤖

import React, { useEffect, useState } from "react";
const Pagination = () => {
  const [post, setPost] = useState([]);
  const [page,setPage]=useState(1);
  const [totalProduct,setTotalProduct]=useState(0);

  const fetchData = async () => {
    const url = `https://dummyjson.com/products?limit=10&skip=${page*10-10}`;
    const res = await fetch(url);
    let data = await res.json();
    setPost(data.products);
    setTotalProduct(data.total/10);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  const selectedPage =(selectPage)=>{
    if(
        selectPage>=1 && 
        selectPage<=totalProduct && 
        selectPage!==page)
    setPage(selectPage);
  }
  return (
    <>
      <div className="container">
        <h1 className="mt-5 mb-4">Products</h1>
        <div className="row">
          {post.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="card">
                <img
                  src={item.thumbnail}
                  className="card-img-top"
                  alt="Product Thumbnail"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <p className="card-text">Category: {item.category}</p>
                  {/* Add more fields as needed */}
                </div>
              </div>
            </div>
          ))}

          {post.length > 0 && <div className="d-flex p-2 my-4 justify-content-center">
            <span onClick={()=>selectedPage(page-1)} className= {`${ page>1 ? "":"invisible"} border border-danger p-2 `} style={{ cursor: 'pointer' }}>◀️</span>
            {[...Array(totalProduct)].map((_,i)=>{
               return <span onClick={()=>selectedPage(i+1)} key={i} className={`${page===i+1?"bg-success text-white":""} border border-danger p-2 `} style={{ cursor: 'pointer' }}>{i+1}</span>
            })   
            }
            <span onClick={()=>selectedPage(page+1)} className= {`${page<totalProduct ? "":"invisible"} border border-danger p-2 `} style={{ cursor: 'pointer' }}>▶️</span>
            </div>}
        </div>
      </div>
    </>
  );
};

export default Pagination;




