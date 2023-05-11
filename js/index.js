function onInit() {
  console.log("ready");
  renderRelativePage();
}

var relativePage = "main";

var personalDetails = [
  {
    item: "Name",
    value: "Fadi Khier",
  },
  {
    item: "Tel",
    value: "+972-53-520-2511",
  },
  {
    item: "Email",
    value: "fk.1996.5@gmail.com",
  },
  {
    item: "Address",
    value: "Peqiin, Israel",
  },
];
var software = [
  {
    item: "Highly proficient",
    value: "with Java, Html, CSS, JavaScript, TypeScript, Office.",
  },
  {
    item: "Very good",
    value: "control of Firebase, Angular, android studio",
  },
  {
    item: "Good control",
    value: "of Node.js and MongoDB",
  },
];
var languages = [
  {
    item: "Arabic",
    value: "Mother's tongue",
  },
  {
    item: "Hebrew",
    value: "Full command",
  },
  {
    item: "English",
    value: "Very good command",
  },
];
var workExperience = [
  {
    title: "2019 – Today, Carpenter and renovations man",
    items: ["Carpenter and renovations man"],
  },
  {
    title: "2015 – 2019, Carpentry worker",
    items: [
      "First begin as CNC machine operator",
      "after that planning and supervision of the production process of the carpentry factory",
    ],
  },
  {
    title: "2014 – 2015, Renovations man",
    items: ["All renovation works such as plaster, paint, flooring and more"],
  },
];
var education = [
  {
    title: "2023 – Full Stack programming course at Coding Academy College",
    items: ["Frontend: Angular", "Backend: Firebase"],
  },
  {
    title: "2020 - 2023 Software Practical Engineer, Ort Brauda College",
    items: [
      "Final project: Administrative site for a planning and construction company",
    ],
  },
  {
    title: "2014 – 2017, Mechatronics Practical Engineer, Ort Brauda College",
    items: [
      "I studied mechatronics engineering but without a diploma and a final project",
    ],
  },
  {
    title: "2011 – 2014, High School Diploma, Peqiin",
    items: ["physics and electronics major"],
  },
];
var social = [
  {
    item: "Development",
    value:
      "at ''Melah'' organization in Peqiin, as Android application developer for the organization.",
  },
  {
    item: "senior medic",
    value: "at ''Melah'' organization in Peqiin",
  },
];

var myProjects = [
  {
    title: "Melah Duty Tracking App",
    desc: "An application that orginize shifts of the vollantiers in Melah orginization.",
    technologise: ["Android Studio", "Java", "Firebase"],
    createdAt: "20/12/2022",
    link: "https://play.google.com/store/apps/details?id=com.toranot.toranot_mlh",
    img: "./Snapseed.jpg",
  },
  {
    title: "Melah Emergency App",
    desc: "An application that helps people in emergency situations.",
    technologise: ["Android Studio", "Java", "Firebase"],
    createdAt: "at Development",
    link: "https://www.wix.com/website-template/view/html/1896?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Flanding-pages%2Fcoming-soon&tpClick=view_button&esi=3ede5975-fde9-4c6d-b619-698c9b99d26c",
    img: "./IMG_0488-2.png",
  },
  {
    title: "To Be Programmer",
    desc: "A website for a programming course",
    technologise: ["HTML", "CSS", "JavaScript"],
    createdAt: "1/3/2023",
    link: "https://fadi2109.github.io/ProCode-ToBeProgrammer/",
    img: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_05-1.jpg",
  },
  {
    title: "Calculator",
    desc: "A simple calculator that can do basic math operations",
    technologise: ["HTML", "CSS", "JavaScript"],
    createdAt: "5/3/2023",
    link: "https://fadi2109.github.io/calculator/",
    img: "./istockphoto-1137975153-612x612.jpg",
  },
  {
    title: "Trivia game",
    desc: "A simple trivia game with 10 questions",
    technologise: ["HTML", "CSS", "JavaScript"],
    createdAt: "8/3/2023",
    link: "https://fadi2109.github.io/TriviaGame/",
    img: "./png-clipart-pub-quiz-game-question-trivia-others-game-question-removebg-preview.png",
  },
  {
    title: "Gallery for Melah orginization",
    desc: "A simple gallery for Melah orginization",
    technologise: ["HTML", "CSS", "JavaScript"],
    createdAt: "13/3/2023",
    link: "https://fadi2109.github.io/galleryProCode/",
    img: "data:image/png;base64,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",
  },
  {
    title: "Expouse the future (Arabic)",
    desc: "A simple website that shows the future between 2 persons",
    technologise: ["Angular", "Firebase for Hosting"],
    createdAt: "19/3/2023",
    link: "https://exposethefuture-5a692.web.app/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7p1Bdqnsbm0wFbj2QZmo0mVr4A6z8lBo0aQ&usqp=CAU",
  },
];

function renderPersonalDetails() {
  var ePersonaDetails = document.querySelector(".personalDetails");
  var strHTML = "";
  personalDetails.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (ePersonaDetails) ePersonaDetails.innerHTML = strHTML;
}

function renderSoftware() {
  var eSoftware = document.querySelector(".software");
  var strHTML = "";
  software.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eSoftware) eSoftware.innerHTML = strHTML;
}

function renderLanguages() {
  var eLanguages = document.querySelector(".languages");
  var strHTML = "";
  languages.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eLanguages) eLanguages.innerHTML = strHTML;
}

function renderWorkExperience() {
  var eWorkExperience = document.querySelector(".workExperience");
  var strHTML = "";
  workExperience.forEach(function (item) {
    strHTML += `<li><span><b>${item.title}</b>:</span><ul>`;
    item.items.forEach(function (item) {
      strHTML += `<li>${item}</li>`;
    });
    strHTML += `</ul></li>`;
  });
  if (eWorkExperience) eWorkExperience.innerHTML = strHTML;
}

