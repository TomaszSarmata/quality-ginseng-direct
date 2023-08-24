export default function TrustDisplay() {
  return (
    <div className="flex flex-row items-center  bg-gray-50 my-20">
      <div className="w-6/12">
        <img src="/images/content.webp" alt="" />
      </div>
      <div className="w-6-12 pl-10 ">
        <ol className="flex flex-col gap-y-10 text-start w-10/12">
          <li className="text-4xl">Supplements You Can Trust</li>
          <li className="flex gap-x-3  ">
            <div>
              <img className="h-9" src="/images/QA_100x.webp" alt="" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-1">Qeen's Award Winning</h4>
              <p>
                The only vitamin company to receive the Queen's Award for
                Innovation TWICE
              </p>
            </div>
          </li>
          <li className="flex gap-x-3">
            <div>
              <img
                className="h-9"
                src="/images/50_years_innovation_100x.avif"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-1">
                50 Years of Innovation
              </h4>
              <p>
                We've been pushing the boundaries for 50 years to help your
                family be at your best.
              </p>
            </div>
          </li>
          <li className="flex gap-x-3 ">
            <div>
              <img
                className="h-9"
                src="/images/backed_by_science_100x.webp"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-1">Backed by Science</h4>
              <p>
                No other UK vitamin company has such a diverse range of
                published research to support its products.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
