import Banner from "@/components/home/banner";
import SimpleSlider from "@/components/home/simple-slider";
import TrustDisplay from "@/components/home/trust";
import NavBar from "@/components/shared/nav-bar";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
        <Banner></Banner>
        <div className="mb-20">
          <div className="text-center my-10">
            <h2 className="text-4xl mb-5">Our Bestsellers</h2>
            <h4 className="text-xl mb-16">
              Boosting Men's Vitality. Energising Every Moment. We Unleash Your
              Best.
            </h4>
            <SimpleSlider></SimpleSlider>
            <TrustDisplay></TrustDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}
