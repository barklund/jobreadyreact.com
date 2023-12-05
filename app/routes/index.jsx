import { Box } from "../components/box";
import { CTAButton } from "../components/button";

export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Nunito:ital,wght@0,400;0,600;1,400&display=swap",
    },
  ];
}

export default function Index() {
  return (
    <>
      <header className="py-16 md:py-24 flex justify-center bg-gray-100">
        <div className="container flex flex-col justify-between items-center md:flex-row md:mx-16 md:w-3/4 md:mx-auto">
          <div className="w-4/5 md:w-1/2">
            <h1 className="text-box md:text-2xl font-display mb-2 md:mx-0 text-teal-300">
              Upgrade your React Skills to Pro Level And Land Your Dream
              Job
            </h1>
            <p className="my-8">
              <em>Job-Ready React</em> is the book that will take you
              from amateur to professional React developer. Learn all
              the tricks and tools used in the real world, and get an
              edge to land that professional position. Pre-order your
              copy today!
            </p>
            <p className="mt-12">
              <CTAButton as="a" href="//barklund.dev/jrr">
                Buy now
              </CTAButton>
            </p>
          </div>
          <div className="w-3/4 md:w-1/4 md:shrink-0 mt-8 md:mt-0 mx-auto md:mx-0">
            <img src="/images/jrr_blob.png" alt="Book cover" />
          </div>
        </div>
      </header>
      <main className="w-full flex flex-col items-stretch">
        <section className="flex justify-center items-center py-20">
          <Box className="w-4/5 md:w-3/5 p-12 md:p-20 pb-4 flex flex-col gap-4 relative">
            <blockquote className="md:text-md">
              <span className="absolute left-4 top-[-8px] md:top-12 font-display text-orange-300 text-[70px] md:text-[130px]">
                “
              </span>
              Job-Ready React is a one-source place where you can learn
              React, the tooling, ecosystem, libraries, frameworks, and
              best ways to create React apps that will be performant and
              professional.
            </blockquote>
            <p className="text-box md:text-lg font-display font-semibold items-center flex gap-4 md:gap-8">
              <img src="/icons/profile.svg" width="36" alt="" />
              <span>Amit Lamba</span>
            </p>
          </Box>
        </section>
        <section
          className="bg-cover py-16"
          style={{ backgroundImage: "url(/images/jrr_section.jpg)" }}
        >
          <div className="flex flex-col justify-between items-center md:flex-row mx-4 md:mx-16 md:w-3/4 md:mx-auto gap-8 md:gap-[25%]">
            <div>
              <h2 className="font-display font-semibold text-xl mb-8">
                Want to update your React skills to a{" "}
                <strong className="text-orange-300 font-semibold">
                  professional level
                </strong>
                ?
              </h2>
              <p className="mb-4">
                Staying up to date with the constantly changing React
                landscape can be challenging. It's easy to get
                overwhelmed by all the information available and it's
                difficult to figure out what information is accurate.
              </p>
              <p className="mb-4">
                But with the right guidance, you can easily stay ahead
                of the game and avoid missing out on great
                opportunities.
              </p>
              <p className="mb-4">
                Here's the trustworthy source you're looking for!{" "}
                <em>Job-Ready React</em> covers all the tips and tricks
                used in real-world development, giving you a jump-start
                in becoming a professional React developer.
              </p>
              <p className="">
                With <em>Job-Ready React</em> in hand, you'll quickly
                learn what you need to upgrade your React skills!
              </p>
            </div>
            <img
              src="/images/questioning.png"
              className="w-3/4 max-w-xs md:w-1/3"
              alt=""
            />
          </div>
        </section>
        <section className="flex flex-col justify-between items-stretch mx-4 gap-8 md:flex-row md:mx-16 md:w-3/4 md:mx-auto md:gap-12 py-12 md:py-32 md:flex-wrap xl:flex-nowrap">
          <Box className="flex items-center flex-col gap-4 md:gap-8 justify-between p-4 md:p-8 text-center md:w-[47%] xl:w-auto">
            <img
              src="/images/indepth-icon.png"
              className="w-12 md:w-16"
              style={{
                filter:
                  "invert(63%) sepia(40%) saturate(623%) hue-rotate(132deg) brightness(83%) contrast(97%)",
              }}
              alt="In-depth"
            />
            <h4 className="md:text-box font-display font-semibold">
              All you need to know
            </h4>
            <p className="text-sm md:text-base">
              With over 300 pages of content, this book covers
              everything from data management and styling to testing and
              website frameworks so you can become employable as a
              professional React developer.
            </p>
          </Box>

          <Box className="flex items-center flex-col gap-4 md:gap-8 justify-between p-4 md:p-8 text-center md:w-[47%] xl:w-auto">
            <img
              src="/images/beginner-icon.png"
              className="w-12 md:w-16"
              style={{
                filter:
                  "invert(63%) sepia(40%) saturate(623%) hue-rotate(132deg) brightness(83%) contrast(97%)",
              }}
              alt="Beginner"
            />
            <h4 className="md:text-box font-display font-semibold">
              Understand the React Ecosystem and Related Technologies
            </h4>
            <p className="text-sm md:text-base">
              Get an in-depth understanding of the React ecosystem and a
              large subsection of concrete libraries and tools used by
              professional engineers. You'll learn to compare related
              technologies and choose a proper stack for a given
              problem.
            </p>
          </Box>

          <Box className="flex items-center flex-col gap-4 md:gap-8 justify-between p-4 md:p-8 text-center md:w-[47%] xl:w-auto">
            <img
              src="/images/examples-icon.png"
              className="w-12 md:w-16"
              style={{
                filter:
                  "invert(63%) sepia(40%) saturate(623%) hue-rotate(132deg) brightness(83%) contrast(97%)",
              }}
              alt="Example"
            />
            <h4 className="md:text-box font-display font-semibold">
              50+ examples to grow your skills
            </h4>
            <p className="text-sm md:text-base">
              <em>Job-Ready React</em> includes 50+ advanced examples
              using the latest professional tools and libraries. Stop
              wasting time trying to figure out what works, and instead,
              get ahead of the game by starting with full applications
              that you can use right away.
            </p>
          </Box>

          <Box className="flex items-center flex-col gap-4 md:gap-8 justify-between p-4 md:p-8 text-center md:w-[47%] xl:w-auto">
            <img
              src="/images/blueprint-icon.png"
              className="w-12 md:w-16"
              style={{
                filter:
                  "invert(63%) sepia(40%) saturate(623%) hue-rotate(132deg) brightness(83%) contrast(97%)",
              }}
              alt="Projects"
            />
            <h4 className="md:text-box font-display font-semibold">
              Learn by doing
            </h4>
            <p className="text-sm md:text-base">
              Immerse yourself in 3 challenging, real-world projects
              that will leave you feeling confident and ready to tackle
              any React project. With step-by-step guidance and detailed
              explanations, you'll be coding like a pro in no time. Get
              the skills and knowledge you need to become an unstoppable
              React developer!
            </p>
          </Box>
        </section>
        <section
          className="bg-cover"
          style={{ backgroundImage: "url(/images/jrr_section.jpg)" }}
        >
          <div className="mx-auto pb-12 w-full md:w-3/4 flex flex-col md:flex-row gap-4 md:gap-32 md:justify-between items-center md:items-start">
            <img
              src="/images/idea.png"
              className="w-1/2 md:w-2/5"
              alt=""
            />
            <div className="px-8 md:px-0 md:pt-12">
              <h3 className="text-lg font-display font-semibold ">
                What you will{" "}
                <strong className="text-orange-300 font-semibold">
                  learn
                </strong>{" "}
              </h3>
              <ul className="py-4 flex flex-col gap-4 list-disc">
                <li>
                  <strong>
                    Introduction to professional React development
                  </strong>
                  , including advanced component patterns and optimizing
                  performance to provide you with a strong foundation in
                  the basics of React development.
                </li>
                <li>
                  <strong>How to improve code maintenance</strong> and
                  streamline workflows using developer tooling.
                </li>
                <li>
                  <strong>
                    Techniques for implementing CSS in JavaScript
                  </strong>{" "}
                  for cleaner, more efficient styling to create
                  beautiful, dynamic user interfaces.
                </li>
                <li>
                  <strong>
                    Best practices for data management in React
                  </strong>
                  , including remote data and reactive caching to learn
                  how to manage the state of your applications and
                  ensure data is easily available.
                </li>
                <li>
                  <strong>
                    Strategies for unit testing React applications
                  </strong>{" "}
                  to ensure your applications are always tested and less
                  prone to errors.
                </li>
                <li>
                  <strong>React website frameworks</strong>, providing
                  you with a comprehensive overview of the latest
                  frameworks and tools for building robust, scalable
                  applications.
                </li>
                <li>And much more!</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-6 py-8 md:py-20">
            <h2 className="text-box md:text-lg font-display font-semibold text-center mb-8">
              Why our customers{" "}
              <strong className="text-teal-300 font-semibold">
                love it
              </strong>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 ">
              <Box className="mx-4 md:w-1/4 p-8 pt-14 md:p-12 md:pt-16 pb-8 flex flex-col gap-8 justify-between relative">
                <blockquote>
                  <span className="absolute left-2 top-1 md:top-[-16px] font-display text-orange-300 text-[60px] md:text-[100px]">
                    “
                  </span>
                  The writing style is very engaging, joyful,
                  entertaining, fresh. This is the one-stop-shop book
                  about React and its ecosystem. No muss, no fuss.
                </blockquote>
                <p className="md:text-box font-display font-semibold flex gap-2">
                  <img src="/icons/profile.svg" width="24" alt="" />
                  <span>Francisco Rivas</span>
                </p>
              </Box>
              <Box className="mx-4 md:w-1/4 p-8 pt-14 md:p-12 md:pt-16 pb-8 flex flex-col gap-8 justify-between relative">
                <blockquote>
                  <span className="absolute left-2 top-1 md:top-[-16px] font-display text-orange-300 text-[60px] md:text-[100px]">
                    “
                  </span>
                  Truly a BIBLE for React! This book is a single
                  consolidated place on the subject that is{" "}
                  <strong>all-inclusive</strong> of anything and{" "}
                  <strong>everything</strong> from any forum or even any{" "}
                  <em>React minds</em> on the planet. Awesome!
                </blockquote>
                <p className="md:text-box font-display font-semibold flex gap-2">
                  <img src="/icons/profile.svg" width="24" alt="" />
                  <span>Karthikeyarajan Rajendran</span>
                </p>
              </Box>
              <Box className="mx-4 md:w-1/4 p-8 pt-14 md:p-12 md:pt-16 pb-8 flex flex-col gap-8 justify-between relative">
                <blockquote>
                  <span className="absolute left-2 top-1 md:top-[-16px] font-display text-orange-300 text-[60px] md:text-[100px]">
                    “
                  </span>
                  Simply put: wow. This is a fantastic and very detailed
                  coverage of React. It leaves no stone unturned
                  <br />
                  Honestly: this is proper React; everything you need to
                  hit the ground running.
                </blockquote>
                <p className="md:text-box font-display font-semibold flex gap-2">
                  <img src="/icons/profile.svg" width="24" alt="" />
                  <span>Jason Hales</span>
                </p>
              </Box>
            </div>
          </div>
        </section>
        <section>
          <div className="py-8 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-20 lg:items-stretch">
            <div
              className="h-52 lg:h-auto bg-right overflow bg-cover w-4/5 lg:basis-2/5 xl:basis-1/3"
              style={{ backgroundImage: "url(/images/jrr+rq2e.png)" }}
            />
            <div className="mx-4 lg:py-16 md:pl-0 lg:pr-32 lg:w-1/2">
              <h2 className="mb-6 text-box md:text-lg font-display font-semibold ">
                Haven't mastered the{" "}
                <strong className="text-teal-300 font-semibold">
                  fundamentals
                </strong>{" "}
                yet ?
              </h2>
              <h3 className="my-4">
                Then check out our companion book:{" "}
                <em>React Quickly, Second Edition</em>! This book is for
                those who are just starting out. Learn the fundamentals
                of React quickly and easily with clear explanations,
                numerous examples, and real-world projects you can use
                for reference. Get started with React Quickly!
              </h3>
              <CTAButton
                href="//jobreadyreact.com"
                rounded
                className="uppercase"
              >
                Read more about <em>React Quickly, Second Edition</em>
              </CTAButton>
            </div>
          </div>
        </section>
        {/*<section
          className="px-4 mt-12 bg-cover py-16 w-full"
          style={{ backgroundImage: "url(/images/jrr_section.jpg)" }}
        >
          <div className="container mx-auto text-center">
            <h2 className="mb-2 text-lg font-display font-semibold  text-center">
              Get Early{" "}
              <strong className="text-orange-300 font-semibold">Access</strong>{" "}
              now
            </h2>
            <h3 className="my-10">
              Get the digital copy available in Manning Early Access Program now
              and help shape the content.
            </h3>
            <CTAButton href="//barklund.dev/jrr" rounded dark={false}>
              Buy now
            </CTAButton>
          </div>
        </section>*/}
        <section className="py-16 w-full">
          <h2 className="text-box md:text-xl font-display font-semibold text-center mb-8">
            About the{" "}
            <strong className="text-teal-300 font-semibold">
              Author
            </strong>
          </h2>
          <div className="my-4 md:my-32 flex justify-start items-start md:items-stretch flex-col md:flex-row md:mb-20 gap-8 md:gap-[20%]">
            <div
              className="h-52 w-3/4 md:h-auto md:max-h-64 md:w-1/3 lg:w-1/4 bg-contain bg-no-repeat bg-left bg-top"
              style={{
                backgroundImage: "url(/images/jrr_author_barklund.png)",
              }}
            ></div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-8 xl:p-20">
              <h4 className="text-box md:text-xl font-display font-semibold mb-2 md:mb-8">
                Morten Barklund
              </h4>
              <p className="md:mb-8">
                <strong>Morten Barklund</strong> is an independent
                software developer working as a lead developer in
                various teams, including an open-source React project
                funded by Google. Morten studied Computer Science at the
                Technical University of Denmark and has worked on
                hundreds of projects during over 20 years as a web
                developer.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="md:mt-12 bg-cover py-8 bg-teal-300">
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="flex flex-col md:flex-row  gap-4">
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">
                Links
              </h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="//barklund.dev/jrr"
                    className="hover:underline"
                  >
                    Purchase
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://livebook.manning.com/book/job-ready-react"
                    className="hover:underline"
                  >
                    Book forum
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://github.com/job-ready-react/jrr"
                    className="hover:underline"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">
                Follow Morten Barklund elsewhere
              </h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="//linkedin.com/in/barklund"
                    className="hover:underline"
                  >
                    Follow me on Linkedin
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="//mortenbarklund.com/"
                    className="hover:underline"
                    title="Website of Morten Barklund about React, Testing and Accessibility"
                  >
                    Morten Barklund – React, Testing, and Accessibility
                    expert
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="//mortenbarklund.com/"
                    className="hover:underline"
                    title="Website of Morten Barklund about React, Testing and Accessibility"
                  >
                    Coding Heaven – advanced workshops and courses
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">
                Icons and images
              </h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    className="hover:underline"
                    href="https://www.freepik.com/free-vector/creative-person-concept_749596.htm"
                    rel="nofollow"
                  >
                    Freepik
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="hover:underline"
                    rel="nofollow"
                    href="https://www.freepik.com/free-vector/back-view-man-making-business-decision-flat-illustration-cartoon-character-thinking-about-options-questions-marks-around-him-success-searching-solution-strategy-concept_16333426.htm"
                  >
                    pch.vector
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="hover:underline"
                    href="https://www.flaticon.com/free-icons/project"
                    rel="nofollow"
                  >
                    dDara, vectorsmarket15, Eucalyp, Smashicons -
                    Flaticon
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="hover:underline"
                    href="https://iconscout.com/icon/book-1168"
                    rel="nofollow"
                  >
                    Daniel Bruce - Iconscout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
