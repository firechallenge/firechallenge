import FlameShader from "../components/flame";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center">
        <h1 className="mx-6 mt-12 w-[300px] bg-gradient-to-b from-black/80 to-black bg-clip-text pb-4  text-center text-5xl font-extrabold leading-tight text-transparent md:!w-full lg:!mt-20 lg:text-6xl xl:leading-snug dark:from-white dark:to-[#AAAAAA]">
          Fuel the Learning
        </h1>
        <p className="mx-6 max-h-[112px] w-[315px] text-center font-mono text-xl text-[#666666] md:max-h-[96px] md:w-[700px] md:text-xl dark:text-[#888888]">
          Fire Challenge is a challenge-based system to allow for you to have
          control over your learning.
        </p>
      </section>
      <section className="flex flex-row justify-center gap-8 items-center mt-10">
        <a
          href="/topics/python"
          className="w-[350px] h-[300px] bg-neutral-800 flex flex-col items-center justify-center rounded-xl border border-neutral-700 cursor-pointer transition-all duration-200 hover:border-blue-500 relative"
        >
          <h3 className="text-center text-3xl font-bold font-mono">Python</h3>
          <p className="w-[250px] text-center tracking-wide text-neutral-400 mt-4">
            The Python Programming Language
          </p>
        </a>
        <a
          href="/topics/web"
          className="w-[350px] h-[300px] bg-neutral-800 flex flex-col items-center justify-center rounded-xl border border-neutral-700 cursor-pointer transition-all duration-200 hover:border-blue-500 relative"
        >
          <h3 className="text-center text-3xl font-bold font-mono">Web Tech</h3>
          <p className="w-[250px] text-center tracking-wide text-neutral-400 mt-4">
            Web technologies including HTML, JS, CSS, TS, etc.
          </p>
          {/* <FlameShader /> */}
        </a>
      </section>
    </div>
  );
}
