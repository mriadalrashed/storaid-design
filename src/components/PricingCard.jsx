import React from "react";
import "../style/PricingCard.css";

export default function PricingCard() {
  const plans = [
    {
      title: "Small Unit",
      price: 50,
      description:
        "Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.",
      features: [
        "Nam nec ipsum in dolor",
        "Fusce nec ligula ut arcu",
        "Aliquam pulvinar arcu in",
        "Duis gravida enim porta",
        "Etiam eget libero non ligula",
      ],
    },
    {
      title: "Medium Unit",
      price: 100,
      description:
        "Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.",
      features: [
        "Nam nec ipsum in dolor",
        "Fusce nec ligula ut arcu",
        "Aliquam pulvinar arcu in",
        "Duis gravida enim porta",
        "Etiam eget libero non ligula",
      ],
    },
    {
      title: "Large Unit",
      price: 150,
      description:
        "Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.",
      features: [
        "Nam nec ipsum in dolor",
        "Fusce nec ligula ut arcu",
        "Aliquam pulvinar arcu in",
        "Duis gravida enim porta",
        "Etiam eget libero non ligula",
      ],
    },
    {
      title: "Executive Unit",
      price: 200,
      description:
        "Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.",
      features: [
        "Nam nec ipsum in dolor",
        "Fusce nec ligula ut arcu",
        "Aliquam pulvinar arcu in",
        "Duis gravida enim porta",
        "Etiam eget libero non ligula",
      ],
    },
  ];

  return (
    <section className="pricingcard">
      <div className="container">
        <div className="pricingcard__header">
          <h4 className="pricingcard__subtitle">Pricing Plan</h4>
          <div className="pricingcard__title__description">
            <h3 className="pricingcard__title">
              Find the Perfect Plan for Your Storage Needs
            </h3>
          </div>
        </div>

        <div className="cards">
          {plans.map((plan, index) => (
            <div key={index} className="card">
              <h5 className="card__title">{plan.title}</h5>
              <p className="card__price">
                <span className="currency">$</span>
                {plan.price}
                <span className="per">/month</span>
              </p>
              <p className="card__description">{plan.description}</p>
              <hr />
              <ul className="card__features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="card__btn">Rent Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
