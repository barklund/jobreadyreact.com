export default function Index() {
  return (
    <>
      <header
        className="py-16 md:py-24 flex justify-center"
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container flex flex-col justify-center md:flex-row md:mx-16 md:w-3/4 md:mx-auto">
          <div className="">
            <h2 className="text-4xl italic md:text-5xl font-bold mb-2 text-white mx-4 md:md-0">
              Upgrade your React Skills to Pro Level And Land Your Dream Job
            </h2>
            <p className="mb-8 text-white mx-4 mr-8 md:md-0">
              <em>React like a Pro</em> is the book that will take you from
              amateur to professional React developer. Learn all the tricks and
              tools used in the real world, and get an edge to land that
              professional position. Pre-order your copy today!
            </p>
            <p className="mt-16 mx-4 md:md-0">
              <a
                href="//barklund.dev/book2"
                className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
              >
                Buy now
              </a>
            </p>
          </div>
          <div className="w-3/4 md:w-1/3 md:shrink-0 mt-8 md:mt-0 mx-auto md:mx-0">
            <img src="/images/proreact.png" alt="Book cover" />
          </div>
        </div>
      </header>
      <main>
        <section>
          <blockquote className="container mx-auto p-16 px-6 w-full md:w-1/2 text-2xl">
            <em>
              React like a Pro is a one-source place where you can learn React,
              the tooling, ecosystem, libraries, frameworks, and best ways to
              create React apps that will be performant and professional.
            </em>
            <br />– Amit Lamba
          </blockquote>
        </section>
        <section className="bg-gray-100">
          <div className="mx-auto p-14 px-6 w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">
              Want to update your React skills to a professional level?
            </h2>
            <p className="text-gray-600 mb-2">
              Staying up to date with the constantly changing React landscape
              can be challenging. It’s easy to get overwhelmed by all the
              information available and it’s difficult to figure out what
              information is accurate.
            </p>
            <p className="text-gray-600 mb-2">
              But with the right guidance, you can easily stay ahead of the game
              and avoid missing out on great opportunities.
            </p>
            <p className="text-gray-600 mb-2">
              Here’s the trustworthy source you’re looking for!{" "}
              <em>React like a Pro</em> covers all the tips and tricks used in
              real-world development, giving you a jump-start in becoming a
              professional React developer.
            </p>
            <p className="text-gray-600 mb-8">
              With <em>React like a Pro</em> in hand, you'll quickly learn what
              you need to upgrade your React skills!
            </p>
          </div>
        </section>
        <section className="container mx-auto p-10 px-6 w-full md:w-1/2">
          <div className="flex items-center flex-col md:flex-row-reverse mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/images/indepth-icon.png"
                className="w-1/3 md:w-1/2 mx-auto"
                alt="In-depth"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">
                All you need to know
              </h4>
              <p className="text-gray-600 mb-8">
                With over 300 pages of content, this book covers everything from
                data management and styling to testing and website frameworks so
                you can become employable as a professional React developer.
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/images/beginner-icon.png"
                className="w-1/3 md:w-1/2 mx-auto"
                alt="Beginner"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">
                Understand the React Ecosystem and Related Technologies
              </h4>
              <p className="text-gray-600 mb-8">
                Get an in-depth understanding of the React ecosystem and a large
                subsection of concrete libraries and tools used by professional
                engineers. You'll learn to compare related technologies and
                choose a proper stack for a given problem.
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row-reverse mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/images/examples-icon.png"
                className="w-1/3 md:w-1/2 mx-auto"
                alt="Example"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">
                50+ examples to grow your skills
              </h4>
              <p className="text-gray-600 mb-8">
                <em>React like a Pro</em> includes 50+ advanced examples using
                the latest professional tools and libraries. Stop wasting time
                trying to figure out what works, and instead, get ahead of the
                game by starting with full applications that you can use right
                away.
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row mb-20 gap-4 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/images/blueprint-icon.png"
                className="w-1/3 md:w-1/2 mx-auto"
                alt="Projects"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl text-gray-800 font-bold mb-3">
                Learn by doing
              </h4>
              <p className="text-gray-600 mb-8">
                Immerse yourself in 3 challenging, real-world projects that will
                leave you feeling confident and ready to tackle any React
                project. With step-by-step guidance and detailed explanations,
                you'll be coding like a pro in no time. Get the skills and
                knowledge you need to become an unstoppable React developer!
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="mx-auto p-14 px-6 w-full md:w-3/5">
            <h3 className="text-2xl md:text-3xl text-gray-800 font-bold mb-3">
              What you will learn
            </h3>
            <ul className="text-gray-600 py-4 flex flex-col gap-4 list-disc">
              <li>
                <strong>Introduction to professional React development</strong>,
                including advanced component patterns and optimizing performance
                to provide you with a strong foundation in the basics of React
                development.
              </li>
              <li>
                <strong>How to improve code maintenance</strong> and streamline
                workflows using developer tooling.
              </li>
              <li>
                <strong>Techniques for implementing CSS in JavaScript</strong>{" "}
                for cleaner, more efficient styling to create beautiful, dynamic
                user interfaces.
              </li>
              <li>
                <strong>Best practices for data management in React</strong>,
                including remote data and reactive caching to learn how to
                manage the state of your applications and ensure data is easily
                available.
              </li>
              <li>
                <strong>Strategies for unit testing React applications</strong>{" "}
                to ensure your applications are always tested and less prone to
                errors.
              </li>
              <li>
                <strong>React website frameworks</strong>, providing you with a
                comprehensive overview of the latest frameworks and tools for
                building robust, scalable applications.
              </li>
              <li>And much more!</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Testimonials
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    The writing style is very engaging, joyful, entertaining,
                    fresh. This is the one-stop-shop book about React and its
                    ecosystem. No muss, no fuss.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Francisco Rivas
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Truly a BIBLE for React! This book is a single consolidated
                    place - on the subject that is{" "}
                    <strong>all-inclusive</strong> of anything - and{" "}
                    <strong>everything</strong> from any forum or even any -{" "}
                    <em>React minds</em> on the planet. Awesome!
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Karthikeyarajan Rajendran
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Simply put: wow. This is a fantastic and very detailed
                    coverage of React. It leaves no stone unturned
                    <br />
                    Honestly: this is proper React; everything you need to hit
                    the ground running.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Jason Hales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-20 flex flex-col xl:flex-row gap-8 items-center">
            <img src="/images/two-books.jpg" width="500" alt="Two books" />
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                Haven't mastered the fundamentals yet?
              </h2>
              <h3 className="my-4 text-2xl">
                Then check out our companion book:{" "}
                <em>React Quickly, Second Edition</em>! This book is for those
                who are just starting out. Learn the fundamentals of React
                quickly and easily with clear explanations, numerous examples,
                and real-world projects you can use for reference. Get started
                with React Quickly!
              </h3>
              <p className="mt-16">
                <a
                  href="//reactquickly.dev"
                  style={{ backgroundColor: "#667eea" }}
                  className="text-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
                >
                  Read more about <em>React Quickly, Second Edition</em>
                </a>
              </p>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "#667eea" }}>
          <div className="container mx-auto px-6 text-center py-20">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">
              Get early access now
            </h2>
            <h3 className="my-4 text-2xl text-white">
              Get the digital copy available in Manning Early Access Program now
              and help shape the content.
            </h3>
            <p className="mt-16">
              <a
                href="//barklund.dev/book2"
                className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
              >
                Buy now
              </a>
            </p>
          </div>
        </section>
        <section className="container mx-auto p-16 px-6 w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About the author
          </h2>
          <div className="my-24 flex justify-center items-center flex-col md:flex-row-reverse mb-20 gap-8 md:gap-12">
            <div className="w-1/2 md:w-1/4 rounded-full overflow-hidden">
              <img src="/images/barklund.jpeg" alt="Morten Barklund" />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-2xl text-gray-800 font-bold mb-3">
                Morten Barklund
              </h4>
              <p className="text-gray-600 mb-8">
                <strong>Morten Barklund</strong> is an independent software
                developer working as a lead developer in various teams,
                including an open-source React project funded by Google. Morten
                studied Computer Science at the Technical University of Denmark
                and has worked on hundreds of projects during over 20 years as a
                web developer.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100">
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="flex flex-col md:flex-row  gap-4">
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">Links</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="//barklund.dev/book2"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Purchase
                  </a>
                </li>
                {/*
                <li className="mt-2">
                  <a
                    href="https://livebook.manning.com/book/react-quickly-second-edition/welcome/v-1/9"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Book forum
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://github.com/rq2e/rq2e"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Source code
                  </a>
                </li>*/}
              </ul>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">Icons</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    className="hover:underline text-gray-600 hover:text-orange-500"
                    href="https://www.flaticon.com/free-icons/project"
                    rel="nofollow"
                  >
                    dDara, vectorsmarket15, Eucalyp, Smashicons - Flaticon
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="hover:underline text-gray-600 hover:text-orange-500"
                    href="https://iconscout.com/icon/book-1168"
                    rel="nofollow"
                  >
                    Daniel Bruce - Iconscout
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="uppercase mb-2 md:mb-6 font-bold">
                Morten Barklund on Social
              </h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="//twitter.com/barklund"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="//linkedin.com/in/barklund"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="//mortenbarklund.com/"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                    title="Website of Morten Barklund about React, Testing and Accessibility"
                  >
                    Website
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
