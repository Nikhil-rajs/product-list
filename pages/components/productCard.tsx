import Image from "next/image";
import Link from "next/link";
const productCard = (props: ProductData) => {
  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 d-flex flex-column justify-content-between"
      key={props.id}
    >
      <div className="product_image">
        <Link href={`/products/${props.id}`} className="text-decoration-none">
          <Image
            className="img-fluid"
            src={props.thumbnail}
            alt="category_img"
            height={400}
            width={400}
          ></Image>
        </Link>
      </div>
      <div className="Product_details text-center bg-secondary text-center text-white">
        <div className="product_title fw-bold">{props.title}</div>
        <div className="product-category fw-light m-1">{props.category}</div>
        <div className="product_price fw-bold">${props.price}</div>
      </div>
    </div>
  );
};
interface ProductData {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  category: string;
}
export default productCard;
