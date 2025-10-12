import "../styles/main.scss";
import ContactForm from "../components/ContactForm.tsx";

const Home = () => {
  return (
    <div className="container">
      <h1>🌍 Welcome to TravelEase</h1>
      <p>Explore the world with ease and excitement!</p>
      <ContactForm />
    </div>
  );
};

export default Home;
