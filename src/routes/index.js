import header from "../templates/header";
import home from "../pages/home";
import characters from "../pages/character";
import error404 from "../pages/error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";


const routes = {
  "/": home,
  "/:id": characters,
  "/Contact": "Contact",
};

const router = async () => {
  const headers = null || document.getElementById("headers");
  const content = null || document.getElementById("content");

  headers.innerHTML = await header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes [route] ? routes [route] : error404 ;
  content.innerHTML = await render();
};

export default router;
