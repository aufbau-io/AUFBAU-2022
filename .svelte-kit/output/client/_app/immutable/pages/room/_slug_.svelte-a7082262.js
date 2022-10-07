import{S as ne,i as oe,s as ue,l as Z,g,e as _,t as I,c as p,a as v,h as L,d as o,b as f,G as h,j,K as ce,k as N,N as fe,m as S,O as ee,n as te}from"../../chunks/index-817d695a.js";import{d as le}from"../../chunks/index-85b3d03b.js";function ae(r,a,s){const l=r.slice();return l[1]=a[s],l}function se(r){let a,s=r[0].tags,l=[];for(let e=0;e<s.length;e+=1)l[e]=re(ae(r,s,e));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();a=Z()},l(e){for(let i=0;i<l.length;i+=1)l[i].l(e);a=Z()},m(e,i){for(let n=0;n<l.length;n+=1)l[n].m(e,i);g(e,a,i)},p(e,i){if(i&1){s=e[0].tags;let n;for(n=0;n<s.length;n+=1){const m=ae(e,s,n);l[n]?l[n].p(m,i):(l[n]=re(m),l[n].c(),l[n].m(a.parentNode,a))}for(;n<l.length;n+=1)l[n].d(1);l.length=s.length}},d(e){ce(l,e),e&&o(a)}}}function re(r){let a,s=r[1]+"",l;return{c(){a=_("span"),l=I(s),this.h()},l(e){a=p(e,"SPAN",{class:!0});var i=v(a);l=L(i,s),i.forEach(o),this.h()},h(){f(a,"class","py-1 px-2 mr-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest")},m(e,i){g(e,a,i),h(a,l)},p(e,i){i&1&&s!==(s=e[1]+"")&&j(l,s)},d(e){e&&o(a)}}}function he(r){let a,s,l,e=r[0].title+"",i,n,m,d,C,G,K,w,k,A=r[0].author.name+"",H,O,P,D=r[0].author.title+"",M,T,b,q,z,x,y=new Date(r[0].date).toDateString()+"",R,V,E,Q=r[0].content.html+"";document.title=a=r[0].title;let c=r[0].tags&&se(r);return{c(){s=N(),l=_("h1"),i=I(e),n=N(),m=_("a"),d=_("img"),K=N(),w=_("span"),k=_("span"),H=I(A),O=N(),P=_("span"),M=I(D),T=N(),b=_("div"),q=_("div"),c&&c.c(),z=N(),x=_("p"),R=I(y),V=N(),E=_("article"),this.h()},l(t){fe('[data-svelte="svelte-iu3vwn"]',document.head).forEach(o),s=S(t),l=p(t,"H1",{class:!0});var F=v(l);i=L(F,e),F.forEach(o),n=S(t),m=p(t,"A",{href:!0,class:!0});var U=v(m);d=p(U,"IMG",{alt:!0,src:!0,class:!0}),K=S(U),w=p(U,"SPAN",{class:!0});var $=v(w);k=p($,"SPAN",{class:!0});var J=v(k);H=L(J,A),J.forEach(o),O=S($),P=p($,"SPAN",{class:!0});var W=v(P);M=L(W,D),W.forEach(o),$.forEach(o),U.forEach(o),T=S(t),b=p(t,"DIV",{class:!0});var B=v(b);q=p(B,"DIV",{});var X=v(q);c&&c.l(X),X.forEach(o),z=S(B),x=p(B,"P",{class:!0});var Y=v(x);R=L(Y,y),Y.forEach(o),B.forEach(o),V=S(t),E=p(t,"ARTICLE",{class:!0});var ie=v(E);ie.forEach(o),this.h()},h(){f(l,"class","text-4xl font-semibold mb-7 text-gray-700"),f(d,"alt",C=r[0].author.picture.fileName),ee(d.src,G=r[0].author.picture.url)||f(d,"src",G),f(d,"class","w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"),f(k,"class","title-font font-medium text-gray-900"),f(P,"class","text-gray-400 text-xs tracking-widest mt-0.5"),f(w,"class","flex-grow flex flex-col pl-4"),f(m,"href","/"),f(m,"class","inline-flex items-center mb-6"),f(x,"class","text-gray-400 text-xs tracking-widest mt-0.5"),f(b,"class","mb-6 flex justify-between"),f(E,"class","prose-xl")},m(t,u){g(t,s,u),g(t,l,u),h(l,i),g(t,n,u),g(t,m,u),h(m,d),h(m,K),h(m,w),h(w,k),h(k,H),h(w,O),h(w,P),h(P,M),g(t,T,u),g(t,b,u),h(b,q),c&&c.m(q,null),h(b,z),h(b,x),h(x,R),g(t,V,u),g(t,E,u),E.innerHTML=Q},p(t,[u]){u&1&&a!==(a=t[0].title)&&(document.title=a),u&1&&e!==(e=t[0].title+"")&&j(i,e),u&1&&C!==(C=t[0].author.picture.fileName)&&f(d,"alt",C),u&1&&!ee(d.src,G=t[0].author.picture.url)&&f(d,"src",G),u&1&&A!==(A=t[0].author.name+"")&&j(H,A),u&1&&D!==(D=t[0].author.title+"")&&j(M,D),t[0].tags?c?c.p(t,u):(c=se(t),c.c(),c.m(q,null)):c&&(c.d(1),c=null),u&1&&y!==(y=new Date(t[0].date).toDateString()+"")&&j(R,y),u&1&&Q!==(Q=t[0].content.html+"")&&(E.innerHTML=Q)},i:te,o:te,d(t){t&&o(s),t&&o(l),t&&o(n),t&&o(m),t&&o(T),t&&o(b),c&&c.d(),t&&o(V),t&&o(E)}}}async function de(r){const a=new le.GraphQLClient({}.VITE_GRAPHCMS_URL,{headers:{}}),s=le.gql`
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
    `,l={slug:r.params.slug},{post:e}=await a.request(s,l);return{props:{post:e}}}function me(r,a,s){let{post:l}=a;return r.$$set=e=>{"post"in e&&s(0,l=e.post)},[l]}class ve extends ne{constructor(a){super(),oe(this,a,me,he,ue,{post:0})}}export{ve as default,de as load};
