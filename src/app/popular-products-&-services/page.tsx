import Link from "next/link";
import { products } from "@/data/popular-products";


// const productsData = [
//     { title: "Steel Furniture", image: "images/products/STEEL FURNITURE 1.webp" },
//     { title: "Steel Furniture Set", image: "images/products/STEEL FURNITURE 2.jpg.jpeg" },
//     { title: "Stairs Grill", image: "images/products/STAIRS GRILL STEPS .webp" },
//     { title: "Signage Boards", image: "images/products/SIGNAGE BOARDS 2.jpeg" },
//     { title: "Pole Signage", image: "images/products/POLE IMAGES 2.webp" },
//     { title: "Pergola Design", image: "images/products/PERGOLA IMAGE 1.webp" },
//     { title: "Pergola Outdoor", image: "images/products/PERGOLA IMAGE 2 .jpeg" },
//     { title: "MS LED Structure", image: "images/products/ms-led-screen-structure-with-pole.jpg.jpeg" },
//     { title: "LED Sign Board", image: "images/products/LED-Sign-Board.webp" },
//     { title: "LED Display Types", image: "images/products/LED-Display-Cabinet-Types.webp" },
//     { title: "LED Display Board", image: "images/products/led-display-boards 2 .jpeg" },
//     { title: "LED Wall Cabinets", image: "images/products/LED WALL CABINETS .webp" },
//     { title: "LED Standee", image: "images/products/LED STANDEE .jpg.jpeg" },
//     { title: "LED Standee Display", image: "images/products/LED STANDEE 2.jpg.jpeg" },
//     { title: "LED Pole", image: "images/products/LED POLE IMAGES 3.jpg.jpeg" },
//     { title: "LED Garden Lights", image: "images/products/LED GARDEN LIGHTS 1.webp" },
//     { title: "LED Cabinets", image: "images/products/LED CABINETS 2ND IMAGE.jpg.jpeg" },
//     { title: "Laser Grill Gates", image: "images/products/LASER GRILL GATES .jpg.jpeg" },
//     { title: "Laser Safety Grill", image: "images/products/LASER CUT SAFETY GRILL.jpg.jpeg" },
//     { title: "Laser Cut Partitions", image: "images/products/LASER CUT PARTITIONS.webp" },
//     { title: "Laser Cut Fencing", image: "images/products/LASER CUT FENCING .jpg.jpeg" },
//     { title: "Laser Balcony", image: "images/products/LASER BUT BALCONY.jpg.jpeg" },
//     { title: "Indoor LED Display", image: "images/products/INDOOR LED DISPLAY .png" },
//     { title: "Double Canopy", image: "images/products/DOUBLE CANOPY.jpeg" },
//     { title: "Ceiling Lights", image: "images/products/CEILING LIGHTS.webp" },
//     { title: "Decor Ceiling Lights", image: "images/products/CEILING LIGHTS 2 .webp" },
//     { title: "Canopy", image: "images/products/CANOPY IMAGES 1.jpg.jpeg" },
//     { title: "Building Elevation", image: "images/products/BUILDING STEEL ELEVATION.jpg.jpeg" },
//     { title: "Building Design", image: "images/products/BUILDING STEEL ELEVATION 2 .jpeg" },
//     { title: "Banners", image: "images/products/BANNERS .jpg.jpeg" },
//     { title: "Banner Stand", image: "images/products/BANNER 2.avif" },
//     { title: "Backlit Boards", image: "images/products/BACKLITE BOARDS .webp" },
//     { title: "Backlit Signage", image: "images/products/BACKLITE BOARDS 2.jpg.jpeg" },
// ];

export default function PopularProductsAndServices() {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="bg-white shadow-sm p-8 text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Popular Products & Services</h1>
                <p className="mt-2 text-lg text-gray-600">Discover our high-quality range of hardware and structural solutions</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (

                        <Link key={index} href={`/popular-products-&-services/${product.slug}`}>

                            <div className="cursor-pointer h-[500px] bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition">

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-[350px] w-full object-cover"
                                />

                                <h2 className="text-center p-3 text-lg font-semibold">
                                    {product.title}
                                </h2>


                                <Link
                                    href={`/popular-products-&-services/${product.slug}`}
                                    className="block mt-3 text-center font-semibold bg-red-600 text-white py-3 rounded"
                                >
                                    View Product
                                </Link>

                            </div>


                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
}
