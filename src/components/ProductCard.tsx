import Link from "next/link";

type Product = {
    id: string;
    name: string;
    price: number;
    oldPrice: number;
    image: string;
};

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

            <img
                src={product.image}
                alt={product.name}
                className="w-full  md:h-[350px] object-cover rounded"
            />

            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>

            {/* <div className="flex gap-2 mt-1">
                <span className="text-red-600 font-bold">₹{product.price}</span>
                <span className="line-through text-green-600">
                    ₹{product.oldPrice}
                </span>
            </div> */}

            <Link
                href={`/furniture/${product.id}`}
                className="block mt-3 text-center font-semibold bg-red-600 text-white py-3 rounded"
            >
                View Product
            </Link>
        </div>
    );
}