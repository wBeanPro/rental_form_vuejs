new Vue({
  el: '#app',
  data: {
    activeStep: 0,
    animation: 'animate-in',
    formSteps: [
      {
        title: "Property Address",
        fields: [
          { label: "Street Address", value: '', valid: true, pattern: /.+/ },
          { label: "Street Address Line2", value: '', valid: true, pattern: /.+/ },
          { label: "City", value: '', valid: true, pattern: /.+/ },
          { label: "State / Province", value: '', valid: true, pattern: /.+/ },
          { label: "Postal / Zip Code", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Rent Amount",
        fields: [
          { label: "Amount", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Contact Information",
        fields: [
          { label: "First Name", value: '', valid: true, pattern: /.+/ },
          { label: "Last Name", value: '', valid: true, pattern: /.+/ },
          { label: "Email Address", value: '', valid: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
          { label: "Date of Birth", value: '', valid: true, pattern: /.+/ },
          { label: "Phone Number", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Marital Status",
        fields: [
          { label: "Married", value: '', valid: true, pattern: /.+/ },
          { label: "Single", value: '', valid: true, pattern: /.+/ },
          { label: "Divorced", value: '', valid: true, pattern: /.+/ },
          { label: "Widowed", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Current Home Address",
        fields: [
          { label: "Street Address", value: '', valid: true, pattern: /.+/ },
          { label: "Street Address Line2", value: '', valid: true, pattern: /.+/ },
          { label: "City", value: '', valid: true, pattern: /.+/ },
          { label: "State / Province", value: '', valid: true, pattern: /.+/ },
          { label: "Postal / Zip Code", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Landlord or Mortgage Co.",
        fields: [
          { label: "Name", value: '', valid: true, pattern: /.+/ },
          { label: "Phone", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Rent Amount",
        fields: [
          { label: "Amount", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Reason For Leaving",
        fields: [
          { label: "Reason1", value: '', valid: true, pattern: /.+/ },
          { label: "Reason2", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Pets?",
        fields: [
          { label: "Dog", value: '', valid: true, pattern: /.+/ },
          { label: "Cat", value: '', valid: true, pattern: /.+/ },
          { label: "Others", value: '', valid: true, pattern: /.+/ },
          { label: "None", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Total number of adults",
        fields: [
          { label: "Number of Adults", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Proposed Move in Date",
        fields: [
          { label: "Date", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Business Address",
        fields: [
          { label: "Street Address", value: '', valid: true, pattern: /.+/ },
          { label: "Street Address Line2", value: '', valid: true, pattern: /.+/ },
          { label: "City", value: '', valid: true, pattern: /.+/ },
          { label: "State / Province", value: '', valid: true, pattern: /.+/ },
          { label: "Postal / Zip Code", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Employed By",
        fields: [
          { label: "name", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Income before Tax (Monthly)",
        fields: [
          { label: "", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Employers Phone",
        fields: [
          { label: "please enter a valid phone number", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Employment Duration",
        fields: [
          { label: "", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Application fee Payment method",
        fields: [
          { label: "Cash app", value: '', valid: true, pattern: /.+/ },
          { label: "Zelle", value: '', valid: true, pattern: /.+/ },
          { label: "paypal", value: '', valid: true, pattern: /.+/ },
          { label: "Apple Pay", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Deposit Date",
        fields: [
          { label: "date", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Picture of ID",
        fields: [
          { label: "File", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Applicant Signture",
        fields: [
          { label: "Dog", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Thank you for participating!",
      }
    ],
  },
  methods: {
    nextStep() {
      this.animation = 'animate-out';
      setTimeout(() => {
        this.animation = 'animate-in';
        this.activeStep += 1;
      }, 600);
    },
    prevStep() {
      this.animation = 'animate-out';
      setTimeout(() => {
        this.animation = 'animate-in';
        this.activeStep -= 1;
      }, 600);
    },
    checkFields() {
      let valid = true;
      this.formSteps[this.activeStep].fields.forEach(field => {
        if (!field.pattern.test(field.value)) {
          valid = false;
          field.valid = false;
        }
        else {
          field.valid = true;
        }
      });

      if(valid) {
        this.nextStep();
      }
      else {
        this.animation = 'animate-wrong';
        setTimeout(() => {
          this.animation = '';
        }, 400);
      }
    }
  }
})