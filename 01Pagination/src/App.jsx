import { useEffect, useState } from "react";
import "./App.css"

const PAGE_SIZE = 24;

const ProductCard = ( {title, image} )=>{
  return (
    <div className="product-card">
      <span className="product-card-title">{title}</span>
        <img className="product-card-img" src={image} alt={title} />
    </div>
  );
}

function App() {

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () =>{
    const data = await fetch('https://dummyjson.com/products?limit=200');
    const jsonData = await data.json();
    setProducts(jsonData.products);
  }

  const handlePageChange = (n) =>{
    setCurrentPage(n);
  }
  const handleNextPage = () =>{
    setCurrentPage((n)=>n+1)
  }
  const handlePrevPage = () => {
    setCurrentPage((n)=>n-1)
  }

  useEffect(()=>{
    const loadData = async () =>{
      await fetchData();
    }
    loadData();
  }, [])

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts/PAGE_SIZE);
  const start = currentPage*PAGE_SIZE;
  const end = start+PAGE_SIZE;

  console.log('products', products);
  return (
    <>
    <div>
      <div className="parent-heading">
        Gmad @React
      </div>
      { !products.length ? (
          <div>No Products found, API is failing</div>
        ) : (
          <>
            <div className="pagination-container">
              <button className={`page-number ${currentPage===0 ? 'add-class' : ''}`} disabled={currentPage===0} onClick={()=> handlePrevPage()}>Prev</button>
              {[...Array(totalPages).keys()].map((n)=> (
                <span className={`page-number ${currentPage===n ? 'active-page' : ''}`} onClick={()=>handlePageChange(n)}>{n+1}</span>
              ))}
              <button  className={`page-number ${currentPage===totalPages-1 ? 'add-class' : ''}`} disabled={currentPage===totalPages-1} onClick={()=> handleNextPage()}>Next</button>
            </div>
            <div className="product-card-parent">
              {
                products.slice(start,end).map((p) => (
                  <ProductCard 
                    key={p.id} 
                    image={p.thumbnail} 
                    title={p.title} 
                  />
                ))
              }
            </div>
          </>
          )
        } 
    </div>
    </>
  )
}

export default App
