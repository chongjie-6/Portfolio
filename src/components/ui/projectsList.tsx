import Link from "next/link";
import { CarouselComponent } from "./carousel_component";

const TODO_APP_IMAGES = [
  { src: "/kanban_todo.png", description: "Kanban Board for Todo App" },
  { src: "/calendar_todo.png", description: "Calendar View for Todo App" },
  { src: "/dashboard_todo.png", description: "Dashboard for Todo App" },
  { src: "/achievments_todo.png", description: "Achievements for Todo App" },
];

const FITNESS_APP_IMAGES = [
  {
    src: "/fitness_dashboard.png",
    description: "Landing Page for Fitness Tracker",
  },
  {
    src: "/fitness_logged_in.png",
    description: "Logged in View for Fitness Tracker",
  },
  { src: "/fitness_workouts.png", description: "Tracked Workouts view" },
  {
    src: "/fitness_create_session_exercises.png",
    description: "Modal for adding an exercise to a session",
  },
  {
    src: "/fitness_create_exercises.png",
    description: "Modal for creating exercises",
  },
];

const FOOD_APP_IMAGES = [
  { src: "/food_dashboard.png", description: "Dashboard for Food Recommender" },
  {
    src: "/food_nearby.png",
    description: "Nearby search for cuisines and restaurants",
  },
  {
    src: "/food_page.png",
    description: "Overview of restaurant with details on the restuarant",
  },
  {
    src: "/food_search.png",
    description: "Search functionality to search for particular restaurant",
  },
];

export function ProjectsList() {
  return (
    <ul className=" w-full mt-5 text-center space-y-30">
      {/* Fitness App */}
      <li className="list-item">
        <CarouselComponent photos={FITNESS_APP_IMAGES}></CarouselComponent>
        <div className="list-description">
          <div className="list-title">
            <Link
              href={"https://fitness-app-bl5i.vercel.app/"}
              className="inline-flex items-center project_link"
            >
              <h2>Fitness Tracker</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
          </div>
          <p className="list-text">
            Developed with:{" "}
            <span className="text-red-500 text-xl text-balance">
              TypeScript NextJS React Vercel PostgreSQL TailwindCSS ShadCn
              Bootstrap
              <br></br>
            </span>
            <span className="text-xl">
              Born from my passion for fitness, this app provides a streamlined
              experience for workout enthusiasts. It offers a clean, intuitive
              platform where users can effortlessly track their exercises,
              monitor progress, and implement progressive overload—the key to
              consistent strength gains and fitness improvement.
            </span>
          </p>
        </div>
      </li>

      {/* Team Management Todo App */}
      <li className="list-item">
        <CarouselComponent photos={TODO_APP_IMAGES}></CarouselComponent>
        <div className="list-description">
          <h2 className="list-title">Team Management App</h2>
          <p className="list-text">
            Developed with:{" "}
            <span className="text-red-500 text-xl text-balance">
              TypeScript NextJS React Vercel PostgreSQL TailwindCSS MaterialUI
              <br></br>
            </span>
            <span className="text-xl">
              A team management application that streamlines task organization,
              allowing members to establish priorities and track deadlines
              collaboratively.
            </span>
          </p>
        </div>
      </li>

      {/* Food Recommender App */}
      <li className="list-item">
        <CarouselComponent photos={FOOD_APP_IMAGES}></CarouselComponent>
        <div className="list-description">
          <div className="list-title">
            <Link
              href={"https://my-app-azure-tau.vercel.app"}
              className="inline-flex items-center project_link"
            >
              <h2>Food Recommender</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-right hover:text-blue-500 hover:-translate-y-1 transition-all duration-75"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
          </div>
          <p className="list-text">
            Developed with:{" "}
            <span className="text-red-500 text-xl text-balance">
              TypeScript React Vercel NodeJS ExpressJs Google Maps API
              <br></br>
            </span>
            <span className="text-xl">
              A Food Recommending application designed to help users discover
              local and popular cuisines utilising geolocation services.
            </span>
          </p>
        </div>
      </li>
    </ul>
  );
}
