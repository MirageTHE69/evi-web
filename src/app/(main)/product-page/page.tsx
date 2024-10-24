import FeatureSection from "@/components/product/featureSection";
import Navbar from "@/components/nav";
import TopSection from "@/components/product/topsection";
import Product from "@/components/productCard";
import React from "react";
import WhyChhotaBull from "@/components/product/chhotaBullInfo";
import Footer from "@/components/footer";
import FeatureSection2 from "@/components/product/featureSection2";

const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      <TopSection />
      <Product />
      <FeatureSection />
      <FeatureSection2 />
      <WhyChhotaBull />
      <Footer />
    </div>
  );
};

export default ProductPage;
