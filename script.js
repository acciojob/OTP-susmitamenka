// Select all OTP input fields
const inputs = document.querySelectorAll('.code');

// Focus on the first input field when the page loads
inputs[0].focus();

// Add event listeners to each input field
inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const currentInput = e.target;
    const nextInput = inputs[index + 1];

    // Move to the next input if a digit is entered
    if (currentInput.value && nextInput) {
      nextInput.focus();
    }

    // Ensure only digits are entered
    if (!/^\d$/.test(currentInput.value)) {
      currentInput.value = '';
    }
  });

  input.addEventListener('keydown', (e) => {
    const currentInput = e.target;
    const prevInput = inputs[index - 1];

    // Handle backspace key to move to the previous field
    if (e.key === 'Backspace') {
      if (!currentInput.value && prevInput) {
        prevInput.focus();
      }
    }

    // Allow only numeric input (optional safeguard)
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
      e.preventDefault();
    }
  });
});