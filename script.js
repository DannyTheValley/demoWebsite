function sendEmail() {
    Email.send({
        SecureToken: "1902d97f-eed3-448e-a7bc-c2a49b70f0d5",
        To: 'daniel06052004@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Kontaktform fra nettside",
        Body: "Navn: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Telefon: " + document.getElementById("number").value
            + "<br> Beskrivelse: " + document.getElementById("message").value
    }).then(
        message => alert("Meldingen er sendt")
    );
}