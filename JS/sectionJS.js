(()=>{function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t=globalThis,o={},r={},n=t.parcelRequire1655;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire1655=n);var a=n.register;a("cZZlm",function(t,o){e(t.exports,"Translator",()=>l);var r=n("58JhZ"),a=n("grHkc");function l(e,t){var o=[],n="";if("eng"==e){-1!==t.indexOf("?")?n+="¿":-1!==t.indexOf("!")?n+="¡":n+="˙",t=(t=(t=t.replace(/[^0-9a-zA-Z]/g,"")).replace(/\s/g,"")).toLowerCase();for(var l=0,i=t.length-1;i>=0;i--)o[l]=t.charCodeAt([i])-97,l++;for(var i=0;i<t.length;i++)n+=r.Alien[o[i]];return localStorage.setItem("atext",n),n}if("alien"==e){var s=0;t=t.replace(/\s/g,"");var c=localStorage.getItem("text"),u=localStorage.getItem("atext");return t==(u=u.replace(/\s/g,""))?c:(-1!==(t.indexOf("?")||t.indexOf("¿"))?(s=Math.floor(Math.random()*a.String.question.length),t=a.String.question[s]):-1!==(t.indexOf("!")||t.indexOf("¡"))?(s=Math.floor(Math.random()*a.String.exclaimation.length),t=a.String.exclaimation[s]):(s=Math.floor(Math.random()*a.String.plain.length),t=a.String.plain[s]),localStorage.setItem("stext",t),t)}}}),a("58JhZ",function(t,o){e(t.exports,"Alien",()=>r);let r=["Ω","Б","ξ","ζ","п","ㅥ","Ωζ ","ББ "," ξΩ","ㅥζ "," Бㅥ","пп ","пξ ","ζζ "," ΩΩ"," ζㅥ","БΩ ","ξп ","ΩБ ","Бζ "," ξξ"," пㅥ"," пБ","ζξ ","ζΩ "," ㅥㅥ"]}),a("grHkc",function(t,o){e(t.exports,"String",()=>r);let r={plain:["Be careful.","Be careful driving.","Chicago is very different from Boston.","Don't worry.","Everyone knows it.","Everything is ready.","Excellent.","From time to time.","Good idea.","He likes it very much.","He's coming soon.","He's right.","He's very annoying.","He's very famous.","I ate already.","I can't hear you.","I'd like to go for a walk.","I don't know how to use it.","I don't like him.","I don't like it.","I don't speak very well.","I don't understand.","I don't want it.","I don't want that.","I don't want to bother you.","undefined","I feel good.","If you need my help, please let me know.","I get off of work at 6.","I have a headache.","I hope you and your wife have a nice trip.","I know.","I like her.","I'll call you when I leave.","I'll come back later.","I'll pay.","I'll take it.","I'll take you to the bus stop.","I lost my watch.","I love you.","I'm an American.","I'm cleaning my room.","I'm cold.","I'm coming to pick you up.","I'm going to leave.","I'm happy.","I'm hungry.","I'm married.","I'm not busy.","I'm not married.","I'm not ready yet.","I'm not sure.","I'm sorry, we're sold out.","I'm thirsty.","I'm very busy. I don't have time now.","undefined","I need to change clothes.","I need to go home.","I only want a snack.","I think it's very good.","I think it tastes good.","I thought the clothes were cheaper.","It's longer than 2 miles.","I've been here for two days.","I've heard Texas is a beautiful place.","I've never seen that before.","I was about to leave the restaurant when my friends arrived.","Just a little.","Just a moment.","Let me check.","Let me think about it.","Let's go have a look.","Let's practice English.","More than that.","Never mind.","Next time.","No.","Nonsense.","No, thank you.","Nothing else.","Not recently.","Not yet.","Of course.","undefined","Okay.","Please fill out this form.","Please take me to this address.","Please write it down.","Right here.","Right there.","See you later.","See you tomorrow.","See you tonight.","She's pretty.","Sorry to bother you.","Take a chance.","Take it outside.","Tell me.","Thanks for everything.","Thanks for your help.","Thank you.","Thank you miss.","Thank you sir.","Thank you very much.","That looks great.","That's alright.","That's enough.","That's fine.","That's it.","That smells bad.","That's not fair.","That's not right.","That's right.","That's too bad.","That's too many.","That's too much.","The book is under the table.","They'll be right back.","They're the same.","They're very busy.","This doesn't work.","This is very difficult.","This is very important.","Try it.","Very good, thanks.","We like it very much.","Yes, really.","You're beautiful.","You're very nice.","You're very smart.","Your things are all here."],question:["Can you translate this for me?","How are you?","How's work going?","I'm good, and you?","Is Mr. Smith an American?","Is that enough?","May I speak to Mrs. Smith please?","Really?","Would you take a message please?"],exclaimation:["Help!","Hurry!","Stop!"]}});var l=n("cZZlm");let i=document.querySelector("#left"),s=i.querySelector(".top").querySelector(".text"),c=i.querySelector(".top").querySelector("#change").querySelector("button"),u=i.querySelector("form").querySelector("textarea"),h=i.querySelector("#textLen"),d=i.querySelector(".btm").querySelector("button"),y=document.querySelector("#right"),m=y.querySelector(".mid").querySelector(".text"),g=y.querySelector(".btm").querySelector("#copy").querySelector("button"),f=document.querySelector("body"),v=document.querySelector(".modal"),I=document.querySelector(".modal_body"),p=document.querySelector("#share").querySelector("button"),w=document.querySelector("#modal_close"),k=I.querySelector("#face"),S=I.querySelector("#twit"),x=I.querySelector("#link");var T="eng",b=0;let q=window.location.href;function L(e){e?(d.style.color="black",d.style.pointerEvents="auto"):(d.style.color="gray",d.style.pointerEvents="none")}function E(e){var t=m.innerText;let o=document.createElement("textarea");document.body.appendChild(o),o.value=t,o.select(),document.execCommand("copy"),document.body.removeChild(o),swal({title:"",text:"copied successfully!",icon:"success"})}S.addEventListener("click",function(){window.open("https://twitter.com/intent/tweet?text=&url="+q)}),k.addEventListener("click",function(){window.open("http://www.facebook.com/sharer/sharer.php?u="+q)}),x.addEventListener("click",function(){navigator.clipboard.writeText(q).then(e=>{swal({title:"",text:"copied successfully!",icon:"success"})}).catch(swal({title:"",text:"error",icon:"error"}))}),p.addEventListener("click",()=>{v.classList.toggle("show"),I.classList.toggle("show"),f.style.overflow="hidden"}),v.addEventListener("click",e=>{e.target!==v||(v.classList.toggle("show"),I.classList.toggle("show"),v.classList.contains("show")||(f.style.overflow="auto"))}),w.addEventListener("click",e=>{v.classList.toggle("show"),I.classList.toggle("show"),v.classList.contains("show")||(f.style.overflow="auto")}),c.addEventListener("click",function(e){u.value="",m.innerText="","eng"==c.name?(c.name="alien",c.innerText="eng",s.innerText="alien",T="alien"):"alien"==c.name&&(c.name="eng",c.innerText="alien",s.innerText="eng",T="eng")}),d.addEventListener("click",function(e){e.preventDefault();var t,o=u.value;"eng"==T?localStorage.setItem("text",o):"alien"==T||console.log("fail"),t=(0,l.Translator)(T,o),m.innerText=t,g.addEventListener("click",E)}),u.addEventListener("keyup",function(e){let t=u.value;b=t.length,h.innerText=`${b}/1000`,"eng"==T?L(/^[a-zA-Z0-9^? ]*$/.test(t)&&0!==t.trim().length):"alien"==T&&L(/^[ΩζξБпㅥ0-9^? ]*$/.test(t)&&0!==t.trim().length)})})();
//# sourceMappingURL=sectionJS.js.map
