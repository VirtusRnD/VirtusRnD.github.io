import translations from "./translations.json";

function translate(key, selectedLanguage) {
  const urlParams = new URLSearchParams(window.location.search);
  const languageFromUrl = urlParams.get("lang");
  const language = selectedLanguage || languageFromUrl || "tr";
  return translations[key]?.[language] ?? key;
}

const availableLanguages = ["tr", "en"];

export { translate, availableLanguages };
