import NavBar from "@/components/shared/nav-bar";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
        <div className="w-full">
          <div className="flex flex-row">
            <div className="w-4/12 bg-image h-96"></div>
            <div className="w-4/12"></div>
            <img src="/images/banner1.webp" className="w-4/12"></img>
          </div>
        </div>
      </div>
      <div className="bg-image-test h-96"></div>
    </div>
  );
}
