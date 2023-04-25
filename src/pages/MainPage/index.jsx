import React from "react";
import Banner from "../../components/Banner";
import CategoriesContainer from "../../components/CategoriesContainer";
import DiscountForm from "../../components/DiscountForm";
import SalesContainer from "../../components/SalesContainer";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <CategoriesContainer />
      <DiscountForm />
      <SalesContainer />
    </div>
  );
}
