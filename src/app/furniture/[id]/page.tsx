import { products } from "@/data/furniture";
import Link from "next/link";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductDetail({ params }: Props) {

    const { id } = await params;

    const product = products.find(
        (p) => p.id === id
    );

    if (!product) {
        return <h1 className="p-6 text-red-500">Product Not Found</h1>;
    }

    return (
        <>
            {/* 🔥 BREADCRUMB */}
            <div className="mt-4 p-4 md:p-6 text-xs sm:text-base font-semibold text-gray-700 flex items-center gap-2">
                <Link href="/" className="hover:text-black">Home</Link>
                <span>/</span>

                <Link href="/furniture" className="hover:text-black">
                    Furniture Solutions
                </Link>
                <span>/</span>

                <span className="text-black font-medium">
                    {product.name}
                </span>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-10">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full md:h-[600px] object-cover rounded-lg shadow"
                />

                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>

                    {/* <div className="flex gap-3 mt-3">
                        <span className="text-2xl text-red-600 font-bold">
                            ₹{product.price}
                        </span>
                        <span className="line-through text-green-600">
                            ₹{product.oldPrice}
                        </span>
                    </div> */}

                    <p className="mt-5 text-gray-700 leading-7">
                        {product.description}
                    </p>

                    {/* ✅ DETAILS */}
                    {product.details && (
                        <ul className="mt-5 space-y-2 text-gray-700 list-disc pl-5">
                            {product.details.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}

                    <a href="tel:9993549992">
                        <button className="mt-6 bg-red-600 font-semibold text-white px-6 py-3 rounded-lg hover:bg-red-800">
                            Enquire Now
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}