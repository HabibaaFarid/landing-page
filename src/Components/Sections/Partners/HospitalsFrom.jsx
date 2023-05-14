import img1 from "../../images/hospital-img.jpg";
import "./HospitalsForm.scss";

const HospitalsForm = () => {
  function goToForm(){
    window.open("https://forms.gle/9gFpSUYfrh7MuYqS7")
  }
  return (
    <div className="main-form-container">
      <div className="form-container">
        <div className="text-container">
          <p className="text">
            If you are a hospital or healthcare provider, we invite you to
            register with us. Please fill out the registration form and one of
            our representatives will get in touch with you to discuss the
            registration process.
          </p>
          <button className="form-button" onClick={goToForm}>Hospital Registration Form</button>
        </div>
        <img src={img1} alt="animated hospital" className="hospital-img" />
      </div>
    </div>
  );
};

export default HospitalsForm;
