/* Edit these values. Empty ones are hidden from the page. */
/* The address is assembled at runtime so simple spam scrapers do not find it in the HTML. */
const CONTACT = {
  email: ["marinaolvera.rh", "gmail.com"].join(String.fromCharCode(64)),
  phone: "",
  linkedin: "https://www.linkedin.com/in/marinaolvera/",
  location: "Monterrey, Nuevo León, México"
};

const icons = {
  email: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
  location: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>'
};
const labels = { email: "Correo", phone: "Teléfono", linkedin: "LinkedIn", location: "Ubicación" };

const list = document.getElementById("contact-list");
for (const key of ["email", "phone", "linkedin", "location"]) {
  const val = CONTACT[key];
  if (!val) continue;
  const li = document.createElement("li");
  /* Email and LinkedIn are not printed on the page: the email row offers a copy button, the LinkedIn row opens the profile. */
  const shown = key === "linkedin" ? "Ver perfil" : key === "email" ? "Copia el correo con el botón" : val;
  const inner = `<span>${icons[key]}</span><span style="min-width:0"><span class="label">${labels[key]}</span><span class="value">${shown}</span></span>`;
  if (key === "linkedin") {
    li.innerHTML = `<a href="${val}" target="_blank" rel="noopener" style="display:flex;gap:14px;align-items:center;min-width:0;width:100%">${inner}<span style="margin-left:auto;opacity:.8" aria-hidden="true">↗</span></a>`;
  } else {
    li.innerHTML = inner;
    if (key === "email" || key === "phone") {
      const b = document.createElement("button");
      b.className = "copy"; b.type = "button"; b.textContent = "Copiar"; b.setAttribute("aria-label", "Copiar " + labels[key].toLowerCase());
      b.addEventListener("click", () => {
        const done = () => { b.textContent = "Copiado"; setTimeout(() => (b.textContent = "Copiar"), 1600); };
        const fallback = () => { const v = li.querySelector(".value"); v.textContent = val; const r = document.createRange(); r.selectNodeContents(v); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
        try { navigator.clipboard.writeText(val).then(done, fallback); } catch (e) { fallback(); }
      });
      li.appendChild(b);
    }
  }
  list.appendChild(li);
}

document.getElementById("year").textContent = new Date().getFullYear();
