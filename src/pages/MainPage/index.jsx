import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import CategoriesContainer from "../../components/CategoriesContainer";
import DiscountForm from "../../components/DiscountForm";
import SalesContainer from "../../components/SalesContainer";

export default function MainPage() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Banner />
      <CategoriesContainer />
      <DiscountForm />
      <SalesContainer />
    </div>
  );
}
