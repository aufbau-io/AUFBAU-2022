import { c as create_ssr_component, v as validate_component } from "../../chunks/index-c3e3ea9c.js";
import { H as Header, F as Footer } from "../../chunks/app-b2d11874.js";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"bg-black"}"><div class="${"container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"}">${slots.default ? slots.default({}) : ``}</div></main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
