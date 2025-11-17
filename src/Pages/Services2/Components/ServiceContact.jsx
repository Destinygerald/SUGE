import "../style.css";
import "../style.mobile.css";
import { PrimaryButton } from "../../../Components/Buttons.jsx";
import { useState } from "react";
import { emergencyExtract } from "../../../Redux/MessageFunction.js";
import { useDispatch } from "react-redux";
import { addMessage } from "../../../Redux/messages.js";

function ServiceContactCard({ title, cnt, index }) {
  return (
    <div
      className="service-2-contact-cnt-info"
      id={`suge-service-2-contact-cnt-info-${index}`}
    >
      <span>{title}</span>
      <span>{cnt}</span>
    </div>
  );
}

function ServiceContactFormInput({
  name,
  display,
  type,
  value,
  placeholder,
  changeHandler,
  err,
}) {
  return (
    <div className="service-2-contact-input">
      <span>{display}</span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={changeHandler}
        name={name}
      />

      {err ? <span className="err"> {err} </span> : <></>}
    </div>
  );
}

function ServiceContactForm({ serviceForm, formErr, changeHandler }) {
  return (
    <div className="service-2-contact-form-body">
      <ServiceContactFormInput
        name="name"
        display="Name"
        type="text"
        value={serviceForm.name}
        placeholder="Enter Name"
        changeHandler={changeHandler}
        err={formErr.name}
      />
      <ServiceContactFormInput
        name="email"
        display="Email"
        type="email"
        value={serviceForm.email}
        placeholder="Enter Email address"
        changeHandler={changeHandler}
        err={formErr.email}
      />
      <ServiceContactFormInput
        name="phone"
        display="Phone"
        type="tel"
        value={serviceForm.phone}
        placeholder="Enter phone number"
        changeHandler={changeHandler}
        err={formErr.phone}
      />
      <ServiceContactFormInput
        name="frequency"
        display="Liquid Waste Collection Frequency"
        type="text"
        value={serviceForm.frequency}
        placeholder="e.g Daily"
        changeHandler={changeHandler}
        err={formErr.frequency}
      />

      <div className="service-2-contact-input">
        <span>Message</span>

        <textarea
          name="message"
          value={serviceForm.message}
          onChange={changeHandler}
          placeholder="Enter text here"
        ></textarea>

        {formErr?.message ? (
          <span className="err">{formErr.message}</span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export function ServiceContact() {
  const [serviceForm, setServiceForm] = useState({
    name: "",
    email: "",
    phone: "",
    frequency: "",
    message: "",
  });

  const [formErr, setFormErr] = useState({
    name: "",
    email: "",
    frequency: "",
    phone: "",
    message: "",
  });

  const dispatch = useDispatch();

  function changeHandler(e) {
    setServiceForm({
      ...serviceForm,
      [e.target.name]: e.target.value,
    });

    setFormErr({
      name: "",
      email: "",
      frequency: "",
      phone: "",
      message: "",
    });
  }

  async function submit() {
    if (!serviceForm.name) {
      setFormErr({ ...formErr, name: "Name is empty" });
      return;
    }

    if (!serviceForm.email) {
      setFormErr({ ...formErr, email: "Email field is empty" });
      return;
    }

    if (!serviceForm.frequency) {
      setFormErr({ ...formErr, frequency: "Frequency field is empty" });
      return;
    }

    if (!serviceForm.phone) {
      setFormErr({ ...formErr, phone: "Phone field is empty" });
      return;
    }

    if (!serviceForm.message) {
      setFormErr({ ...formErr, message: "Message field is empty" });
      return;
    }

    try {
      await emergencyExtract(serviceForm);
      dispatch(addMessage({ label: "Request Successful", type: "success" }));

      setServiceForm({
        name: "",
        email: "",
        phone: "",
        frequency: "",
        message: "",
      });
    } catch (err) {
      // err msg
      let message =
        typeof err == "object" ? JSON.stringify(err) : err.toString();
      dispatch(
        addMessage({ label: `Request Failed: ${message}`, type: "error" })
      );
    }
  }

  return (
    <div className="service-2-contact">
      <div className="service-2-contact-cnt">
        <div id="suge-service-2-contact-cnt">
          <span>Why Choose Us</span>

          <div>EXPERT WASTE WATER MANAGEMENT.</div>
        </div>

        <div>
          <ServiceContactCard
            index="0"
            title="Liquid Waste Recycling"
            cnt="Our team specializes in sustainable and efficient liquid waste collection and recycling, ensuring compliance with all regulations and standards."
          />
          <ServiceContactCard
            index="1"
            title="Custom Solutions"
            cnt="Tailored waste water management solutions to meet specific client needs and requirements."
          />
          <ServiceContactCard
            index="2"
            title="24/7 Service"
            cnt="We offer round-the-clock services to address any emergency waste water management needs."
          />
        </div>
      </div>

      <div className="service-2-contact-form" id="suge-service-2-contact-form">
        <div className="service-2-contact-form-glass" />

        <div
          className="service-2-contact-form-hdr"
          id="suge-service-2-contact-form-hdr"
        >
          <span>EMERGENCY WASTE WATER EXTRACTION</span>
          <span>
            Contact us for efficient and eco-friendly waste water tankering
            solutions. Fill out this simple form or call us for a quicker
            response
          </span>
        </div>

        <div className="service-2-contact-form-cnt">
          <ServiceContactForm
            serviceForm={serviceForm}
            formErr={formErr}
            changeHandler={changeHandler}
          />

          <PrimaryButton
            text="Contact us now"
            hasIcon={false}
            action={submit}
          />
        </div>
      </div>
    </div>
  );
}
