(this["webpackJsonptailwind-image-gallery"]=this["webpackJsonptailwind-image-gallery"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),m=(a(9),a(10),a(1)),s=a(13),o=function(e){var t=e.image,a=t.tags.split(",");return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg"},l.a.createElement("img",{src:t.webformatURL,alt:"",className:"w-full"}),l.a.createElement("div",{className:"px-6 py-4"},l.a.createElement("div",{className:"font-bold text-purple-500 text-xl mb-2"},"Photo by ",t.user),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Views: "),t.views),l.a.createElement("li",null,l.a.createElement("strong",null,"Downloads: "),t.downloads),l.a.createElement("li",null,l.a.createElement("strong",null,"Likes: "),t.likes))),l.a.createElement("div",{className:"px-6 py-4"},a.map((function(e){return l.a.createElement("span",{key:Object(s.a)(),className:" inline-block bg-gray-200 rounded-full px-3 py-1  text-sm font-semibold text-grey-700 mr-2"},"#",e)}))))},i=function(e){var t=e.searchText,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],s=r[1];return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c)},className:"w-full max-w-sm"},l.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2"},l.a.createElement("input",{onChange:function(e){return s(e.target.value)},className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search Image Term..."}),l.a.createElement("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit"},"Search"))))},u=function(){return l.a.createElement("div",{className:"loader-container"},l.a.createElement("div",{className:"load-wrap"},l.a.createElement("div",{className:"load"},l.a.createElement("div",{className:"spinner"},l.a.createElement("div",{className:"bubble-1"}),l.a.createElement("div",{className:"bubble-2"})))))};var d=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),s=Object(m.a)(c,2),d=s[0],b=s[1],p=Object(n.useState)(""),f=Object(m.a)(p,2),E=f[0],g=f[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("18546477-a9ea7b61b77854889e4beaaff","&q=").concat(E,"&image_type=photo")).then((function(e){return e.json()})).then((function(e){r(e.hits),b(!1)})).catch((function(e){return console.log(e)}))}),[E]),l.a.createElement("div",{className:"container mx-auto"},l.a.createElement(i,{searchText:function(e){return g(e)}}),!d&&0===a.length&&l.a.createElement("h1",{className:"text-3xl text-center mx-auto mt-32"},"No Images Found"),d?l.a.createElement(u,null):l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},a.map((function(e){return l.a.createElement(o,{key:e.id,image:e})}))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.a2e875b2.chunk.js.map