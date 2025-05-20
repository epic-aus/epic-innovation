// Commercial Accumen (COM-ACCU)

// </b>
// </i> 
// <br>


// 
// PAGE TITLE
// 
const hookText = document.getElementById('hook-text');
const newHookTitle = "Make better bets, impress everyone, and sleep well at night";
hookText.innerHTML = newHookTitle;


//
// WHY CONTAINER
//
const whyContainer = document.getElementById('why');
const bulletPoints = [
    "Product leadership isn’t just about building the right thing - it’s about making smart bets that drive commercial success.",
    "Yet financial acumen is often missing from product conversations. Roadmaps get built without clear ROI, and product decisions are made without a strong financial lens.",
    "This four-week Masterclass helps product leaders build the commercial muscle to shape strategy, quantify impact, and make confident, value-driven decisions.",
    "You’ll learn how to forecast ROI, align teams around business outcomes, and apply a commercial lens to everything from vision to release planning.",
    "With EPiC’s practical frameworks and playbooks, you’ll leave ready to influence stakeholders,  make smarter bets, and lead product strategy that actually moves the bottom line.",
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
    "I'm a product owner, product manager or leader who wants to move beyond backlog management and connect day-to-day work to strategy, customer value, and commercial results.",
    "I want to lead the business conversations, not just react to them.",
    "I'm stuck in an endless loop of discovery or delivery - but not both in sync.",
    "I want to move beyond outputs and velocity, and focus on outcomes that actually matter.",
    "I'm new to product leadership and want to hit the ground running with the right tools, mindset, and commercial focus.",
    "I'm ready to move from product <i>operator</i> to product <i>strategist</i> — and want the confidence to own the role.",
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
    "A clear, repeatable approach to crafting product vision and strategy",
    "Tools for value proposition design, discovery planning, and stakeholder alignment",
    "Practical skills to run discovery and delivery with purpose and focus",
    "Confidence to lead product conversations that influence business decisions and investments",
    "A practical, ready-to-use playbook that you can put to work immediately -at any stage of the product lifecycle",
    "The financial know-how to model ROI, cost products, and show impact to the organisations bottom line"
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
      desc: "Meet your peers, share your context, and ask any burning questions so we can hit the ground running on Week 1! You'll also get a short pre-class mission to set you up for the first class."
    },
    {
      number:"Week 1",
      title: "Think Like a Commercial Strategist",
      desc: "Shift your mindset from delivery to value. Craft a product vision that’s aligned to business strategy, market opportunity, and customer outcomes. Learn to frame value in commercial terms - anchored in real business metrics - and start building a compelling business case."
    },
    {
        number:"Week 2",
        title: "Model the Money",
        desc: "Get confident with product financials. Learn to estimate costs, forecast ROI, and back your product decisions with smart, business-savvy models - even when data is incomplete.  Take your business case to the next level"
      },
      {
        number:"Week 3",
        title: "Validate with Commercial Confidence",
        desc: "Test what matters. Apply lean discovery techniques to validate assumptions, reduce risk, and link customer signals to real commercial impact. Learn to frame hypotheses and design experiments that confirm  the commercial viability - not just the usability."
      },
      {
        number:"Week 4",
        title: "Track, Tell & Tune Value",
        desc: "Connect the dots between product creation and business results. Build dashboards, OKRs, and value trackers to measure what matters. Learn how to communicate your product’s story - from concept to commercial impact - and keep stakeholders aligned along the way."
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
    "What landed?",
    "What's your next commercial bet?"
  ],
  second: "Because there's a lot we can learn from each other when stepping out into a complex world."
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
const newCtaContent = "Need help levelling up your product strategy across a whole portfolio or tribe? Let us help you with with our Product Strategy Accelerator - focused on alignment, value creation, and stronger leadership habits across the organisation.<br><br> <i>The Masterclass sharpens the product leader. The Accelerator sharpens the product ecosystem.</i>";
ctaText.innerHTML = newCtaContent;