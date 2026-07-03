// --- Strona główna: klik w przycisk "randka?" ---
$("button.button_pierwszy").click(function () {
    $("#catsweating").addClass("hidden").removeClass("visible");
    $("#catflower, #catflower1").removeClass("hidden").addClass("visible");

    setTimeout(function () {
        window.location.href = "sites/kalendarz.html";
    }, 2000);
});


// --- Galeria wyboru (jeśli obecna na stronie) ---
document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".photo_gallery > div");
    if (!divs.length) return;

    let isOptionSelected = false;

    divs.forEach((div) => {
        div.addEventListener("click", function () {
            if (isOptionSelected) return;

            isOptionSelected = true;
            div.style.border = "2px solid blue";

            const selectedAnswer = div.querySelector("p").innerText;
            localStorage.setItem("userAnswer", selectedAnswer);

            const webhookUrl =
                "https://discord.com/api/webhooks/1332703942337106002/EXs90bc9J1pa_9F8v6wFRe1evvOd_KAGVWncGhz0H5lWEJxBRRrYp1vBPVTsTPvEAM9l";

            fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: `Użytkownik wybrał: ${selectedAnswer}` }),
            })
                .then((response) => {
                    if (response.ok) {
                        console.log("Wiadomość została wysłana.");
                        setTimeout(function () {
                            window.location.href = "koncowka.html";
                        }, 1500);
                    } else {
                        console.error("Błąd przy wysyłaniu wiadomości.");
                    }
                })
                .catch((error) => console.error("Błąd:", error));
        });
    });
});
