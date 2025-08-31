document.getElementById('otpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const otpInput = document.getElementById('otp').value.trim();
  const message = document.getElementById('otp-message');
  if (otpInput === "11570") {
    message.textContent = "successful, please wait";
    message.classList.add('success');
    setTimeout(function() {
      // Redirect to next page (change 'dashboard.html' to your next page)
      window.location.href = "dashboard.html";
    }, 1500);
  } else {
    message.textContent = "wrong pin, try again";
    message.classList.remove('success');
  }
});