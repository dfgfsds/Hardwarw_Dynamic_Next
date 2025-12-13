

"use client";
import React from "react";

export default function RefundReturnsPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Refund & Returns Policy
        </h1>
        <p className="text-gray-600 mb-6">Effective Date: 10 June 2025</p>

        {/* Intro */}
        <p className="text-gray-700 mb-8">
          At <span className="font-semibold">Hardware Dynamic</span>, customer
          satisfaction is our top priority. We take pride in delivering quality
          products, but if you are not fully satisfied with your purchase, this
          Refund & Returns Policy explains how we handle returns, refunds, and
          replacements.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {/* 1. Eligibility for Returns */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. Eligibility for Returns
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Products can be returned only if they are{" "}
                <span className="font-medium">
                  defective, damaged, or incorrectly delivered
                </span>
                .
              </li>
              <li>
                You must notify us within{" "}
                <span className="font-medium">48 hours of receiving</span> the
                product to be eligible for a return.
              </li>
              <li>
                The product must be unused, in its{" "}
                <span className="font-medium">original condition</span>, and
                returned in the original packaging with all accessories and
                proof of purchase.
              </li>
            </ul>
          </section>

          {/* 2. Non-Returnable Items */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. Non-Returnable Items
            </h2>
            <p className="text-gray-700 mb-2">
              The following items cannot be returned or refunded:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Customized or special-order products</li>
              <li>Digital/downloadable goods</li>
              <li>Items returned without original packaging or accessories</li>
              <li>Products that show signs of use, damage, or tampering</li>
            </ul>
          </section>

          {/* 3. Return Process */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. Return Process
            </h2>
            <p className="text-gray-700 mb-2">
              To initiate a return, please email us at:{" "}
              <a
                href="mailto:ftdigitalsolution777@gmail.com"
                className="text-blue-600 hover:underline"
              >
                ftdigitalsolution777@gmail.com
              </a>
            </p>
            <p className="text-gray-700 mb-2">Include the following details:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Order number</li>
              <li>Reason for return</li>
              <li>Clear photos or video of the product and issue (if applicable)</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Our team will review your request and provide instructions for the
              return process.
            </p>
          </section>

          {/* 4. Refunds */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. Refunds
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Once we receive and inspect the returned item, you will be
                notified of approval or rejection.
              </li>
              <li>
                If approved, the refund will be processed within{" "}
                <span className="font-medium">7–10 business days</span> and
                credited to your original method of payment.
              </li>
              <li>
                Shipping costs for returned items are{" "}
                <span className="font-medium">non-refundable</span>, unless the
                return is due to our error.
              </li>
            </ul>
          </section>

          {/* 5. Exchanges */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              5. Exchanges
            </h2>
            <p className="text-gray-700">
              We only replace items if they are defective or damaged. To request
              an exchange, contact us within{" "}
              <span className="font-medium">48 hours of delivery</span>.
            </p>
          </section>

          {/* 6. Return Shipping */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              6. Return Shipping
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Customers are responsible for return shipping costs unless the
                return is due to our error.
              </li>
              <li>
                We recommend using a{" "}
                <span className="font-medium">trackable shipping service</span>{" "}
                or purchasing shipping insurance.
              </li>
            </ul>
          </section>

          {/* 7. Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              7. Contact Us
            </h2>
            <p className="text-gray-700 mb-2">
              For any questions or assistance with returns and refunds, please
              contact us:
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
