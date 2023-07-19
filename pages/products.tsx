import ProductCard from "./components/productCard";
import React, { ChangeEvent, useState } from "react";

interface ProductData {
  data: {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    category: string;
  }[];
}

const product = ({ data }: ProductData) => {
  const [sortBy, setSortBy] = useState<"title" | "price">("title");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchTitle, setSearchTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;
  const totalPages: number = data.length / itemPerPage;

  const sortProducts = () => {
    const sortedProducts = [...data];
    // console.log("Data: ", ...data);
    sortedProducts.sort((a, b) => {
      if (sortBy === "title") {
        if (a.title < b.title) return sortDirection === "asc" ? -1 : 1;
        if (a.title > b.title) return sortDirection === "asc" ? 1 : -1;
      } else if (sortBy === "price") {
        return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
      }
      return 0;
    });
    return sortedProducts;
  };
  const handleSortChange = (newSortBy: "title" | "price") => {
    if (newSortBy === sortBy) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(newSortBy);
      setSortDirection("asc");
    }
  };

  const sortedProducts = sortProducts();
  const searchData = (event: ChangeEvent<HTMLInputElement>) => {
    let data = event.target.value;

    setSearchTitle(data);
  };

  const filteredData = sortedProducts.filter((prod) =>
    prod.title
      .toLowerCase()
      .includes(searchTitle.length >= 3 ? searchTitle.toLowerCase() : "")
  );
  React.useEffect(() => {
    console.log(searchTitle);
  }, [searchTitle]);

  return (
    <div className="container my-5">
      <div className="row text-center mb-5">
        <div className="col-12 fw-bolder fs-2">Product List</div>
        <div className="col-3 col-md-12 text-end">
          <div>
            <button
              className="btn btn-secondary m-2"
              onClick={() => handleSortChange("title")}
            >
              Sort by Name{" "}
              {sortBy === "title" && (sortDirection === "asc" ? "↑" : "↓")}
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => handleSortChange("price")}
            >
              Sort by Price{" "}
              {sortBy === "price" && (sortDirection === "asc" ? "↑" : "↓")}
            </button>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchData}
              value={searchTitle}
            />
          </form>
        </div>
      </div>
      <>
        {filteredData.length === 0 || filteredData === null ? (
          <div className="row">
            <p>No data found! </p>
          </div>
        ) : (
          <div className="row">
            {filteredData
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                />
              ))}
          </div>
        )}
      </>

      <div>
        <ul className="d-flex bg-secondary col-6 offset-3 mt-3 list-unstyled justify-content-around rounded">
          {Array.from(Array(totalPages))?.map((item, index) => (
            <li
              className="pointer-none btn text-light p-1 fw-bold fs-5"
              onClick={() => {
                setCurrentPage(index + 1);
              }}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default product;

export const getServerSideProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();
  const data = products.products;
  return {
    props: {
      data,
    },
  };
};
