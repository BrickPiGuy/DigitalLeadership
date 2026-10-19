const slides = [
  {
    section: "WELCOME", title: "Digital leadership", emphasis: "leadership", subtitle: "Girl Scout Troop 44",
    points: [], layout: "cover", art: "cover", tone: "lime",
    notes: "Welcome the troop and invite everyone to think of one way technology helps people work together."
  },
  {
    section: "THE BIG IDEA", title: "What does a digital leader do?", subtitle: "Leadership shows up in what we do online and what we help make possible offline.",
    points: ["Stays safe and treats people with kindness.", "Checks information before sharing it.", "Makes online spaces more inclusive.", "Uses digital tools to support real-world action."], art: "quote", tone: "coral",
    quote: "Use your voice to make the digital world better for someone else.", quoteLabel: "A DIGITAL LEADER'S NORTH STAR",
    notes: "Digital leadership is how we act online and what we help make possible offline."
  },
  {
    section: "THREE LEVELS", title: "Three levels. One shared purpose.", subtitle: "The focus grows from understanding your digital world to leading action with others.",
    points: ["Cadette: investigate the digital world and design a thoughtful community.", "Senior: understand digital advertising and advocate for yourself and others.", "Ambassador: examine digital bias and evaluate community impact.", "All three: create content that supports positive change."], art: "levels", tone: "blue",
    notes: "The three badge guides build on one another. Each invites a different kind of leadership, with safety, care, and positive change at the center."
  },
  {
    section: "CADETTE", title: "Discover. Investigate.", subtitle: "Start by noticing the digital world you move through every day.",
    points: ["Map the devices, apps, and communities in your digital landscape.", "Notice what information you leave behind and how online time affects you.", "Investigate clickbait, stereotypes, bias, and misinformation.", "Ask: What's the source, and what might be missing?"], art: "map", tone: "lime",
    notes: "Use an imaginary feed or headline for discussion; no one needs to share their accounts."
  },
  {
    section: "CADETTE", title: "Design a digital community", subtitle: "Good communities don't happen by accident. They are built with care.",
    points: ["Choose shared interests, goals, and community guidelines.", "Make respect, safety, and inclusion part of the design.", "Create content with a clear action behind it.", "Share your thinking and invite feedback before publishing."], art: "community", tone: "coral",
    notes: "A strong community is intentional about who feels welcome and how people treat one another."
  },
  {
    section: "SENIOR", title: "Look closer at online ads", subtitle: "A promotion may look like a regular post, recommendation, or news story.",
    points: ["Notice ads, sponsored posts, and influencer promotions.", "Ask who created the message, who benefits, and who it targets.", "Look for persuasive techniques and missing viewpoints.", "Compare claims with reliable information."], art: "feed", tone: "sun",
    notes: "Ads can look like ordinary posts, so pause and identify what is being promoted."
  },
  {
    section: "SENIOR", title: "Advocate. Expand your reach.", subtitle: "Use your digital voice to support a cause and the people already doing the work.",
    points: ["Choose a cause that matters to you or your community.", "Support yourself and others with thoughtful, respectful messages.", "Create content that is honest, inclusive, and useful.", "Connect with people or organizations already working on the issue."], art: "steps", tone: "blue",
    notes: "Amplifying credible work can be more helpful than trying to speak for everyone."
  },
  {
    section: "AMBASSADOR", title: "Examine digital bias", subtitle: "Digital systems reflect choices made by people and the data they use.",
    points: ["People's viewpoints can shape the content they create.", "Algorithms use instructions and data to recommend, rank, or flag content.", "Biased code or data can lead to biased results.", "Ask whose experiences are represented, and whose are missing."], art: "bias", tone: "coral",
    notes: "A system can repeat human assumptions even when it looks neutral or automatic."
  },
  {
    section: "AMBASSADOR", title: "Advocate. Evaluate.", subtitle: "Make digital attention a starting point for useful action.",
    points: ["Learn what an affected community says it needs.", "Use digital tools to raise awareness, connect people, and mobilize support.", "Pair online attention with a meaningful next step.", "Review results and adapt your approach."], art: "steps", tone: "lime",
    notes: "Likes can show attention, but they don't by themselves show whether a campaign helped."
  },
  {
    section: "SAFETY & WELL-BEING", title: "Take care of yourself online", subtitle: "Digital leadership starts with choices that protect you and others.",
    points: ["Protect private information and review privacy settings.", "Don't open unexpected links or attachments.", "Manage screen time and notice how online activity affects your mood.", "Block or report harmful content; ask a trusted adult for help."], art: "safety", tone: "blue",
    notes: "We'll discuss situations in general terms; no one needs to share a personal online experience."
  },
  {
    section: "A QUICK PAUSE", title: "Before you share, pause.", subtitle: "Four questions can prevent a rushed post from becoming someone else's problem.",
    points: ["Accurate? Can I verify it with a reliable source?", "Fair? Does it rely on stereotypes or leave out important voices?", "Kind? Could it embarrass or harm someone?", "Useful? Does it help people understand or take a positive step?"], art: "checks", tone: "sun",
    notes: "If you're unsure, wait, check, and talk it over with someone you trust."
  },
  {
    section: "FROM IDEA TO ACTION", title: "Turn a concern into a campaign", subtitle: "Start with the people affected, then choose tools that help move the work forward.",
    points: ["Cause: What problem do you want to address?", "Community: Who is affected, and what do they say would help?", "Audience: Who needs to hear the message?", "Content + action: What will you create, and what can people do next?"], art: "campaign", tone: "coral",
    notes: "Keep the community's needs at the center, not just the message you want to deliver."
  },
  {
    section: "PLAY TO LEARN", title: "Digital detective", emphasis: "detective", subtitle: "Four quick scenarios. Pick the move that protects people and helps good information travel.",
    points: ["Read the situation.", "Choose the best next step.", "See how your score adds up."], layout: "game", art: "game", tone: "lime",
    notes: "Play together: ask for a volunteer to pick an answer, then invite the group to explain their reasoning."
  },
  {
    section: "TROOP 44 CHALLENGE", title: "Make something that moves people", subtitle: "Team up and turn a community issue into a small, thoughtful digital idea.",
    points: ["Choose an issue and one audience.", "Sketch a clear message and one specific next step.", "Decide how to keep it respectful, safe, and inclusive.", "Share your idea with the troop; no real accounts or personal stories needed."], art: "challenge", tone: "blue",
    notes: "Work on paper; don't use real names, personal stories, photos, or publish anything during the activity."
  },
  {
    section: "MEASURE WHAT MATTERS", title: "How will we know it helped?", subtitle: "Impact is more than attention. Look for signs that the work was useful.",
    points: ["Did the audience understand the message?", "Did people take the next step?", "Did the affected community find the effort useful?", "What feedback would help us improve or expand it?"], art: "measure", tone: "sun",
    notes: "Depending on the goal, meaningful results might be a helpful conversation, a volunteer commitment, or attendance at an event."
  },
  {
    section: "YOUR NEXT STEP", title: "Lead with your next step.", subtitle: "A little thoughtfulness, shared widely, can make a real difference.",
    points: ["Notice what you see and share.", "Choose kindness, accuracy, and inclusion.", "Act with others, online and offline.", "Reflect: What's one positive step you can take this week?"], art: "closing", tone: "lime",
    notes: "Invite each Scout to name a general action, without asking them to reveal personal accounts or private information."
  }
];

