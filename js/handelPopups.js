const S_inscrire_button = document.getElementById('inscrire-link');
const shadow = document.querySelector('.bg-shadow');
const headerUserImg = document.getElementById("profile-img");
const connecter_button = document.getElementById('connecter-button');
const close = document.getElementById('close');



// targets popups
const popup_socil_media = document.getElementById('popup-socil-media-auth');
const popup_sign_up_particulier = document.getElementById('popup-sign-up-particulier');
const popup_type_singup = document.getElementById('popup-type-singup');
const popup_sign_up_association = document.getElementById('popup-sign-up-association');
const user_popup_info = document.querySelector('.user-popup-info')


// handel singup popup

S_inscrire_button.addEventListener('click' , () => {
    popup_sign_up_particulier.classList.add('active');
    shadow.classList.add('active');
  })
  

  shadow.addEventListener('click' , () => {
    shadow.classList.remove('active');
    popup_sign_up_particulier.classList.remove('active');
  })

  close.addEventListener('click' , () => {
    shadow.classList.remove('active');
    popup_sign_up_particulier.classList.remove('active');
  })
  connecter_button.addEventListener('click' , () => {
    console.log('hamza is the best');
    popup_socil_media.classList.add('active');
    shadow.classList.add('active');
  })

//   headerUserImg.addEventListener('click' , () => {
//     user_popup_info.classList.toggle('active')
// })


  