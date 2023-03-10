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
            <h2 className="text-5xl italic md:text-6xl font-bold mb-2 text-white mx-4 md:md-0">
              React like a Pro
            </h2>
            <h3 className="text-2xl m-4 text-white md:md-0">
              Do you want to become a Professional React Developer?
            </h3>
            <p className="mb-8 text-white mx-4 mr-8 md:md-0">
              <em>React like a Pro</em> is a brand new book on modern React web
              development and it is available for pre-order and early access
              now. The book is fully up-to-date with the React ecosystem as of
              2023.
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
        <section className="bg-gray-100">
          <blockquote className="container mx-auto p-16 px-6 w-full md:w-1/2 text-2xl">
            <em>
              Truly a BIBLE for React! This book is a single consolidated place
              on the subject that is <strong>all-inclusive</strong> of anything
              and <strong>everything</strong> from any forum or even any{" "}
              <em>React minds</em> on the planet. Awesome!
            </em>
            <br />– Karthikeyarajan Rajendran
          </blockquote>
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
                In-depth
              </h4>
              <p className="text-gray-600 mb-8">
                <em>React like a Pro</em> covers everything you need to know
                about the React ecosystem in over 300 pages. Whether you want to
                know about data management, styling, testing, or website
                frameworks, this book has it all.
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
                From amateur to professional
              </h4>
              <p className="text-gray-600 mb-8">
                This book will take any React amateur or hobby developer
                directly into the big leagues. With this book you'll be dressed
                for most React engineer positions out there ready to join the
                team and be productive from day one!
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
                50+ useful examples
              </h4>
              <p className="text-gray-600 mb-8">
                The book features 50+ advanced examples using a multitude of
                professional tools and libraries. All the examples are full
                applications, that you can use right away or use as a starting
                point for future development.
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
                3 immersive projects
              </h4>
              <p className="text-gray-600 mb-8">
                Try out your new knowledge of the expansive world of the React
                ecosystem in 3 challenging, complex, real-world projects, that
                will definitely put your skills to the test!
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
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
                    I highly recommend this book to anyone whose head is
                    spinning at the myriad pieces of React components that fit
                    together to make a React project, and it is a single point
                    of truth to gain the required working knowledge.
                    <br />
                    This is a one source place where you can learn React, the
                    tooling, ecosystem, libraries, frameworks, and best ways to
                    create React apps that will be performant and professional.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Amit Lamba
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
        <section>
          <div className="container mx-auto px-6 py-20 flex gap-8 items-center">
            <img src="/images/two-books.jpg" width="500" alt="Two books" />
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                The companion book: React Quickly, 2nd Ed!
              </h2>
              <h3 className="my-4 text-2xl">
                <em>React like a Pro</em> is for the hobby React developer who
                wants to take it to the next level, but if you're just starting
                out or still don't feel completely familiar with all of React
                itself, then you should get the companion book,{" "}
                <em>React Quickly, Second Edition</em>.
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
              Available now
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
