const Card = ({ product }) => {
    return (
        <div
            className="card bg-base-100 w-96 shadow-sm"
            style={{
                perspective: "4000px",
            }}
        >
            <figure className="px-10 pt-10">
                <div
                    style={{
                        transformStyle: "preserve-3d",
                        transition: "transform 0.4s cubic-bezier(.25,.8,.25,1)",
                        willChange: "transform",
                    }}
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateY = ((x - centerX) / centerX) * 25;
                        const rotateX = -((y - centerY) / centerY) * 25;
                        e.currentTarget.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.08)`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                            "rotateY(0deg) rotateX(0deg) scale(1)";
                    }}
                >
                    <img
                        src={product.thumbnail}
                        alt={product.category}
                        className="rounded-xl"
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                        }}
                    />
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions flex items-center justify-between gap-5">
                    <p className="text-left bg-secondary px-3.5 py-1.5 rounded-lg text-lg">
                        {product.price} $
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => alert("The feature is not available!")}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Card;
