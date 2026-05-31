import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import Card from "../components/Card";

function Products() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.price}
        />
      ))}
    </div>
  );
}

export default Products;
