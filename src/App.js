import './App.css';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  const products = [
    { title: "A Sign of Four", author: "Av Sir Arthur Conan Doyle", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    { title: "A Study in Scarlet", author: "Av Sir Arthur Conan Doyle", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    { title: "Baskervilles Hound", author: "Av Sir Arthur Conan Doyle", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    { title: "The Adventure of Sherlock Holmes", author: "Av Sir Arthur Conan Doyle", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
    ];


    const ProductItem = products.map ((product) => {
        return  <Product title = {product.title} author = {product.author} description= {product.description} />
    });
    
  return (
    <div className="App">
      <Header />
      <section className='cards'>
            {ProductItem}
        </section>
    </div>
  );
}

export default App;
