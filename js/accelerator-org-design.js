  // UL-PROBLEM
  const newProblems = 
  ["Decisions stall.", "Work falls through the cracks - or overlaps.", "Skills and subject matter experts are spread too thin - and not where they're going to add most value.", "Leaders spend more time untangling the system than leading it."]

  const ulProblem = document.getElementById("ul-problem");
  ulProblem.innerHTML = "";

  newProblems.forEach(problem => {
    const liProblem = document.createElement("li");
    liProblem.innerHTML = problem; // Use innerHTML to support <b> tags or other markup
    ulProblem.appendChild(liProblem);
  });

  // BEST A
  const newBestAs = 
  ["Growth is outpacing your current structure and capability stack.", "You need to right-size roles, skills, and leadership to meet demand.", "Leadership is ready to rethink the shape of the system, not just patch the problems."]

  const ulBestA = document.getElementById("best-a-ul");
  ulBestA.innerHTML = "";

  newBestAs.forEach(problem => {
    const liBestA = document.createElement("li");
    liBestA.innerHTML = problem; // Use innerHTML to support <b> tags or other markup
    ulBestA.appendChild(liBestA);
  });

    // BEST B
    const newBestBs = 
    ["Value streams tangled, priorities competing, decisions stuck.", "Too many handoffs, unclear ownership, and duplicated effort.", "Strategy has shifted, but the structure hasn't caught up."]
  
    const ulBestB = document.getElementById("best-b-ul");
    ulBestB.innerHTML = "";
  
    newBestBs.forEach(problem => {
      const liBestB = document.createElement("li");
      liBestB.innerHTML = problem; // Use innerHTML to support <b> tags or other markup
      ulBestB.appendChild(liBestB);
    });

// PANEL CONTENT
const panelData = [
  {
    title: "See where the shape is slowing the flow.",
    listItems: 
    ["Define the product mission, outcomes, and customer problem.", "Surface assumptions, risks, and unknowns.", "Align leadership, product, and delivery on what success looks like."],
    text: "We facilitate the hard conversations and co-create a vision that inspires."
  },
  {
    title: "Design the next right moves.",
    listItems: 
    ["Map first moves and success signals (launch or reset)", "Prioritise opportunities using proven tools.", "Connect strategy to discovery, delivery, and learning"],
    text: "We shape a plan that your teams can actually run with,  not one that stays on a slide."
  },  
  {
    title: "Make the calls. Build momentum.",
    listItems: 
    ["Facilitate prioritisation huddles and decision forums.", "Run lean experiments to test bets and direction.", "Coach leaders and teams through the hard calls."],
    text: "We get into the work with you, unblocking decisions and building belief as we go."
  },
  {
    title: "Lock in focus. Keep things sharp.",
    listItems: 
    ["Transfer rhythms, tools, and success signals into your team’s hands.", "Equip leaders to steer and adapt.", "30-day review to reflect, learn, and reset if needed."],
    text: "Our goal isn’t dependency, it’s capability. Your teams leave stronger, ready to lead your organisation into the future."
  },      
];

// Loop through each content block and populate it
panelData.forEach((panel, index) => {
  const i = index + 1; // To match 'one', 'two', etc.

  // Title
  document.getElementById(`panelbox-title-${i}`).innerHTML = panel.title;

  // UL items
  const ul = document.getElementById(`panelbox-ul-${i}`);
  ul.innerHTML = ""; // Clear existing
  panel.listItems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
  });

  // Text
  document.getElementById(`panelbox-text-${i}`).innerHTML = panel.text;
});