(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"8hLB":function(e,n,t){"use strict";var i=t("q1tI"),o=t.n(i),a=(t("Wbzz"),t("Bl7J"));n.a=function(e){return o.a.createElement(a.a,Object.assign({},e,{icon:"post"}))}},hhK7:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return c}));var i=t("zLVn"),o=(t("q1tI"),t("7ljp")),a=t("8hLB"),r={},s={_frontmatter:r},l=a.a;function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)(l,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article is intended to record my readings on computer science in the past few years and sharp my rusty LATEX skill..."),Object(o.b)("h1",null,"Preword"),Object(o.b)("p",null,"Latex was my previous blog/note/report setup, to compile it to blog post and html etc. But eventually find it much cumbersome than writing markdown."),Object(o.b)("h1",null,"Algorithm in C++: Part I ~IV ","[10]"),Object(o.b)("p",null,"This book is very practical. It does many experiments to show the computation complexity without much mathematics proof. I’ve learnt basic ideas like FIFO, top-down dynamic programming(memorization), step selction of shell sorting and relationship between trees , loop and recursion, relationship between Batcher’s odd-even merge sort and sorting network (remind me of butterfly or sth.) etc."),Object(o.b)("h1",null,"Assembly Language & Win32 Assembly ","[12][8]"),Object(o.b)("p",null,"This is an excellent Chinese book on old 80x86 machine. I learnt to understand the architecture of computer. It teaches me basic ideas like: how computer startup (load bios then handle interruption); what is the interruption (how computer use this to execute hardware program); how CPU handle basic logic like loop or if-statement; Some interesting MMX command. I completed some exercise and wrote some code using debug command under DOS shell. In Win32, assembly language is not as powerful as it is in DOS, since Win32 has much more rigorous rule about program running on it and assembly can be almost replaced by C. However, this Win32 book gives me opportunities to understand the principle behind the system, such as memory page management, memory mapping and protection."),Object(o.b)("h1",null,"Thinking in C++ ","[5]"),Object(o.b)("p",null,"This is my Bible and seminal books on C++. It taught me C++ from a low-level or pure C level respective. I will list some notes:"),Object(o.b)("p",null,"· While switch statement will not behave right with multiple and complex statement in the parenthesis."),Object(o.b)("p",null,"· How to handle independent static variable."),Object(o.b)("p",null,"· Enum hack and Mutable, Volatile, Register keyword."),Object(o.b)("p",null,"· Stringize and Token Paste in precompilation"),Object(o.b)("p",null,"· Can we use exit() in destructor? And what about atexit()?"),Object(o.b)("p",null,"· Function call rationale explanation in Page 503(or 458?)."),Object(o.b)("p",null,"· Virtual function and virtual table mechanism (late binding)."),Object(o.b)("p",null,"· Throw and its usage"),Object(o.b)("p",null,"· The auto_ptr template"),Object(o.b)("p",null,"· Differentiate abort() exit(0) and return in main."),Object(o.b)("h1",null,"Programming Windows 95 ","[9]"),Object(o.b)("p",null,"It covers almost any API’s for ritual usage. I learned how to use TCHAR and unicode, windows message loop, multi-thread programming in Win32, GDI, DIB and lock behavior that also appears in DX, keyboard or mouse message handling, controls message, resouces and accelerator, DLL and its implementation, and sound operation via winmm.lib."),Object(o.b)("h1",null,"Beginning Introduction to DX9 ","[7]"),Object(o.b)("p",null,"This book is a good beginner book for 3d game programming. It first introduce certain simple math tool set in d3dx.lib. Then it talks about the low-level resource management in DX9, buffer. Other stuffs are quite similar to OpenGL. Tool sets in DX9 make it fair simple to load any resources. It also integrates the GDI font in Win32. Mesh class in DX is worth investigation."),Object(o.b)("h1",null,"Design Pattern Explained ","[11]"),Object(o.b)("p",null,"As my OOP seminal book, it teaches me every objects should be responsible for themselves. I learned how to draw UML, differences between aggregation and composition, how to conquer big projects referencing a book on architecture. The core idea is encapsulation to divide the commonality and variability. CVS (commonality and variability analysis) is the most valuable thing in this book. Of course, author also introduce certain classic pattern for us, such as Decorator, Observer, Singleton, and Factories pattern."),Object(o.b)("h1",null,"Interactive Computer Graphics: A Top-down Approach ","[3]"),Object(o.b)("p",null,"This is computer graphics textbook using OpenGL. Its content was more modern than any other computer graphics book I had got then. It introduces OpenGL more clearly than super bible: it help me thoroughly understand the matrix multiplication and matrix stack mechanism in OpenGL (As shown in (1), OpenGL API in matrix multiplication is not as friendly as DirectX)."),Object(o.b)("img",{src:"/bd56e30a3220dca6de1584d225edbad0/readinglist-formula.gif",alt:"Formula"}),Object(o.b)("p",null,"(1)"),Object(o.b)("p",null,"There is a rotation formula in Page 194. The book explains more clear about Homogeneous Transformation. Using A-buffer to do antialiasing is also inspiring. This book covers some interesting topics like depth of field, motion blur, sampling and bump map. Later, it discuss the algorithm and data structure in the computer graphics like scan conversion, hidden-surface removal, scene organization. It recommend me ","[2]","!"),Object(o.b)("h1",null,"OpenGL Super Bible ","[13][13]"),Object(o.b)("p",null,"It’s classic for beginner programmer. The content organization in 4th edition is similar to DX9’s introduction book ","[7]",". However, it is comprehensive to covers image load, obj in OpenGL (vertex, shader, and buffer), and motion blur. It is a good hand-on book for me when working on OpenGL even though you have many resources available on internet."),Object(o.b)("h1",null,"Introduction to Algorithm ","[4]"),Object(o.b)("p",null,"Together with OCW, you would have a top class in the world at home! This is a classic book in computer science. It is well organized and mathematical rigorous. It showed me why computer science is science. It linked my math and computer knowledge. Exercise is also interesting and inspiring. I will list some exercise here:"),Object(o.b)("p",null,"· P287 13.3-5"),Object(o.b)("p",null,"Proof. Induction: n = 2. Trivial.\n1 < n ≤ k, we have at least one node.\nNow, we have a R-B tree. Call RB-INSERT k times and result a R-B tree that has at least one RED node!\nif the k+1 node is added to with color[p","[Z]","]=BLACK. OK.\nif this node Z added to color[p","[Z]","]=RED.\nZ will fall into case2/case3. and case2/3 are paired and terminates. This will not change the number of RED node.\nthe only RB-INSERT will keep at least one RED. __"),Object(o.b)("p",null,"· P338 15.2-3"),Object(o.b)("p",null,"Proof."),Object(o.b)("img",{src:"/7d34761425009b3adf003e96bbc4d188/readinglist-formula-2.gif",alt:"Formula 2"}),Object(o.b)("p",null,"given n ≤ k, P(k) ≥ c2k, according to induction hypothesis\nwhen n = k + 1, P(k + 1) = ∑ i=1kP(i)P(k + 1 - i) ≥ ck22k ≥ c2k\n∴ P(n) = Ω2n __"),Object(o.b)("p",null,"and I’m not interest to add more...It’s involving to draw in latex."),Object(o.b)("h1",null,"Advanced Animation with DX9 ","[1]"),Object(o.b)("p",null,"An excellent book about animation, it almost explain every details in DX’s animation class. I learned that skininfo is used to store vertex weight and bonematrix’s reference, frame can store matrix of every part indexed by skininfo. This frame will be updated every frame. Except from basic skinned animation, the book also talks about morphing and blending. It is a handy book for programmer."),Object(o.b)("h1",null,"Windows Game Programming Gurus ","[6]"),Object(o.b)("p",null,"This is the genesis of all my knowledge of game development. It discusses every aspects of game, including graphics, sound, AI, and network. I still remember the dirty pixel operation in DDraw (bmp loading, locking, device lost, image rotation). It gave me a lot of basic ideas about game development."),Object(o.b)("p",null,"TO BE CONTINUE..."),Object(o.b)("h1",null,"References"),Object(o.b)("p",null,"[1]","    J. Adams. Advanced Animation with DirectX (Focus on Game Development). Course Technology Press Boston, MA, United States, 2003. ISBN 1592000371."),Object(o.b)("p",null,"[2]","    T. Akenine-Moller and E. Haines. Real-time rendering. AK, 2002. ISBN 1568811829."),Object(o.b)("p",null,"[3]","    E. Angel. Interactive computer graphics: A Top-down Approach."),Object(o.b)("p",null,"[4]","    TH Cormen, CE Leiserson, and RL Rivest. Introduction to Algorithm."),Object(o.b)("p",null,"[5]","    B. Eckel. Thinking in C++. Prentice-Hall, Inc. Upper Saddle River, NJ, USA, 1995. ISBN 0139177094."),Object(o.b)("p",null,"[6]","    A. LaMothe. Tricks of the Windows game programming gurus. Sams Indianapolis, IN, USA, 2002. ISBN 0672323699."),Object(o.b)("p",null,"[7]","    D.F. Luna. Introduction to 3d Game Programming with DirectX 9.0. Wordware Publishing Inc., 2003."),Object(o.b)("p",null,"[8]","    Yunbin Luo. WINDOWS 32-bit Environment, Assembly Language Programming. Electronic Industry Press, 2002. ISBN 7505380346."),Object(o.b)("p",null,"[9]","    C. Petzold. Programming Windows 95: The Definitive Developer’s Guide to the Windows 95 API with CDROM. Microsoft Press, 1996. ISBN 1556156766."),Object(o.b)("p",null,"[10]","    R. Sedgewick. Algorithms in C++. 2001. ISBN 020172684X."),Object(o.b)("p",null,"[11]","    A. Shalloway and J. Trott. Design Patterns Explained: A New Perspective on Object-Oriented Design (Software Patterns Series). Addison-Wesley Professional, 2004. ISBN 0321247140."),Object(o.b)("p",null,"[12]","    Shuang Wang. Assembly Language. TSINGHUA UNIVERSITY PRESS, 2003. ISBN 7302071950."),Object(o.b)("p",null,"[13]","    R.S. Wright and B. Lipchak. OpenGL superbible. Sams Indianapolis, IN, USA, 2004. ISBN 0672326019."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2011-01-01-reading-list-mdx-d3f13d4c9f187be8e550.js.map