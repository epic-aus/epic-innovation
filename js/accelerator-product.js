  // UL-PROBLEM
  const newProblems = 
  ["The roadmap grows, but confidence shrinks.", "Discovery turns into workshops, not decisions.", "Delivery teams are busy, but not moving the metrics that matter.", "Leaders struggle to say “no” or “not yet”, and everything becomes priority one."]

  const ulProblem = document.getElementById("ul-problem");
  ulProblem.innerHTML = "";

  newProblems.forEach(problem => {
    const liProblem = document.createElement("li");
    liProblem.innerHTML = problem; // Use innerHTML to support <b> tags or other markup
    ulProblem.appendChild(liProblem);
  });

  // BEST A
  const newBestAs = 
  ["New product, new market, or new feature set - and you can't afford to get it wrong.", "Teams aligned on ambition but lacking shared clarity on outcomes, bets, and success signals.", "Leadership wants confidence in decisions and clear checkpoints for course correction."]

  const ulBestA = document.getElementById("best-a-ul");
  ulBestA.innerHTML = "";

  newBestAs.forEach(problem => {
    const liBestA = document.createElement("li");
    liBestA.innerHTML = problem; // Use innerHTML to support <b> tags or other markup
    ulBestA.appendChild(liBestA);
  });

    // BEST B
    const newBestBs = 
    ["Product is live, but focus is scattered and impact unclear.", "Roadmaps full - even bloated - but traction low. Too much in flight, not enough delivering.", "Endless prioritisation debates with no real framework. Progress has become performance art."]
  
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
    title: "Sharpen the bets. Align the team.",
    listItems: 
    ["Facilitate sharp product discovery to expose assumptions, competing priorities, and blockers.", "Align leaders on what’s worth chasing, and what’s not."],
    text: "We facilitate the hard conversations early,  making the bets visible, the risks talk-able, and the plan believable."
  },
  {
    title: "Design the next right moves.",
    listItems: 
    ["Break down the bets into sequenced work.", "Prioritise the riskiest moves first.", "Define how decisions will get made, how progress gets measured, and where signals will come from."],
    text: "We shape a plan your teams can actually run with,  not one that stays on a slide."
  },
  {
    title: "Make the calls. Build momentum.",
    listItems: 
    ["Test early, learn fast.", "Facilitate decision huddles and unblock momentum through the work.", "Get teams focused on what matters now, not stuck in planning loops."],
    text: "We get into the work with you,  unblocking decisions and building belief as we go."
  },
  {
    title: "Lock in focus. Keep things sharp.",
    listItems: 
    ["Transfer ownership of the plan, rhythms, and learning loops to your teams.", "Support leaders to hold focus, adapt fast, and steer the product forward.", "Run a 30-day check-in to review traction and recalibrate."],
    text: "Our goal isn’t dependency, it’s capability. Your teams leave stronger, ready to lead your product into the future."
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