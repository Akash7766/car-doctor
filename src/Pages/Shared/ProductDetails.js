import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { serviceId } = useParams();

  return (
    <div className="text-center">
      <h2 className="text-center text-primary my-5">
        This is Product {serviceId}
      </h2>
      <Link to="/cheekout">
        <button className="btn btn-primary text-center">Cheekout </button>
      </Link>
    </div>
  );
};

export default ProductDetails;
