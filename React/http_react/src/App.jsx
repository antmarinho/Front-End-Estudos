import './App.css'
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {

  // 1 resgatando dados
  const [products,setProducts] = useState([]);

  /*useEffect(() => {

    async function getData() {

      const res = await fetch(url)
      const data = await res.json();

      setProducts(data);
    }

    getData();

  }, []);*/

  // 4 custom hook ta fazendo msm coisa do item 1

  const {data: items, httpConfig, loading, error} = useFetch(url);

  // 2 envio de dados

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");

  /*const handleSubmit = async (e) => {

    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    })
    
    const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts,addedProduct]);

  }*/

    // 5 refatorando post
    const handleSubmit = async (e) => {

      e.preventDefault();

      const product = {
        name,
        price,
      };

      httpConfig(product,"POST");


    // 3 carregamento dinamico

    const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts,addedProduct]);

  }

  return (
    <>
      <div className="App">
        <h1>Http em React</h1>
         {/* 6 loading */}
        {/* 1 resgate de dados */}
        {loading && <p>Carregando...</p>}
        {/* 7 tratando erro */}
        {error && <p>{error}</p>}
        <ul>
         {/* {products.map((product) => ( */}
         {/*esperando o item ser preenchido items&& */}
            {items && items.map((product) => ( 
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>

        {/* 2 enviando dados */}
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              <span>Preco</span>
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </label>
            {/*<input type="submit" value="Enviar"/>*/}
            {/* 7 loading post */}
            {loading && <input type="submit" disabled value="Aguarde"/>}
            {!loading && <input type="submit" value="Enviar"/>}
          </form>
        </div>
      </div>
    </>
  )
}

export default App
