import { c as create_ssr_component, b as escape, v as validate_component } from "../../chunks/index-c3e3ea9c.js";
const ErrorScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let error = {};
  let status;
  return `${$$result.head += `${$$result.title = `<title>${escape(status)}</title>`, ""}`, ""}

<h1>${escape(status)}: ${escape(error.message)}</h1>`;
});
const NotFoundScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>404 not found</title>`, ""}`, ""}
<section class="${"w-screen h-screen bg-black text-white"}"><div class="${"container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"}"><h1>404 error</h1>
  <p>The page you are looking for does not exist.
  </p></div></section>`;
});
function load({ error, status }) {
  return { props: { error, status } };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  let { status } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `
${status == 404 ? `${validate_component(NotFoundScreen, "NotFoundScreen").$$render($$result, {}, {}, {})}` : `${validate_component(ErrorScreen, "ErrorScreen").$$render($$result, { error, status }, {}, {})}`}`;
});
export { _error as default, load };
