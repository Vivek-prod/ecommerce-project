import { Header } from "../../Components/Header";
import "./NotFoundPage.css";
export function NotFound({ cart }) {
  return (
    <>
      <Header cart={cart} />
      <h1 className="not-Found">Page not found</h1>
    </>
  );
}
