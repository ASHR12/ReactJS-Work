import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <>
      <div className="products">
        {menuItems.map((item) => {
          const { id, title, price, img, desc } = item;
          return (
            <article key={id} className="product">
              <div className="product-image">
                <img src={img} alt={title} className="img" />
              </div>
              <div className="product-details">
                <div className="product-header">
                  <h5>{title}</h5>
                  <h6>${price}</h6>
                </div>
                <div className="product-desc">
                  <p className="desc-text">
                    {desc.length > 100 ? `${desc.substring(0, 100)}...` : desc}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
