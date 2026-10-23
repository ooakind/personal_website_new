// --- Site content (Hyojin Ju) ---
// Everything shown on the website is defined here. Edit this file to update content.

export const profile = {
  name: "Hyojin Ju",
  pronouns: "she/her",
  role: "Ph.D. Student",
  department: "Computer Science and Engineering",
  lab: "Human-centered Intelligent Systems Lab (HIS Lab)",
  labUrl: "https://his-lab.org",
  institution: "Dept. of Computer Science and Engineering, POSTECH",
  institutionUrl: "https://cse.postech.ac.kr/csepostech/index.do",
  location: "Pohang, South Korea",
  email: "hyojin.ju@postech.ac.kr",
  website: "hyojinju.com",
  avatar: "/profile.jpg",
  // Optional portrait shown beside the About intro (4:5 works best). Leave null to hide.
  photo: null,
  // The long-term research question, shown as the opening line of About.
  question: "Could highly intelligent AI systems reduce social conflicts by mitigating the inevitable human errors behind them?",
  bio: (
    <>
      <p>
        That is the long-term question I keep asking while exploring human-centered intelligent systems.
        I study what kinds of AI systems would be effective in addressing various real-life social challenges,
        and how to design and develop such systems.
      </p>
      <p>
        My current research interests include <strong>personal AI assistants</strong>, <strong>AI agents that understand human cognitive and emotional processes</strong>, and <strong>personality and social psychology</strong>.
      </p>
    </>
  ),
  social: {
    scholar: "https://scholar.google.com/citations?user=TTwSuscAAAAJ&hl=ko",
    github: "https://github.com/ooakind",
    linkedin: "https://www.linkedin.com/in/hyojinju"
  }
};

// News. `image` is optional: when present it is shown as a thumbnail beside the item.
// `video` (optional) marks the thumbnail with a play badge; `link` is where the thumbnail goes.
export const news = [
  {
    date: "Oct 2026",
    text: "I’ll be at UIST 2026 presenting our demo, [“Step into My Agent’s Shoes: Augmenting Processual Experiences via Interactive Narrative Game Generation”](https://www.youtube.com/watch?v=vYZpalVKnFg)! Thrilled to discuss how we can reclaim the experience of the process in a playful, interactive way when we delegate tasks to AI agents.",
    image: "/research_images/agents-shoes.jpg",
    link: "https://www.youtube.com/watch?v=vYZpalVKnFg",
    video: true
  },
  { date: "Jan 2026", text: "Won POSTECHIAN Fellowship (Emerging Scholars Track), recognizing early-stage PhD students with strong potential!" },
  { date: "Dec 2025", text: "'EmoSync' won BK21 CSE Best Paper Award!" },
  { date: "June 2025", text: "Featured in a [live radio interview on KBS Pohang](https://program.kbs.co.kr/1radio/local/morningpoh/pc/board.html?smenu=154e2b&bbs_loc=R2006-0309-03-121830,read,,2760,1918681) regarding our EmoSync research." },
  {
    date: "Apr 2025",
    text: "'EmoSync' won Popular Choice Honorable Mention Award (Top 5%) at CHI '25 Interactivity!",
    image: "/photos/chi2025.jpg",
    link: "https://programs.sigchi.org/chi/2025/program/content/194724"
  },
  {
    date: "Jan 2025",
    text: "My first, first-authored paper ['Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression'](https://dl.acm.org/doi/10.1145/3706598.3714122) (a.k.a. 'EmoSync') accepted to CHI 2025!",
    image: "/research_images/emosync.jpg",
    link: "https://dl.acm.org/doi/10.1145/3706598.3714122"
  }
];

export const experience = [
  {
    role: "Integrated MS/Ph.D. Program (Advisor: [Prof. Inseok Hwang](https://www.inseokhwang.com/))",
    org: "Human-centered Intelligent Systems Lab (HIS Lab), POSTECH",
    location: "Pohang, South Korea",
    dates: "Feb 2023 - Present",
    desc: "Conducting research on human-centered intelligent systems, focusing on AI agents that understand human cognitive and emotional processes.",
  }
];

