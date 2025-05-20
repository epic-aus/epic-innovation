  const courses = [
    {
      name: "Agile Foundations",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/36-agile-foundations-for-teams",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/FOUNDATIONS_agile-foundations.png",
      desc: "Effectively apply agile values and principles to the roles, events & artefacts of a self-organising cross-functional team.",
    },
    {
      name: "Scaling Agile",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/106-epic-scaling-agile-tribe-crew-foundations",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/FOUNDATIONS_Scaling-Agile.png",
      desc: "Accelerate your teams understanding of Crews/Tribes, the roles and events to successfully operate, what keeps them together, and how to measure success.",
    },
    {
      name: "AgilityHealth Facilitator",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/37-agilityhealth-certified-facilitator/",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/FOUNDATIONS_AgilityHealth.png",
      desc: "This certification workshop prepares participants to facilitate and deliver the TeamHealth Retrospective and certifies them to be AgilityHealth Facilitators.",
    },
    {
      name: "Business Agility Foundations",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/86-business-agility-foundations-icpbaf",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/FOUNDATIONS_Business-Agility.png",
      desc: "Develop business acumen to apply the strategy and patterns of business agility that address today’s opportunities and challenges",
    },
    {
      name: "Leading Scaled Agile",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/110-epic-leading-scaled-agile",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/FOUNDATIONS_Leading-Scaled-Agile.png",
      desc: "Equip Leaders to successfully support and operate a Crew/Tribe. Focusing on the foundations of tribes, roles, how they operate and measure success.",
    },
  ];

  const container = document.getElementById("courseContainer");

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "flex flex-col justify-between p-6 bg-white rounded-xl shadow-xl";

    card.innerHTML = `
      <div class="flex flex-col flex-grow space-y-5">
        <img src="${course.img}" width="180" alt="" class="mx-auto mb-5">
        <div class="border border-t-1 border-violet-400"></div>
          <h5 class="text-3xl font-bold text-left capitalize text-epicBlue">${course.name}</h5>
          <p class="text-left md:text-left leading-relaxed">${course.desc}</p>
        </div>
        <div class="mt-8 mb-2">
          <a href="${course.enrolLink}">
            <button class="bg-violet-400 hover:bg-indigo-800 transition-all duration-200 text-white py-3 px-7 rounded-full font-bold uppercase items-center text-xs">
                            Learn more
            </button>
          </a>  
        </div>  
    `;

    container.appendChild(card);
  });
