  const courses = [
    {
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/PRODUCT_Product-Owner.png",
      name: "Product Owner",
      desc: "Maximise the value of a product or service with customer-focused, outcome-driven product discovery and effective team collaboration.",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/40-epic-product-owner-icpapo"
    },
    {
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/PRODUCT_Human-Centered-Design.png",
      name: "Human Centered Design",
      desc: "Gain deep understanding of the principles and experience a number of Human Centred Design (HCD) techniques to apply in their environments.",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/109-epic-human-centered-design"
    },
    {
      img: "https://epic-aus.github.io/epic-innovation/images/pathway/PRODUCT_Product-Manager.png",
      name: "Product Manager",
      desc: "Position and deliver winning products and services; aligning life-cycle with the organisation’s purpose and customers’ needs",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/107-epic-product-manager"
    },
  ];

  const container = document.getElementById("courseContainer");

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "flex flex-col justify-between p-6 bg-white rounded-xl shadow-xl";

    card.innerHTML = `
      <div class="flex flex-col flex-grow space-y-5">
        <img src="${course.img}" width="180" alt="" class="mx-auto mb-5">
        <div class="border border-t-1 border-epicOrange"></div>
          <h5 class="text-3xl font-bold text-left capitalize text-epicBlue">${course.name}</h5>
          <p class="text-left md:text-left leading-relaxed">${course.desc}</p>
        </div>
        <div class="mt-8 mb-2">
          <a href="${course.enrolLink}">
            <button class="bg-epicOrange hover:bg-orange-700 transition-all duration-200 text-white py-3 px-7 rounded-full font-bold uppercase items-center text-xs">
                            Learn more
            </button>
          </a>  
        </div>  
    `;

    container.appendChild(card);
  });
