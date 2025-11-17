import emailjs from "@emailjs/browser";

export function contactUs(data) {
  let templateParams = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    message: data.message,
  };

  return new Promise((resolve, reject) => {
    emailjs
      .send("service_fy9iv7p", "template_dzqnq3r", templateParams, {
        publicKey: "Jod6x65akg7pwl-Gb",
      })
      .then(
        (response) => {
          resolve(response);
          // console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          reject(err);
          // console.log("FAILED...", err);
        }
      );
  });
}

export function sendQuote(data) {
  let templateParams = {
    name: data?.contact?.name,
    email: data?.contact?.email,
    phone: data?.contact?.phone,
    location: data?.location,
    businessType: data?.businessType,
    wasteType: data?.wasteType,
    frequency: data?.frequency,
  };

  return new Promise((resolve, reject) => {
    emailjs
      .send("service_fy9iv7p", "template_849em1m", templateParams, {
        publicKey: "Jod6x65akg7pwl-Gb",
      })
      .then(
        (response) => {
          //   console.log("SUCCESS!", response.status, response.text);
          resolve(response);
        },
        (err) => {
          //   console.log("FAILED...", err);
          reject(err);
        }
      );
  });
}

export function emergencyExtract(data) {
  let templateParams = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    company: `Frequncy - ${data.frequency}`,
    message: data.message,
  };

  return new Promise((resolve, reject) => {
    emailjs
      .send("service_fy9iv7p", "template_dzqnq3r", templateParams, {
        publicKey: "Jod6x65akg7pwl-Gb",
      })
      .then(
        (response) => {
          //   console.log("SUCCESS!", response.status, response.text);
          resolve(response);
        },
        (err) => {
          //   console.log("FAILED...", err);
          reject(err);
        }
      );
  });
}
