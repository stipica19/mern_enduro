"use strict";(self.webpackChunkenduro_drift=self.webpackChunkenduro_drift||[]).push([[706],{2706:function(e,r,n){n.r(r);var t=n(5861),c=n(9439),s=n(7757),i=n.n(s),a=n(2791),l=n(4569),d=n.n(l),h=n(2426),o=n.n(h),u=n(3168),p=n(184);r.default=function(){var e=(0,a.useState)([]),r=(0,c.Z)(e,2),n=r[0],s=r[1],l=(0,u.$)().t;return(0,a.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/api/tours/").then((function(e){s(e.data.filter((function(e){return e.tour_number>299})))})).catch((function(e){return console.log(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsx)("section",{className:"docs-main termine apply",children:(0,p.jsxs)("div",{className:"grid-1 container",children:[(0,p.jsx)("div",{className:"card termine-color flex",children:(0,p.jsxs)("div",{className:"boja",children:[(0,p.jsx)("div",{children:(0,p.jsx)("p",{children:l("termine_free")})}),(0,p.jsx)("div",{children:(0,p.jsxs)("p",{children:[" ",l("termine_nofree")]})})]})}),(0,p.jsx)("div",{className:"card termine-color flex",children:(0,p.jsx)("h3",{children:"DATES 2024"})}),(0,p.jsx)("div",{className:"card flex",children:(0,p.jsxs)("table",{className:"moto-date",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:l("apply_th1")}),(0,p.jsx)("th",{children:l("apply_th2")}),(0,p.jsx)("th",{children:l("apply_th3")}),(0,p.jsx)("th",{children:l("apply_th5")})]})}),(0,p.jsx)("tbody",{children:n.map((function(e){return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:e.tour_number}),(0,p.jsx)("td",{children:o()(e.checkIn_date).format("l")}),(0,p.jsx)("td",{children:o()(e.checkOut_date).format("l")}),(0,p.jsx)("td",{className:"".concat(0===e.tour_space?"rezervirano":"slobodno"),children:0!==e.tour_space?(0,p.jsxs)("p",{children:[l("apply_yesterm")," ",e.tour_space]}):(0,p.jsx)("p",{children:l("apply_noterm")})})]},e._id)}))})]})})]})})}}}]);
//# sourceMappingURL=706.c42879fe.chunk.js.map