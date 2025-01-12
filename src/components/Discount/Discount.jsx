import { useState } from "react";
import Btn from "../Btn/Btn";
import "./Discount.css";

function Discount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleButtonClick = () => {
    const errors = {
      name: !formValues.name,
      phone: !formValues.phone,
      email: !formValues.email,
    };

    setFormErrors(errors);

    if (errors.name || errors.phone || errors.email) {
      return;
    }

    setIsModalVisible(true);
    setTimeout(() => setIsModalOpen(true), 10);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsModalVisible(false), 300);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("discount-modal")) {
      closeModal();
    }
  };

  return (
    <div className="discount">
      <div className="container">
        <div className="discount__block">
          <h3 className="discount__title">5% off on the first order</h3>

          <div className="discount__wrapper">
            <div className="discount__left-inner">
              <img src="/discount-bg.png" alt="" className="discount__img" />
            </div>

            <div className="discount__right-inner">
              <div className="discount__form-block">
                <form
                  className="discount__form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`discount__form-input ${
                      formErrors.name ? "error" : ""
                    }`}
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className={`discount__form-input ${
                      formErrors.phone ? "error" : ""
                    }`}
                    value={formValues.phone}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`discount__form-input ${
                      formErrors.email ? "error" : ""
                    }`}
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </form>
              </div>

              <Btn className="discount__btn" onClick={handleButtonClick}>
                Get a discount
              </Btn>
            </div>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <div
          className={`discount-modal ${isModalOpen ? "open" : ""}`}
          onClick={handleBackgroundClick}
        >
          <div
            className="discount-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="discount-modal__text">
              A gift coupon will be sent to your Email!
            </p>
            <span className="discount-modal__close" onClick={closeModal}>
              <img src="/close-btn-white.svg" alt="Close Btn" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Discount;
