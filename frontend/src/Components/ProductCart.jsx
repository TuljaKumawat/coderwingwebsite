function ProductCard({ product, addToCart }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.title} />

        <div className="card-body">
          <h5>{product.title}</h5>

          <p>₹ {product.price}</p>

          <button
            className="btn btn-primary w-100"
            onClick={() => addToCart(product._id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
