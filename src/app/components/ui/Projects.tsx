import ProjectCard from "./ProjectCard";

const AI_NUTRITIONIST_IMAGES = [
  { src: "/ai_landing.png", description: "Landing Page for AI Nutritionist App" },
  { src: "/ai_current.png", description: "Current meal plan page" },
  { src: "/ai_macros.png", description: "Macronutrient settings page" },
  { src: "/ai_previous.png", description: "Previous meals page" },
  { src: "/ai_previous_modal.png", description: "Previous meal modal" },
];

const FITNESS_APP_IMAGES = [
  { src: "/fitness_landing.png", description: "Landing Page for Fitness Tracker" },
  { src: "/fitness_dashboard.PNG", description: "Dashboard view" },
  { src: "/fitness_session.png", description: "Tracked workouts" },
  { src: "/fitness_session_exercise.png", description: "Add exercise modal" },
  { src: "/fitness_exercise.png", description: "Create exercise modal" },
];

const TODO_APP_IMAGES = [
  { src: "/kanban_todo.png", description: "Kanban board" },
  { src: "/dashboard_todo.png", description: "Dashboard" },
  { src: "/list_view_todo.png", description: "List view" },
  { src: "/achievments_todo.png", description: "Achievements" },
  { src: "/calendar_todo.png", description: "Calendar view" },
];

const FOOD_APP_IMAGES = [
  { src: "/food_landing.png", description: "Dashboard" },
  { src: "/food_nearby.PNG", description: "Nearby search" },
  { src: "/food_search_results.png", description: "Search results" },
  { src: "/food_result.png", description: "Restaurant details" },
];

const PROJECTS = [
  {
    index: "01",
    title: "AI Nutritionist",
    images: AI_NUTRITIONIST_IMAGES,
    link: "",
    description:
      "AI nutritionist that uses Gemini 2.5 to generate personalised meal plans based on inputted macronutrients.",
    skills: ["TypeScript", "Next.js", "React", "DynamoDB", "AWS EC2", "Gemini 2.5 Flash"],
  },
  {
    index: "02",
    title: "Fitness Tracker",
    images: FITNESS_APP_IMAGES,
    link: "https://fitness-app-bl5i.vercel.app/",
    description:
      "Born from a passion for fitness — a streamlined platform for tracking exercises, monitoring progress, and implementing progressive overload.",
    skills: ["TypeScript", "Next.js", "React", "PostgreSQL", "TailwindCSS"],
  },
  {
    index: "03",
    title: "Team Management App",
    images: TODO_APP_IMAGES,
    link: "",
    description:
      "A team management application that streamlines task organisation, allowing members to establish priorities and track deadlines collaboratively.",
    skills: ["TypeScript", "Next.js", "React", "PostgreSQL", "MaterialUI"],
  },
  {
    index: "04",
    title: "Food Recommender",
    images: FOOD_APP_IMAGES,
    link: "https://my-app-azure-tau.vercel.app/",
    description:
      "A food recommending application helping users discover local and popular cuisines via geolocation services.",
    skills: ["TypeScript", "React", "Node.js", "Express.js", "Google Maps API"],
  },
];

export function Projects() {
  return (
    <section className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto" id="projects">
      {/* Section label */}
      <div className="flex items-center gap-6 mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-stone-500">
          02 — Work
        </span>
        <div className="flex-1 border-t border-stone-300" />
      </div>

      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl mb-16 font-normal text-stone-900"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        Selected
        <br />
        <em>Projects</em>
      </h2>

      {/* Project list */}
      <ul className="space-y-0 list-none p-0 m-0">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>

      <div className="border-t border-stone-300 mt-0" />
    </section>
  );
}