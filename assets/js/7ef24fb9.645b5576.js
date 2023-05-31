"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),h=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=h(n),p=a,m=u["".concat(s,".").concat(p)]||u[p]||c[p]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var h=2;h<o;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=n(7462),a=(n(7294),n(3905));const o={},i="20.2 - Turning Our Single-Threaded Server into a Multithreaded Server",l={unversionedId:"ch20/ch20-02-multi-threaded-web-server",id:"ch20/ch20-02-multi-threaded-web-server",title:"20.2 - Turning Our Single-Threaded Server into a Multithreaded Server",description:"Simulating a Slow Request in the Current Server Implementation",source:"@site/docs/ch20/ch20-02-multi-threaded-web-server.md",sourceDirName:"ch20",slug:"/ch20/ch20-02-multi-threaded-web-server",permalink:"/rust-book-abridged/ch20/ch20-02-multi-threaded-web-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch20/ch20-02-multi-threaded-web-server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"20.1 - Building a Single-Threaded Web Server",permalink:"/rust-book-abridged/ch20/ch20-01-single-threaded-web-server"},next:{title:"20.3 - Graceful Shutdown and Cleanup",permalink:"/rust-book-abridged/ch20/ch20-03-graceful-shutdown"}},s={},h=[{value:"Simulating a Slow Request in the Current Server Implementation",id:"simulating-a-slow-request-in-the-current-server-implementation",level:2},{value:"Improving Throughput with a Thread Pool",id:"improving-throughput-with-a-thread-pool",level:2},{value:"Building a ThreadPool",id:"building-a-threadpool",level:2}],d={toc:h},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"202---turning-our-single-threaded-server-into-a-multithreaded-server"},"20.2 - Turning Our Single-Threaded Server into a Multithreaded Server"),(0,a.kt)("h2",{id:"simulating-a-slow-request-in-the-current-server-implementation"},"Simulating a Slow Request in the Current Server Implementation"),(0,a.kt)("p",null,"Since our web server is single threaded, it will completely handle one request before moving on to the next request in the queue. If we had a request that took a long time to process, it would hold up all the subsequent requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},'use std::{\n    fs,\n    io::{prelude::*, BufReader},\n    net::{TcpListener, TcpStream},\n    thread,\n    time::Duration,\n};\n\n// --snip--\n\nfn handle_connection(mut stream: TcpStream) {\n    // --snip--\n\n    match &request_line[..] {\n        "GET / HTTP/1.1" => send_response(stream, 200, "OK", "hello.html"),\n        "GET /sleep HTTP/1.1" => {\n            thread::sleep(Duration::from_secs(5));\n            send_response(stream, 200, "OK", "hello.html");\n        }\n        _ => send_response(stream, 404, "NOT FOUND", "404.html")\n    }\n\n    // --snip--\n}\n')),(0,a.kt)("p",null,"We've switched from an ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," to a ",(0,a.kt)("inlineCode",{parentName:"p"},"match"),', and added a "/sleep" route. We have to pass ',(0,a.kt)("inlineCode",{parentName:"p"},"&request_line[..]")," to the match expression to explicitly convert it to a slice here, because ",(0,a.kt)("inlineCode",{parentName:"p"},"match")," doesn't do automatic dereferencing like the equality method does."),(0,a.kt)("p",null,"The important thing here is, if you open up your browser and try to load ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:7878/sleep"},"http://localhost:7878/sleep"),", it'll take about five seconds for the page to load. If you tap CTRL-R to reload the page twice in quick succession, it will take about 10 seconds! Your browser sent two requests, and is waiting for the second one to finish."),(0,a.kt)("h2",{id:"improving-throughput-with-a-thread-pool"},"Improving Throughput with a Thread Pool"),(0,a.kt)("p",null,"We ",(0,a.kt)("em",{parentName:"p"},"could")," solve this problem by just creating a new thread for each incoming connection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"for stream in listener.incoming() {\n    let stream = stream.unwrap();\n\n    thread::spawn(|| {\n        handle_connection(stream);\n    });\n}\n")),(0,a.kt)("p",null,"Starting up an OS level thread has some costs associated with it, and if we start up too many of them we may run out of system resources, so a common pattern for a situation like this is to use a ",(0,a.kt)("em",{parentName:"p"},"thread pool"),". We pre-allocate a number of threads that will be sitting idle, and then whenever a request comes in we hand it off to an idle worker from the pool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let pool = ThreadPool::new(4);\nfor stream in listener.incoming() {\n    let stream = stream.unwrap();\n\n    pool.execute(|| {\n        handle_connection(stream);\n    });\n}\n")),(0,a.kt)("p",null,"That's all there is too it! Except Rust can't find the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadPool")," symbol. We'll have to bring it into scope to use it, but before that we'll have to build a ThreadPool!"),(0,a.kt)("h2",{id:"building-a-threadpool"},"Building a ThreadPool"),(0,a.kt)("p",null,"Before we show the code for a ThreadPool, let's take a moment to think through what it's going to look like. We want to store a collection of threads. We won't know the number of threads until runtime so a vector is a reasonable choice here, but what exactly is being stored in the vector? How do you store a thread? If we have a look at the signature for ",(0,a.kt)("inlineCode",{parentName:"p"},"thread::spawn"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn spawn<F, T>(f: F) -> JoinHandle<T>\nwhere\n    F: FnOnce() -> T,\n    F: Send + 'static,\n    T: Send + 'static,\n{\n    // --snip--\n}\n")),(0,a.kt)("p",null,"We can see it returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"JoinHandle<T>"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),' here is the type the thread will "return" when it completes, but our threads are never going to complete, so we\'ll store a ',(0,a.kt)("inlineCode",{parentName:"p"},"Vec<JoinHandle<()>>"),". Actually, in order to make our lives a little easier at debugging time, we'll give each thread a unique ID and combine ID and ",(0,a.kt)("inlineCode",{parentName:"p"},"JoinHandle<()>")," into a ",(0,a.kt)("inlineCode",{parentName:"p"},"Worker")," and then store a ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<Worker>"),"."),(0,a.kt)("p",null,"Here's what the ",(0,a.kt)("inlineCode",{parentName:"p"},"Worker")," is going to look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'struct Worker {\n    id: usize,\n    thread: JoinHandle<()>,\n}\n\nimpl Worker {\n    /// Create a new Worker with the given id.\n    pub fn new(id: usize) -> Worker {\n        let thread = thread::spawn(|| {\n            todo!("Zhu Li, do the thing!");\n        });\n\n        Worker { id, thread }\n    }\n}\n')),(0,a.kt)("p",null,"We're going to execute jobs on these threads, but what's a job? We already know they are closures. Since we want our API to be similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"thread::spawn"),", a job is going to be the same type as ",(0,a.kt)("inlineCode",{parentName:"p"},"F")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"thread::spawn")," above. It'll be ",(0,a.kt)("inlineCode",{parentName:"p"},"FnOnce()")," since it's a function we want to call exactly once. It will also need to be ",(0,a.kt)("inlineCode",{parentName:"p"},"Send")," so we can transfer it to our worker thread, and ",(0,a.kt)("inlineCode",{parentName:"p"},"'static")," because we don't know how long the thread will take to run. So we'll define ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," as an alias for:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"type Job = Box<dyn FnOnce() + Send + 'static>;\n")),(0,a.kt)("p",null,"Whenever we call ",(0,a.kt)("inlineCode",{parentName:"p"},"pool.execute")," and pass in a job, we want that job to be run by a free thread from the pool. How does this happen? What happens inside the thread we spawn inside the Worker? We've conveniently left this out of our ",(0,a.kt)("inlineCode",{parentName:"p"},"Worker")," above. There are many ways we could do this, but the approach we will use here is to send each job over a channel."),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Worker")," will hang on to the receiver side of a channel. The thread inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"Worker")," can just iterate on the channel and execute each job it receives in series. But you may recall that the channels we've been using are from the ",(0,a.kt)("inlineCode",{parentName:"p"},"mpsc")," library, which stands for \"multiple producers, single consumer\". If we're creating four threads, we could create four channels and give one receiver from each to each worker. In this case, though, we'd have to decide which sender to send a new job to. How do we know which threads are free to accept new jobs?"),(0,a.kt)("p",null,'What we really want here is the other way around: "single producer, multiple consumers". We know how to share a variable between multiple threads though; instead of having multiple channels, we can have just a single channel. We can wrap the receiver in a ',(0,a.kt)("inlineCode",{parentName:"p"},"Mutex"),", and then wrap that in an ",(0,a.kt)("inlineCode",{parentName:"p"},"Arc"),", and multiple threads will be able to safely call into the receiver one-at-a-time to fetch jobs."),(0,a.kt)("p",null,"Here's the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},"use std::{\n    sync::{mpsc, Arc, Mutex},\n    thread::{self, JoinHandle},\n};\n\ntype Job = Box<dyn FnOnce() + Send + 'static>;\n\npub struct ThreadPool {\n    workers: Vec<Worker>,\n    sender: mpsc::Sender<Job>,\n}\n\nimpl ThreadPool {\n    /// Create a new ThreadPool.\n    ///\n    /// The size is the number of threads in the pool.\n    ///\n    /// # Panics\n    ///\n    /// The `new` function will panic if the size is zero.\n    pub fn new(size: usize) -> ThreadPool {\n        // Make sure `size` is valid.\n        assert!(size > 0);\n\n        // Create our sender and receiver\n        let (sender, receiver) = mpsc::channel();\n        let receiver = Arc::new(Mutex::new(receiver));\n\n        // Create a new vector.  Pre-allocate the vector\n        // to be of length `size` so we know it can store\n        // all of our threads.\n        let mut workers = Vec::with_capacity(size);\n\n        // Create new workers and add them to the pool.\n        for id in 0..size {\n            workers.push(Worker::new(id, Arc::clone(&receiver)));\n        }\n\n        ThreadPool {\n            workers,\n            sender,\n        }\n    }\n\n    pub fn execute<F>(&self, f: F)\n    where\n        F: FnOnce() + Send + 'static,\n    {\n        // Send our job to a Worker.\n        let job = Box::new(f);\n        self.sender.send(job).unwrap();\n    }\n}\n\nstruct Worker {\n    id: usize,\n    thread: JoinHandle<()>,\n}\n\nimpl Worker {\n    /// Create a new Worker with the given id.\n    pub fn new(id: usize, receiver: Arc<Mutex<mpsc::Receiver<Job>>>) -> Worker {\n        let thread = thread::spawn(move || loop {\n            let job = receiver.lock().unwrap().recv().unwrap();\n            println!(\"Worker {id} got a job; executing.\");\n            job();\n        });\n\n        Worker { id, thread }\n    }\n}\n")),(0,a.kt)("p",null,'If you give this a try, it should work (although you\'ll get some compiler warnings)! If you visit "/sleep", wait for it to load, and then double-tap "CTRL-R" to reload the page, the page should reload in about five seconds instead of ten. If you\'re running into problems, check out the ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/jwalton/rust-book-abridged/tree/master/examples/ch20-multi-threaded-web-server"},"code in the GitHub repo"),"."),(0,a.kt)("p",null,"One thing you might have expected us to do in the worker was:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'    let thread = thread::spawn(move || loop {\n        // This is not so good...\n        for job in receiver.lock().unwrap().iter() {\n            println!("Worker {id} got a job; executing.");\n            job();\n        }\n    });\n')),(0,a.kt)("p",null,'If you give this a try, it will appear to work, but our "double-reload" example will be back to ten seconds again.  Why?  Because this code is equivalent to:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'    let thread = thread::spawn(move || loop {\n        // Take the lock on the mutex...\n        let rx = receiver.lock().unwrap();\n        // Then loop forever, never giving up the lock.\n        for job in rx.iter() {\n            println!("Worker {id} got a job; executing.");\n            job();\n        }\n    });\n')),(0,a.kt)("p",null,"One thread will take the mutex and then loop with it held, so one of our threads doing all the work."),(0,a.kt)("p",null,"There are also a few things wrong with this code as it stands.  First, we're obviously glossing over some error handling, which is fine for this example.  Second, if you reload the \"/sleep\" route many times, you'll find eventually it will start taking a long time to load.  What's happening here is that we're queueing up jobs in the channel."),(0,a.kt)("p",null,"Ideally if all the workers are busy, we'd return a 503 to let the client know we are too busy to handle the request.  We could do this in a few ways; we could use the ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic")," package to increment a counter when we start a job and decrement it when we finish one, so we know how many jobs are in progress.  There's also a ",(0,a.kt)("inlineCode",{parentName:"p"},"channel::sync_channel")," which allows creating a channel with a bounded size. The sender in this case has a ",(0,a.kt)("inlineCode",{parentName:"p"},"try_send")," which will return an error if the channel is full.  This is left as an exercise for the reader."),(0,a.kt)("p",null,"Next we'll look at how to adapt our web server to ",(0,a.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch20/ch20-03-graceful-shutdown"},"shut down gracefully"),"."))}c.isMDXComponent=!0}}]);