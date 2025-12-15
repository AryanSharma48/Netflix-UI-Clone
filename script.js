const getStarted = document.getElementById("get-started-btn");
const input = document.getElementById("email-input-element")

getStarted.addEventListener("click", () => {
    input.focus();
});

const translations = {
    en: {
        "signin-btn": "Sign In",
        "title-line1": "Unlimited movies,",
        "title-line2": "shows, and more",
        "subtitle": "Starts at ₹149. Cancel at any time.",
        "description": "Ready to watch? Enter your email to create or restart your membership.",
        "get-started-btn": "Get Started",
        "email-placeholder": "Email address"
    },
    hi: {
        "signin-btn": "साइन इन",
        "title-line1": "अनलिमिटेड फ़िल्में,",
        "title-line2": "शो और बहुत कुछ",
        "subtitle": "₹149 से शुरू। कभी भी रद्द करें।",
        "description": "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या फिर से शुरू करने के लिए अपना ईमेल दर्ज करें।",
        "get-started-btn": "शुरू करें",
        "email-placeholder": "ईमेल पता"
    }
};

const languageSelect = document.getElementById("language");

function setLanguage(lang) {
    // Update visible text
    const textElements = document.querySelectorAll("[data-lang]");
    textElements.forEach(el => {
        const key = el.getAttribute("data-lang");
        const translation = translations[lang][key];
        if (translation) {
            el.textContent = translation;
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll("[data-lang-placeholder]");
    placeholderElements.forEach(el => {
        const key = el.getAttribute("data-lang-placeholder");
        const translation = translations[lang][key];
        if (translation) {
            el.setAttribute("placeholder", translation);
        }
    });

    document.documentElement.setAttribute("lang", lang);

    // Save preference
    localStorage.setItem("language", lang);
}

languageSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
});

const savedLang = localStorage.getItem("language") || "en";
languageSelect.value = savedLang;
setLanguage(savedLang);
