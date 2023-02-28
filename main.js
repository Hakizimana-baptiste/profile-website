const contactForm = document.getElementById('contact__form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessege = document.getElementById('contact__message')

      const sendEmail =(e) =>{
        e.preventDefault()
        //check if the field has a value
        if(contactName.value === ''||contactEmail.value === ''|| contactProject.value === ''){

            //add or remove color
            contactMessege.classList.remove('color__blue')
            contactMessege.classList.add('color__red')

            //show message
contactMessege.textContent = 'write all the input fields   📩 '

        }else{
            //service Id tempelete
            emailjs.sendForm('service_8ii256v','template_85g6ftk','#contact__form"','VQaq6RG_bxgUd7BNm')

.then(() =>{
    //show and add color
    contactMessege.classList.add('color-blue')
    contactMessege.textContent ='Message sent  ✅'
    //remove message after 5 second 
    setTimeout(() =>{  
        contactMessege.textContent =''
    }, 5000)
})
        }
      } 
      contactForm.addEventListener('submit',sendEmail)
    