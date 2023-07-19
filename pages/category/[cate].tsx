import Product from "@/pages/components/productCard";

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();
  const data = products.products;
  const path = data.map((data: any) => {
    return {
      params: {
        cate: data.category.toString(),
      },
    };
  });

  return {
    paths: path,
    fallback: false,
  };
};
export const getStaticProps = async (arg:any) => {
  const category = arg.params.cate;
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const products = await res.json();
  const data = products.products;

  return {
    props: {
      data,
    },
  };
};
const Category = ({ data }: productData) => {
  console.log(data);
  return (
    <div className="container my-5">
      <div className="row mb-2">
        <div className="col-12 fw-bolder fs-2 text-center text-capitalize">
          {data[1].category}
        </div>
      </div>
      <div className="row">
        {data?.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
 interface productData {
  data: {
    id: number;
    thumbnail: string;
    title: string;
    category: string;
    price: number;
  }[];
}


export default Category;
