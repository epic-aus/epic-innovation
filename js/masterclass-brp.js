// Bootcamp - BRP (BRP)

// </b>
// </i> 
// <br>


// 
// PAGE TITLE
// 
const hookText = document.getElementById('hook-text');
const newHookTitle = "Tips and Tricks From the Biggest & Best Quarterly Planning Events ON THE PLANET";
hookText.innerHTML = newHookTitle;


//
// WHY CONTAINER
//
const whyContainer = document.getElementById('why');
const bulletPoints = [
    "Big Room Planning can be powerful - or painful. Either way, it's a massive investment time and $$$ and you want to get it right.",
    "This 3-day intensive Masterclass is for organisations ready to sharpen their planning game fast by learning how to run large-scale events that actually work.",
    "You'll walk away knowing how to design, promote, prepare, facilitate, and follow up on Big Room Planning (PI Planning) sessions - with confidence.",
    "You'll learn practical techniques from people who've run some of the largest BRP events on the planet."
    ];
bulletPoints.forEach(text => {
  const div = document.createElement('div');
  div.className = "flex p-6 text-left mx-auto space-x-6";
  const emoji = document.createElement('div');
  emoji.className = "text-2xl mb-5";
  emoji.textContent = "✅";
  const p = document.createElement('p');
  p.className = "text-epicBlue";
  p.innerHTML = text;
  div.appendChild(emoji);
  div.appendChild(p);
  whyContainer.appendChild(div);
});


//
// PROBLEM CONTAINER
//
const newProblems = [
    "I'm a <b>Head of Delivery / Product, Delivery Leader, Product Manager / Owner, or Coach</b> who wants to create strategically aligned plans that actually work - not just look good on paper",
    "I need to align multiple squads, tribes, or programs - fast, clearly, and without drama.", "I'm planning my first Big Room Planning event and want to get it right",
    "I've run one before... and I still having planning PTSD.",
    "I'm tired of planning sessions that confuse more than they clarify - I want to bring focus and flow.",
    "Our execs want visibility, our teams want purpose - I want to make both happen. Regularly."
];
const ul = document.getElementById("problems");
newProblems.forEach(problem => {
  const li = document.createElement("li");
  li.innerHTML = problem;
  ul.appendChild(li);
});


//
// WHAT CONTAINER
//
const whatContainer = document.getElementById('what');
const whatbulletPoints = [
    "Lots of simulations and activities to get hands-on practice designing, prepping and running every part of a Big Room Planning event.",
    "Smart ways to use AI to speed up prep, reduce admin, and coach others to be ready - i.e. make your life easier",
    "A complete end-to-end playbook - including templates, timelines, checklists, and tools tailored to your organisation",
    "A roll-out plan to embed BRP in your organisation - with strategies to build momentum, coalitions, and credibility",
    "The confidence and capability to facilitate and lead the room like a pro (not just survive it)"
    ];
whatbulletPoints.forEach(text => {
  const div = document.createElement('div');
  div.className = "flex p-6 text-left space-x-6";
  const emoji = document.createElement('div');
  emoji.className = "text-2xl mb-5";
  emoji.textContent = "✅";
  const p = document.createElement('p');
  p.className = "text-epicBlue";
  p.innerHTML = text;
  div.appendChild(emoji);
  div.appendChild(p);
  whatContainer.appendChild(div);
});


//
// WEEK BREAKDOWN CONTAINER
//
const weekData = [
    {
      number:"Day 1",
      title: "Become a believer",
      desc: "Unpack what makes Big Room Planning powerful - and what causes it to flop. You'll learn how to align the purpose, structure, and timing of your event to your unique organisational rhythm. We'll help you map your context, define success, and begin shaping the event your business actually needs."
    },
    {
      number:"Day 2",
      title: "Setup for success",
      desc: "This is where things get real. You'll build the backlogs, templates, and tools for your event - including prioritisation model, decision frameworks, boards/visualisations, dependency & risk management, capacity constraints and supporting toolsets. You'll design how your room will run, from pre-work to post-it storm, without ever losing the thread."
    },
    {
      number:"Day 3",
      title: "Own The Room",
      desc: "Now it's your show. You'll walk through your event end-to-end with live feedback and coaching. We'll build your confidence to run the session, handle curveballs, and drive outcomes. You'll also create your follow-up plan - rituals, playback strategies, and stakeholder comms to keep the momentum alive."
    },           
  ];
  const container = document.getElementById("week-container");
  weekData.forEach((week) => {
    const weekEl = document.createElement("div");
    weekEl.className = "py-8 border-b";
    weekEl.innerHTML = `
      <h4 class="text-xl font-bold text-epicOrange mb-2" id="week-number">${week.number}</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-2">
        <h4 class="input-card-title text-epicBlue" id="week-title">${week.title}</h4>
        <div class="md:text-lg mt-2 md:mt-0">
          <p id="week-desc">${week.desc}</p>
        </div>
      </div>
    `;
    container.appendChild(weekEl);
  });


//
// 30-DAY CONTENT
//
const firstText = document.getElementById('first-text');
const list = document.getElementById('list');
const secondText = document.getElementById('second-text');
const content = {
  first: "You'll get a nudge from us (and your peers) to share",
  listItems: [
    "What you've tried",
    "What's working (and what's not)",
    "What's next in making this part of your organisation's DNA"
  ],
  second: "Let's learn from each other an maintain momentum"
};

firstText.innerHTML = content.first;
list.innerHTML = "";
content.listItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});
secondText.innerHTML = content.second;


// 
// CTA CONTENT
//
const ctaText = document.getElementById('cta-text');
const newCtaContent = "Need help to prepare and (co)facilitate your BRP? We love this stuff! Let <b>EPiC's BRP Accelerator</b> help you make it happen - a hands-on, three month partnership where we roll up our sleeves and help you design, prep, run and embed BRP into your organisation's DNA. We right there every step of the way - no stress, just momentum.";
ctaText.innerHTML = newCtaContent;