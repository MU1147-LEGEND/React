
import ProductList from "./components/ProductList";

const App = () => {
    return (
        <>
            <div className="w-10/12 m-auto py-10  px-4">
                <h1 className="text-2xl font-semibold">
                    React Infinite Scroll Implimentation
                </h1>

                <ProductList />
            </div>
        </>
    );
};
export default App;
