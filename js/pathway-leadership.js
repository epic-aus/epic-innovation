  const courses = [
    {
      name: "Agile for Leaders",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/84-agile-for-leaders",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/LEADERSHIP_Agile for Leaders.png",
      desc: "Foster an environment where cross-functional teams have the alignment and autonomy to thrive and become high-performing.",
    },
    {
      name: "Capability Leadership",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/89-leading-chapters",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/LEADERSHIP_Capability-Leadership.png",
      desc: "As a Chapter/Capability Lead gain a greater understanding of the role and how to establish and maintain a healthy Chapter.",
    },
    {
      name: "Leadership Agility",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/111-epic-leadership-agility",
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/LEADERSHIP_Leadership-Agility.png",
      desc: "Transform leadership style to play a pivotal role in navigating change, driving innovation, and fostering a culture of continual learning.",
    },
  ];

  const container = document.getElementById("courseContainer");

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "flex flex-col justify-between p-6 bg-white rounded-xl shadow-xl";

    card.innerHTML = `
      <div class="flex flex-col flex-grow space-y-5">
        <img src="${course.img}" width="180" alt="" class="mx-auto mb-5">
        <div class="border border-t-1 border-green-500"></div>
          <h5 class="text-3xl font-bold text-left capitalize text-epicBlue">${course.name}</h5>
          <p class="text-left md:text-left leading-relaxed">${course.desc}</p>
        </div>
        <div class="mt-8 mb-2">
          <a href="${course.enrolLink}">
            <button class="bg-green-500 hover:bg-lime-300 transition-all duration-200 text-white py-3 px-7 rounded-full font-bold uppercase items-center text-xs">
                            Learn more
            </button>
          </a>  
        </div>  
    `;

    container.appendChild(card);
  });
