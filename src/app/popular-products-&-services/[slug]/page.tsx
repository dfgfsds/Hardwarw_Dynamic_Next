import { products } from "@/data/popular-products";
import Link from "next/link";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProductDetail({ params }: Props) {
    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl font-bold text-red-500 text-center">Product Not Found</h1>
                <Link href="/popular-products-&-services" className="text-blue-600 hover:underline mt-4 inline-block">
                    Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <nav className="flex text-sm font-medium text-gray-500">
                    <Link href="/" className="hover:text-gray-900 transition">Home</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/popular-products-&-services" className="hover:text-gray-900 transition">Popular Products & Services</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-900 truncate max-w-[200px] sm:max-w-none">{product.title}</span>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 pb-20">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative h-[300px] sm:h-[450px] md:h-[550px]">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-8 sm:p-12 flex flex-col justify-center">
                            <div className="mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
                                    Premium Solution
                                </span>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                                    {product.title}
                                </h1>
                                <div className="w-20 h-1.5 bg-red-600 rounded-full mb-8"></div>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:9993549992"
                                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    Enquire Now
                                </a>
                                <Link
                                    href="/popular-products-&-services"
                                    className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-lg font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all"
                                >
                                    View All Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
