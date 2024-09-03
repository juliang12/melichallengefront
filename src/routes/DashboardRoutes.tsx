import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResultsPage from "../pages/SearchResults/SearchResultsPage";
import Layout from "../components/layout/Layout";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import { ProductProvider } from "../context/ProductProvider";

const DashboardRoutes = () => {
  return (
    <BrowserRouter>
        <ProductProvider>
      <Layout>
        <Routes>
          <Route path="/items" element={<SearchResultsPage />} />
          <Route path="/item/:id" element={<ProductDetailPage />} />
        </Routes>
      </Layout>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default DashboardRoutes;
