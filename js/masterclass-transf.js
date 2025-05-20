// TRANSFORMATION (transf)

// </b>
// </i> 
// <br>


// 
// PAGE TITLE
// 
const hookText = document.getElementById('hook-text');
const newHookTitle = "Transformation stuck in a slide deck? Let's actually start it!";
hookText.innerHTML = newHookTitle;


//
// WHY CONTAINER
//
const whyContainer = document.getElementById('why');
const bulletPoints = [
  "Transformations can feel fuzzy, messy, and overwhelming - especially when you're the one expected to lead it.", 
  "This four week Masterclass shares EPiC's winning formulas - designed by transformation leaders for transformation leaders.", 
  "Whether you're kicking off a transformation or stuck mid-flight, you'll gain practical tools, proven frameworks and expert guidance to help you navigate ambiguity, align people & strategy, and turn complexity into clarity.", 
  "You'll walk out with a clear 90-day transformation roadmap and the confidence to lead it."
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
  "I am a <b>leader, strategist, or change agent</b> been tapped to lead “the transformation” - and I want to do it right.", 
  "I want practical tools, proven frameworks, and the confidence to lead transformation with clarity and intent.", 
  "I've done change before… but this one's bigger, messier, and more political.", 
  "I've got the slide deck - but not the system, alignment, or energy to launch it effectively.", 
  "I want to confidently lead a transformation that aligns people, strategy, and delivery - and keeps momentum going."
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
  "A clear and compelling <b>case for change</b> - backed by real signals and narrative.", 
  "Tools to <b>mobilise the right people</b>, unlock executive sponsorship, and overcome inertia.", 
  "Proven rhythms and rituals to lead <b>alignment sessions, kick-offs, and create feedback loops</b>.", 
  "A transformation <b>leadership toolkit</b> with canvases, guides, and templates.", 
  "A tailored, testable <b>transformation plan</b> for your first 90 days that you can start using immediately.", 
  "Confidence to walk back into your org and <b>lead your shift with purpose</b>."
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
      desc: "Meet your masterclass guide and your peers. You'll complete a quick readiness check, share your story, and ask any burning questions so we can hit the ground running in Week 1."
    },
    {
      number:"Week 1",
      title: "Frame the Why",
      desc: "Craft a compelling case for change that connects strategy, people, and purpose. Use stories, signals, and system pain points to spark curiosity and encourage others to lean in. Get clear on what success looks like and how to communicate it with impact."
    },
    {
        number:"Week 2",
        title: "Build Your Coalition",
        desc: "Map power, resistance, and influence - then design a coalition of change champions that can actually move the needle. It's not just about exec buy-in - it's also about injecting the right energy in the right places at the right time. Understand what good leadership looks like and how to ensure it."
      },
      {
        number:"Week 3",
        title: "Your First 90 Days",
        desc: "Rubber, meet road. Build your 90-day roadmap based on enterprise business agility frameworks. Prioritise early wins, plan for what can wait, and learn how to generate momentum that's measurable and meaningful."
      },
      {
        number:"Week 4",
        title: "Build the Change Engine",
        desc: "Design the rhythms, roles, and rituals that sustain transformation. Learn how to lead the work and the people. Create learning loops to manage course corrections. Understand what it takes to be a transformational leader - after all, you are key to success!"
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
    "What did you light up?", 
    "What's catching on?", 
    "What's still dormant that might require a re-think?"
  ],
  second: "Because when we share, we inspire."
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
const newCtaContent = "When you're ready to make the shift, we're here to help you with our <b>EPiC Transformation Accelerator</b> - focused on enabling leaders, aligning systems, and sustaining impact across your whole organisation.<br><br> <i>The Masterclass starts the shift. The Accelerator makes it stick.</i>";
ctaText.innerHTML = newCtaContent;