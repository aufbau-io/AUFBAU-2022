import { c as create_ssr_component, e as each, b as escape } from "../../chunks/index-c3e3ea9c.js";
import { GraphQLClient } from "graphql-request";
const PageQuery = (query, envVar, variables, preview) => {
  const endpoint = preview ? `https://graphql.datocms.com/environments/${envVar.env}/preview` : `https://graphql.datocms.com/environments/${envVar.env}`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${envVar.token}`
    }
  });
  return client.request(query, variables);
};
let allBlogposts = [];
async function load() {
  const data = await PageQuery("{ allBlogposts { slug postTitle } }", {
    env: {}.VITE_DATOCMS_ENVIRONMENT,
    token: {}.VITE_API_TOKEN
  }, {});
  allBlogposts = data.allBlogposts;
  return { props: { allBlogposts } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Sustainable Digital Design</title>`, ""}`, ""}

<ul><li>${allBlogposts ? `${each(allBlogposts, (post) => {
    return `<div class="${"card text-center shadow-xl border pb-10"}">
        <div class="${"card-body"}"><h2 class="${"card-title"}">${escape(post.postTitle)}</h2>
          <div class="${"justify-end card-actions"}"><a sveltekit:prefetch="${"post/" + escape(post.slug)}" href="${"post/" + escape(post.slug)}" class="${"btn btn-secondary"}">\u279C ${escape(post.postTitle)}</a>
          </div></div>
      </div>`;
  })}` : ``}</li></ul>`;
});
export { allBlogposts, Routes as default, load };
