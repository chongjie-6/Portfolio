import Image from "next/image";

export function About() {
  return (
    <div className="max-w-10/12 mx-auto items-center justify-center mt-5 flex flex-col space-y-20">
      <h2 className="text-6xl font-bold space-y-2">About</h2>
      <div className="block sm:flex justify-between">
        {/* Text Section */}
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
          <p className="text-balance">
            Hi, I&apos;m Chongjie- an aspiring full-stack developer with a
            strong interest in building scalable and clean software solutions.
            I&apos;m passionate about turning complex problems into both
            practical and well structured softwares. Whether working in a team
            or independently, I&apos;m constantly learning and improving with a
            keen interest in seeking out challenges that push the boundaries of
            my current skillset.
          </p>
        </div>

        {/* Skills Section */}
        <div className="gap-10 inline-flex items-center">
          <div className="space-y-5">
            <Image
              src={"/css_logo.svg"}
              width={500}
              height={500}
              alt="CSS logo"
            />
            <Image
              src={"/expressjs-logo.svg"}
              width={500}
              height={500}
              alt="CSS logo"
            />
            <Image
              src={"/nodejs-icon.svg"}
              width={500}
              height={500}
              alt="CSS logo"
            />
          </div>

          <div className="space-y-5">
            <Image
              src={"/html5-logo.svg"}
              width={500}
              height={500}
              alt="CSS logo"
            />
            <Image
              src={"/javascript-icon.svg"}
              width={500}
              height={500}
              alt="CSS logo"
            />
            <Image
              src={"/nextjs_logo.svg"}
              width={500}
              height={500}
              alt="CSS logo"
            />
            <Image
              src={"/react_logo.svg"}
              width={500}
              height={500}
              alt="CSS logo"
            />
          </div>

          <div className="space-y-5">
            <Image
              src={"/supabase-logo-icon.svg"}
              width={500}
              height={500}
              alt="CSS logo"
            />
            <Image
              src={"/tailwindcss-icon.svg"}
              width={500}
              height={500}
              alt="CSS logo"
            />
            <Image
              src={"/typescript_logo.svg"}
              width={500}
              height={500}
              alt="CSS logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
