import React from "react";
import customersImages from "../../img/new/customers";

function Customers() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:justify-items-start justify-items-center gap-2">
      {customersImages.map((item, index) => (
        <img
          key={index}
          loading="lazy"
          className="h-auto xl:max-w-[236px] sm:max-w-[160px] max-w-[100px] w-full rounded-lg"
          src={item}
          alt=""
        />
      ))}
    </div>
  );
}

export default Customers;
