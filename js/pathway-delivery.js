const courses = [
  {
    name: "Team Facilitator",
    enrolLink: "https://training.epicagile.com.au/w/au/courses/103-epic-scrum-master-agile-team-facilitator/2612",
    img: "https://epic-aus.github.io/epic-innovation/images/pathway/DELIVERY_Team-Facilitator.png",
    desc: "Design and lead effective events & workshops that achieve outcomes and enable development & learning.",
  },
  {
    name: "Delivery Manager",
    enrolLink: "https://training.epicagile.com.au/w/au/courses/108-epic-delivery-manager",
    img: "https://epic-aus.github.io/epic-innovation/images/pathway/DELIVERY_delivery-Manager.png",
    desc: "Enable teams to deliver on value, to quality and within constraints; with adaptive planning, improved flow and greater transparency.",
  },
  {
    name: "Lean Portfolio Management",
    enrolLink: "https://training.epicagile.com.au/w/au/courses/104-safe-lean-portfolio-management/2773",
    img: "https://epic-aus.github.io/epic-innovation/images/pathway/DELIVERY_Lean-Portfolio-Manager.png",
    desc: "Plan dynamically and be flexible enough to adjust initiatives and budgets as the market changes. Get the tools to work effectively in remote environments with distributed teams.",
  },
];

  const container = document.getElementById("courseContainer");

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "flex flex-col justify-between p-6 bg-white rounded-xl shadow-xl";

    card.innerHTML = `
      <div class="flex flex-col flex-grow space-y-5">
        <img src="${course.img}" width="180" alt="" class="mx-auto mb-5">
        <div class="border border-t-1 border-rose-500"></div>
          <h5 class="text-3xl font-bold text-left capitalize text-epicBlue">${course.name}</h5>
          <p class="text-left md:text-left leading-relaxed">${course.desc}</p>
        </div>
        <div class="mt-8 mb-2">
          <a href="${course.enrolLink}">
            <button class="bg-rose-500 hover:bg-fuchsia-700 transition-all duration-200 text-white py-3 px-7 rounded-full font-bold uppercase items-center text-xs">
                            Learn more
            </button>
          </a>  
        </div>  
    `;

    container.appendChild(card);
  });
