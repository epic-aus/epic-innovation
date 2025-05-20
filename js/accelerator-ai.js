  // UL-PROBLEM
  const newProblems = 
["Where do we actually start?", "Why are our pilots showing promise but nothing's scaling?", "We've got tech everywhere, but not the skills?", "Everyone seems excited, but why is there no plan?"]

  const ulProblem = document.getElementById("ul-problem");
  ulProblem.innerHTML = "";

  newProblems.forEach(problem => {
    const liProblem = document.createElement("li");
    liProblem.innerHTML = problem; // Use innerHTML to support <b> tags or other markup
    ulProblem.appendChild(liProblem);
  });

  // BEST A
  const newBestAs = 
["We're ready to explore, but we don't want chaos.", "We need safe, structured experimentation with real business value.", "We have curious minds ready to see what will unlock value for our organisation."]

  const ulBestA = document.getElementById("best-a-ul");
  ulBestA.innerHTML = "";

  newBestAs.forEach(problem => {
    const liBestA = document.createElement("li");
    liBestA.innerHTML = problem; // Use innerHTML to support <b> tags or other markup
    ulBestA.appendChild(liBestA);
  });

    // BEST B
    const newBestBs = 
["We've done (many) pilots and now it's time to make this the norm.", "We want governance, confidence and skills across the business.", "We need to continue looking ahead to ensure we're ready to integrate new technologies swiftly."]
  
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
    title: "Align on purpose. Unlock direction.",
    listItems: 
["Define the AI ambition, use-case appetite, and value targets.", "Spot noise, blockers, and uncertainty across teams.", "Identify where AI can create leverage (and where it shouldn’t).", "Set smart guardrails around ethics, risk, and governance."],
    text: "We help you get clear on what AI should do...and what it definitely shouldn’t."
  },
  {
    title: "Build a practical, people-led approach.",
    listItems: 
["Prioritise pilots by real value, not hype.", "Map the path from idea to working proof.", "Embed cross-functional alignment: strategy, product, tech, ops.", "Re-invent processes and design what capability uplifts are required."],
    text: "We shape an AI approach your people can actually run with,  not just one that looks good on a slide."
  },
  {
    title: "Test fast. Prove impact. Build belief.",
    listItems: 
["Launch real-world pilots with embedded EPiC support.", "Facilitate fast-cycle learning and decision-making.", "Capture early wins and learn from what doesn’t work.", "Coach teams on navigating ambiguity and momentum."],
    text: "We build traction quickly so belief, capability and value grow together."
  },
  {
    title: "Take it wide, make it real.",
    listItems: 
["Expand successful pilots into broader use cases tied to strategic outcomes.", "Enable teams to embed AI into real workflows.", "Build repeatable playbooks and operating rhythms.", "Create internal champions and scale governance without slowing down."],
    text: "We help you scale what works."
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