const gameQuestions = [
  {
    question: "A message says you've won a prize and urges you to open an attachment. What now?",
    answers: ["Open it quickly before the offer expires.", "Don't open it. Check with a trusted adult and report or delete it.", "Forward it to friends to see if it is real."],
    correct: 1,
    feedback: "Right call. Unexpected attachments can be unsafe. Stop and check with a trusted adult."
  },
  {
    question: "A shocking headline appears in your feed. What should you do before sharing?",
    answers: ["Check whether reliable sources confirm the story.", "Share it first so everyone can decide.", "Trust it if lots of people have commented."],
    correct: 0,
    feedback: "Exactly. Look for reliable confirmation before passing a claim along."
  },
  {
    question: "An app asks to use your location, but the feature doesn't need it. What's a smart move?",
    answers: ["Allow it; apps always need every permission.", "Review the setting, limit access, and ask a trusted adult if unsure.", "Post your location publicly instead."],
    correct: 1,
    feedback: "Good thinking. Share only what is needed, and get help reviewing unfamiliar settings."
  },
  {
    question: "Your troop wants to support a community cause. What makes a post more likely to help?",
    answers: ["A clear, verified message with a specific next step.", "As many dramatic claims as possible.", "Likes alone, with no other action."],
    correct: 0,
    feedback: "Yes. Clear information and a useful next step can turn attention into action."
  }
];

