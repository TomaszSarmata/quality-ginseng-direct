import NavBar from "@/components/shared/nav-bar";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
        <div className="w-full">
          <div className="flex flex-row relative">
            <div className="w-full absolute top-1/2 text-center">
              <h1 className="banner-title">The UK's No.1 Ginseng Products</h1>
            </div>
            <div className="w-4/12 bg-image1 border-r-4 border-black flex justify-center items-end pb-10">
              <div className="w-56 text-center ">
                <div className="bg-white hover:bg-sky-700  py-3 px-3 rounded-3xl text-xl text-gray-700 hover:text-white font-medium border-black border hover:border-0 uppercase ">
                  <a href="/">Shop Ginseng</a>
                </div>
              </div>
            </div>
            <div className="w-4/12 bg-image2 border-r-4 border-black flex justify-center items-end pb-10">
              <div className="w-56 text-center">
                <div className="bg-white hover:bg-sky-700  py-3 px-3 rounded-3xl text-xl text-gray-700 hover:text-white font-medium border-black border hover:border-0 uppercase ">
                  <a href="/">Shop Men</a>
                </div>
              </div>
            </div>
            <div className="w-4/12 bg-image3 flex justify-center items-end pb-10">
              <div className="w-56 text-center">
                <div className="bg-white hover:bg-sky-700  py-3 px-3 rounded-3xl text-xl text-gray-700 hover:text-white font-medium border-black border hover:border-0 uppercase ">
                  <a href="/">Bestsellers</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image h-96"></div>
    </div>
  );
}
