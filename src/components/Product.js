import './Product.css'

function Product (props) {
   const {title, author, description} = props;
  


    return (
        <article className='card'>
            <h2 className='title'> {title}</h2>
            <h3 className='author'> {author} </h3>
            <p className='description'> {description} </p>
            <button className='add-button'>  </button>
        </article>
    )
}

export default Product;