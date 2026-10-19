
document.addEventListener("DOMContentLoaded", function () {

    // DOM CLICK EVENT
    const welcomeBtn = document.getElementById("welcomeBtn");
    const welcomeMessage = document.getElementById("welcomeMessage");

    if (welcomeBtn && welcomeMessage) {
        welcomeBtn.addEventListener("click", function () {
            welcomeMessage.textContent =
                "Hello! Welcome to Campus Events.";
        });
    }

    // EVENT CARD MOUSE EVENTS
    const cards = document.querySelectorAll(".event-card");
    const eventMessage = document.getElementById("eventMessage");

    cards.forEach(function (card) {

        card.addEventListener("mouseover", function () {
            card.style.boxShadow = "0 5px 18px #0b5bd355";

            if (eventMessage) {
                eventMessage.textContent = "Mouseover event fired!";
            }
        });

        card.addEventListener("mouseout", function () {
            card.style.boxShadow = "";

            if (eventMessage) {
                eventMessage.textContent = "Mouseout event fired!";
            }
        });

        card.addEventListener("mouseenter", function () {
            card.classList.add("pointer-inside");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("pointer-inside");
        });

        card.addEventListener("dblclick", function () {
            card.classList.toggle("selected-event");

            if (eventMessage) {
                if (card.classList.contains("selected-event")) {
                    eventMessage.textContent =
                        "You double-clicked: " +
                        card.querySelector("h3").textContent;
                } else {
                    eventMessage.textContent = "Event highlight removed.";
                }
            }
        });

        card.addEventListener("contextmenu", function (event) {
            event.preventDefault();

            card.classList.toggle("right-clicked");

            if (eventMessage) {
                eventMessage.textContent =
                    "Custom right-click action: " +
                    card.querySelector("h3").textContent;
            }
        });
    });

    // EVENT SEARCH
    const searchInput = document.getElementById("searchEvents");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchText = searchInput.value.toLowerCase();
            let visibleCount = 0;

            cards.forEach(function (card) {
                const eventName =
                    (card.dataset.name || "").toLowerCase();

                if (eventName.includes(searchText)) {
                    card.style.display = "";
                    visibleCount++;
                } else {
                    card.style.display = "none";
                }
            });

            if (eventMessage) {
                eventMessage.textContent =
                    visibleCount +
                    (visibleCount === 1
                        ? " event found."
                        : " events found.");
            }
        });
    }

    // REGISTRATION FORM VALIDATION
    const form = document.getElementById("registrationForm");
    const formMessage = document.getElementById("formMessage");

    if (form && formMessage) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mobile = document.getElementById("mobile").value.trim();
            const password = document.getElementById("password").value;
            const department =
                document.getElementById("department").value;
            const selectedEvent =
                document.getElementById("event").value;
            const date = document.getElementById("date").value;
            const agreement =
                document.getElementById("agreement").checked;

            // REGULAR EXPRESSIONS
            const nameRegex = /^[A-Za-z ]{3,}$/;
            const emailRegex =
                /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            const mobileRegex = /^[0-9]{10}$/;
            const passwordRegex = /^[A-Za-z0-9!@#$%^&*]{6,}$/;

            if (!nameRegex.test(name)) {
                formMessage.textContent =
                    "Invalid name. Use at least 3 letters.";
            } else if (!emailRegex.test(email)) {
                formMessage.textContent =
                    "Please enter a valid email.";
            } else if (!mobileRegex.test(mobile)) {
                formMessage.textContent =
                    "Enter a valid 10-digit mobile number.";
            } else if (!passwordRegex.test(password)) {
                formMessage.textContent =
                    "Password must be at least 6 characters and use only letters, numbers or !@#$%^&*.";
            } else if (!department) {
                formMessage.textContent =
                    "Please select your department.";
            } else if (!selectedEvent) {
                formMessage.textContent =
                    "Please choose an event.";
            } else if (!date) {
                formMessage.textContent =
                    "Please select a preferred date.";
            } else if (!agreement) {
                formMessage.textContent =
                    "Please agree to the event rules and regulations.";
            } else {
                formMessage.textContent =
                    "Registration form validated successfully!";

                form.reset();
            }
        });
    }
});
