import React from "react";
import "../style/BrandsSection.css";

export default function BrandsSection() {
  return ( 
    <section className="brands-section">
      <div className="brands-container">
        <img className="img1" src="/images/logoipsum-1.png" alt="Logoipsum 1" />
        <img className="img2" src="/images/logoipsum-2.png" alt="Logoipsum 2" />
        <img className="img3" src="/images/logoipsum-3.png" alt="Logoipsum 3" />
        <img className="img4" src="/images/logoipsum-4.png" alt="Logoipsum 4" />
        <img className="img5" src="/images/logoipsum-5.png" alt="Logoipsum 5" />
      </div>
    </section>
  );
}