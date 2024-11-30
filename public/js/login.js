document.addEventListener("DOMContentLoaded", function () {
    const alertSms = document.getElementById("alert-sms");
    if (alertSms) {
      setTimeout(() => {
        alertSms.classList.add("visible");
      }, 100);
  
      setTimeout(() => {
        alertSms.classList.remove("visible");
        setTimeout(() => {
          alertSms.remove();
        }, 2000);
      }, 2500);
    }
  });
  