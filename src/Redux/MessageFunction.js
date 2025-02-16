import emailjs from '@emailjs/browser';


export function contactUs (data) {
	
	let templateParams = {
      name: data.name,
      email: data.email,
	  phone: data.phone,
	  company: data.company,
	  message: data.message
    };

	emailjs
	  .send('service_fy9iv7p', 'template_dzqnq3r', templateParams, {
	    publicKey: 'Jod6x65akg7pwl-Gb',
	  })
	  .then(
	    (response) => {
	    	// return response
	      console.log('SUCCESS!', response.status, response.text);
	    },
	    (err) => {
	    	// return err;
	      console.log('FAILED...', err);
	    },
	  );
}

export function sendQuote (data) {
	
	let templateParams = {
      name: data?.contact?.name,
      email: data?.contact?.email,
	  phone: data?.contact?.phone,
	  location: data?.location,
	  businessType: data?.businessType,
	  wasteType: data?.wasteType,
	  frequency: data?.frequency
    };

    console.log(templateParams)

	emailjs
	  .send('service_fy9iv7p', 'template_849em1m', templateParams, {
	  	publicKey: 'Jod6x65akg7pwl-Gb',
	  })
	  .then(
	    (response) => {
	    	// return response
	      console.log('SUCCESS!', response.status, response.text);
	    },
	    (err) => {
	    	// return err;``
	      console.log('FAILED...', err);
	    },
	  );
}