const slideList = document.querySelector("#slide-list");
const content = document.querySelector("#slide-content");
const notesPanel = document.querySelector("#presenter-notes");
const notesCopy = document.querySelector("#notes-copy");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const progressTrack = document.querySelector(".progress-track");
let currentSlide = 0;
let notesVisible = false;
let gameIndex = 0;
let gameScore = 0;
let gameAnswered = false;

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function renderArt(slide) {
  if (slide.art === "cover") {
    return `<div class="art-board cover-art" aria-label="Troop 44 digital leadership"><span class="cover-stamp"><strong>GIRL SCOUTS</strong><span>DIGITAL<br>LEADERSHIP</span></span><span class="cover-number" aria-hidden="true">44</span></div>`;
  }
  if (slide.art === "quote") {
    return `<div class="art-board quote-art"><span class="quote-mark" aria-hidden="true">“</span><blockquote>${escapeHTML(slide.quote)}</blockquote><small>${escapeHTML(slide.quoteLabel)}</small></div>`;
  }
  if (slide.art === "levels") {
    return `<div class="art-board"><span class="art-label">A PATH THAT BUILDS</span><div class="steps-art"><div class="step-node"><b>01</b><div><strong>Cadette</strong><small>Explore the digital world</small></div></div><div class="step-node"><b>02</b><div><strong>Senior</strong><small>Advocate for yourself and others</small></div></div><div class="step-node"><b>03</b><div><strong>Ambassador</strong><small>Examine bias and evaluate impact</small></div></div></div></div>`;
  }
  if (slide.art === "feed") {
    return `<div class="art-board"><span class="art-label">A POST IN YOUR FEED</span><div class="feed-post"><div class="feed-meta"><span>brightday.co</span><span class="feed-tag">SPONSORED</span></div><strong>“Your new favorite water bottle!”</strong><p>Who made this post? Is it a personal recommendation, a paid promotion, or both?</p></div><div class="feed-post"><div class="feed-meta"><span>PAUSE & CHECK</span><span>01 / 03</span></div><p>Who benefits from the message? What evidence supports it?</p></div></div>`;
  }
  if (slide.art === "steps" || slide.art === "campaign" || slide.art === "measure") {
    const items = slide.art === "campaign"
      ? [["01", "Cause", "Learn about the issue"], ["02", "Community", "Listen to affected voices"], ["03", "Audience", "Reach the people who can help"], ["04", "Action", "Make the next step clear"]]
      : slide.art === "measure"
        ? [["01", "Understand", "Did the message land?"], ["02", "Participate", "Did people take action?"], ["03", "Listen", "Was it useful to the community?"], ["04", "Improve", "What should change next time?"]]
        : [["01", "Learn", "Find out what the community needs"], ["02", "Create", "Make a useful, inclusive message"], ["03", "Connect", "Invite people to take action"]];
    return `<div class="art-board"><span class="art-label">SMALL STEPS. REAL IMPACT.</span><div class="steps-art">${items.map(([number, title, detail]) => `<div class="step-node"><b>${number}</b><div><strong>${title}</strong><small>${detail}</small></div></div>`).join("")}</div></div>`;
  }
  if (slide.art === "bias") {
    return `<div class="art-board"><span class="art-label">HOW A RECOMMENDATION HAPPENS</span><div class="visual-list"><div class="visual-row"><b>01</b><span>People create a system<small>Choices and assumptions enter the design</small></span></div><div class="visual-row"><b>02</b><span>Data trains the system<small>Missing examples can skew the result</small></span></div><div class="visual-row"><b>03</b><span>Results affect people<small>Ask who is represented and who is not</small></span></div></div></div>`;
  }
  if (slide.art === "safety" || slide.art === "checks") {
    const rows = slide.art === "safety"
      ? [["01", "Protect", "Keep personal details private"], ["02", "Pause", "Check unfamiliar links"], ["03", "Balance", "Notice time and mood"], ["04", "Get help", "Ask a trusted adult"]]
      : [["A", "Accurate?", "Check reliable sources"], ["B", "Fair?", "Look for missing voices"], ["C", "Kind?", "Consider who could be hurt"], ["D", "Useful?", "Give a positive next step"]];
    return `<div class="art-board"><span class="art-label">${slide.art === "safety" ? "YOUR DIGITAL WELL-BEING" : "THE SHARE CHECK"}</span><div class="visual-list">${rows.map(([mark, title, detail]) => `<div class="visual-row"><b>${mark}</b><span><strong>${title}</strong><small>${detail}</small></span></div>`).join("")}</div></div>`;
  }
  if (slide.art === "community" || slide.art === "map" || slide.art === "challenge" || slide.art === "closing") {
    const rows = slide.art === "community"
      ? [["01", "Shared purpose", "What brings people together?"], ["02", "Clear guidelines", "How will people treat one another?"], ["03", "Inclusive design", "Who might feel left out?"]]
      : slide.art === "map"
        ? [["01", "Devices & apps", "What tools do I use?"], ["02", "Digital footprint", "What information do I leave?"], ["03", "My feelings", "How does it affect my day?"]]
        : slide.art === "challenge"
          ? [["01", "Choose", "An issue and one audience"], ["02", "Sketch", "A message and next step"], ["03", "Check", "Safety, respect, inclusion"]]
          : [["01", "Notice", "What you see and share"], ["02", "Choose", "Kindness and accuracy"], ["03", "Act", "Together, online and offline"]];
    return `<div class="art-board"><span class="art-label">${slide.art === "community" ? "COMMUNITY BY DESIGN" : slide.art === "map" ? "MY DIGITAL LANDSCAPE" : slide.art === "challenge" ? "TROOP 44, YOUR TURN" : "MAKE YOUR NEXT MOVE"}</span><div class="visual-list">${rows.map(([mark, title, detail]) => `<div class="visual-row"><b>${mark}</b><span><strong>${title}</strong><small>${detail}</small></span></div>`).join("")}</div></div>`;
  }
  return `<div class="art-board"><span class="art-label">A DIGITAL LEADER</span><div class="split-art"><div class="split-tile"><b>01</b><span><strong>Think clearly</strong>Check what you see</span></div><div class="split-tile"><b>02</b><span><strong>Lead kindly</strong>Make room for others</span></div><div class="split-tile"><b>03</b><span><strong>Act together</strong>Carry ideas into the world</span></div></div></div>`;
}

