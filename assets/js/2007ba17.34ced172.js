"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},o="1 - Getting Started",l={unversionedId:"ch01-getting-started",id:"ch01-getting-started",title:"1 - Getting Started",description:"This chapter is going to get Rust installed, and explain how to use cargo to create and build a new project.",source:"@site/docs/ch01-getting-started.md",sourceDirName:".",slug:"/ch01-getting-started",permalink:"/rust-book-abridged/ch01-getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch01-getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Rust Book (Abridged)",permalink:"/rust-book-abridged/"},next:{title:"2 - Programming a Guessing Game",permalink:"/rust-book-abridged/ch02-guessing-game"}},s={},c=[{value:"1.1 - Installation",id:"11---installation",level:2},{value:"1.2 - Hello, World!",id:"12---hello-world",level:2},{value:"1.3 - Hello, Cargo!",id:"13---hello-cargo",level:2},{value:"Creating a Project with Cargo",id:"creating-a-project-with-cargo",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1---getting-started"},"1 - Getting Started"),(0,r.kt)("p",null,"This chapter is going to get Rust installed, and explain how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," to create and build a new project."),(0,r.kt)("h2",{id:"11---installation"},"1.1 - Installation"),(0,r.kt)("p",null,"On Linux or MacOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh\nxcode-select --install\n")),(0,r.kt)("p",null,"On Windows, you can still use ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup"),", but check ",(0,r.kt)("a",{parentName:"p",href:"https://forge.rust-lang.org/infra/other-installation-methods.html"},"the official documentation")," for how to go about installing it."),(0,r.kt)("p",null,"Verify your installation with ",(0,r.kt)("inlineCode",{parentName:"p"},"rustc --version"),". Upgrade with ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup update"),"."),(0,r.kt)("h2",{id:"12---hello-world"},"1.2 - Hello, World!"),(0,r.kt)("p",null,'Tradition dictates that we can\'t learn a new programming language without starting with a program that prints "Hello, world!". Let\'s create a file called "main.rs":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="main.rs"',title:'"main.rs"'},'fn main() {\n    println!("Hello, world!");\n}\n')),(0,r.kt)("p",null,'Indenting in Rust is done with four spaces, not tabs, and statements end with ";". Here we\'re calling the ',(0,r.kt)("inlineCode",{parentName:"p"},"println!")," macro - you can tell its a macro because it ends with ",(0,r.kt)("inlineCode",{parentName:"p"},"!"),". You can run this with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ rustc main.rs\n$ ./main\nHello, world!\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rustc")," compiles the source to an executable called ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),", and then ",(0,r.kt)("inlineCode",{parentName:"p"},"./main")," runs the executable."),(0,r.kt)("h2",{id:"13---hello-cargo"},"1.3 - Hello, Cargo!"),(0,r.kt)("p",null,"Cargo is Rust's build system and package manager. It's a bit like ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," in JavaScript, or the ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," command in Go."),(0,r.kt)("h3",{id:"creating-a-project-with-cargo"},"Creating a Project with Cargo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo new hello_cargo\n$ cd hello_cargo\n")),(0,r.kt)("p",null,"This creates a ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml")," file and a ",(0,r.kt)("em",{parentName:"p"},"src/main.rs")," file inside a new folder, and also initializes the new folder as a git repo. ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml")," is a ",(0,r.kt)("a",{parentName:"p",href:"https://toml.io/en/"},"toml")," file (which looks a lot like an old-fashioned Windows .ini file). The ",(0,r.kt)("inlineCode",{parentName:"p"},"[package]")," section of ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml")," describes metadata about the current package, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section lists any libraries (aka ",(0,r.kt)("em",{parentName:"p"},"crates"),") that your project depends on."),(0,r.kt)("p",null,"We can build and run this project with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo build\n$ ./target/debug/hello_cargo\n")),(0,r.kt)("p",null,"Or with this shortcut, which is equivalent to the above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo run\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo build")," creates a ",(0,r.kt)("em",{parentName:"p"},"Cargo.lock")," file - this is a dependency lockfile which means if you share this project with a friend, and they ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo build"),", they'll get exactly the same dependencies that you did. It's a good idea to commit the lockfile to your source code management tool."),(0,r.kt)("p",null,"You can verify that a project compiles without producing an executable with ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo check"),", which is often much faster than ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo build"),'. You can build a "release version" of your code with ',(0,r.kt)("inlineCode",{parentName:"p"},"cargo build --release")," which will generate an executable in target/release instead of target/debug. The release version will be missing symbols and some runtime safety checks, and will be better optimized."),(0,r.kt)("p",null,"Continue to ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch02-guessing-game",title:"Chapter 2: Guessing Game"},"chapter 2"),"."))}d.isMDXComponent=!0}}]);