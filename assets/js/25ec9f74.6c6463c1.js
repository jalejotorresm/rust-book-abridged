"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[462],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="14 - More about Cargo and Crates",l={unversionedId:"ch14-more-about-cargo",id:"ch14-more-about-cargo",title:"14 - More about Cargo and Crates",description:"14.1 - Customizing Builds with Release Profiles",source:"@site/docs/ch14-more-about-cargo.md",sourceDirName:".",slug:"/ch14-more-about-cargo",permalink:"/rust-book-abridged/ch14-more-about-cargo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch14-more-about-cargo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"13 - Functional Language Features: Iterators and Closures",permalink:"/rust-book-abridged/ch13-functional-language-features"},next:{title:"15 - Smart Pointers",permalink:"/rust-book-abridged/ch15-smart-pointers"}},s={},p=[{value:"14.1 - Customizing Builds with Release Profiles",id:"141---customizing-builds-with-release-profiles",level:2},{value:"14.2 - Publishing a Crate to Crates.io",id:"142---publishing-a-crate-to-cratesio",level:2},{value:"Setting Up a Crates.io Account",id:"setting-up-a-cratesio-account",level:3},{value:"Making Useful Documentation Comments",id:"making-useful-documentation-comments",level:3},{value:"Commonly Used Sections",id:"commonly-used-sections",level:3},{value:"Commenting Contained Items",id:"commenting-contained-items",level:3},{value:"Exporting a Convenient Public API with <code>pub use</code>",id:"exporting-a-convenient-public-api-with-pub-use",level:3},{value:"Adding Metadata to a New Crate",id:"adding-metadata-to-a-new-crate",level:3},{value:"Publishing Your Crate",id:"publishing-your-crate",level:3},{value:"Deprecating Versions from Crates.io with <code>cargo yank</code>",id:"deprecating-versions-from-cratesio-with-cargo-yank",level:3},{value:"14.3 - Cargo Workspaces",id:"143---cargo-workspaces",level:2},{value:"Creating a Workspace",id:"creating-a-workspace",level:3},{value:"Referencing Other Packages in the Workspace",id:"referencing-other-packages-in-the-workspace",level:3},{value:"Depending on an External Package in a Workspace",id:"depending-on-an-external-package-in-a-workspace",level:3},{value:"14.4 - Installing Binaries with cargo install",id:"144---installing-binaries-with-cargo-install",level:2},{value:"14.5 - Extending Cargo with Custom Commands",id:"145---extending-cargo-with-custom-commands",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"14---more-about-cargo-and-crates"},"14 - More about Cargo and Crates"),(0,r.kt)("h2",{id:"141---customizing-builds-with-release-profiles"},"14.1 - Customizing Builds with Release Profiles"),(0,r.kt)("p",null,"Cargo has four built-in release profiles called ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"release"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"bench"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo build")," will build in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," profile, and ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo build --release")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," profile, and the other two are used when running tests. Cargo has various settings for for these profiles, which you can override in ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[profile.dev]\nopt-level = 0\n\n[profile.release]\nopt-level = 3\n")),(0,r.kt)("p",null,"In this example ",(0,r.kt)("inlineCode",{parentName:"p"},"opt-level")," controls how much Rust tries to optimize your code and can be set from 0 to 3 (these are also the defaults - 0 for dev because you want the build to be fast, 3 for release because you want your program to be fast). For a full list of options see ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/profiles.html"},"the cargo documentation"),"."),(0,r.kt)("h2",{id:"142---publishing-a-crate-to-cratesio"},"14.2 - Publishing a Crate to Crates.io"),(0,r.kt)("p",null,"If you write a library crate, you can publish it to ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io"},"crates.io")," so other people can use it."),(0,r.kt)("h3",{id:"setting-up-a-cratesio-account"},"Setting Up a Crates.io Account"),(0,r.kt)("p",null,"To publish something on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io"},"crates.io"),", first you'll need to create an account. Then visit ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/me"},"https://crates.io/me"),", grab your API key, and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo login your-key-here\n")),(0,r.kt)("p",null,"Your API key will be stored in ",(0,r.kt)("em",{parentName:"p"},"~/.cargo/credentials"),". This is secret so if anyone gets ahold of your API key, be sure to revoke it and generate a new one, otherwise people can publish crates in your name, and before you know it all your crates will be full of crypto miners or worse."),(0,r.kt)("h3",{id:"making-useful-documentation-comments"},"Making Useful Documentation Comments"),(0,r.kt)("p",null,"One thing we haven't done much of in our examples so far is to document our public structs and functions, but if you look at any package on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io"},"crates.io")," you'll see everything has automatically generated helpful documentation. This documentation comes from ",(0,r.kt)("em",{parentName:"p"},"documentation comments")," which start with three slashes instead of two, and support markdown. Documentation comments should be placed immediately before the thing they are documenting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Adds one to the number given.\n///\n/// # Examples\n///\n/// ```\n/// let arg = 5;\n/// let answer = my_crate::add_one(arg);\n///\n/// assert_eq!(6, answer);\n/// ```\npub fn add_one(x: i32) -> i32 {\n    x + 1\n}\n")),(0,r.kt)("p",null,"If you run ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo doc --open")," in your project, you can see what the generated documentation for your project will look like. This will also include documentation for any crates that you depend on."),(0,r.kt)("h3",{id:"commonly-used-sections"},"Commonly Used Sections"),(0,r.kt)("p",null,"We used the ",(0,r.kt)("inlineCode",{parentName:"p"},"# Examples")," markdown heading above to make a section for our examples. Some other commonly used headings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"# Panics")," describes the scenarios in which the given function might panic."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"# Errors")," describes the kinds of conditions under which this function might return an error, and what kinds of errors are returned."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"# Safety")," should be present for any function that is ",(0,r.kt)("inlineCode",{parentName:"li"},"unsafe")," (see ",(0,r.kt)("a",{parentName:"li",href:"/rust-book-abridged/ch19/ch19-01-unsafe",title:"Chapter 19: Advanced Features"},"chapter 19"),").")),(0,r.kt)("p",null,"You don't need all of these on every function. Any examples you provide will automatically be run as tests when you ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo test"),", so you'll know your examples actually work."),(0,r.kt)("h3",{id:"commenting-contained-items"},"Commenting Contained Items"),(0,r.kt)("p",null,"There's a second kind of documentation comment ",(0,r.kt)("inlineCode",{parentName:"p"},"//!"),' that, instead of documenting what comes right after it, documents the "parent" of the comment. You can use these at the root of ',(0,r.kt)("em",{parentName:"p"},"src/lib.rs")," to document the crate as a whole, or inside a module to document the module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"//! # My Crate\n//!\n//! `my_crate` is a collection of utilities to make performing certain\n//! calculations more convenient.\n\n/// Adds one to the number given.\n// --snip--\n")),(0,r.kt)("h3",{id:"exporting-a-convenient-public-api-with-pub-use"},"Exporting a Convenient Public API with ",(0,r.kt)("inlineCode",{parentName:"h3"},"pub use")),(0,r.kt)("p",null,"We talked about this back in ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch07-packages-crates-modules#re-exporting-names-with-pub-use"},"chapter 7"),", but sometimes we might organize the internals of our library in such a way that makes sense to use when we're developing it, but is at odds with how someone would actually want to use our crate. If you have some struct or module that is frequently used by users of your crate, but is buried deep in the module hierarchy, this is going to be a pain point for your users."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"//! # Art\n//!\n//! A library for modeling artistic concepts.\n\npub mod kinds {\n    /// The primary colors according to the RYB color model.\n    pub enum PrimaryColor {\n        Red,\n        Yellow,\n        Blue,\n    }\n\n    /// The secondary colors according to the RYB color model.\n    pub enum SecondaryColor {\n        Orange,\n        Green,\n        Purple,\n    }\n}\n\npub mod utils {\n    use crate::kinds::*;\n\n    /// Combines two primary colors in equal amounts to create\n    /// a secondary color.\n    pub fn mix(c1: PrimaryColor, c2: PrimaryColor) -> SecondaryColor {\n        // --snip--\n    }\n}\n")),(0,r.kt)("p",null,"Users of this crate would have to write code like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use art::kinds::PrimaryColor;\nuse art::utils::mix;\n\nfn main() {\n    let red = PrimaryColor::Red;\n    let yellow = PrimaryColor::Yellow;\n    mix(red, yellow);\n}\n")),(0,r.kt)("p",null,"but users of this crate probably don't care about ",(0,r.kt)("inlineCode",{parentName:"p"},"kinds")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"utils"),' - to them this should be top level functionality for this crate. We can "re-export" these at the top level with ',(0,r.kt)("inlineCode",{parentName:"p"},"pub use"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"//! # Art\n//!\n//! A library for modeling artistic concepts.\n\npub use self::kinds::PrimaryColor;\npub use self::kinds::SecondaryColor;\npub use self::utils::mix;\n\npub mod kinds {\n    // --snip--\n}\n\npub mod utils {\n    // --snip--\n}\n")),(0,r.kt)("h3",{id:"adding-metadata-to-a-new-crate"},"Adding Metadata to a New Crate"),(0,r.kt)("p",null,"In order to publish on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io"},"crates.io"),", our crate needs a name, a description, and a valid ",(0,r.kt)("a",{parentName:"p",href:"https://spdx.org/licenses/"},"license identifier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'[package]\nname = "my_awesome_colors"\nversion = "0.1.0"\nedition = "2021"\ndescription = "A fancy awesome crate for generating colored text in the terminal."\nlicense = "MIT"\n')),(0,r.kt)("h3",{id:"publishing-your-crate"},"Publishing Your Crate"),(0,r.kt)("p",null,"To publish your package run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo publish\n")),(0,r.kt)("p",null,"If someone has already used your name on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io"},"crates.io")," then this will fail - names are handed out first-come-first-served. If you make some changes to your crate, bump the version number (using ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning rules"),") and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo publish")," again."),(0,r.kt)("h3",{id:"deprecating-versions-from-cratesio-with-cargo-yank"},"Deprecating Versions from Crates.io with ",(0,r.kt)("inlineCode",{parentName:"h3"},"cargo yank")),(0,r.kt)("p",null,"Sometimes an older version of your crate will have some terrible security bug, or has a fatal bug that completely breaks it. For this or other reasons, you'll want to stop people from installing this version and warn existing users they need to upgrade. You can't remove an old version, but you can mark it as deprecated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo yank --vers 1.0.1\n")),(0,r.kt)("p",null,"If you accidentally yank the wrong version, you can undo this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo yank --vers 1.0.1 --undo\n")),(0,r.kt)("h2",{id:"143---cargo-workspaces"},"14.3 - Cargo Workspaces"),(0,r.kt)("p",null,"Sometimes a library crate gets so large that you want to split it up into multiple smaller crates. Cargo workspaces lets you do this while keeping all the crates together in the same git repo. It's a bit like the Rust version of a monorepo. You can build all packages in a workspace by running ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo build")," from the root folder of the workspace, and run tests in all workspaces with ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo test"),"."),(0,r.kt)("h3",{id:"creating-a-workspace"},"Creating a Workspace"),(0,r.kt)("p",null,"A workspace consists of multiple packages with their own individual ",(0,r.kt)("em",{parentName:"p"},"Cargo.yaml")," files, with a single ",(0,r.kt)("em",{parentName:"p"},"Cargo.lock")," file at the root of the workspace. We'll create a simple example here with a single binary crate and two library crates. If you want to see the code for this, check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jwalton/rust-book-abridged/blob/master/examples/ch14-workspace"},"this book's GitHub repo"),". First we'll create a new directory for our workspace and initialize it as a git repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ mkdir add\n$ cd add\n$ git init .\n$ echo "/target" > .gitignore\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"add"),' directory is the root of our workspace, so all other files we create will be relative to this folder. We\'re going to add three packages to this workspace: "adder", our binary package, and "add_one" and "add_two", our libraries. Let\'s start by creating these packages as subdirectories:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo new adder\n$ cargo new add_one --lib\n$ cargo new add_two --lib\n")),(0,r.kt)("p",null,"You may have noticed that we ran ",(0,r.kt)("inlineCode",{parentName:"p"},"git init")," in the add directory - we did this because generally we want to commit the entire workspace as a single repo, and if we hadn't run ",(0,r.kt)("inlineCode",{parentName:"p"},"git init"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo new ..."),' would have "helpfully" initialized all three new packages as git repos for us.'),(0,r.kt)("p",null,"Now in the ",(0,r.kt)("em",{parentName:"p"},"add")," folder - the root folder of our workspace - we are going to create a ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml")," for the entire workspace. This ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml")," won't have any metadata or dependencies, it will simply list all the packages that make up the workspace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[workspace]\n\nmembers = [\n    "adder",\n    "add_one",\n    "add_two",\n]\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you do these in the opposite order - create the top-level Cargo.toml first and then create the child packages - it will still work, but as you create each package you'll get warnings from cargo about not being able to find the packages you haven't created yet.")),(0,r.kt)("p",null,"We can build this workspace, to make sure we did everything right:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo build\n   Compiling add_two v0.1.0 (add/add_two)\n   Compiling adder v0.1.0 (add/adder)\n   Compiling add_one v0.1.0 (add/add_one)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.11s\n")),(0,r.kt)("p",null,"At this point you should have a directory structure inside ",(0,r.kt)("em",{parentName:"p"},"add")," that looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"\u251c\u2500\u2500 .git\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 add_one\n\u2502   \u251c\u2500\u2500 Cargo.toml\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 add_two\n\u2502   \u251c\u2500\u2500 Cargo.toml\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 adder\n\u2502   \u251c\u2500\u2500 Cargo.toml\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u2514\u2500\u2500 main.rs\n\u2514\u2500\u2500 target\n")),(0,r.kt)("p",null,"Note that the top level folder has a ",(0,r.kt)("em",{parentName:"p"},"Cargo.lock")," file, but none of the child projects do."),(0,r.kt)("h3",{id:"referencing-other-packages-in-the-workspace"},"Referencing Other Packages in the Workspace"),(0,r.kt)("p",null,"We'll put this in ",(0,r.kt)("em",{parentName:"p"},"add_one/src/lib.rs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_one(x: i32) -> i32 {\n    x + 1\n}\n")),(0,r.kt)("p",null,"We want to use this library in our binary crate in the ",(0,r.kt)("em",{parentName:"p"},"adder")," folder. To do this, first we have to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"add_one")," package as a dependency of ",(0,r.kt)("inlineCode",{parentName:"p"},"adder"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="adder/Cargo.toml"',title:'"adder/Cargo.toml"'},'[dependencies]\nadd_one = { path = "../add_one" }\n')),(0,r.kt)("p",null,"And then we can ",(0,r.kt)("inlineCode",{parentName:"p"},"use add_one")," in the adder package, just as we would any other dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="adder/src/main.rs"',title:'"adder/src/main.rs"'},'use add_one;\n\nfn main() {\n    let num = 10;\n    println!("Hello, world! {num} plus one is {}!", add_one::add_one(num));\n}\n')),(0,r.kt)("p",null,"From the ",(0,r.kt)("em",{parentName:"p"},"add")," directory we can now run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo run\n    Finished dev [unoptimized + debuginfo] target(s) in 0.00s\n     Running `target/debug/adder`\nHello, world! 10 plus one is 11!\n")),(0,r.kt)("p",null,"If we had multiple packages with binary crates in the workspace, we'd have to specify which package to run with ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo run -p adder"),", or we could ",(0,r.kt)("inlineCode",{parentName:"p"},"cd adder")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo run")," from the adder folder."),(0,r.kt)("h3",{id:"depending-on-an-external-package-in-a-workspace"},"Depending on an External Package in a Workspace"),(0,r.kt)("p",null,"We can depend on an external create in a workspace by adding it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section of the appropriate package's ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml"),". For example, we can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"rand")," crate to ",(0,r.kt)("inlineCode",{parentName:"p"},"add_one")," in ",(0,r.kt)("em",{parentName:"p"},"add_one/Cargo.toml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="add_one/Cargo.toml"',title:'"add_one/Cargo.toml"'},'[dependencies]\nrand = "0.8.5"\n')),(0,r.kt)("p",null,"If we add ",(0,r.kt)("inlineCode",{parentName:"p"},"use rand;")," inside ",(0,r.kt)("em",{parentName:"p"},"add_one/src/lib.rs"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo build"),", we'll see the ",(0,r.kt)("inlineCode",{parentName:"p"},"rand")," package being downloaded. We'll also get a warning because we're ",(0,r.kt)("inlineCode",{parentName:"p"},"use"),"ing rand, but we never reference it in the library. Oops!"),(0,r.kt)("p",null,"If we want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"rand")," in other packages in our workspace, we have to add it again to the appropriate ",(0,r.kt)("em",{parentName:"p"},"Cargo.yaml"),". Since there's only one ",(0,r.kt)("em",{parentName:"p"},"Cargo.lock")," file for the whole workspace, if ",(0,r.kt)("inlineCode",{parentName:"p"},"adder")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"add_one")," both depend on ",(0,r.kt)("inlineCode",{parentName:"p"},"rand"),", we know that they will both depend on the same version of ",(0,r.kt)("inlineCode",{parentName:"p"},"rand")," thanks to the common lockfile (at least, assuming the have compatible semver versions in the different ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml")," files)."),(0,r.kt)("h2",{id:"144---installing-binaries-with-cargo-install"},"14.4 - Installing Binaries with cargo install"),(0,r.kt)("p",null,"You can publish more than just library crates to crates.io - you can also publish binary crates! Users can install your crates with ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo install"),". (This is very similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g")," if you're a node.js developer.) For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"ripgrep")," is a very fast alternative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"grep")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo install ripgrep\n")),(0,r.kt)("p",null,"Binaries you install this way get put in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin")," (assuming you're running a default installation of cargo from rustup). You'll probably want to put this folder in your shell's ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),". The name of the installed binary is not necessarily the same as the name of the crate. If you try installing ",(0,r.kt)("inlineCode",{parentName:"p"},"ripgrep")," above, for example, it will install ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.cargo/rg"),"."),(0,r.kt)("h2",{id:"145---extending-cargo-with-custom-commands"},"14.5 - Extending Cargo with Custom Commands"),(0,r.kt)("p",null,"Much like git, you can create your own custom cargo commands. If there's an executable on your path called ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-something"),", then you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo something")," to run that executable. These custom commands will also show up in ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo --list"),"."),(0,r.kt)("p",null,"Continue to ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch15-smart-pointers",title:"Chapter 15: Smart Pointers"},"chapter 15"),"."))}u.isMDXComponent=!0}}]);