// Each publication has a stable `id` so research themes can point at it.
// `short` (optional) is the compact name used in the Research Themes list.
export const publications = [
  {
    year: 2026,
    items: [
      {
        id: "agents-shoes-uist26",
        short: "Step into My Agent’s Shoes",
        title: "Step into My Agent’s Shoes: Augmenting Processual Experiences via Interactive Narrative Game Generation",
        authors: "{Hyojin Ju, Jaewoong Jang}, Inseok Hwang",
        venue: "UIST 2026 (Demo)",
        type: "adjunct",
        award: null,
        image: "/research_images/agents-shoes.jpg",
        links: {
          paper: "https://doi.org/10.1145/3830397.3842463",
          video: "https://www.youtube.com/watch?v=vYZpalVKnFg"
        }
      },
    ]
  },
  {
    year: 2025,
    items: [
      {
        id: "emosync-chi25",
        short: "EmoSync: Toward Affective Empathy via Personalized Analogy Generation",
        title: "Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression",
        authors: "Hyojin Ju, Jungeun Lee, Seungwon Yang, Jungseul Ok, Inseok Hwang",
        venue: "CHI 2025",
        type: "paper",
        award: null,
        image: "/research_images/emosync.jpg",
        links: {
          paper: "https://dl.acm.org/doi/10.1145/3706598.3714122",
          video: "https://www.youtube.com/watch?v=sT1gxhITWyU"
        }
      },
      {
        id: "emosync-interactivity25",
        short: "EmoSync Interactivity · Popular Choice Honorable Mention",
        title: "Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression",
        authors: "Hyojin Ju, Jungeun Lee, Seungwon Yang, Jungseul Ok, Inseok Hwang",
        venue: "CHI Interactivity '25",
        type: "adjunct",
        award: "Popular Choice Honorable Mention Award (Top 5%)",
        image: "/research_images/emosync-interactivity.jpg",
        links: {
          link: "https://programs.sigchi.org/chi/2025/program/content/194724"
        }
      }
    ]
  },
  {
    year: 2022,
    items: [
      {
        id: "sleepguru-uist22",
        short: "SleepGuru: Personalized Sleep Planning System",
        title: "SleepGuru: Personalized Sleep Planning System for Real-life Actionability and Negotiability",
        authors: "Jungeun Lee, Sungnam Kim, Minki Cheon, Hyojin Ju, JaeEun Lee, Inseok Hwang",
        venue: "UIST 2022",
        type: "paper",
        image: "/research_images/sleepguru.jpg",
        links: {
          paper: "https://dl.acm.org/doi/10.1145/3526113.3545709",
          video: "https://www.youtube.com/watch?v=7NrRZHVA1eI"
        }
      },
      {
        id: "sleepguru-demo-uist22",
        short: "Demonstrating SleepGuru",
        title: "Demonstrating SleepGuru: Personalized Sleep Planning System for Real-life Actionability and Negotiability",
        authors: "Jungeun Lee, Hyojin Ju, Sungnam Kim, Minki Cheon, JaeEun Lee, Inseok Hwang",
        venue: "UIST 2022 (Demo)",
        type: "adjunct",
        image: "/research_images/sleepguru-demo.jpg",
        links: {
          paper: "https://dl.acm.org/doi/10.1145/3526114.3558664"
        }
      }
    ]
  }
];

// Research themes shown on About. Each theme has an objective `title`, a personal
// `comment` (the "why I care" that does not fit in a paper), a representative `image`,
// and any number of `publications`, each a publication id plus a one-line `note`
// describing that work from the theme's point of view. An entry with a `label`
// instead of an `id` (e.g. "In progress") is shown as a non-clickable hint.
export const themes = [
  {
    title: "Simulating hyper-personalized social experiences",
    comment: "A social situation has one structure, but it never lands the same way on two people. What if AI could rebuild an experience in the shape it would take for you, so you could feel what someone else felt, or meet a reaction as real as the person's own?",
    image: "/research_images/emosync.jpg",
    publications: [
      { id: "emosync-chi25", note: "EmoSync: a personalized analogy that lets you feel a microaggression the way its target did, as a route to affective empathy." },
      { id: "emosync-interactivity25", note: "A hands-on EmoSync demo at CHI Interactivity. Popular Choice Honorable Mention (Top 5%)." },
      { label: "In progress", note: "What if a generated social experience showed up as an event in your own lifeworld, somewhere familiar, among people you know? Would the reaction it draws out be the real one?" }
    ]
  },
  {
    title: "Personal AI agents & delegation",
    comment: "We hand more and more of our work to agentic AI. When the doing goes away, so do the insights and the growth that used to come with it. Can we bring those back without taking the work back?",
    image: "/research_images/agents-shoes.jpg",
    publications: [
      { id: "agents-shoes-uist26", note: "Step into My Agent’s Shoes: a playful augmentation that turns the agent’s task-execution process into an interactive narrative game you play through." }
    ]
  },
  {
    title: "Personal assistants for real life",
    comment: "Good advice is cheap; advice you can actually follow tomorrow is not. I’m drawn to assistants that plan around the messy constraints of a real day and negotiate with you, instead of lecturing you.",
    image: "/research_images/sleepguru.jpg",
    publications: [
      { id: "sleepguru-uist22", note: "SleepGuru: a sleep planner that builds actionable, negotiable plans from your real calendar and activity traces." },
      { id: "sleepguru-demo-uist22", note: "Demonstrating SleepGuru live at UIST 2022." }
    ]
  }
];

