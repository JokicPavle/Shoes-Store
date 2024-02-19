import { useContext } from "react";
import { Pagination } from "./Pagination";
import { Product } from "./Product";
import { ShopContext } from "../context/ShoppingCartContext";
export const Products = () => {
  const {
    searchItems,
    filteredItems,
    paginate,
    previousPage,
    nextPage,
    currentItems,
    itemsPerPage,
    currentPage,
    pageNumber,
    searchValue,
    clearSearchItem,
  } = useContext(ShopContext);
  return (
    <>
      <h1 className="text-center mx-auto text-2xl sm:text-6xl font-bold my-10 text-gray-800">
        My Products
      </h1>
      <div className="max-w-[1600px] m-auto text-center flex flex-col justify-around my-16">
        <div className="flex flex-col justify-around gap-4 items-center sm:flex-row sm:justify-start">
          <input
            onChange={(e) => {
              searchItems(e);
            }}
            value={searchValue}
            className="bg-gray-100 py-1 px-6 sm:max-w-full sm:py-2 sm:px-10 border rounded-xl"
            type="text"
            placeholder="Search"
          />
          <button
            onClick={clearSearchItem}
            className="py-2 px-20 mb-6 sm:mb-0 bg-orange-400 text-white border border-double rounded-xl border-spacing-10 mx-4 hover:bg-orange-800"
          >
            Clear Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 mb-20 sm:h-[1350px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mx-10 items-start">
        {currentItems.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
      <Pagination
        length={filteredItems.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        pageNumber={pageNumber}
      />
    </>
  );
};
