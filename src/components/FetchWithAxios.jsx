import { useEffect, useState } from "react";
import axios from "axios";

function FetchWithAxios() {
  const [post, SetPosts] = useState([]);
  const [loading, SetLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      console.log(response);
      console.log(response.data);
      SetPosts(response.data);
    } catch (error) {
      SetLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <h1> This is myfake Store </h1>
      {post.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <img src={item.image} width={100} />
          <p>{item.price}</p>
        </div>
      ))}
    </>
  );
}
export default FetchWithAxios;