function renderGame() {
  if (gameIndex >= gameQuestions.length) {
    const message = gameScore === gameQuestions.length
      ? "Sharp work. You spotted every strong next step."
      : gameScore >= 2
        ? "Nice work. Thoughtful pauses help keep people and information safer."
        : "Good practice. A trusted adult can help when a digital situation feels uncertain.";
    return `<div class="game-board game-result"><span class="art-label">DETECTIVE RESULTS</span><strong>${gameScore} / ${gameQuestions.length}</strong><p>${message}</p><button class="game-next" type="button" data-game-restart>Play again</button></div>`;
  }
  const question = gameQuestions[gameIndex];
  return `<div class="game-board"><div class="game-topline"><span>CASE ${String(gameIndex + 1).padStart(2, "0")} / ${gameQuestions.length}</span><span class="game-score">SCORE ${gameScore}</span></div><h2 class="game-question">${escapeHTML(question.question)}</h2><div class="answer-list">${question.answers.map((answer, index) => {
    const stateClass = gameAnswered && index === question.correct ? " is-correct" : gameAnswered && index === gameQuestions[gameIndex].selected ? " is-wrong" : "";
    return `<button class="answer-button${stateClass}" type="button" data-answer="${index}" ${gameAnswered ? "disabled" : ""}><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(answer)}</span></button>`;
  }).join("")}</div><p class="game-feedback" aria-live="polite">${gameAnswered ? escapeHTML(question.feedback) : "Choose your best next step."}</p><div class="game-actions"><span class="game-progress">${gameIndex + 1} of ${gameQuestions.length}</span><button class="game-next" type="button" data-game-next ${gameAnswered ? "" : "disabled"}>${gameIndex === gameQuestions.length - 1 ? "See score" : "Next case"} →</button></div></div>`;
}

