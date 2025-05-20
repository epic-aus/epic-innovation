// ORGANISATION DESIGN (with SysCAP)

// <b></b>
// <i></i> 
// <br>


// 
// PAGE TITLE
// 
const hookText = document.getElementById('hook-text');
const newHookTitle = "Organise around outcomes, <br> not org charts";
hookText.innerHTML = newHookTitle;


//
// WHY CONTAINER
//
const whyContainer = document.getElementById('why');
const bulletPoints = [
  "Organisations, Departments and Teams all change shape dependant upon the work",
  "Don't wait and go through major re-org's, learn how to right size your organisation inside out to enbaling efficiencies, speed and quality",
  "In collaboration with Hofmeyr, this Masterclass introduces the  <b>SysCAP™ Approach</b> - a practical, best-in-class, step-by-step approach to organisational design.",
  "Over four weeks, you'll learn how to assess, redesign, and implement structures and ways of working that align value delivery, strategic goals, and enterprise agility.",
  "You'll build confidence to lead redesign conversations and guide change utilising tried-and-tested methods and tools."
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
  "Our strategy has evolved, but our structure hasn't - it's holding us back - we need a future-fit structure.",
  "I'm a leader, strategist, or coach constantly working around structural friction.",
  "I'm preparing for a restructure or scale-up and I need ready-to-use templates and a method I can trust.",
  "I've done OD before, but I want a repeatable, industry-leading, human-centered approach.",
  "I've tried to tweak ways of working - now I'm ready to fix the system.",
  "I want to grow my confidence in shaping structures and leading change."
];
const ul = document.getElementById("problems");
newProblems.forEach(problem => {
  const li = document.createElement("li");
  li.textContent = problem;
  ul.appendChild(li);
});


//
// WHAT CONTAINER
//
const whatContainer = document.getElementById('what');
const whatbulletPoints = [
"A clear understanding of the <b>SysCAP™ Approach</b>", 
"Tools to assess structure, flow, and role alignment in your current system", 
"Techniques to translate <b>strategic goals into structural design principles</b> ", 
"A draft <b>future-state design</b>  that fits your strategy, scale, and speed", 
"Templates and guidance to <b>facilitate meaningful design conversations</b>", 
"A practical organisational <b>design playbook</b> to bring change to life"
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
      number:"Before",
      title: "Get ready for the journey ahead",
      desc: "You'll meet your peers, share your context, and ask any burning questions so we can hit the ground running on Week 1!"
    },
    {
      number:"Week 1",
      title: "Taking Design Seriouslys",
      desc: "We'll explore why many structures don't support organisational strategy - and what to do about it. You'll define your drivers for change, clarify your role in the design process, and explore the mindset shifts needed to lead through  complexity."
    },
    {
      number:"Week 2",
      title: "From Strategy to Structure",
      desc: "We move from intention to design. You'll learn how to convert strategy (and emergent technology shifts) into design principles, define your “must-haves” and “no-go zones”, and begin sketching the kind of structure(s) your organisation actually needs."
    },    
    {
      number:"Week 3",
      title: "X-Ray Your Org",
      desc: "It's time to diagnose what's under the surface. You'll use structured tools and techniques to capture the current state, mapping value flows, capability hotspots, and alignment breakdowns - surfacing where your current system and ways of working are slowing you down, and where redesign has the biggest payoff."
    }, 
    {
      number:"Week 4",
      title: "Design The Future",
      desc: "You'll co-design a future-state structure that's tailored to your scale and strategy, get feedback from peers and experts, and start shaping a plan to test and evolve your design in the real world."
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
  first: "You'll get a nudge from us (and your peers) to share:",
  listItems: [
    "What did you test?",
    "What shifted?",
    "What's still stuck"
  ],
  second: "Because structure only gets better when it <i>moves</i>."
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
const newCtaContent = `
  Want help to make your new design a reality? Let us help you take the next step with <b>EPiC's Organisational Design Accelerator</b> - a hands-on program to validate, scale, and embed your future-state operating model.<br><br>
  <i>The Masterclass gives you the mindset and the map. The Accelerator brings it to life.</i>
`;
ctaText.innerHTML = newCtaContent;