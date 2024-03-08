const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => handleEmailSend(e))

const handleEmailSend = async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const DATA = {
        name: name,
        email: email,
        message: message
    }

    const response = await POSTDATA("https://mailing-api-fs24.onrender.com/mailer/send-email", DATA);
    console.log(response)
}

const POSTDATA = async(URL, DATA) => {
    try {
        const response = await fetch(URL, {method: "POST", headers: {'Content-Type': 'application/json'}, body:JSON.stringify(DATA), credentials: "omit"});

        const data = await response.json();

        return data;
    } catch(error) {
        console.error(error);
    };
};
