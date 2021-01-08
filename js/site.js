
    emailjs.init('user_FApBS5DLxO3rmkhC5Kwnr')

    const btn = document.getElementById('button');
  
      document.getElementById('form')
       .addEventListener('submit', function(event) {
         event.preventDefault();
      
         btn.value = 'Sending...';
      
         const serviceID = 'default_service';
         const templateID = 'template_alnqvq7';
      
         emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
                  btn.value = 'Send Email';
                  Swal.fire({
                    title: "Thanks for your message!",
                    text: "We have recieved your message!",
                    icon: "success",
                    
                });
                  });
                    form.reset();
                }, (err) => {
                    btn.value = 'Send Email';
                  Swal.fire({
                        title: "Sorry!",
                        text: "Failed to Send!",
                        icon: "error",
                        button: "Try Again",
                    });
                });