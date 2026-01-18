
const scriptURL = "https://script.google.com/macros/s/AKfycbzvPh0ruUNHdNtBpoJLw1qa1U8IKROpfqYa1Ug5FimM6vIkSAH7Xv8_1CKuNQ6WhsxR/exec";


const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
    })
        .then(() => {
            swal("Success", "Message sent successfully!", "success");
            form.reset();
        })
        .catch(() => {
            swal("Error", "Something went wrong. Try again!", "error");
        });
});
