(this.webpackJsonpcsp2sat_front=this.webpackJsonpcsp2sat_front||[]).push([[0],{29:function(e,n,a){e.exports=a(77)},34:function(e,n,a){},35:function(e,n,a){},77:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(25),i=a.n(l),o=(a(34),a(6)),c=(a(35),a(26)),u=a.n(c),s=a(9),m=a.n(s),p=(a(60),a(79)),d=a(80),g=a(81),v=a(82),j=a(83),E=a(28);a(75),a(76);var f=function(){var e=Object(t.useState)('{\r\n    "n" : 9,\r\n    "iniSudoku" : [\r\n        [8, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 3, 6, 0, 0, 0, 0, 0],\r\n        [0, 7, 0, 0, 9, 0, 2, 0, 0],\r\n        [0, 5, 0, 0, 0, 7, 0, 0, 0],\r\n        [0, 0, 0, 0, 4, 5, 7, 0, 0],\r\n        [0, 0, 0, 1, 0, 0, 0, 3, 0],\r\n        [0, 0, 1, 0, 0, 0, 0, 6, 8],\r\n        [0, 0, 8, 5, 0, 0, 0, 1, 0],\r\n        [0, 9, 0, 0, 0, 0, 4, 0, 0]\r\n    ]\r\n}'),n=Object(o.a)(e,2),a=n[0],l=n[1],i=Object(t.useState)('entities:\r\n    B {\r\n        param int c1;\r\n    };\r\n    A {\r\n        param int b1[5];\r\n        var x;\r\n        B a;\r\n    };\r\n\r\nviewpoint:\r\n    param int n;\r\n    var p[n][n][n];\r\n    param int iniSudoku[9][9];\r\n\r\nconstraints:\r\n    forall(i in 0..8, j in 0..8){\r\n        EK(p[i][j][_], 1); // Un \xfanic valor per cel\xb7la\r\n        AMK(p[i][_][j], 1); // Cada valor apareix una vegada per fila\r\n        AMK(p[_][i][j], 1); // Cada valor apareix una vegada per columna.\r\n    };\r\n\r\n\r\n    //Cada valor apareix una vagada als subquadrats de 3x3.\r\n    forall(i in [0,3,6], j in [0,3,6], k in 0..8){\r\n        AMK([p[i+l][j+g][k] | l in 0..2, g in 0..2], 1);\r\n    };\r\n\r\n\r\n    //Inicialitzem els valors fixats del sudoku.\r\n    forall(i in 0..8, j in 0..8){\r\n        if(iniSudoku[i][j] != 0){\r\n            p[i][j][iniSudoku[i][j]-1];\r\n        };\r\n    };\r\n\r\noutput:\r\n    "Soluci\xf3 sudoku: \\n";\r\n    [ k+1 ++ " " ++ ((j+1) % 3 == 0 ? " " : "") ++ (j==8 ? (i+1) % 3 == 0 ? "\\n\\n": "\\n" : "") | i in 0..8, j in 0..8, k in 0..8 where p[i][j][k]];'),c=Object(o.a)(i,2),s=c[0],f=c[1],h=Object(t.useState)(""),S=Object(o.a)(h,2),b=S[0],k=S[1],w=Object(t.useState)(""),x=Object(o.a)(w,2),y=x[0],A=x[1],O=Object(t.useState)(!1),C=Object(o.a)(O,2),M=C[0],P=C[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{fluid:!0,style:{textAlign:"center"}},r.a.createElement(d.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement("h1",null,"CSP2SAT"),r.a.createElement("p",null,"Declarative language for modelling CSPs into SAT"))),r.a.createElement(g.a,{style:{margin:"50px 10px"}},r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement("h3",null,"MODEL"),r.a.createElement(m.a,{mode:"java",onChange:f,value:s,width:"100%",name:"model",editorProps:{$blockScrolling:!0}})),r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement("h3",null,"INPUT"),r.a.createElement(m.a,{mode:"java",onChange:l,value:a,name:"input",width:"100%",editorProps:{$blockScrolling:!0}}))),r.a.createElement(g.a,{className:"justify-content-center"},M?r.a.createElement(E.a,{color:"lightgray"}):r.a.createElement(j.a,{variant:"outline-secondary",onClick:function(){return P(!0),void u.a.post("http://34.83.174.109:9090",{input:a,model:s}).then((function(e){var n=e.data;console.log(e.data),k(n.result),A(n.error),P(!1)}))}},"Submit")),r.a.createElement(g.a,null,r.a.createElement(v.a,{style:{margin:"0 5%"}},r.a.createElement("div",{style:{whiteSpace:"pre-wrap",textAlign:"left",color:"red"}},y),r.a.createElement("br",null),r.a.createElement("div",{style:{whiteSpace:"pre-wrap",textAlign:"left"}},b)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.5216abe6.chunk.js.map