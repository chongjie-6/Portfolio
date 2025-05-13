import Image from "next/image";

export function About() {
  return (
    <div className="mx-auto mt-5 flex flex-col items-center space-y-20 w-full">
      <h2 className="text-6xl font-bold">About</h2>

      <div className="flex flex-col lg:flex-row justify-between gap-10 px-5 w-full max-w-6xl">
        {/* Text Section */}
        <div className="flex flex-col items-center text-base space-y-5 flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>

          <div className="text-left max-w-prose">
            <p className="text-balance">
              Hi, I&apos;m Chongjie — an aspiring full-stack developer with a
              strong interest in building scalable and clean software solutions.
              Whether working in a team or independently, I&apos;m constantly
              learning and improving with a keen interest in seeking out
              challenges that push the boundaries of my current skillset.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-3 gap-6 flex-1 place-items-center">
          {[
            "/css_logo.svg",
            "/expressjs-logo.svg",
            "/nodejs-icon.svg",
            "/html5-logo.svg",
            "/javascript-icon.svg",
            "/nextjs_logo.svg",
            "/react_logo.svg",
            "/supabase-logo-icon.svg",
            "/tailwindcss-icon.svg",
            "/typescript_logo.svg",
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Technology logo"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
