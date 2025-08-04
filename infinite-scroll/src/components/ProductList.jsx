import { useState } from "react";
import Loading from "./Loading";
import { useRef } from "react";
import { useEffect } from "react";
import { wait } from "../utils/wait";
import Card from "./Card";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const loadRef = useRef(null);

    useEffect(() => {
        // product fetching
        const fetchProducts = async () => {
            const response = await fetch(
                `https://dummyjson.com/products?limit=10&skip=${page * 10}`
            );

            const data = await response.json();
            if (data.products.length === 0) {
                setHasMore(false);
            } else {
                setProducts((prev) => [...prev, ...data.products]);
                setPage((prevPage) => prevPage + 1);
            }
        };

        // intersection
        const onInterSection = async (items) => {
            const loaderItem = items[0];

            if (loaderItem.isIntersecting && hasMore) {
                // manually wait 2s for clear view of loading.
                await wait(2000);
                await fetchProducts();
            }
        };
        const observer = new IntersectionObserver(onInterSection);
        // observ
        if (observer && loadRef.current) {
            observer.observe(loadRef.current);
        }
        // cleanup
        return () => {
            if (observer) observer.disconnect();
        };
    }, [hasMore, page]);

    return (
        <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
                {products.map((product) => (
                    <Card product={product} />
                ))}
            </ul>
            {/* if more products on server then show loading. */}
            {hasMore && (
                <div className="flex items-center justify-center">
                    <progress
                        ref={loadRef}
                        className="progress w-56"
                    ></progress>
                </div>
            )}
        </div>
    );
};
export default ProductList;
