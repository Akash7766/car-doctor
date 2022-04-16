import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices();
  console.log(services);
  return (
    <div>
      <h2 className="text-primary text-center my-5">Our Services</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