export const teaching = [
  { course: "Research Topics and Methods in HCI (CSED700G)", role: "Teaching Assistant", term: "2026-2", uni: "Dept. of CSE, POSTECH", instructor: "Prof. Eunkyung Jo", instructorUrl: "https://eunkyungjo.com/" },
  { course: "Human-Computer Interaction (CSED402)", role: "Teaching Assistant", term: "2025-2", uni: "Dept. of CSE, POSTECH", instructor: "Prof. Eunkyung Jo", instructorUrl: "https://eunkyungjo.com/" },
  { course: "Mobile Ubiquitous Computing (CSED404)", role: "Teaching Assistant", term: "2024-2", uni: "Dept. of CSE, POSTECH", instructor: "Prof. Inseok Hwang", instructorUrl: "https://www.inseokhwang.com/" }
];

export const education = [
  { degree: "Integrated MS/Ph.D. Program in Computer Science and Engineering", school: "POSTECH", year: "Feb 2023 - Present" },
  { degree: "B.S. in Electrical Engineering", school: "POSTECH", year: "Feb 2023" },
];

export const awards = [
  { title: "POSTECHIAN Fellowship (Emerging Scholars track)", org: "Dept. of CSE, POSTECH", year: "2026" },
  { title: "Popular Choice Honorable Mention Award (Top 5%)", org: "CHI Interactivity", year: "2025" },
  { title: "CSE Best Paper Award", org: "Dept. of CSE, POSTECH", year: "2025" },
  { title: "Undergraduate Group Research Program (3rd)", org: "POSTECH", year: "2021" },
];

export const service = [
  "External Reviewer, CHI 2026 Papers, Posters",
  "External Reviewer, CHI 2025 Case Studies",
  "External Reviewer, IMWUT 2024 (November)"
];

export const invitedTalks = [
  {
    title: "Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression",
    event: "Top Conference Session at KCC (Korea Computer Congress)",
    location: "Jeju, South Korea",
    year: "2025",
    image: "/photos/kcc2025.jpg"
  },
  {
    title: "Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression",
    event: "POSTECH-Keio Joint Workshop",
    location: "Keio University (Shonan-Fujisawa Campus), Japan",
    year: "2025",
    image: "/photos/keio2025.jpg"
  }
];

export const internships = [
  {
    role: "Development Intern",
    org: "Recommendation Team, Kakao Corp.",
    location: "Seongnam, South Korea",
    dates: "Jun 2021 - Aug 2021",
    desc: "Worked on projects for improving the recommendation system of KakaoTalk and Melon, focusing on algorithm implementation and evaluation.",
    image: "/photos/kakao2021.jpg"
  },
  {
    role: "Development Intern",
    org: "Kodebox",
    location: "Seoul, South Korea",
    dates: "Jun 2019 - Jan 2020",
    desc: "Web development (React.js, Django)"
  }
];

export const conferenceAttendance = [
  {
    role: "Paper / Demo Presenter",
    event: "CHI 2025",
    location: "Yokohama, Japan",
    year: "2025",
    image: "/photos/chi2025.jpg"
  },
  { role: "Demo Presenter, Student Volunteer", event: "UIST 2022", location: "Bend, OR, USA", year: "2022", image: "/photos/uist2022.jpg" }
];

export const patents = [
  {
    title: "Electronic device and method for providing similar situation for emotional empathy using artificial intelligence model",
    items: [
      "Korea Patent Pending. Application No. 10-2025-0107924 (Application Date: Aug. 6, 2025)",
      "U.S. Patent Pending. Application No. 19/725,079 (Application Date: Jun. 30, 2026)"
    ]
  },
  {
    title: "Personalized Sleep Planning System Considering Individual Dynamic Constraints and Sleep Schedule Creating Method Using Same",
    items: [
      "Korea Patent No. 10-2839271. (Issue Date: Jul. 23, 2025; Application Date: Jun. 28, 2022)",
      "U.S. Patent Pending. Application No. 17/886446 (Application Date: Aug. 11, 2022)"
    ]
  },
];

export const mediaCoverage = [
  {
    title: "Live Radio Interview on EmoSync Research",
    source: "KBS Pohang",
    date: "June 2025",
    link: "https://program.kbs.co.kr/1radio/local/morningpoh/pc/board.html?smenu=154e2b&bbs_loc=R2006-0309-03-121830,read,,2760,1918681",
    image: "/photos/emosync-radio.jpg"
  }
];

export const cvLastUpdated = "2026.10.22";

// Lookup helpers
export const allPublications = publications.flatMap(g => g.items);
export const publicationById = (id) => allPublications.find(p => p.id === id);
