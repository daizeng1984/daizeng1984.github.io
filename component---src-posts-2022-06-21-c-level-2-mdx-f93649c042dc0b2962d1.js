(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"8hLB":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=(a("Wbzz"),a("Bl7J"));t.a=function(e){return o.a.createElement(r.a,Object.assign({},e,{icon:"post"}))}},HhZe:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("8hLB"),s={},i={_frontmatter:s},l=r.a;function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(l,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"What's next level for C++? I think it should be something help scaling the performance and robustness to industrial standard level..."),Object(o.b)("h1",null,"Background"),Object(o.b)("p",null,"So this article just lists what I believe should be important for level 2 C++ programmers. Most of them are probably biased to game dev and are inspired a lot from either Boost, Folly, EASTL etc. Even though leaning to game dev, but I think most of cure for problem are commonly shared across similar problems in different field."),Object(o.b)("h1",null,"Language Tricks"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You know what: branching can be optimized! For game developer, every bit count, even probability. [","[likely]","] newly added to C++ std will help compiler generate better asm code to predict branching. Some library can do that before this C++ std.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"ScopeGuard<Function or Lambda",">"," : use destructor to guarantee cleanup in throwing environment and use function to avoid overhead (0 overhead actually).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Compile-Time calculation: Meta programming allows you to get Fib<100>() like a constant after compiled; also it enable you to check type Traits.h without any runtime cost.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Copyable Function: ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"replacement new: new(pointer) Class, note you need to free your pointer (responeding to the way it created) and call destructor.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"static_assert: check compile time values, template etc.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"cache friendly programming tricks: abusing hardware. this is like dark alchemy: ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/16699247/what-is-a-cache-friendly-code"}),"https://stackoverflow.com/questions/16699247/what-is-a-cache-friendly-code")," Note you need to know your hardware and compiler well and use it for bottleneck's bottleneck. It's often not transferrable when moving to different devices...")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"noexcept can be helpful in case of moving etc."))),Object(o.b)("h1",null,"Memory Allocation"),Object(o.b)("p",null,"Arena Allocation. Common in game engine. Make memory allocation as raw as C. No destructor, only pointer moving! ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://developers.google.com/protocol-buffers/docs/reference/arenas"}),"Reference"),': "New objects are allocated out of a large piece of preallocated memory called the arena. Objects can all be freed at once by discarding the entire arena, ideally without running destructors of any contained object (though an arena can still maintain a "destructor list" when required). This makes object allocation faster by reducing it to a simple pointer increment, and makes deallocation almost free. Arena allocation also provides greater cache efficiency: when messages are parsed, they are more likely to be allocated in continuous memory, which makes traversing messages more likely to hit hot cache lines."'),Object(o.b)("p",null,"For game, one arena per levels; while for server, one arena for one request session. This idea also works for IO like serialization, basically save the overhead of default C++."),Object(o.b)("h1",null,"Rellocation"),Object(o.b)("p",null,"realloc is raw, rellocable is to deal with the constructor/destructor/memcpy issues."),Object(o.b)("h1",null,"String"),Object(o.b)("p",null,Object(o.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"std::string")," is simple but I've never seen a game engine in my life that use it 😆 (actually true for STL as well). I think game developer follows the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/id-Software/DOOM-3/blob/master/neo/idlib/containers/StrPool.h"}),"string pool idea"),". It's so called ",Object(o.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"interned string"),", a huge hash table of string to make sure every string only have one copy (also see ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.geeksforgeeks.org/interning-of-string/"}),"here"),"). It's efficient for game's string which doesn't really change much. Combined with some ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://en.cppreference.com/w/cpp/language/user_literal"}),"C++ tricks")," you can basically treat any constant string in C++ as a HashID."),Object(o.b)("p",null,"For runtime, library like Folly chooses to handle string in more wild use cases with three strategies based on size of string. Small string in static stack memory. Large size string is lazily copied or somehow interned. Medium string is equivalent to ",Object(o.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"std::string"),"."),Object(o.b)("h1",null,"Lock Free"),Object(o.b)("p",null,"You should always use lock free or non-blocking concurrency strategy. That means better stay away from mutex, semaphore etc. Why? cause you don't want to spend cycles on thread context management (put them sleep and signal them awake) and many bugs like dead lock. But how? Use atomicity. Careful design your datastructure and logic. For competing resource e.g. multiple writers, spin lock it and try CompareAndSwap (or waitandwrite). "),Object(o.b)("p",null,"However, this is not Elixir. CompareAndSwap (CAS) fails is a usual things in high contention environment and if thread is trying to do heavy works for CAS, it'll be disaster to see failed threads repeating the heavy works due to CAS failure. Plus, the lock free"),Object(o.b)("h1",null,"Future & Executor"),Object(o.b)("p",null,"Javascript is a good place to experience Future and Promise. It's able to chaining callback and help you manage worker thread easier.\n",Object(o.b)("img",Object.assign({parentName:"p"},{src:"../images/blog/2022/image.png",alt:"Xenoblade Shulk: We CAN change the future!"}))),Object(o.b)("p",null,"The way to make it efficient is based on implementation of threadpool. A typical one would be ",Object(o.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Folly::CPUThreadPoolExecutor"),", where caller just create tasks in priority queue and workers in threadpool keeps polling the queue and execute the tasks."),Object(o.b)("h1",null,"STL"),Object(o.b)("p",null,"To be short, don't use it in game runtime. It's too general to be fast enough. Use the something from e.g. Folly."),Object(o.b)("h1",null,"Exception"),Object(o.b)("p",null,"Return by value and exception happens! ",Object(o.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"share_ptr")," to rescue."),Object(o.b)("h1",null,"Intrusive vs Non-intrusive"),Object(o.b)("p",null,"Think about 2 different e.g. vector, one you store ",Object(o.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"vector<MyClass>")," and another you store ",Object(o.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"vector<MyClass*>"),". For latter one, you saved the cost of copy constructing elements by only copying pointers. Intrusive container works like this.\nYou basically inherit intrusive container node to create your object class or follows the interface. "),Object(o.b)("div",{className:"gatsby-highlight","data-language":".cpp"},Object(o.b)("pre",Object.assign({parentName:"div"},{className:"language-.cpp"}),Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-.cpp"}),"class MyClass: IntrusiveContainerNode<MyClass>\n{\n   // from parent: MyClass *next;\n   // from parent: MyClass *previous;\n   int value;\n};"))),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.boost.org/doc/libs/1_35_0/doc/html/intrusive/intrusive_vs_nontrusive.html#id932296"}),"https://www.boost.org/doc/libs/1_35_0/doc/html/intrusive/intrusive_vs_nontrusive.html#id932296")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2022-06-21-c-level-2-mdx-f93649c042dc0b2962d1.js.map