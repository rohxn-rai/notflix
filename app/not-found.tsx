import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="min-h-[65vh] w-full bg-[#141414] text-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-[#141414] z-0 pointer-events-none"></div>

        <div className="z-10 max-w-2xl">
          <h1 className="text-[150px] font-black leading-none text-[#e50914] opacity-80">
            404
          </h1>
          <h2 className="text-4xl font-bold mb-6">Lost your way?</h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>

          <Link
            href="/"
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded hover:bg-[#c0c0c0] transition-colors duration-200"
          >
            Notflix Home
          </Link>

          <div className="mt-12 text-gray-500 text-sm">
            <span className="border-l-2 border-[#e50914] pl-4">
              Error Code:{" "}
              <span className="font-mono text-gray-400">NSES-404</span>
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
