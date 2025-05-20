// Level Up Your Big Planning Game (BPG)

// <b></b>
// <i></i> 
// <br>


// 
// PAGE TITLE
// 
const hookText = document.getElementById('hook-text');
const newHookTitle = "Tame the Chaos. Make Planning POP";
hookText.innerHTML = newHookTitle;


//
// WHY CONTAINER
//
const whyContainer = document.getElementById('why');
const bulletPoints = [
"<b>Why do some companies nail planning and others are underwhelming.</b>",
"<b>Learn how Australia best companies, prepare, facilitate and deliver the planning events full of punch and gusto.</b>",
"This high-impact, practical Masterclass is for delivery and product leaders who are done with chaotic planning, shifting priorities, and delivery that never quite lands.",
"Learn how to connect strategy to execution, build planning rhythms that stick, and lead with clarity.",
"Align teams, not just timelines, and run planning events that people <i>actually</i> want to attend.",
"You'll walk away with a practical, end-to-end planning framework tailored to your organisation, using proven enterprise techniques inspired by SAFe, Nexus, and Scrum@Scale."
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
  "I'm a <b>senior leader, head of delivery, or enterprise coach</b> who's done with planning chaos and I'm ready to lead with clarity.",
  "Different parts of the business plan differently, so aligning across the organisation feels like herding cats.",
  "It's nearly impossible to get a clear, simple view of who's working on what - or why.",
  "Our planning meetings don't create alignment - we need a practical planning system.",
  "Leaders can't get a clear line of site into delivery - we need a better way to surface the signals that matter.",
  "I want to be the leader who connects strategy to execution and finally makes planning feel… purposeful."
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
  "Clarity on what's not working in your planning today - and practical ways to fix it", 
  "Confidence to design and run effective planning events at any scale", 
  "Skills to lead conversations to align teams around clear, shared priorities and create real momentum", 
  "A repeatable planning system tailored to your structure, culture, and delivery rhythm that makes delivery more predictable", 
  "A practical planning playbook with templates, tools and tips you'll actually use"
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
      desc: "Meet your peers, share your pain, set expectations and ask any burning questions so we can hit the ground running on Week 1!"
    },
    {
      number:"Week 1",
      title: "Why is planning so hard to get right<br>(until now of course)",
      desc: "Unpack why planning feels chaotic in modern organisations. Name the patterns, visualise your system and challenge assumptions about what \"good\" planning (and leadership!) really looks like."
    },
    {
      number:"Week 2",
      title: "Design the big moments that matter",
      desc: "Learn how to design enterprise-wide planning events including Portfolio Prioritisation, Big Room Planning, and Team Planning. Explore formats, timings, and tech stacks as you draft a fit-for-purpose planning system for your enterprise with a rhythm that makes sense (and maybe cull a few meeting that don't matter)."
    },    
    {
      number:"Week 3",
      title: "And make those moments pop",
      desc: "Bring your BIG planning system to life. Learn about micro-practices that ensure enthusiastic teams turn up prepared! Plan how you will use your toolsets to get the visibility and insights that make everyone's life easier."
    }, 
    {
      number:"Week 4",
      title: "Become the (Planning) leader you were born to be",
      desc: "Learn what it takes to facilitate great events. This isn't about one-off planning workshops - it's about creating an organic planning system you can roll out, grow, and own. Finalise your playbook, craft your rollout story, and leave ready to lead clarity at scale."
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
    "What you've tested",
    "What's flowing",
    "What still feels like a dumpster fire"
  ],
  second: "Let's share war stories, celebrate wins, and keep that momentum."
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
const newCtaContent = "Need support to make your Planning System a reality? Let us help you take the next step with <b>EPiC's Planning Accelerator</b> - a hands-on three month partnership where we help you design, run and embed effective planning rhythms across your (new) system. <b>Instead of you jumping into our world, we jump into yours</b>.";
ctaText.innerHTML = newCtaContent;