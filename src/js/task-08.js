
// // 1)
// const inputEl = document.querySelector(".login-form");

// const submitHandler = (event) => {
//     event.preventDefault();

//     const {
//         elements: { email, password },
//     } = event.currentTarget;
    
//     if (email.value === "" || password.value === "") {
//         return alert('Proszę uzupełnić wszystkie pola');
//     }

//     console.log(`Email: ${email.value}, Password: ${password.value}`);

//     event.currentTarget.reset();
// };

// inputEl.addEventListener("submit", submitHandler);
const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // zapobiega odświeżeniu strony po przesłaniu formularza

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // sprawdza, czy pola są wypełnione
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Wszystkie pola powinny zostać wypełnione.');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };
    console.log(formData); // wypisuje obiekt z wartościami formularza w konsoli
    loginForm.reset(); // resetuje wartości pól input
  }
});
//Kod ten nasłuchuje na zdarzenie submit formularza i zapobiega odświeżeniu strony. Następnie pobiera wartości pól formularza i sprawdza, czy są one wypełnione. Jeśli tak, tworzy obiekt z wartościami pól i wypisuje go w konsoli. W przeciwnym przypadku wyświetla alert z informacją o tym, że wszystkie pola muszą być wypełnione. Na koniec, metoda reset() jest wywoływana, aby wyczyścić wartości pól input.