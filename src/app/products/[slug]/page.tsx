"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useProducts } from "./../../../context/ProductsContext";
import { slugConvert } from "../../../../lib/utils";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { deleteCartitemsApi, postCartitemApi, updateCartitemsApi } from "@/api-endpoints/CartsApi";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { useVendor } from "@/context/VendorContext";
import LoginModal from "@/app/LoginModal/page";
import { useCartItem } from "@/context/CartItemContext";
import axios from "axios";
import { baseUrl } from "@/api-endpoints/ApiUrls";
import toast from "react-hot-toast";

export default function ProductPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [getUserId, setUserId] = useState<string | null>(null);
  const [getCartId, setCartId] = useState<string | null>(null);
  const [signInmodal, setSignInModal] = useState(false);
  const [cartData, setCartData] = useState<any>(null);
  const touchStartX = useRef<number | null>(null);
  const params = useParams();
  const { products }: any = useProducts();
  const queryClient = useQueryClient();
  const { vendorId } = useVendor();
  const { cartItem }: any = useCartItem();
  const [product, setProduct] = useState<any>(null);
  const [uploading, setUploading] = useState(false);


  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedCartId = localStorage.getItem('cartId');

    setUserId(storedUserId);
    setCartId(storedCartId);
  }, []);

  const handleAddCart = async (id: any, qty: any) => {
    const payload = {
      cart: getCartId,
      product: id,
      user: getUserId,
      vendor: vendorId,
      quantity: qty,
      created_by: 'user'
    }
    try {
      const response = await postCartitemApi(``, payload)
      if (response) {
        queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
      }
    } catch (error) {

    }
  }

  const handleUpdateCart = async (id: any, type: any, qty: any) => {
    try {
      if (qty === 1) {
        const updateApi = await deleteCartitemsApi(`${id}`)
        if (updateApi) {
          queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
        }
      } else {
        const response = await updateCartitemsApi(`${id}/${type}/`)
        if (response) {
          queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
        }
      }
    } catch (error) {

    }
  }

  const handleUploadRef = async (images: File[]) => {
    try {
      setUploading(true); // 🔥 start loading
      const formData = new FormData();
      formData.append("cart_item", cartData?.cartItemId ?? "");
      formData.append("created_by", "user");
      images.forEach((file) => {
        formData.append("images", file); // ✅ multiple image upload
      });
      const response = await axios.post(`${baseUrl}/cart-item-images/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
      }

      console.log("Upload success:", response.data);
    } catch (error) {
      toast.error("Please add item to Cart!")
    } finally {
      setUploading(false); // 🔥 stop loading
    }
  };


  const onRemoveImage = async (imageId: number) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/cart-item-images/${imageId}/`
      );

      if (response.status === 200) {
        queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  if (!products || products.data?.length === 0) {
    return <p>Loading products...</p>;
  }

  useEffect(() => {
    if (products?.data && params.slug) {
      const found = products.data.find((p: any) => slugConvert(p.name) === params.slug);
      if (found) {
        const cartMatch = cartItem?.data?.find((item: any) => item?.product === found.id);
        if (cartMatch) {
          setCartData({
            cartId: cartMatch.id,
            quantity: cartMatch.quantity,
            images: cartMatch?.cart_item_images?.find(
              (img: any) => img.cart_item === cartMatch.id
            ),
            cartItemId: cartMatch?.id
          });
        }
        setProduct(found);
      }
    }
  }, [products, params.slug, cartItem]);

  function ProductImageGallery({ images, name }: any) {

    const handlePrev = () => {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Auto-scroll every 5s
    useEffect(() => {
      const timer = setInterval(handleNext, 5000);
      return () => clearInterval(timer);
    }, [images.length]);

    // Handle touch (swipe) for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;

      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (diff > 50) {
        // swipe left → next
        handleNext();
      } else if (diff < -50) {
        // swipe right → prev
        handlePrev();
      }

      touchStartX.current = null;
    };



    return (
      <div className="sticky top-52 space-y-4">
        {/* Main Image */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[activeIndex]}
            alt={name}
            className="rounded-xl shadow-lg w-full object-cover"
          />
          {/* Carousel Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto">
          {images.map((img: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 border-2 rounded-lg overflow-hidden ${activeIndex === idx ? "border-blue-500" : "border-transparent"
                }`}
            >
              <img
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                className="h-20 w-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-6 bg-white">
      {/* Left Sticky Image Gallery */}
      <div className="relative">
        <nav className="text-xs sm:text-base font-semibold mb-6 text-gray-800 flex flex-wrap gap-1">
          <Link href="/" className="hover:underline">Home</Link> /
          <Link href="/" className="hover:underline">Products</Link> /
          <span className="text-gray-800 font-medium truncate">{product?.name}</span>
        </nav>

        <ProductImageGallery
          images={product?.image_urls || []}
          name={product?.name || "Product"}
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-red-600">{product?.name}</h1>
        <p className="text-gray-600 mt-1">Brand: {product?.brand_name}</p>

        {/* Price */}
        <div className="mt-4 text-xl">
          <span className="font-bold text-red-600">₹{product?.price}</span>
          {product?.discount && (
            <span className="ml-3 text-green-600">
              (₹{product?.discount} Off)
            </span>
          )}
        </div>

        {/* Stock */}
        <p className="mt-2 text-gray-600">
          Stock: {product?.stock_quantity > 0 ? "Available" : "Out of stock"}
        </p>

        {/* Description */}
        <div
          className="mt-6 text-gray-700 prose"
          dangerouslySetInnerHTML={{ __html: product?.description }}
        />

        {/* CTA */}
        <div className="mt-8">
          {cartData ? (
            <div className="flex items-center justify-start mt-4 space-x-4">
              <button
                onClick={() => handleUpdateCart(cartData.cartId, 'decrease', cartData.quantity)}
                disabled={cartData.quantity <= 1}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 disabled:opacity-50"
              >
                −
              </button>
              <span className="text-red-700 font-semibold text-lg">{cartData.quantity}</span>
              <button
                onClick={() => handleUpdateCart(cartData.cartId, 'increase', '')}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                +
              </button>
            </div>
          ) : (
            <button onClick={(e) => {
              e.stopPropagation();
              getUserId ? handleAddCart(product.id, 1) : setSignInModal(true);
            }} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg w-full">
              Add to Cart
            </button>
          )}
        </div>
        {cartData?.images ?
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Uploaded Image</h3>
            <div className="relative inline-block">
              <img
                src={cartData.images.image_urls[0]}
                alt="Uploaded"
                className="w-32 h-32 object-cover rounded-lg border shadow"
              />
              <button
                onClick={() => onRemoveImage(cartData.images.id)}
                className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full shadow hover:bg-red-700"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          : (
            <button
              onClick={() => {
                // Example: send selected images
                const input = document.createElement("input");
                input.type = "file";
                input.multiple = true;
                input.accept = "image/*";
                input.onchange = (e: any) => {
                  const files = Array.from(e.target.files);
                  handleUploadRef(files as File[]);
                };
                input.click();
              }}
              disabled={uploading}
              className={`mt-3 w-full px-6 py-3 rounded-lg text-white 
    ${uploading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}
            >
              {uploading ? "Uploading..." : "Upload Design"}
            </button>
          )}

        {/* 🔥 Extra Info */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Product Details:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>SKU: {product?.sku}</li>
            <li>Category: {product?.category_name}</li>
            <li>Weight: {product?.weight}kg</li>
            <li>Dimensions: {product?.length} x {product?.breadth} x {product?.height} cm</li>
          </ul>
        </div>
      </div>
      {signInmodal && (
        <LoginModal open={signInmodal} handleClose={() => setSignInModal(false)} vendorId={vendorId} />
      )}
    </div>
  );
}