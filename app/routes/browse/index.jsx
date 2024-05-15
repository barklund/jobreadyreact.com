import { Link, Outlet } from "@remix-run/react";
import { Button } from "~/components";
import repositories from "~/config/repositories.json";
import { FaCloudDownloadAlt } from "react-icons/fa";

function BrowseIndex() {
  return (
    <>
      <section className="h-screen flex flex-col p-4">
        <h1 className="text-4xl mb-4">Download full source</h1>
        <div className="flex">
          <Button
            as={Link}
            to="/zips/react-in-depth.zip"
            target="_blank"
            Icon={FaCloudDownloadAlt}
          >
            Download full source code for all examples
          </Button>
        </div>
        <h2 className="text-3xl mb-4 mt-8">
          Browse all repositories for React in Depth
        </h2>
        <ol className="flex flex-wrap gap-4">
          {Object.entries(repositories).map(([name, repos], i) => (
            <li
              key={name}
              className="w-[400px] flex items-center gap-4 p-2 bg-blue-50"
            >
              <Link
                className="text-lg flex-grow hover:underline"
                to={name}
              >
                Chapter {parseInt(name.slice(2, 4), 10)}:
              </Link>
              <strong>{Object.keys(repos).length}</strong>
              <span className="w-1/3">
                example
                {Object.keys(repos).length === 1 ? "" : "s"}!
              </span>
            </li>
          ))}
        </ol>
      </section>
      <Outlet />
    </>
  );
}

export default BrowseIndex;
