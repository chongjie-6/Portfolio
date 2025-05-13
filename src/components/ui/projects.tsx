import { ProjectsList } from "@/components/ui/projectsList";

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto items-center justify-center mt-5 flex flex-col space-y-20">
      <div className="font-bold text-center space-y-2">
        <h2 className="text-lg text-gray-500">Browse My Recent</h2>
        <h2 className="text-6xl">Projects</h2>
      </div>
      <ProjectsList />
    </div>
  );
}
