"use client";
import { useProducts } from "@/context/ProductsContext";
import Image from "next/image";
import { slugConvert } from "../../lib/utils";
import { useRouter } from "next/navigation";

export default function LatestProducts() {
  const { products } = useProducts();
  const router = useRouter();
  return (
    <div className="w-full">
      {/* Section Title */}
      <div className="text-center my-8">
        <h2 className="text-2xl text-gray-500 font-bold">Latest Products</h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-12">
          {products?.data?.map((product: any, i: number) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-36 sm:h-40 md:h-48">
                <Image
                  src={product.image_urls[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 onClick={() => router.push(`/products/${slugConvert(product.name)}`)} className="font-semibold text-lg cursor-pointer hover:text-red-600">{product.name}</h3>
                <div className="flex justify-center gap-2">
                  <p className=" text-sm mt-2">₹{product.price}</p>
                  <p className=" text-sm text-gray-500 mt-2 line-through">₹{product.discount}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
