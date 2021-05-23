import "./HomePage.css";
import HomePageImage from "../../resources/images/home-page.png";
import { DescriptionSection } from "./DescriptionSection/DescriptionSection";

export function HomePage(props) {
  return (
    <div>
      <div className="home-page-container">
        <div className="left-container">
          <div>
            <h1>
              Welcome to <span style={{ color: "blue" }}>Landkit</span>. Develop
              anything.
            </h1>
          </div>
          <div>
            Build a beautiful, modern website with flexible Bootstrap components
            built from scratch.
          </div>
          <div className="actions">
            <button className="view-all-pages">View All Pages</button>
            <button className="documentation-button">Documentation</button>
          </div>
        </div>
        <div className="right-container">
          {" "}
          <img
            className="home-page-image"
            src={HomePageImage}
            alt="home-page.png"
          />
        </div>
      </div>
      <DescriptionSection />
    </div>
  );
}
