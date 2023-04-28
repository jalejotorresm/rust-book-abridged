"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[194],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},l="18 - Patterns and Matching",o={unversionedId:"ch18-patterns-and-matching",id:"ch18-patterns-and-matching",title:"18 - Patterns and Matching",description:"18.1 - All the Places Patterns Can Be Used",source:"@site/docs/ch18-patterns-and-matching.md",sourceDirName:".",slug:"/ch18-patterns-and-matching",permalink:"/rust-book-abridged/ch18-patterns-and-matching",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch18-patterns-and-matching.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"17 - Object Oriented Features of Rust",permalink:"/rust-book-abridged/ch17-object-oriented-features"},next:{title:"19 - Advanced Features",permalink:"/rust-book-abridged/category/19---advanced-features"}},s={},p=[{value:"18.1 - All the Places Patterns Can Be Used",id:"181---all-the-places-patterns-can-be-used",level:2},{value:"<code>match</code> Arms",id:"match-arms",level:3},{value:"Conditional <code>if let</code> Expressions",id:"conditional-if-let-expressions",level:3},{value:"<code>while let</code> Conditional Loops",id:"while-let-conditional-loops",level:3},{value:"<code>for</code> Loops",id:"for-loops",level:3},{value:"<code>let</code> statements",id:"let-statements",level:3},{value:"Function and Closure Parameters",id:"function-and-closure-parameters",level:3},{value:"The <code>matches!</code> Macro",id:"the-matches-macro",level:3},{value:"18.2 - Refutability: Whether a Pattern Might Fail to Match",id:"182---refutability-whether-a-pattern-might-fail-to-match",level:2},{value:"18.3 - Pattern Syntax",id:"183---pattern-syntax",level:2},{value:"Matching Literals",id:"matching-literals",level:3},{value:"Matching Named Variables",id:"matching-named-variables",level:3},{value:"Multiple Patterns",id:"multiple-patterns",level:3},{value:"Destructuring to Break Apart Values",id:"destructuring-to-break-apart-values",level:3},{value:"Ignoring Values in a Pattern",id:"ignoring-values-in-a-pattern",level:3},{value:"Ignoring an Unused Variable by Starting Its Name with <code>_</code>",id:"ignoring-an-unused-variable-by-starting-its-name-with-_",level:2},{value:"Ignoring Remaining Parts of a Value with <code>..</code>",id:"ignoring-remaining-parts-of-a-value-with-",level:3},{value:"Extra Conditionals with Match Guards",id:"extra-conditionals-with-match-guards",level:3},{value:"<code>@</code> Bindings",id:"-bindings",level:3}],u={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"18---patterns-and-matching"},"18 - Patterns and Matching"),(0,r.kt)("h2",{id:"181---all-the-places-patterns-can-be-used"},"18.1 - All the Places Patterns Can Be Used"),(0,r.kt)("p",null,"We've already talked about using patterns in ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"if let")," expressions, but actually patterns are everywhere in Rust.  A destructuring assignment is actually an example of a pattern."),(0,r.kt)("h3",{id:"match-arms"},(0,r.kt)("inlineCode",{parentName:"h3"},"match")," Arms"),(0,r.kt)("p",null,"As seen in ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch06-enums-and-pattern-matching",title:"Chapter 6: Enums and Pattern Matching"},"chapter 6"),", the arms of a ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," use patterns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"match VALUE {\n    PATTERN => EXPRESSION,\n    PATTERN => EXPRESSION,\n    PATTERN => EXPRESSION,\n}\n")),(0,r.kt)("p",null,"The patterns in a ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," need to be ",(0,r.kt)("em",{parentName:"p"},"exhaustive")," - they need to cover every possibility.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," pattern will match anything and not bind to a variable, so it will often be used as a catch-all at the end of a ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),"."),(0,r.kt)("p",null,"In this example, we extract a value from a ",(0,r.kt)("inlineCode",{parentName:"p"},"Some"),".  Note that value we extract in this example will shadow the outer variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"match i {\n    None => None,\n    Some(i) => Some(i + 1),\n}\n")),(0,r.kt)("h3",{id:"conditional-if-let-expressions"},"Conditional ",(0,r.kt)("inlineCode",{parentName:"h3"},"if let")," Expressions"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch06-enums-and-pattern-matching",title:"Chapter 6: Enums and Pattern Matching"},"chapter 6")," we also so how to use an ",(0,r.kt)("inlineCode",{parentName:"p"},"if let")," expression.  These use patterns just like a ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),", but they don't have to be exhaustive (which can be an advantage or a disadvantage, depending on the situation) and we can mix patterns with different values.  This example uses a number of different inputs to decide what color to use as a background color:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let favorite_color: Option<&str> = None;\n    let is_tuesday = false;\n    let age: Result<u8, _> = "34".parse();\n\n    if let Some(color) = favorite_color {\n        println!("Using your favorite color, {color}, as the background");\n    } else if is_tuesday {\n        println!("Tuesday is green day!");\n    } else if let Ok(age) = age {\n        if age > 30 {\n            println!("Using purple as the background color");\n        } else {\n            println!("Using orange as the background color");\n        }\n    } else {\n        println!("Using blue as the background color");\n    }\n}\n')),(0,r.kt)("p",null,"Note in this example we used ",(0,r.kt)("inlineCode",{parentName:"p"},"let Ok(age) = age")," to create a shadowed variable for ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),", similar to what we did in our ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," example above."),(0,r.kt)("h3",{id:"while-let-conditional-loops"},(0,r.kt)("inlineCode",{parentName:"h3"},"while let")," Conditional Loops"),(0,r.kt)("p",null,"We can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"while let")," loop, which is very similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"if let")," syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    let mut stack = Vec::new();\n\n    stack.push(1);\n    stack.push(2);\n    stack.push(3);\n\n    // This prints 3, 2, then 1.  When `pop`\n    // returns `None`, this loop will stop.\n    while let Some(top) = stack.pop() {\n        println!("{}", top);\n    }\n')),(0,r.kt)("h3",{id:"for-loops"},(0,r.kt)("inlineCode",{parentName:"h3"},"for")," Loops"),(0,r.kt)("p",null,"In a ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop, the bit immediately after the ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," keyword is actually a pattern!  We can use this to destructure values from an iterator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"    let v = vec!['a', 'b', 'c'];\n\n    for (index, value) in v.iter().enumerate() {\n        println!(\"{} is at index {}\", value, index);\n    }\n")),(0,r.kt)("h3",{id:"let-statements"},(0,r.kt)("inlineCode",{parentName:"h3"},"let")," statements"),(0,r.kt)("p",null,"Simple let statements use patterns too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let x = 5;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"x")," here is a pattern, albeit a very boring one.  Using it here is similar to using ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," as a pattern in a ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),".  The fact that this is a pattern is what makes it possible to do destructuring assignment in Rust:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let (x, y, z) = (1, 2, 3);\n")),(0,r.kt)("h3",{id:"function-and-closure-parameters"},"Function and Closure Parameters"),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"let"),", the parameters of a function are also patterns.  We can use this to destructure a tuple or struct in a function declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn print_coordinates(&(x, y): &(i32, i32)) {\n    println!("Current location: ({}, {})", x, y);\n}\n\nfn main() {\n    let point = (3, 5);\n    print_coordinates(&point);\n}\n')),(0,r.kt)("h3",{id:"the-matches-macro"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"matches!")," Macro"),(0,r.kt)("p",null,"Rust provides a handy macro that can be used to check if a value matches a specific pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let foo = 'f';\nassert!(matches!(foo, 'A'..='Z' | 'a'..='z'));\n\nlet bar = Some(4);\nassert!(matches!(bar, Some(x) if x % 2 == 0));\n")),(0,r.kt)("h2",{id:"182---refutability-whether-a-pattern-might-fail-to-match"},"18.2 - Refutability: Whether a Pattern Might Fail to Match"),(0,r.kt)("p",null,"In this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"match i {\n    None => None,\n    Some(1) => Some(2),\n    x => Some(x + 2),\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Some(1)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," are examples of ",(0,r.kt)("em",{parentName:"p"},"refutable")," patterns.  Either of these patterns, taken alone, might or might not match ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),".  ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is an example of an ",(0,r.kt)("em",{parentName:"p"},"irrefutable")," pattern.  ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," will always match, no matter what."),(0,r.kt)("p",null,"There are some places where we're only allowed to use irrefutable patterns.  For example, consider the statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let Some(x) = value;\n")),(0,r.kt)("p",null,"Here if ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Some(1)"),", then we expect ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," to get the value 1.  But if ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," were ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),", what would ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," be here?  This statement makes no sense, and will result in a compiler error, because an assignment needs an irrefutable pattern.  (Although we could fix this with an ",(0,r.kt)("inlineCode",{parentName:"p"},"if let")," instead.)"),(0,r.kt)("p",null,"There are also places where an irrefutable parameter is allowed, but is somewhat pointless, which will generate compiler warnings, such as this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'if let x = 5 {\n    println!("{}", x);\n}\n')),(0,r.kt)("p",null,"This is technically valid Rust code, but there aren't any good reasons to write something like this, so this is probably a mistake."),(0,r.kt)("h2",{id:"183---pattern-syntax"},"18.3 - Pattern Syntax"),(0,r.kt)("h3",{id:"matching-literals"},"Matching Literals"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let x = 1;\n\nmatch x {\n    1 => println!("one"),\n    2 => println!("two"),\n    3 => println!("three"),\n    _ => println!("anything"),\n}\n')),(0,r.kt)("h3",{id:"matching-named-variables"},"Matching Named Variables"),(0,r.kt)("p",null,"Named variables are irrefutable patterns that match any value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let x = Some(5);\nlet y = 10;\n\nmatch x {\n    Some(50) => println!("Got 50"),\n    y => println!("Matched, y = {y}"),\n}\n\nprintln!("at the end: x = {:?}, y = {y}", x);\n')),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," will match any value.  Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," does ",(0,r.kt)("em",{parentName:"p"},"not")," match only ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," here."),(0,r.kt)("h3",{id:"multiple-patterns"},"Multiple Patterns"),(0,r.kt)("p",null,"You can match more than one value with the ",(0,r.kt)("inlineCode",{parentName:"p"},"|"),' "or operator", or with a range expression:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let x = 1;\n\nmatch x {\n    1 | 2 => println!("one or two"),\n    3..=5 => println!("three, four, or five"),\n    _ => println!("anything"),\n}\n')),(0,r.kt)("h3",{id:"destructuring-to-break-apart-values"},"Destructuring to Break Apart Values"),(0,r.kt)("p",null,"We can destructure a struct or tuple with a pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct Point {\n    x: i32,\n    y: i32,\n}\n\nfn main() {\n    let p = Point { x: 0, y: 7 };\n\n    // Can rename the values when we destructure:\n    let Point { x: a, y: b } = p;\n    assert_eq!(0, a);\n    assert_eq!(7, b);\n\n    // Or not:\n    let Point { x, y } = p;\n    assert_eq!(0, x);\n    assert_eq!(7, y);\n}\n")),(0,r.kt)("p",null,"We can also destructure with literal values as part of a pattern.  The first two arms of this ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," only match when ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," is 0 or ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is 0, respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let p = Point { x: 0, y: 7 };\n\n    match p {\n        Point { x, y: 0 } => println!("On the x axis at {x}"),\n        Point { x: 0, y } => println!("On the y axis at {y}"),\n        Point { x, y } => {\n            println!("On neither axis: ({x}, {y})");\n        }\n    }\n}\n')),(0,r.kt)("p",null,"We've seen examples already of destructuring enums:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'enum Message {\n    Quit,\n    Move { x: i32, y: i32 },\n    Write(String),\n    ChangeColor(i32, i32, i32),\n}\n\nfn main() {\n    let msg = Message::ChangeColor(0, 160, 255);\n\n    match msg {\n        Message::Quit => {\n            println!("The Quit variant has no data to destructure.");\n        }\n        Message::Move { x, y } => {\n            println!("Move in the x direction {x} and in the y direction {y}");\n        }\n        Message::Write(text) => {\n            println!("Text message: {text}");\n        }\n        Message::ChangeColor(r, g, b) => {\n            println!("Change the color to red {r}, green {g}, and blue {b}",)\n        }\n    }\n}\n')),(0,r.kt)("p",null,"We can even destructure nested fields out of an enum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'enum Color {\n    Rgb(i32, i32, i32),\n    Hsv(i32, i32, i32),\n}\n\nenum Message {\n    Quit,\n    Move { x: i32, y: i32 },\n    Write(String),\n    ChangeColor(Color),\n}\n\nfn main() {\n    let msg = Message::ChangeColor(Color::Hsv(0, 160, 255));\n\n    match msg {\n        Message::ChangeColor(Color::Rgb(r, g, b)) => {\n            println!("Change color to red {r}, green {g}, and blue {b}");\n        }\n        Message::ChangeColor(Color::Hsv(h, s, v)) => {\n            println!("Change color to hue {h}, saturation {s}, value {v}")\n        }\n        _ => (),\n    }\n}\n')),(0,r.kt)("p",null,"And we can mix-and-match destructuring nested structs and tuples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let ((feet, inches), Point { x, y }) = ((3, 10), Point { x: 3, y: -10 });\n")),(0,r.kt)("h3",{id:"ignoring-values-in-a-pattern"},"Ignoring Values in a Pattern"),(0,r.kt)("p",null,"We can ignore an entire value in a pattern with ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),".  We've seen this as a catch-all in a ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),", but we can also use it to ignore a parameter in a function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn foo(_: i32, y: i32) {\n    println!("This code only uses the y parameter: {}", y);\n}\n\nfn main() {\n    foo(3, 4);\n}\n')),(0,r.kt)("p",null,"This can be useful when you need to implement a certain function signature in order to match the definition in a trait.  We can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," to ignore parts of a value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut setting_value = Some(5);\nlet new_setting_value = Some(10);\n\nmatch (setting_value, new_setting_value) {\n    (Some(_), Some(_)) => {\n        println!("Can\'t overwrite an existing customized value");\n    }\n    _ => {\n        setting_value = new_setting_value;\n    }\n}\n\nprintln!("setting is {:?}", setting_value);\n')),(0,r.kt)("p",null,"Or part of a destructuring assignment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let numbers = (2, 4, 8, 16, 32);\n\nmatch numbers {\n    (first, _, third, _, fifth) => {\n        println!("Some numbers: {first}, {third}, {fifth}")\n    }\n}\n')),(0,r.kt)("h2",{id:"ignoring-an-unused-variable-by-starting-its-name-with-_"},"Ignoring an Unused Variable by Starting Its Name with ",(0,r.kt)("inlineCode",{parentName:"h2"},"_")),(0,r.kt)("p",null,"We can prefix an unused variable name with an ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," to avoid a compiler warning:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n    let _x = 5;\n}\n")),(0,r.kt)("p",null,"There is one big difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_x"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"_x")," will still bind the variable, where ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," will not.  This can be important when we consider ownership:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let s = Some(String::from("Hello!"));\n\nif let Some(_s) = s {\n    println!("found a string");\n}\n\n// `s` was moved into `_s` above, so\n// this won\'t compile!\nprintln!("{:?}", s);\n')),(0,r.kt)("p",null,"If we used ",(0,r.kt)("inlineCode",{parentName:"p"},"if let Some(_)")," here, this would have worked."),(0,r.kt)("h3",{id:"ignoring-remaining-parts-of-a-value-with-"},"Ignoring Remaining Parts of a Value with ",(0,r.kt)("inlineCode",{parentName:"h3"},"..")),(0,r.kt)("p",null,"We can ignore part of a tuple or struct with ",(0,r.kt)("inlineCode",{parentName:"p"},".."),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'struct Point {\n    x: i32,\n    y: i32,\n    z: i32,\n}\n\nlet origin = Point { x: 0, y: 0, z: 0 };\n\n// Ignore the `y` and `z` members\nmatch origin {\n    Point { x, .. } => println!("x is {}", x),\n}\n\nlet numbers = (2, 4, 8, 16, 32);\n\n// Ignore all but the first and last numbers\nmatch numbers {\n    (first, .., last) => {\n        println!("Some numbers: {first}, {last}");\n    }\n}\n')),(0,r.kt)("h3",{id:"extra-conditionals-with-match-guards"},"Extra Conditionals with Match Guards"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"match guard")," is an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," condition attached to a pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let num = Some(4);\n\nmatch num {\n    Some(x) if x % 2 == 0 => println!("The number {} is even", x),\n    Some(x) => println!("The number {} is odd", x),\n    None => (),\n}\n')),(0,r.kt)("p",null,"A match guard applies to the entire pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let x = 4;\nlet y = false;\n\nmatch x {\n    4 | 5 | 6 if y => println!("yes"),\n    _ => println!("no"),\n}\n')),(0,r.kt)("p",null,"Here if ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," is true, the first arm will match ",(0,r.kt)("inlineCode",{parentName:"p"},"4 | 5 | 6"),".  If ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," is false, the first arm will never match.  It's ",(0,r.kt)("inlineCode",{parentName:"p"},"(4 | 5 | 6) if y"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"4 | 5 | (6 if y)"),"."),(0,r.kt)("p",null,"One downside to match guards is that they generally require the match to have a catch-all at the end.  You and I might know that this ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," is exhaustive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'match x {\n    Some(x) if y => println!("{x}"),\n    Some(x) if !y => println!("{x}"),\n    None => panic!("Silly compiler"),\n}\n')),(0,r.kt)("p",null,"But unfortunately the compiler isn't smart enough to figure this out."),(0,r.kt)("p",null,"One word of caution here (or any time you use a catch-all so you don't have to explicitly enumerate all cases):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let x = Some(8);\nmatch x {\n    Non => panic!("Nothing to print"),\n    Some(x) if x <= 2 => println!("Little {x}"),\n    Some(x) if x > 2 => println!("Big {x}"),\n}\n')),(0,r.kt)("p",null,'You might expect this to print "Big 8", but it will actually print "Nothing to print" because we mistyped ',(0,r.kt)("inlineCode",{parentName:"p"},"None")," and accidentally created a variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"Non"),".  Fortunately it's difficult to do this without getting a compiler warning for our unused ",(0,r.kt)("inlineCode",{parentName:"p"},"Non")," variable."),(0,r.kt)("h3",{id:"-bindings"},(0,r.kt)("inlineCode",{parentName:"h3"},"@")," Bindings"),(0,r.kt)("p",null,"Sometimes we want to test a value as part of a pattern, and also assign that value to a variable.  We can do this with the ",(0,r.kt)("em",{parentName:"p"},"at")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'enum Message {\n    Hello { id: i32 },\n}\n\nlet msg = Message::Hello { id: 5 };\n\nmatch msg {\n    // Match `id` and bind it to `id_variable`.\n    Message::Hello {\n        id: id_variable @ 3..=7,\n    } => println!("Found an id in range: {}", id_variable),\n    Message::Hello { id: 10..=12 } => {\n        println!("Found an id in another range")\n    }\n    Message::Hello { id } => println!("Found some other id: {}", id),\n}\n')),(0,r.kt)("p",null,"Continue to ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch19/ch19-01-unsafe",title:"Chapter 19: Advanced Features"},"chapter 19"),"."))}c.isMDXComponent=!0}}]);