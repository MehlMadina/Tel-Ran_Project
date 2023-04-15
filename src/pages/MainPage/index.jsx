import React from "react";
import Banner from "../../components/Banner";
import CategoriesContainer from "../../components/CategoriesContainer";
import DiscountForm from "../../components/DiscountForm";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <CategoriesContainer />
      <DiscountForm />
    </div>
  );
}
