// Mobile menu toggle (simple)
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.style.display = open ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.right = "20px";
    nav.style.top = "64px";
    nav.style.padding = "12px";
    nav.style.background = "rgba(7,11,20,.92)";
    nav.style.border = "1px solid rgba(255,255,255,.12)";
    nav.style.borderRadius = "18px";
    nav.style.backdropFilter = "blur(10px)";
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Prefill service selection based on plan button clicked
document.querySelectorAll("[data-prefill]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.getAttribute("data-prefill");
    const select = document.getElementById("serviceSelect");
    if (!select) return;

    // Best-effort match
    if (val.includes("Helpdesk")) select.value = "Helpdesk Support";
    else if (val.includes("Business")) select.value = "Small Business IT";
    else if (val.includes("Hosting")) select.value = "VPS Hosting (Managed)";
    else select.value = "";

    // Scroll to form
    document.getElementById("contactForm")?.scrollIntoView({ behavior: "smooth" });
  });
});

// Mailto fallback (if Formspree not configured)
const mailBtn = document.getElementById("mailtoFallback");
if (mailBtn) {
  mailBtn.addEventListener("click", () => {
    const name = document.querySelector('input[name="name"]')?.value || "";
    const email = document.querySelector('input[name="email"]')?.value || "";
    const service = document.querySelector('select[name="service"]')?.value || "";
    const msg = document.querySelector('textarea[name="message"]')?.value || "";

    const subject = encodeURIComponent(`Knighton Tech Quote Request — ${service || "Service"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nDetails:\n${msg}\n`
    );

    window.location.href = `mailto:contact@knightontech.com?subject=${subject}&body=${body}`;
  });
}
