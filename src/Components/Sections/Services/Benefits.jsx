import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Benefits.scss";
const Benefits = () => {
  return (
    <div className="benefits-container">
      <p className="benefits-title">Additional Benefits:</p>
      <ul>
        <li>
          <BsFillPatchCheckFill /> 24/7 customer support for all your healthcare
          needs
        </li>
        <li>
          <BsFillPatchCheckFill /> Personalized health management services to
          help you maintain a healthy lifestyle
        </li>
        <li>
          <BsFillPatchCheckFill /> Easy online access to your health card
          information and healthcare records
        </li>
        <li>
          <BsFillPatchCheckFill /> Discounts on wellness products and services,
          including gym memberships and nutritional supplements
        </li>
        <li>
          <BsFillPatchCheckFill /> No waiting periods or pre-existing condition
          exclusions
        </li>
        <li>
          <BsFillPatchCheckFill /> No paperwork to worry about - simply show
          your health card and receive your discount
        </li>
      </ul>
    </div>
  );
};

export default Benefits;
