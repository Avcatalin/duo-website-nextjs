import React from "react";
import Hero from "../../components/Hero/Hero";
import serviceData from "../../lib/services.json";
import SingleService from "@/components/Service/Service";

const ServiciiPage: React.FC = () => {
  const { services } = serviceData;
  return (
    <div>
      <Hero title="Servicii" />
      <div>
        {services.map((service) => (
          <SingleService
            key={service.id}
            name={service.name}
            content={service.content}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiciiPage;
