  // UL-PROBLEM
  const newProblems = 
  ["Everyone’s busy, but outcomes aren’t landing.", "Priorities are blurred, everything’s urgent and nothing’s clear.", "Decisions drag and focus fractures.", "Progress meetings pile up, but confidence in the plan drops."]

  const ulProblem = document.getElementById("ul-problem");
  ulProblem.innerHTML = "";

  newProblems.forEach(problem => {
    const liProblem = document.createElement("li");
    liProblem.innerHTML = problem; // Use innerHTML to support <b> tags or other markup
    ulProblem.appendChild(liProblem);
  });

  // BEST A
  const newBestAs = 
  ["A high-stakes initiative with big visibility and big expectations", "A new product or market entry that must hit the ground running", "A transformation effort needing alignment and momentum from day one", "A cross-functional project where the first 90 days will set the tone"]

  const ulBestA = document.getElementById("best-a-ul");
  ulBestA.innerHTML = "";

  newBestAs.forEach(problem => {
    const liBestA = document.createElement("li");
    liBestA.innerHTML = problem; // Use innerHTML to support <b> tags or other markup
    ulBestA.appendChild(liBestA);
  });

    // BEST B
    const newBestBs = 
    ["Progress has slowed (or stopped) despite everyone’s best efforts", "Energy has drained from the system - and it shows", "Metrics still report, but belief and innovation have left the room", "You need more than process tweaks — you need a reset that reignites purpose and focus"]
  
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
    title: "Surface the blockers. Focus on the bets.",
    listItems: 
    ["Run sharp discovery sessions to unpack where delivery is stalled (or could stall).", "Map blockers, risks, decision gaps, and competing priorities.", "Align leadership on what’s truly worth chasing, and what’s not."],
    text: "We facilitate the hard conversations early, making the bets visible, the risks talk-able, and the plan We’re not observing from the outside — we’re right there in the conversations, building shared understanding with your people."
  },
  {
    title: "Break work down. Sequence and establish guardrails.",
    listItems: 
    ["Break down the work into meaningful, achievable chunks.", "Sequence priorities.", "Define delivery rhythms, decision forums, and escalation paths.", "Agree on how the plan will flex under pressure."],
    text: "This isn’t blueprint consulting — it’s co-design, with your people at the table, shaping what will work in their world."
  },
  {
    title: "Run the work. Build the muscle.",
    listItems: 
    ["Facilitate progression of the work through key events and ceremonies.", "Clear blockers live, not later.", "Test assumptions early to avoid wasted effort.", "Generate momentum through real, early progress, not promises."],
    text: "Your teams don’t just watch us work. They lead the work — with us behind them, beside them, and sometimes in front of them when they need the push."
  },
  {
    title: "Lock in wins, focus on the future.",
    listItems: 
    ["Transfer ownership of the plan, rhythms, and tools to your teams.", "Support leaders to hold focus, steer the work, and make adjustments as reality hits.", "Run a 30-day post-accelerator check-in to review traction, learn, and recalibrate if needed."],
    text: "When we leave, the system keeps moving - and your people know how to keep it alive."
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