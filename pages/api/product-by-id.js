export default function handler(req, res) {
  const id = req.query.id;
  const products = [
    {
      id: "1",
      title: "Red Korean Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
    {
      id: "2",
      title: "White Korean Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
    {
      id: "3",
      title: "American Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
    {
      id: "4",
      title: "Brasilian Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
    {
      id: "5",
      title: "Siberian Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
    {
      id: "6",
      title: "Indian Ginseng",
      subtitle: "8000mg Capsules",
      size: "90 capsules",
      price: "£9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti numquam, ipsum praesentium perspiciatis deserunt dolorem, dolorum quo recusandae soluta odit quisquam veritatis mollitia perferendis ducimus saepe cumque consectetur eligendi",
      imgUrl: "/images/",
    },
  ];
  let foundProduct;
  products.find((product) => {
    if (product.id === id) {
      foundProduct = product;
    }
  });
  res.json(foundProduct);
}