function renderSlide(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));
  const slide = slides[currentSlide];
  const points = slide.points.map((point, pointIndex) => `<li><span class="point-index">${String(pointIndex + 1).padStart(2, "0")}</span><span>${escapeHTML(point)}</span></li>`).join("");
  const pointList = points ? `<ul class="points">${points}</ul>` : "";
  const title = slide.emphasis
    ? `${escapeHTML(slide.title.replace(slide.emphasis, ""))}<em>${escapeHTML(slide.emphasis)}</em>`
    : escapeHTML(slide.title);
  content.innerHTML = `<article class="slide-frame" data-layout="${slide.layout || "standard"}" data-tone="${slide.tone}" aria-label="Slide ${currentSlide + 1}: ${escapeHTML(slide.title)}"><div class="slide-copy"><div class="slide-kicker">${escapeHTML(slide.section)} <span>·</span> ${String(currentSlide + 1).padStart(2, "0")}</div><h1>${title}</h1><p class="slide-subtitle">${escapeHTML(slide.subtitle)}</p>${pointList}${currentSlide === 0 ? `<div class="byline"><span>Presented by <strong>Joe Dwyer, PhD</strong></span></div>` : ""}</div><div class="slide-art">${slide.art === "game" ? renderGame() : renderArt(slide)}</div></article>`;
  document.querySelector("#section-label").textContent = slide.section;
  document.querySelector("#slide-counter").textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  document.querySelector("#progress-fill").style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentSlide + 1));
  previousButton.disabled = currentSlide === 0;
  nextButton.innerHTML = currentSlide === slides.length - 1 ? `<span>Restart</span><span aria-hidden="true">↻</span>` : `<span>Next</span><span aria-hidden="true">→</span>`;
  notesCopy.textContent = slide.notes;
  notesPanel.hidden = !notesVisible;
  document.querySelectorAll(".slide-link").forEach((link, linkIndex) => {
    if (linkIndex === currentSlide) link.setAttribute("aria-current", "step");
    else link.removeAttribute("aria-current");
  });
  history.replaceState(null, "", `#slide-${currentSlide + 1}`);
  if (slide.art === "game") bindGame();
}

function bindGame() {
  content.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      if (gameAnswered) return;
      const selected = Number(button.dataset.answer);
      const question = gameQuestions[gameIndex];
      question.selected = selected;
      gameAnswered = true;
      if (selected === question.correct) gameScore += 1;
      renderSlide(currentSlide);
    });
  });
  const nextCase = content.querySelector("[data-game-next]");
  if (nextCase) nextCase.addEventListener("click", () => {
    gameIndex += 1;
    gameAnswered = false;
    renderSlide(currentSlide);
  });
  const restart = content.querySelector("[data-game-restart]");
  if (restart) restart.addEventListener("click", () => {
    gameIndex = 0;
    gameScore = 0;
    gameAnswered = false;
    gameQuestions.forEach((question) => delete question.selected);
    renderSlide(currentSlide);
  });
}

function buildSlideList() {
  slideList.innerHTML = slides.map((slide, index) => `<a class="slide-link" href="#slide-${index + 1}" data-slide-index="${index}"><span class="slide-link-number">${String(index + 1).padStart(2, "0")}</span><span>${escapeHTML(slide.title)}</span></a>`).join("");
  document.querySelector("#rail-count").textContent = `${slides.length} SLIDES`;
  progressTrack.setAttribute("aria-valuemax", String(slides.length));
  slideList.addEventListener("click", (event) => {
    const link = event.target.closest("[data-slide-index]");
    if (!link) return;
    event.preventDefault();
    renderSlide(Number(link.dataset.slideIndex));
  });
}

previousButton.addEventListener("click", () => renderSlide(currentSlide - 1));
nextButton.addEventListener("click", () => {
  if (currentSlide === slides.length - 1) renderSlide(0);
  else renderSlide(currentSlide + 1);
});
document.querySelector("#notes-toggle").addEventListener("click", (event) => {
  notesVisible = !notesVisible;
  event.currentTarget.setAttribute("aria-pressed", String(notesVisible));
  notesPanel.hidden = !notesVisible;
});
document.querySelector("#fullscreen-toggle").addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch {
    document.querySelector("#fullscreen-toggle").title = "Full screen is not available in this browser";
  }
});
document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (["ArrowRight", " ", "PageDown"].includes(event.key)) {
    event.preventDefault();
    renderSlide(Math.min(currentSlide + 1, slides.length - 1));
  } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    renderSlide(Math.max(currentSlide - 1, 0));
  } else if (event.key === "Home") {
    renderSlide(0);
  } else if (event.key === "End") {
    renderSlide(slides.length - 1);
  } else if (event.key.toLowerCase() === "n") {
    notesVisible = !notesVisible;
    document.querySelector("#notes-toggle").setAttribute("aria-pressed", String(notesVisible));
    notesPanel.hidden = !notesVisible;
  }
});
window.addEventListener("hashchange", () => {
  const match = window.location.hash.match(/^#slide-(\d+)$/);
  if (match) renderSlide(Number(match[1]) - 1);
});

buildSlideList();
const initialSlide = Number(window.location.hash.match(/^#slide-(\d+)$/)?.[1] || 1) - 1;
renderSlide(initialSlide);