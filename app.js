/**
 * Simple client-side paywall.
 * Change PAYWALL_PASSWORD before deploying.
 * This is NOT secure against determined users — obfuscation only.
 */
const PAYWALL_PASSWORD = "demo-access"; // change me
const CONTENT_KEY = "simple-paywall-unlocked";

const gate = document.getElementById("gate");
const content = document.getElementById("content");
const passwordInput = document.getElementById("password");
const errorEl = document.getElementById("error");
const unlockBtn = document.getElementById("unlock-btn");
const lockBtn = document.getElementById("lock-btn");

function showUnlocked() {
  gate.hidden = true;
  content.hidden = false;
  errorEl.hidden = true;
}

function showLocked() {
  gate.hidden = false;
  content.hidden = true;
  sessionStorage.removeItem(CONTENT_KEY);
}

function tryUnlock() {
  const value = (passwordInput.value || "").trim();
  if (value === PAYWALL_PASSWORD) {
    sessionStorage.setItem(CONTENT_KEY, "1");
    showUnlocked();
  } else {
    errorEl.hidden = false;
    passwordInput.focus();
  }
}

unlockBtn.addEventListener("click", tryUnlock);
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") tryUnlock();
});
lockBtn.addEventListener("click", showLocked);

if (sessionStorage.getItem(CONTENT_KEY) === "1") {
  showUnlocked();
}
