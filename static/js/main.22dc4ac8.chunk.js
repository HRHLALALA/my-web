(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},11:function(e){e.exports=[{title:"Cat",description:'"A cat with a story.  "',fileName:"cat.jpg"},{title:"UNSW",description:"The beautiful UNSW under the dusk",fileName:"unsw.jpeg"},{title:"Bumbunga Lake",description:"This is pink lake photod in Adelaide.",fileName:"lake.jpeg"},{title:"Curve",description:"This is curve photod in Adelaide",fileName:"curve.jpeg"},{title:"Ocean(Kangaroo Island)",description:"This is ocean photod on the boat to Kangaroo Island",fileName:"ocean.jpeg"},{title:"Ocean 2",description:"This is ocean photod on the boat to Kangaroo Island",fileName:"ocean2.jpeg"},{title:"Tu Wu",description:"I miss the time when my parents and I travelled in Xiamen",fileName:"tuwu.jpeg"},{title:"Garden",description:"This is garden",fileName:"garden.jpeg"},{title:"Kopi Luwak",description:'"Drink a cup of coffee and have a good day."',fileName:"coffee.jpeg"},{title:"afternoon",description:"Enjoy the aftertoon and enjoy the life.",fileName:"afternoon.jpeg"},{title:"Basketball Court",description:"I love playing basketball. ",fileName:"basketball.jpg"}]},141:function(e){e.exports=[{title:"Instagram","album name":"Instagram",path:"./bgm.mp3","cover path":"./../Image/boa.jpg"}]},142:function(e,t,a){},144:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},150:function(e,t,a){},205:function(e,t,a){var n={"./afternoon.jpeg":206,"./basketball.jpg":207,"./cat.jpg":65,"./coffee.jpeg":208,"./curve.jpeg":209,"./garden.jpeg":210,"./lake.jpeg":211,"./ocean.jpeg":212,"./ocean2.jpeg":213,"./tuwu.jpeg":214,"./unsw.jpeg":215};function o(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=205},206:function(e,t,a){e.exports=a.p+"static/media/afternoon.671b0d8a.jpeg"},207:function(e,t,a){e.exports=a.p+"static/media/basketball.a2444da2.jpg"},208:function(e,t,a){e.exports=a.p+"static/media/coffee.db188470.jpeg"},209:function(e,t,a){e.exports=a.p+"static/media/curve.4818a29f.jpeg"},210:function(e,t,a){e.exports=a.p+"static/media/garden.0dd989df.jpeg"},211:function(e,t,a){e.exports=a.p+"static/media/lake.b8ddcc54.jpeg"},212:function(e,t,a){e.exports=a.p+"static/media/ocean.d064b660.jpeg"},213:function(e,t,a){e.exports=a.p+"static/media/ocean2.05827025.jpeg"},214:function(e,t,a){e.exports=a.p+"static/media/tuwu.fea70f13.jpeg"},215:function(e,t,a){e.exports=a.p+"static/media/unsw.d4298aca.jpeg"},216:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(3),i=a(5),r=a(4),l=a(6),c=a(0),s=a.n(c),u=a(71),m=a.n(u),p=a(72),d=a.n(p),h=(a(87),a(89),a(92),a(220)),f=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"component-navigation"},s.a.createElement("div",{className:"true"===this.props.isHorizontal?"Nav horizontal":"Nav"},s.a.createElement("ul",{id:"menu"},s.a.createElement("li",null,s.a.createElement(h.a,{to:"/profile"},"Profile")),s.a.createElement("li",null,s.a.createElement(h.a,{to:"/gallery"},"Gallery")),s.a.createElement("li",null,s.a.createElement(h.a,{to:"/music"},"Music")))))}}]),t}(s.a.Component),g=a(73),y=a.n(g),v=a(74),b=a.n(v),E=a(75),j=a.n(E),k=a(76),O=a.n(k),N=(a(96),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"component-navlogo"},s.a.createElement("div",{className:"logos"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"http://www.github.com"},s.a.createElement("img",{src:j.a,alt:"github"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"http://www.facebook.com"},s.a.createElement("img",{src:y.a,alt:"facebook"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"http://www.linkedin.com"},s.a.createElement("img",{src:b.a,alt:"linkedin"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"mailto: renhao043@gmail.com"},s.a.createElement("img",{src:O.a,alt:"email"}))))))}}]),t}(s.a.Component)),w=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-NavBar"},s.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),"false"===this.props.isLogo?s.a.createElement(h.a,{className:"Name HRH",to:"/home"},"Renhao Huang"):s.a.createElement("a",{className:"Name UNSW",href:"http://www.unsw.edu.au"},"UNSW"),s.a.createElement("div",{id:"dropdown",onClick:function(){return e.dropdown()}},s.a.createElement("li",null,s.a.createElement("a",{href:"javascript:void(0);",className:"icon"},s.a.createElement("i",{className:"fa fa-bars"})))),"false"===this.props.isLogo?s.a.createElement("div",{className:"nav"},s.a.createElement(f,{isHorizontal:"true"})):s.a.createElement("div",{className:"nav logo"},s.a.createElement(N,null)))}},{key:"dropdown",value:function(){if("false"===this.props.isLogo)var e=document.getElementsByClassName("nav")[0];else e=document.getElementsByClassName("nav logo")[0];var t=window.getComputedStyle(e).getPropertyValue("display"),a=document.getElementsByClassName("container-NavBar")[0];"none"===t?(e.style.display="block",a.style.height="160px"):(e.style.display="none",a.style.height="80px")}},{key:"componentDidMount",value:function(){if("false"===this.props.isLogo)var e=document.getElementsByClassName("nav")[0];else e=document.getElementsByClassName("nav logo")[0];this.checkWidth=function(){var t=window.matchMedia("(min-width: 600px)");console.log(t),t.matches?e.style.display="block":e.style.display="none"},this.checkWidth(),window.addEventListener("resize",this.checkWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkWidth)}}]),t}(s.a.Component),C=(a(98),a(100),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props),console.log(this.props.duration),console.log(this.props.currentTime),s.a.createElement("div",{className:"time"},parseInt(this.props.duration)-parseInt(this.props.currentTime))}}]),t}(s.a.Component)),x=(a(102),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Controls"},this.props.playing?s.a.createElement("div",{className:"Pause",onClick:function(){return e.handleClick()}}):s.a.createElement("div",{className:"Start",onClick:function(){return e.handleClick()}}))}},{key:"handleClick",value:function(){!1===this.props.playing?this.props.onPlay():this.props.onPause()}}]),t}(s.a.Component)),I=a(80),T=a(77),B=a.n(T),P=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={duration:0,currentTime:0,needControl:!0,playing:!1},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-player"},s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"middle-control",onMouseOver:function(){return e.showControl()},onMouseOut:function(){return e.hideControl()}},this.state.needControl?s.a.createElement(x,{onPlay:this.start.bind(this),onPause:this.pause.bind(this),playing:this.state.playing}):s.a.createElement(C,{currentTime:this.state.currentTime,duration:this.state.duration})),s.a.createElement(I.a,{percent:this.state.currentTime/this.state.duration*100,trailWidth:"2",trailColor:"white",strokeWidth:"2",strokeColor:"rgb(56, 169, 214)",className:"progress-bar"}),s.a.createElement("audio",{src:B.a,id:"audio",onTimeUpdate:this.playing.bind(this)})))}},{key:"start",value:function(){var e=document.getElementById("audio");this.setState({duration:e.duration,currentTime:e.currentTime,playing:!0}),e.play()}},{key:"pause",value:function(){document.getElementById("audio").pause(),this.setState({playing:!1})}},{key:"playing",value:function(){var e=document.getElementById("audio");this.setState({duration:e.duration,currentTime:e.currentTime})}},{key:"showControl",value:function(){this.setState({needControl:!0}),console.log(this.state.needControl)}},{key:"hideControl",value:function(){console.log("hi"),this.setState({needControl:!1})}},{key:"loadJson",value:function(){a(141)}}]),t}(s.a.Component),S=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"homePage",style:{"background-image":"url("+d.a+")"}},s.a.createElement(w,{isLogo:"false"}),s.a.createElement("div",{className:"info"},"Explore The New World"))}}]),t}(s.a.Component),L=(a(142),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"NotDoneYet"},s.a.createElement(w,{isLogo:"false"}),s.a.createElement("p",null,"Have not done yet!!",s.a.createElement("br",null),"Please look forward to the excellent page!!!"))}}]),t}(s.a.Component)),M=(a(144),a(221)),W=a(222),G=a(223),U=a(11),D=(a(146),a(148),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"photo"},s.a.createElement("img",{src:this.props.src,alt:"bg"}))}}]),t}(s.a.Component)),H=(a(65),a(150),a(152),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"PhotoCard"},s.a.createElement("div",{className:"close",onClick:this.props.close},"\u2715"),s.a.createElement("div",{className:"photo"},s.a.createElement(D,{src:this.photoURL(this.props.list,this.props.photo)})),s.a.createElement("div",{className:"desc"},s.a.createElement("h1",null,this.photoTitle(this.props.photo)),s.a.createElement("p",{className:"description"},this.photoDescription(this.props.photo)),s.a.createElement("p",{className:"Signature"},"Renhao Huang")))}},{key:"photoURL",value:function(e,t){return null===t?"":e[t.fileName]}},{key:"photoTitle",value:function(e){return null===e?"":e.title}},{key:"photoDescription",value:function(e){return null===e?"":e.description}}]),t}(s.a.Component)),z=function(e){function t(e){var o;Object(n.a)(this,t),o=Object(i.a)(this,Object(r.a)(t).call(this,e));var l={},c=a(205);return c.keys().map(function(e,t){l[e.replace("./","")]=c(e)}),o.state={images:l,currImage:null,index:0},o}return Object(l.a)(t,e),Object(o.a)(t,[{key:"importAll",value:function(e){var t={};return e.keys().map(function(a,n){t[a.replace("./","")]=e(a)}),t}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Gallery-container"},s.a.createElement("div",{id:"Gallery"},U.map(function(t,a){return s.a.createElement("div",{className:"Photos",onMouseOver:function(){return e.onMouseOver(a)},onMouseOut:function(){return e.onMouseOut(a)},onClick:function(){return e.overlayOn(t,a)}},s.a.createElement(D,{src:e.state.images[t.fileName]}))})),s.a.createElement("div",{id:"overlay"},s.a.createElement("div",{class:"background",onClick:function(){return e.overlayOff()}}),s.a.createElement("div",{class:"prev round",onClick:function(){return e.prevPhoto()}},"\u2039"),s.a.createElement(H,{list:this.state.images,photo:this.state.currImage,close:this.overlayOff.bind(this)}),s.a.createElement("div",{href:"#",class:"next round",onClick:function(){return e.nextPhoto()}},"\u203a")))}},{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("Photos");console.log(U);for(var t=0;t<e.length;t++){var a=360/e.length*(t+1);e[t].style.transform="rotateY("+a.toString()+"deg) translateZ(400px)",e[t].style.opacity="0.7"}}},{key:"onMouseOver",value:function(e){document.getElementsByClassName("Photos")[e].style.opacity="1",document.getElementById("Gallery").style["animation-play-state"]="paused"}},{key:"onMouseOut",value:function(e){document.getElementsByClassName("Photos")[e].style.opacity="0.7",document.getElementById("Gallery").style["animation-play-state"]="running"}},{key:"overlayOn",value:function(e,t){document.getElementById("overlay").style.display="block",this.setState({currImage:e,index:t});var a=document.getElementById("Gallery");a.style["animation-play-state"]="paused",a.style.display="none"}},{key:"overlayOff",value:function(){document.getElementById("overlay").style.display="none";var e=document.getElementById("Gallery");e.style["animation-play-state"]="running",e.style.display="flex"}},{key:"nextPhoto",value:function(){var e=this.state.index+1;this.setState({index:(e+1)%U.length,currImage:U[(e+1)%U.length]})}},{key:"prevPhoto",value:function(){var e=this.state.index-1;this.setState({index:(e-1+U.length)%U.length,currImage:U[(e-1+U.length)%U.length]})}}]),t}(s.a.Component),R=(a(216),a(78)),A=a.n(R),K=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"GalleryPage",style:{"background-image":"url("+A.a+")"}},s.a.createElement(w,{isLogo:"false"}),s.a.createElement("div",{className:"GalleryContainer"},s.a.createElement(z,null)))}}]),t}(s.a.Component),J=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("body",null,s.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"}),s.a.createElement(M.a,null,s.a.createElement(W.a,{render:function(e){var t=e.location;return s.a.createElement(G.a,{location:t},s.a.createElement(W.a,{exact:!0,path:"/",component:S}),s.a.createElement(W.a,{exact:!0,path:"/profile",component:L}),s.a.createElement(W.a,{exact:!0,path:"/home",component:S}),s.a.createElement(W.a,{exact:!0,path:"/music",component:L}),s.a.createElement(W.a,{exact:!0,path:"/gallery",component:K}))}})),s.a.createElement("div",{className:"logobar"},s.a.createElement(P,{id:"music-player-index"}),s.a.createElement(w,{isLogo:"true"})))}}]),t}(s.a.Component);m.a.render(s.a.createElement(J,null),document.getElementById("root"))},65:function(e,t,a){e.exports=a.p+"static/media/cat.06918d24.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/starTrek.05de565e.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/facebook.a9be034f.png"},74:function(e,t,a){e.exports=a.p+"static/media/linkedin.ab3dfa6b.png"},75:function(e,t,a){e.exports=a.p+"static/media/github.ef468e27.png"},76:function(e,t,a){e.exports=a.p+"static/media/email.7111a953.png"},77:function(e,t,a){e.exports=a.p+"static/media/bgm.adf90aa5.mp3"},78:function(e,t,a){e.exports=a.p+"static/media/star1.125b830a.jpg"},81:function(e,t,a){e.exports=a(219)},87:function(e,t,a){},89:function(e,t,a){},92:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){}},[[81,2,1]]]);
//# sourceMappingURL=main.22dc4ac8.chunk.js.map