function renderEducation() {
  var eEducation = document.querySelector(".education");
  var strHTML = "";
  education.forEach(function (item) {
    strHTML += `<li><span><b>${item.title}</b>:</span><ul>`;
    item.items.forEach(function (item) {
      strHTML += `<li>${item}</li>`;
    });
    strHTML += `</ul></li>`;
  });
  if (eEducation) eEducation.innerHTML = strHTML;
}

function renderSocial() {
  var eSocial = document.querySelector(".social");
  var strHTML = "";
  social.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eSocial) eSocial.innerHTML = strHTML;
}

function renderMyProjects() {
  var eMyProjects = document.querySelector(".myProjects");
  console.log("myProjects", myProjects);
  var strHTML = "";
  myProjects.forEach(function (item) {
    (strHTML += `<div class="card m-1 cardProj" style="width: 18rem">
    <img
      src="${item.img}"
      class="card-img-top mt-2 h-50"
      alt="${item.title}"
    />
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">
        <span class="fs-5 fw-bolder">technologies:</span>
        <ul>
          `),
      item.technologise.forEach(function (item) {
        strHTML += `<li>${item}</li>`;
      }),
      (strHTML += `
      </ul>
      <p class="fs-6 text-primary">Created at: ${item.createdAt}</p>
      </p>
      <a href="${item.link}" target="_blank" class="btn btn-success col-12">Visit Project</a>
    </div>
  </div>`);
  });
  if (eMyProjects) eMyProjects.innerHTML = strHTML;
}

function renderRelativePage(page = "main") {
  var eContainer = document.querySelector(".container");
  htmlStr = "";
  switch (page) {
    case "main":
      htmlStr += `<div class="row">
      <div class="col-12 bg-primary header d-flex align-items-center p-4">
        <span class="fs-2 fw-bolder">Fadi Khier CV</span>

        <span class="fs-2 ms-auto">
          <Button class="d-flex align-items-center navBtn" onClick="renderRelativePage('projects')">
            <span class="material-symbols-outlined fs-2"
              >integration_instructions
            </span>
            <span class="fs-3">My Projects</span>
          </Button>
        </span>
      </div>
      <div class="col-xs-12 col-lg-4 bg-primary-subtle lSide pt-2">
        <div class="col-12 d-flex justify-content-center">
          <img
            class="imageProfile"
            src="./profile.jpeg"
            alt="profile image"
          />
        </div>
        <div class="col-12">
          <span class="fs-4 fw-bolder">Personal details:</span>
          <ul class="personalDetails">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
        <div class="col-12">
          <span class="fs-4 fw-bolder">Software:</span>
          <ul class="software">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
        <div class="col-12">
          <span class="fs-4 fw-bolder">Languages:</span>
          <ul class="languages">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xs-12 col-lg-8 bg-primary-subtle rSide pt-2">
        <div class="col-12">
          <span class="fs-4 fw-bolder">Work Experience:</span>
          <ul class="workExperience">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
        <div class="col-12">
          <span class="fs-4 fw-bolder">Education:</span>
          <ul class="education">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
        <div class="col-12">
          <span class="fs-4 fw-bolder"
            >Social activities and volunteering:</span
          >
          <ul class="social">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
      </div>
      <div
        class="col-12 bg-dark text-light footer d-flex align-items-center justify-content-center"
      >
        <span>Created By Fadi Khier &copy;</span>
        <a href="mailto:fk.1996.5@gmail.com" target="_blank">
        <i class="bi bi-envelope-at-fill ms-2 text-danger"></i>
      </a>
      <a href="tel:0535202511" target="_blank">
        <i class="bi bi-telephone-fill ms-2 text-white"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=972535202511&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <i class="bi bi-whatsapp ms-2 text-success"></i>
      </a>
      </div>
    </div>`;
      break;
    case "projects":
      htmlStr += `<div class="row">
      <div class="col-12 bg-primary header d-flex align-items-center p-4">
        <span class="fs-2 fw-bolder">My Projects</span>

        <span class="fs-2 ms-auto">
        <Button class="d-flex align-items-center navBtn" onClick="renderRelativePage('main')">
            <span class="material-symbols-outlined fs-2">badge </span>
            <span class="fs-3">Fadi's CV</span>
          </Button>
        </span>
      </div>
      <div class="col-12 bg-primary-subtle lSideP pt-2">
        <div class="row myProjects d-flex justify-content-evenly">
          <!-- the cards are here -->
        </div>
      </div>

      <div
        class="col-12 bg-dark text-light footer d-flex align-items-center justify-content-center"
      >
      <span>Created By Fadi Khier &copy;</span>
      <a href="mailto:fk.1996.5@gmail.com" target="_blank">
        <i class="bi bi-envelope-at-fill ms-2 text-danger"></i>
      </a>
      <a href="tel:0535202511" target="_blank">
        <i class="bi bi-telephone-fill ms-2 text-white"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=972535202511&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <i class="bi bi-whatsapp ms-2 text-success"></i>
      </a>
      </div>
    </div>`;
      break;
    default:
      htmlStr += `<div class="row">
      <div class="col-12 header d-flex align-items-center justify-content-center fs-5">
        <span class="fs-2 fw-bolder"> Page Not Found 404</span>
        <img onclick="renderRelevantPage("main")" src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="404" />
        
      </div>
      
      </div>`;
      break;
  }
  if (eContainer && htmlStr) eContainer.innerHTML = htmlStr;
  renderAll();
}

function renderAll() {
  renderPersonalDetails();
  renderSoftware();
  renderLanguages();
  renderWorkExperience();
  renderEducation();
  renderSocial();
  renderMyProjects();
}
