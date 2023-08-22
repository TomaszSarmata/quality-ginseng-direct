import ProductGrid from "@/components/products/product-grid";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import NavBar from "@/components/shared/nav-bar";

export default function ProductPage() {
  return (
    <div>
      <NavBar></NavBar>
      <Header pageTitle="Our Shop"></Header>
      <Content>
        <ProductGrid></ProductGrid>
      </Content>

      <Footer></Footer>
    </div>
  );
}
