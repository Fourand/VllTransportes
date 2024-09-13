(function () {
  emailjs.init("aMk_Ubx-5Vs8I0Bvp");
})();

const form = document.getElementById("quotationForm");

const errorFields = {
  fullname: document.getElementById("errorFieldFullName"),
  office: document.getElementById("errorFieldOffice"),
  company: document.getElementById("errorFieldCompany"),
  email: document.getElementById("errorFieldEmail"),
  telephone: document.getElementById("errorFieldTelephone"),
  truckType: document.getElementById("errorFieldTruckType"),
};

function setupErrorFields(fields) {
  for (const key in fields) {
    fields[key].style.display = "none";
    fields[key].style.color = "red";
  }
}

function validateField(field, errorField) {
  if (!field) {
    errorField.style.display = "block";
    return false;
  }
  errorField.style.display = "none";
  return true;
}

function truckName(truckType){
  const types = {
    "CA": "Carreta Aberta",
    "CB": "Carreta Baú",
    "CS": "Carreta Sider",
    "B": "Bitrem",
    "R": "Rodotrem",
    "CT": "Caminhão Toco",
    "CTK": "Caminhão Truck",
    "CV": "Caminhão VUC"
  }
  return types[truckType]
}

setupErrorFields(errorFields);

function sendEmail(fullname, office, company, email, telephone, truckType) {
  emailjs
    .send("service_y7z01xy", "template_den9zak", {
      message: `
        <li><span class="important">Nome Completo:</span> ${fullname}</li>
        <li><span class="important">Cargo:</span> ${office}</li>
        <li><span class="important">Empresa:</span> ${company}</li>
        <li><span class="important">E-mail:</span> ${email}</li>
        <li><span class="important">Telefone:</span> ${telephone}</li>
        <li><span class="important">Tipo de Caminhão:</span> ${truckName(truckType)}</li>
        `
    })
    .then(
      (response) => {},
      (error) => {},
    );
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let fullname = form.fullname.value.trim();
  let office = form.office.value.trim();
  let company = form.company.value.trim();
  let email = form.email.value.trim();
  let telephone = form.telephone.value.trim();
  let truckType = form.truckType.value.trim();

  if (!validateField(fullname, errorFields.fullname)) return false;
  if (!validateField(office, errorFields.office)) return false;
  if (!validateField(company, errorFields.company)) return false;
  if (!validateField(email, errorFields.email)) return false;

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorFields.email.style.display = "block";
    return false;
  }

  const phonePattern = /^\d{10,11}$/;
  if (!phonePattern.test(telephone)) {
    errorFields.telephone.style.display = "block";
    return false;
  }
  errorFields.telephone.style.display = "none";

  if (truckType === "SC") {
    errorFields.truckType.style.display = "block";
    return false;
  }
  errorFields.truckType.style.display = "none";

  sendEmail(fullname, office, company, email, telephone, truckType);
  document.getElementById("FormSend").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("FormSend").classList.add("hidden");
  }, 3000);
});
