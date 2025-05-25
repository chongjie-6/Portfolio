import { Links } from "./links";

export function NavBar() {
  return (
    <nav className="bg-gray-800 py-2 fixed w-full hidden md:block z-20">
      <div className="max-w-6xl nav pt-5 ">
        <p className="font-bold text-4xl select-none"></p>
        <div className="space-x-10">
          <Links></Links>
        </div>
      </div>
    </nav>
  );
}
