import { c as create_ssr_component, b as escape, a as add_attribute, e as each } from "../../../chunks/index-c3e3ea9c.js";
import { GraphQLClient, gql } from "graphql-request";
async function load(context) {
  const graphcms = new GraphQLClient({}.VITE_GRAPHCMS_URL, { headers: {} });
  const query = gql`
      query PostPageQuery($slug: String!) {
        post(where: { slug: $slug }) {
          title
          date
          content {
            html
          }
          tags
          author {
            name
            title
            picture {
              fileName
              url
            }
          }
          coverImage {
            fileName
            url
          }
        }
      }
    `;
  const variables = { slug: context.params.slug };
  const { post } = await graphcms.request(query, variables);
  return { props: { post } };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `${$$result.head += `${$$result.title = `<title>${escape(post.title)}</title>`, ""}`, ""}

<h1 class="${"text-4xl font-semibold mb-7 text-gray-700"}">${escape(post.title)}</h1>
<a href="${"/"}" class="${"inline-flex items-center mb-6"}"><img${add_attribute("alt", post.author.picture.fileName, 0)}${add_attribute("src", post.author.picture.url, 0)} class="${"w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"}">
  <span class="${"flex-grow flex flex-col pl-4"}"><span class="${"title-font font-medium text-gray-900"}">${escape(post.author.name)}</span>
    <span class="${"text-gray-400 text-xs tracking-widest mt-0.5"}">${escape(post.author.title)}</span></span></a>
<div class="${"mb-6 flex justify-between"}"><div>${post.tags ? `${each(post.tags, (tag) => {
    return `<span class="${"py-1 px-2 mr-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest"}">${escape(tag)}</span>`;
  })}` : ``}</div>
  <p class="${"text-gray-400 text-xs tracking-widest mt-0.5"}">${escape(new Date(post.date).toDateString())}</p></div>
<article class="${"prose-xl"}"><!-- HTML_TAG_START -->${post.content.html}<!-- HTML_TAG_END --></article>`;
});
export { U5Bslugu5D as default, load };
