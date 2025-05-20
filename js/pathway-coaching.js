  const courses = [
    {
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/COACHING_Coach.png",
      name: "Coach",
      desc: "Build high-performing teams through assessing culture and maturity, with effective coaching, mentoring, and teaching.",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/38-epic-coach-icpacc"
    },
    {
      name: "Enterprise Coach",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/79-enterprise-agile-coaching-icpent",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/COACHING_Enterprise-Coach.png",
      desc: "Improve agile adoption through looking beyond teams & divisions to identify and overcome impediments to agility.",
    },
    {
      name: "Transformation Coach",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/80-coaching-agile-transformation-icpcat",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/COACHING_Transformation-Coach.png",
      desc: "Lead effective transformation by building on current strengths and incrementally introducing new practices and operating models. ",
    },
    {
      name: "Expert Coach",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/112-epic-expert-coach",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/COACHING_Expert-Coach.png",
      desc: "This course equips you with the ability to facilitate impactful sessions, coach with confidence, mentor with purpose, and teach with clarity.",
    },
  ];

  const container = document.getElementById("courseContainer");

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "flex flex-col justify-between p-6 bg-white rounded-xl shadow-xl";

    card.innerHTML = `
      <div class="flex flex-col flex-grow space-y-5">
        <img src="${course.img}" width="180" alt="" class="mx-auto mb-5">
        <div class="border border-t-1 border-emerald-500"></div>
          <h5 class="text-3xl font-bold text-left capitalize text-epicBlue">${course.name}</h5>
          <p class="text-left md:text-left leading-relaxed">${course.desc}</p>
        </div>
        <div class="mt-8 mb-2">
          <a href="${course.enrolLink}">
            <button class="bg-emerald-500 hover:bg-cyan-500 transition-all duration-200 text-white py-3 px-7 rounded-full font-bold uppercase items-center text-xs">
                            Learn more
            </button>
          </a>  
        </div>  
    `;

    container.appendChild(card);
  });
