(this.webpackJsonpcsp2sat_front=this.webpackJsonpcsp2sat_front||[]).push([[0],{28:function(n,e,a){n.exports=a(62)},33:function(n,e,a){},34:function(n,e,a){},62:function(n,e,a){"use strict";a.r(e);var r=a(0),t=a.n(r),i=a(25),l=a.n(i),o=(a(33),a(7)),c=(a(34),a(26)),u=a.n(c),s=a(9),m=a.n(s),p=(a(59),a(64)),d=a(65),v=a(66);a(60),a(61);var h=function(){var n=Object(r.useState)('{\r\n    "n" : 9,\r\n    "iniSudoku" : [\r\n        [8, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 3, 6, 0, 0, 0, 0, 0],\r\n        [0, 7, 0, 0, 9, 0, 2, 0, 0],\r\n        [0, 5, 0, 0, 0, 7, 0, 0, 0],\r\n        [0, 0, 0, 0, 4, 5, 7, 0, 0],\r\n        [0, 0, 0, 1, 0, 0, 0, 3, 0],\r\n        [0, 0, 1, 0, 0, 0, 0, 6, 8],\r\n        [0, 0, 8, 5, 0, 0, 0, 1, 0],\r\n        [0, 9, 0, 0, 0, 0, 4, 0, 0]\r\n    ]\r\n}'),e=Object(o.a)(n,2),a=e[0],i=e[1],l=Object(r.useState)('entities:\r\n    B {\r\n        param int c1;\r\n    };\r\n    A {\r\n        param int b1[5];\r\n        var x;\r\n        B a;\r\n    };\r\n\r\nviewpoint:\r\n    param int n;\r\n    var p[n][n][n];\r\n    param int iniSudoku[9][9];\r\n\r\nconstraints:\r\n    forall(i in 0..8, j in 0..8){\r\n        EK(p[i][j][_], 1); // Un \xfanic valor per cel\xb7la\r\n        AMK(p[i][_][j], 1); // Cada valor apareix una vegada per fila\r\n        AMK(p[_][i][j], 1); // Cada valor apareix una vegada per columna.\r\n    };\r\n\r\n\r\n    //Cada valor apareix una vagada als subquadrats de 3x3.\r\n    forall(i in [0,3,6], j in [0,3,6], k in 0..8){\r\n        AMK([p[i+l][j+g][k] | l in 0..2, g in 0..2], 1);\r\n    };\r\n\r\n\r\n    //Inicialitzem els valors fixats del sudoku.\r\n    forall(i in 0..8, j in 0..8){\r\n        if(iniSudoku[i][j] != 0){\r\n            p[i][j][iniSudoku[i][j]-1];\r\n        };\r\n    };\r\n\r\noutput:\r\n    "Soluci\xf3 sudoku: \\n";\r\n    [ k+1 ++ " " ++ ((j+1) % 3 == 0 ? " " : "") ++ (j==8 ? (i+1) % 3 == 0 ? "\\n\\n": "\\n" : "") | i in 0..8, j in 0..8, k in 0..8 where p[i][j][k]];'),c=Object(o.a)(l,2),s=c[0],h=c[1],j=Object(r.useState)(""),g=Object(o.a)(j,2),E=g[0],f=g[1];return t.a.createElement(t.a.Fragment,null,t.a.createElement(p.a,{fluid:!0,style:{textAlign:"center"}},t.a.createElement("h1",null,"CSP2SAT COMPILER"),t.a.createElement(d.a,{style:{margin:"50px 10px"}},t.a.createElement(v.a,{style:{textAlign:"center"}},t.a.createElement("h3",null,"MODEL"),t.a.createElement(m.a,{mode:"java",theme:"tomorrow",onChange:h,value:s,width:"100%",name:"model",editorProps:{$blockScrolling:!0}})),t.a.createElement(v.a,{style:{textAlign:"center"}},t.a.createElement("h3",null,"INPUT"),t.a.createElement(m.a,{mode:"java",theme:"tomorrow",onChange:i,value:a,name:"input",width:"100%",editorProps:{$blockScrolling:!0}})))),t.a.createElement("div",{className:"App"},t.a.createElement("input",{type:"submit",onClick:function(){u.a.post("http://34.83.174.109:9090",{input:a,model:s}).then((function(n){var e=n.data;console.log(n.data),f(e)}))},value:"Submit"}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement("div",{style:{whiteSpace:"pre-wrap",textAlign:"left"}},E)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.bbd700a2.chunk.js.map