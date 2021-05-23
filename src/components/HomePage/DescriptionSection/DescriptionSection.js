import "./DescriptionSection.css";
import DeveloperIcon from "../../../resources/images/built_for_developers.svg";
import ModernIcon from "../../../resources/images/designed_to_be_moder.svg";
import DocumentationIcon from "../../../resources/images/documentation_for_everything.svg";

export function DescriptionSection(props) {
  return (
    <div className="descrtion-section">
      <div className="built-for-developers">
        <div>
          <img src={DeveloperIcon} alt="" />
        </div>
        <h3>Built for developers</h3>
        <div>
          Landkit is built to make your life easier. Variables, build tooling,
          documentation, and reusable components.
        </div>
      </div>
      <div className="designed-to-be-modern">
        <div>
          <img src={ModernIcon} alt="" />
        </div>
        <h3>Designed to be modern</h3>
        <div>
          Designed with the latest design trends in mind. Landkit feels modern,
          minimal, and beautiful.
        </div>
      </div>
      <div className="documentation-for-everything">
        <div>
          <img src={DocumentationIcon} alt="" />
        </div>
        <h3>Documentation for everything</h3>
        <div>
          We've written extensive documentation for components and tools, so you
          never have to reverse engineer anything.
        </div>
      </div>
    </div>
  );
}
