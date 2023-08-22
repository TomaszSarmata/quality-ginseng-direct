export default function handler(req, res) {
  const products = [
    {
      title: "Red Korean Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
    {
      title: "White Korean Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
    {
      title: "American Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
    {
      title: "Brasilian Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
    {
      title: "Siberian Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
    {
      title: "Indian Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
  ];
  res.json(products);
}
