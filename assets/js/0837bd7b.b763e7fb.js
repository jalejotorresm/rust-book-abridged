"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[5380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var h=2;h<o;h++)i[h]=a[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1,slug:"/",title:"The Rust Book (Abridged)",hide_title:!0},i=void 0,s={unversionedId:"ch00-intro",id:"ch00-intro",title:"The Rust Book (Abridged)",description:"The Rust Book (Abridged)",source:"@site/docs/ch00-intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch00-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"The Rust Book (Abridged)",hide_title:!0},sidebar:"tutorialSidebar",next:{title:"1 - Getting Started",permalink:"/ch01-getting-started"}},l={},h=[{value:"Why an Abridged Version?",id:"why-an-abridged-version",level:2},{value:"What&#39;s different about this book?",id:"whats-different-about-this-book",level:2},{value:"Table of Contents",id:"table-of-contents",level:2}],p={toc:h},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("h1",null,"The Rust Book (Abridged)"),(0,n.kt)("p",null,"v0.0.2 - Draft"),(0,n.kt)("p",null,"By Jason Walton"),(0,n.kt)("p",null,"Based on ",(0,n.kt)("a",{href:"https://github.com/rust-lang/book/commit/c06006157b14b3d47b5c716fc392b77f3b2e21ce"},'"The Rust Programming Language"')," by Steve Klabnik and Carol Nichols.")),(0,n.kt)("h2",{id:"why-an-abridged-version"},"Why an Abridged Version?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/book/title-page.html"},'"The Rust Programming Language"'),' (AKA "the Rust Book") is a great resource for learning Rust, especially if you\'re new to programming. If you fall into this category, then I strongly suggest you put this book down and go read it instead.'),(0,n.kt)("p",null,"But... the Rust Book is a bit wordy. It's an excellent introduction to Rust, but (fortunately or unfortunately, depending on your viewpoint) it's also an excellent introduction to many computer programming concepts. If you're already familiar with one or more other programming languages, then you are no doubt familiar with these concepts already."),(0,n.kt)("p",null,"Take, for example, this excerpt from the section on functions:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"We define a function in Rust by entering ",(0,n.kt)("inlineCode",{parentName:"p"},"fn")," followed by a function name and a set of parentheses. The curly brackets tell the compiler where the function body begins and ends. We can call any function we've defined by entering its name followed by a set of parentheses.")),(0,n.kt)("p",null,"If you're a veteran programmer, this paragraph is probably something you didn't need to read. The ",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/book/ch10-00-generics.html#removing-duplication-by-extracting-a-function"},"start of chapter 10")," essentially explains ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"DRY principal")," at great length. ",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/book/ch12-04-testing-the-librarys-functionality.html"},"Chapter 12")," spends quite a few paragraphs devoted to learning about test driven development (TDD). This is all stuff you already know."),(0,n.kt)("p",null,"This isn't meant to be a criticism of the Rust Book. It's excellent and well written, and there's a reason I chose it as the basis for this book. The problem here is not with the original book, but more a mismatch when it comes to intended audience."),(0,n.kt)("h2",{id:"whats-different-about-this-book"},"What's different about this book?"),(0,n.kt)("p",null,"This book is a rewrite of the Rust book, trying to make it less loquacious. The chapter names are all the same, and in many cases the subsections in each chapter are the same. In most cases examples have been copied directly from the original. This book tries to present information in the same order as the original Rust Book, but leaves out all the things an experienced developer would already know and focuses more on the parts that make Rust unique. (There's also an extra chapter about async Rust!)"),(0,n.kt)("p",null,"Where the original would build up a code example piece by piece, in most cases this version presents the finished code so you can read through it, and then points out some interesting parts. Where possible I've tried to add in material I think an advanced reader would find interesting. In places where I found the original book confusing I've tried to explain things in a different way."),(0,n.kt)("p",null,"By using the same example code and keeping things in more or less the same order, the hope is that you can read this book, and if you come across something new or unclear, you can switch over to the original version of the Rust book and read the same section, with the exact same examples, and hopefully it will clear things up for you. (If this happens, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jwalton/rust-book-abridged/issues"},"raise an issue")," to let me know where you got lost so I can improve this version!)"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'This book is a work-in-progress. I wrote this while I was reading "The Rust Programming Language" and learning Rust, so if there are things you find in here that you think are wrong, it\'s entirely possible that this is because they ',(0,n.kt)("em",{parentName:"p"},"are")," wrong! Again, please feel free to raise an issue, or a PR and let me know!")),(0,n.kt)("p",null,"If you emjoy this book, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jwalton/rust-book-abridged"},"give it a star on GitHub"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sponsors/jwalton"},"buy me a coffee"),"."),(0,n.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch01-getting-started",title:"Chapter 1: Getting Started"},"Chapter 1: Getting Started")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch02-guessing-game",title:"Chapter 2: Guessing Game"},"Chapter 2: Guessing Game")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch03-common-programming-concepts",title:"Chapter 3: Common Programming Concepts"},"Chapter 3: Common Programming Concepts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch04-ownership",title:"Chapter 4: Ownership, References, and Slices"},"Chapter 4: Ownership, References, and Slices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch05-structs",title:"Chapter 5: Using Structs to Structure Related Data"},"Chapter 5: Using Structs to Structure Related Data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch06-enums-and-pattern-matching",title:"Chapter 6: Enums and Pattern Matching"},"Chapter 6: Enums and Pattern Matching")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch07-packages-crates-modules",title:"Chapter 7: Managing Growing Projects with Packages, Crates, and Modules"},"Chapter 7: Managing Growing Projects with Packages, Crates, and Modules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch08-common-collections",title:"Chapter 8: Common Collections"},"Chapter 8: Common Collections")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch09-error-handling",title:"Chapter 9: Error Handling"},"Chapter 9: Error Handling")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch10/ch10-01-generic-data-types",title:"Chapter 10: Generic Types, Traits, and Lifetimes"},"Chapter 10: Generic Types, Traits, and Lifetimes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch11-automated-tests",title:"Chapter 11: Writing Automated Tests"},"Chapter 11: Writing Automated Tests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch12-io-project-cli",title:"Chapter 12: An I/O Project: Building a Command Line Program"},"Chapter 12: An I/O Project: Building a Command Line Program")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch13-functional-language-features",title:"Chapter 13: Functional Language Features: Iterators and Closures"},"Chapter 13: Functional Language Features: Iterators and Closures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch14-more-about-cargo",title:"Chapter 14: More About Cargo and Crates.io"},"Chapter 14: More About Cargo and Crates.io")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch15-smart-pointers",title:"Chapter 15: Smart Pointers"},"Chapter 15: Smart Pointers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch16-fearless-concurrency",title:"Chapter 16: Fearless Concurrency"},"Chapter 16: Fearless Concurrency")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch17-object-oriented-features",title:"Chapter 17: Object Oriented Features of Rust"},"Chapter 17: Object Oriented Features of Rust")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch18-patterns-and-matching",title:"Chapter 18: Patterns and Matching"},"Chapter 18: Patterns and Matching")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch19/ch19-01-unsafe",title:"Chapter 19: Advanced Features"},"Chapter 19: Advanced Features")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch20/ch20-01-single-threaded-web-server",title:"Chapter 20: Multithreaded Web Server"},"Chapter 20: Multithreaded Web Server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ch21-async",title:"Chapter 21: Bonus Chapter: Async Programming"},"Chapter 21: Bonus Chapter: Async Programming"))))}c.isMDXComponent=!0}}]);