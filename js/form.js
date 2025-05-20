
  const form = document.getElementById("epicForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const countryInput = document.getElementById("country");

  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorCountry = document.getElementById("error-country");

  const successMessage = document.getElementById("successMessage");

  const onlyLettersRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateInput(input, regex, errorEl) {
    if (!input.value.trim() || !regex.test(input.value)) {
      errorEl.classList.remove("hidden");
      input.classList.add("border-red-500");
      return false;
    } else {
      errorEl.classList.add("hidden");
      input.classList.remove("border-red-500");
      return true;
    }
  }

  nameInput.addEventListener("input", () => validateInput(nameInput, onlyLettersRegex, errorName));
  emailInput.addEventListener("input", () => validateInput(emailInput, emailRegex, errorEmail));
  countryInput.addEventListener("input", () => validateInput(countryInput, onlyLettersRegex, errorCountry));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const isNameValid = validateInput(nameInput, onlyLettersRegex, errorName);
    const isEmailValid = validateInput(emailInput, emailRegex, errorEmail);
    const isCountryValid = validateInput(countryInput, onlyLettersRegex, errorCountry);

    if (!isNameValid || !isEmailValid || !isCountryValid) {
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        successMessage.classList.remove("hidden");
        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 5000);
      } else {
        alert("Oops! There was a problem. Please try again.");
      }
    } catch (error) {
      alert("Submission failed. Please try again.");
      console.error("Form Error:", error);
    }
  });

