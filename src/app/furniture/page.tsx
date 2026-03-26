import { products } from "@/data/furniture";
import ProductCard from "@/components/ProductCard";

export default function FurniturePage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Furniture Solutions</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
}