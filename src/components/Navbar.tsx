"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import logo from "../../public/images/logo.webp"
import {
  ShoppingCart,
  User,
  Headphones,
  ChevronDown,
  Search,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import LoginModal from "@/app/LoginModal/page";
import { useVendor } from "@/context/VendorContext";
import { useRouter } from "next/navigation";
import { useCategories } from "@/context/CategoriesContext";
import { useProducts } from "@/context/ProductsContext";
import { slugConvert } from "../../lib/utils";
import { useUser } from "@/context/UserContext";
import { useCartItem } from "@/context/CartItemContext";

export default function Navbar() {

  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signInmodal, setSignInModal] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { vendorId } = useVendor();
  const router = useRouter();
  const { categories } = useCategories();
  const { products } = useProducts();
  const finalProducts = products.data;
  const { user } = useUser();
  const { cartItem }: any = useCartItem();
  const [isLoggedIn, setIsLoggedIn] = useState<string | null>(null);
  const cartCount = cartItem?.data?.length || 0;
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [results, setResults] = useState({
    products: [],
    related: [],
  });

  const menuItems =
    categories?.data?.map((cat: any) => {
      // all products in this category
      const categoryProducts = products?.data?.filter(
        (p: any) => p.category === cat.id
      );

      // if category has subcategories
      const megaMenu =
        cat.subcategories?.length > 0
          ? cat.subcategories.map((sub: any) => {
            const subProducts = categoryProducts?.filter(
              (p: any) => p.subcategory === sub.id
            );
            return {
              heading: sub.name,
              products: subProducts || [],
            };
          })
          : [
            // no subcategories → attach products directly
            {
              heading: cat.name,
              products: categoryProducts || [],
            },
          ];

      return {
        title: cat.name,
        megaMenu,
      };
    }) || [];

  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leftClasses = ["left-0", "left-1", "left-2"]; // safe Tailwind classes

  const openMenu = (i: any) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(i);
  };

  const closeMenuWithDelay = () => {
    // small delay so moving between button <-> dropdown doesn't flicker
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      closeTimeoutRef.current = null;
    }, 120);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(localStorage.getItem("userId"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    if (!isOpen) return;

    const tid = setTimeout(() => {
      if (query.trim().length > 2) {
        fetchSearchResults(query.trim());
      } else {
        setShowDropdown(false);
      }
    }, 300);

    return () => clearTimeout(tid);
  }, [query, isOpen]);

  // fetchSearchResults
  const fetchSearchResults = (term: any) => {
    if (!products?.data) return;

    const lower = term.toLowerCase();
    const activeProducts = finalProducts?.filter((p: any) => {
      return String(p?.status).toLowerCase() === "true";
    });

    const titleMatches = activeProducts.filter((p: any) =>
      p.name?.toLowerCase().includes(lower)
    );

    const related = activeProducts
      .filter(
        (p: any) =>
          !titleMatches.includes(p) &&
          (p.description?.toLowerCase().includes(lower) ||
            p.category_name?.toLowerCase().includes(lower))
      )
      .slice(0, 5);

    setResults({ products: titleMatches, related: related });
    setShowDropdown(true);
  };
  return (
    <div className="sticky top-0 z-50 bg-white border-b">
      {/* TOP NAV */}
      <div className="flex items-center justify-between px-3 md:px-6 md:px-8 py-3 md:py-6">
        {/* Logo */}
        <div
          onClick={() => router.push('/')}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={40}
            className="cursor-pointer w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
          />
        </div>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-1 px-6 max-w-xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Print Something Awesome ✨"
              className="w-full border rounded-md px-4 py-2 pr-10"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true); // <-- important: open search
              }}
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />

            {isOpen && showDropdown && (
              <div
                className="absolute right-0 z-50 bg-white border shadow-md rounded-md max-h-[300px] w-full overflow-y-auto text-sm animate-in fade-in slide-in-from-top-2"
                role="listbox"
              >
                {results.products.length > 0 ? (
                  <>
                    <p className="px-4 py-2 font-bold text-gray-500 border-b">PRODUCTS</p>

                    {results.products.map((item: any, i: number) => (
                      <div
                        key={i}
                        onClick={() => {
                          setShowDropdown(false);
                          setQuery('');
                          setIsOpen(false);
                          router.push(`/products/${slugConvert(item?.name)}`);
                        }}
                        className="flex gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        role="option"
                      >
                        {item.image_urls?.[0] && (
                          <Image
                            src={item.image_urls[0]}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded object-cover"
                          />
                        )}

                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-red-700">{Number(item.price)}</p>
                        </div>
                      </div>
                    ))}

                    {/* RELATED PRODUCTS */}
                    {results.related.length > 0 && (
                      <>
                        <p className="px-4 py-2 font-bold text-gray-500 border-b">RELATED</p>

                        {results.related.map((item: any, i: number) => (
                          <div
                            key={`r-${i}`}
                            onClick={() => {
                              setShowDropdown(false);
                              setQuery('');
                              setIsOpen(false);
                              router.push(`/products/${slugConvert(item?.name)}`);

                            }}
                            className="flex gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            role="option"
                          >
                            {item.image_urls?.[0] && (
                              <Image
                                src={item.image_urls[0]}
                                alt={item.name}
                                width={50}
                                height={50}
                                className="rounded object-cover"
                              />
                            )}

                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-red-700">₹{Number(item.price)}</p>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </>
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500">
                    No products found
                    {query && (
                      <>
                        &nbsp;for&nbsp;
                        <span className="font-semibold">“{query}”</span>.
                      </>
                    )}
                    <br />
                    Please try another keyword.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-1">
            <Headphones className="w-4 h-4" />
            <span>
              For Enquiries <b>+91 9993549992</b>
            </span>
          </div>
          <div className="relative" ref={dropdownRef}>
            {isLoggedIn ? (
              <span
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center space-x-1 cursor-pointer select-none"
              >
                <User className="w-4 h-4" />
                <span>{user?.data?.name || 'User'} </span>
              </span>
            ) : (
              <span
                onClick={() => setSignInModal(true)} // your sign-in modal trigger
                className="flex items-center space-x-1 cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </span>
            )}

            {/* Dropdown Menu */}
            {open && isLoggedIn && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md overflow-hidden shadow-md z-50">
                <ul className="flex flex-col text-sm">
                  <li onClick={() => router.push('/profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li onClick={() => router.push('/profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Orders</li>
                  <li onClick={() => router.push('/profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Address</li>
                  <li onClick={handleLogout} className="px-4 py-2 hover:bg-red-600 hover:text-white cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/cart" className="flex items-center space-x-1">
            <ShoppingCart className="w-4 h-4" />
            <span>Cart {cartCount > 0 ? `(${cartCount})` : ''}</span>
          </Link>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          {/* Mobile cart, profile */}
          <Link href="/cart" className="flex items-center space-x-1">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">Cart {cartCount > 0 ? `(${cartCount})` : ''}</span>
          </Link>
          <div className="relative" ref={dropdownRef}>
            {isLoggedIn ? (
              <span
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center space-x-1 cursor-pointer select-none"
              >
                <User className="w-4 h-4" />
                <span>{user?.data?.name || 'User'} </span>
              </span>
            ) : (
              <span
                onClick={() => setSignInModal(true)} // your sign-in modal trigger
                className="flex items-center space-x-1 cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </span>
            )}

            {/* Dropdown Menu */}
            {open && isLoggedIn && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md overflow-hidden shadow-md z-50">
                <ul className="flex flex-col text-sm">
                  <li onClick={() => router.push('/profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li onClick={() => router.push('/profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Orders</li>
                  <li onClick={() => router.push('/profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Address</li>
                  <li onClick={handleLogout} className="px-4 py-2 hover:bg-red-600 hover:text-white cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* BOTTOM RED NAV (Desktop) */}
      <div className="bg-red-600 text-white px-6 py-4 relative hidden md:block">
        <div className="container mx-auto flex justify-center gap-10 py-3 relative">
          {menuItems.map((item: any, idx: number) => (
            <React.Fragment key={idx}>
              {/* Menu button (attach hover handlers directly) */}
              <div
                onMouseEnter={() => openMenu(idx)}
                onMouseLeave={() => closeMenuWithDelay()}
                className="inline-block" /* keep sizing inline with your layout */
              >
                <button className="flex items-center gap-1 font-medium cursor-pointer">
                  {item?.title}
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* Mega menu: ALWAYS in DOM, but toggles classes for open/close */}
              <div
                onMouseEnter={() => {
                  // cancel closing if user moves pointer into dropdown
                  if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current);
                    closeTimeoutRef.current = null;
                  }
                  setActiveMenu(idx);
                }}
                onMouseLeave={() => closeMenuWithDelay()}
                className={`
        absolute top-full z-50 rounded-lg bg-white text-black shadow-lg px-6
        transform origin-top transition-all duration-200 ease-in-out
        ${activeMenu === idx ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"}
        ${idx <= 2 ? leftClasses[idx] : ""}
        ${idx === 3 ? "left-0 right-0 mx-auto" : ""}
        ${idx >= 4 && idx <= 5 ? "right-0" : ""}
      `}
                style={{ transformOrigin: "top center" }}
              >
                <div className="grid grid-cols-4 gap-6 p-6">
                  {
                    item?.megaMenu.length > 0 &&
                    item?.megaMenu?.map((col: any, i: number) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-3">{col?.heading}</h4>
                        <ul className="space-y-2 text-sm">
                          {col.products.map((link: any, j: number) => (
                            <li key={j}>
                              <Link
                                href={`/products/${slugConvert(link?.name)}`}
                                className="hover:text-red-600 transition"
                              >
                                {link?.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>
            </React.Fragment>
          ))}

        </div>
      </div>



      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="bg-red-600 text-white px-6 py-4 md:hidden">
          <div className="space-y-4">
            {menuItems?.map((item: any, idx: number) => (
              <div key={idx} className="border-b border-red-400 pb-2">
                <button
                  className="flex justify-between w-full items-center font-medium"
                  onClick={() =>
                    setActiveMenu(activeMenu === idx ? null : idx)
                  }
                >
                  {item?.title}
                  <ChevronDown
                    size={16}
                    className={`transform transition ${activeMenu === idx ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {activeMenu === idx && (
                  <div className="mt-2 pl-4 space-y-3">
                    {item?.megaMenu?.map((col: any, i: number) => (
                      <div key={i}>
                        <h4 className="font-semibold">{col?.heading}</h4>
                        <ul className="pl-2 text-sm space-y-1">
                          {col.products.map((link: any, j: number) => (
                            <li key={j}>
                              <Link
                                href={`/products/${slugConvert(link?.name)}`}
                                className="hover:text-gray-200">
                                {link?.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {signInmodal && (
        <LoginModal open={signInmodal} handleClose={() => setSignInModal(false)} vendorId={vendorId} />
      )}


    </div>
  );
}
