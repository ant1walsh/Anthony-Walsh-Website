import { useEffect } from "react";
import "./index.css";
import { SHELL_HTML, initSite } from "./site";

// Faithful port: React mounts the tested shell, then the ported site logic
// (hash router, filters, AI sample, theme, etc.) runs against the DOM.
export default function App() {
  useEffect(() => { initSite(); }, []);
  return <div dangerouslySetInnerHTML={{ __html: SHELL_HTML }} />;
}
