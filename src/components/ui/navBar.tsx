import { Links } from "./links";

export function NavBar() {
  return (
    <nav className="bg-gray-800 py-2 fixed w-full hidden md:block z-10">
      <div className="max-w-6xl nav pt-5 ">
        <p className="font-bold text-4xl select-none">Chongjie</p>
        <div className="space-x-10">
          <Links></Links>
        </div>
      </div>
    </nav>
  );
}
