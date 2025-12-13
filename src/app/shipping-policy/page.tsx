

"use client";
import React from "react";

export default function ShippingPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Shipping Policy
        </h1>
        <p className="text-gray-600 mb-6">Effective Date: 10 June 2025</p>

        {/* Intro */}
        <p className="text-gray-700 mb-8">
          At <span className="font-semibold">Hardware Dynamic</span>, we are
          committed to delivering your products in a timely and secure manner.
          This Shipping Policy outlines our shipping practices, timelines, and
          customer responsibilities.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {/* 1. Order Processing */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. Order Processing
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Orders are processed within{" "}
                <span className="font-medium">1–2 business days</span> (excluding
                Sundays and public holidays) after payment confirmation.
              </li>
              <li>
                You will receive a confirmation email with order details once
                processing is complete.
              </li>
            </ul>
          </section>

          {/* 2. Shipping Methods & Timelines */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. Shipping Methods & Timelines
            </h2>
            <p className="text-gray-700 mb-2">
              We partner with reliable courier services to ensure safe and fast
              delivery. Standard delivery timelines are:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-medium">Within Chennai & Tamil Nadu:</span>{" "}
                2–4 business days
              </li>
              <li>
                <span className="font-medium">Within India (Other States):</span>{" "}
                4–7 business days
              </li>
            </ul>
            <p className="text-gray-700 mt-2">
              Delivery times may vary due to factors beyond our control (e.g.,
              courier delays, holidays, weather conditions).
            </p>
          </section>

          {/* 3. Shipping Charges */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. Shipping Charges
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Shipping charges are calculated at checkout based on your
                location and order weight.
              </li>
              <li>
                Free shipping may be available for selected products,
                promotional offers, or orders above a specified amount (if
                applicable).
              </li>
            </ul>
          </section>

          {/* 4. Tracking Your Order */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. Tracking Your Order
            </h2>
            <p className="text-gray-700">
              Once your order has been shipped, you will receive a{" "}
              <span className="font-medium">tracking number</span> via email or
              SMS. You can use this tracking number to monitor the delivery
              status.
            </p>
          </section>

          {/* 5. Delayed or Failed Delivery */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              5. Delayed or Failed Delivery
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                If delivery is delayed due to unforeseen circumstances, we will
                keep you informed.
              </li>
              <li>
                Please ensure that the shipping address and contact details
                provided are accurate.{" "}
                <span className="font-medium">Hardware Dynamic</span> is not
                responsible for failed deliveries due to incorrect or incomplete
                addresses.
              </li>
            </ul>
          </section>

          {/* 6. International Shipping */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              6. International Shipping
            </h2>
            <p className="text-gray-700">
              Currently, <span className="font-medium">Hardware Dynamic</span>{" "}
              ships only within India. International shipping may be introduced
              in the future and will be updated in this policy.
            </p>
          </section>

          {/* 7. Damaged or Lost Packages */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              7. Damaged or Lost Packages
            </h2>
            <p className="text-gray-700">
              If your package arrives damaged or does not arrive at all, please
              contact us within <span className="font-medium">48 hours</span> at{" "}
              <a
                href="mailto:ftdigitalsolution777@gmail.com"
                className="text-blue-600 hover:underline"
              >
                ftdigitalsolution777@gmail.com
              </a>
              . We will work with our courier partners to resolve the issue as
              quickly as possible.
            </p>
          </section>

          {/* 8. Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              8. Contact Us
            </h2>
            <p className="text-gray-700 mb-2">
              For any questions regarding shipping, please contact us:
            </p>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-800 font-semibold">Hardware Dynamic</p>
              <p>Email: ftdigitalsolution777@gmail.com</p>
              <p>Phone: +91-7277929292</p>
              <p>
                Address: New No.46, Old No.45, 1st Floor (North Side), Giri
                Road, T. Nagar, Chennai – 600017
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
