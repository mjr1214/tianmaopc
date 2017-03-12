$(function(){
	var ner=$(".ner")[0];
	var ne=$(".ne",ner)[0];
	var imgs=$(".ner-img");
	var nerlis=$(".ner-li",ner);
	var tclb=$(".tclb",ner);
	var ts = setInterval(move,2000);
	var lis=$("li",ne);
	imgs[0].style.opacity="1";
	lis[0].style.background="red";
	var index=0;
	var next=0;
	var left=$(".ne-left",ne)[0];
	var right=$(".ne-right",ne)[0];
	function move(){
		next++;
		if(next==imgs.length){
			next=0
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.opacity="0";
			lis[i].style.background="";
		}
		imgs[index].style.opacity="1";
		lis[next].style.background="red";
		animate(imgs[index],{opacity:0},300,function(){
		imgs[next].style.opacity="1";
		});
		index=next;
	};
	ne.onmouseover=function(){
		clearInterval(ts);
		animate(left,{left:0},300);
		animate(right,{left:890},300);

	}
	ne.onmouseout=function(){
		ts=setInterval(move,2000);
		animate(left,{left:-40},300);
		animate(right,{left:930},300);
	}
	for(var k=0;k<lis.length;k++){
		lis[k].index=k;
		lis[k].onclick=function(){
			if(index==this.index){
				return
			}
			for(var j=0;j<lis.length;j++){
				lis[j].style.background="";
				// imgs[j].style.opacity="0";
			}
			next=this.index;
			lis[this.index].style.background="red";
			animate(imgs[index],{opacity:0},300,function(){
			imgs[next].style.opacity="1";
			});
			index=next;
		}
		
	}
	for (var i = 0; i < nerlis.length; i++) {
		nerlis[i].index=i;
		nerlis[i].onmouseover=function(){
			for(var j=0;j<tclb.length;j++){
				tclb[j].style.display="none"
			}
			tclb[this.index].style.display="block";
		}
		nerlis[i].onmouseout=function(){
			tclb[this.index].style.display="none";
		}
	}
	var flag=true;
	left.onclick=function(){
		if(flag){
		flag=false;
		next--;
		if(next<0){
			next=lis.length-1
		}
		for (var i = 0; i < lis.length; i++) {
			lis[i].style.background="";
			imgs[i].style.opacity="0";
		}
		imgs[index].style.opacity="1";
		lis[next].style.background="red";
		animate(imgs[index],{opacity:0},300,function(){
			imgs[next].style.opacity="1";
			flag=true
		})
		index=next;
		}
	}
	right.onclick=function(){
		move()
	}

	var brand1=$(".bran-1");
	for (var i = 0; i < brand1.length; i++) {
		var brandds=$(".brandds",brand1[i]);
		for(var j=0;j<brandds.length;j++){
			brandds[j].style.left=123*j+j+"px";
			brandds[j].onmouseover=function(){
				animate(this,{opacity:0.8},200);
			}
			brandds[j].onmouseout=function(){
				animate(this,{opacity:0},100);
			}
		}
		
	}
	var store=$(".store")[0];
	var stores=$(".stores",store);
	var smid=$(".smid",store);
	for (var i = 0; i < smid.length; i++) {
		std(smid[i])
	}
	function std(smid){
	var sim=$("img",smid)[0];
	smid.onmouseover=function(){
		animate(sim,{width:140,height:140,bottom:20,left:30},200);
	}
	smid.onmouseout=function(){
		animate(sim,{width:120,height:120,bottom:30,left:40},200);
	}
	}
	var huic=$(".huichang");
	for(var k=0;k<huic.length;k++){
		var huirl=$(".huirl",huic[k])[0];
		var huirls=$(".huirls",huirl);
		var huirr=$(".huirr",huic[k])[0];
		var huirrs=$(".huirrs",huirr);
		for (var i = 0; i < huirrs.length; i++) {
			lef(huirrs[i])
		}
		for (var i = 0; i < huirls.length; i++) {
			lef(huirls[i])
		}
	}
	function lef(huirls){
		var huirlsi=$("img",huirls)[0];
		huirls.onmouseover=function(){
			animate(huirlsi,{right:25},200)
		}
		huirls.onmouseout=function(){
			animate(huirlsi,{right:20},200)
		}
	}
	var wdtb=$(".wdtb")[0];
	var wdtbul=$("ul",wdtb)[0];
	hover(wdtb,function(){
		wdtbul.style.display="block";
		wdtb.style.background="#fff";
	},function(){
		wdtbul.style.display="none";
		wdtb.style.background="";
	})
	var scj=$(".scj")[0];
	var scjul=$("ul",scj)[0];
	hover(scj,function(){
		scjul.style.display="block";
		scj.style.background="#fff";
	},function(){
		scjul.style.display="none";
		scj.style.background="";
	})

	var sjb=$(".sjb")[0];
	var sjbul=$(".sjbapp",sjb)[0];
	hover(sjb,function(){
		sjbul.style.display="block";
	},function(){
		sjbul.style.display="none";
	})

	// var sjzc=$(".sjzc")[0];
	// var sjzc1=$(".sjzc1",sjzc)[0];
	// var sjzc2=$(".sjzc2",sjzc)[0];
	// hover(sjzc,function(){
	// 	sjzc1.style.display="block";
	// 	sjzc2.style.display="block";
	// },function(){
	// 	sjzc1.style.display="none";
	// 	sjzc2.style.display="none";
	// })

	var wzd=$(".wzd")[0];
	var wzdhb=$(".wzdhb",wzd)[0];
	hover(wzd,function(){
		wzdhb.style.display="block";
	},function(){
		wzdhb.style.display="none";
	})
	// 导航侧栏开始
	var gudin=$(".gudin")[0];
	var guding=$(".guding")[0];
	var gud=$(".gud",guding);
	var daoha=$(".daoha")[0];
	var gudts=[];
	var qjd=$(".qjd")[0];
	var cnxh=$(".cnxh")[0];
	for (var i = 0; i < huic.length; i++) {
		gudts.push(huic[i].offsetTop)
	}
	for (var i = 0; i < gud.length; i++) {
		gud[i].index=i;
		gud[i].onclick=function(){
			animate(document.body,{scrollTop:gudts[this.index]-300-60*this.index});
			animate(document.documentElement,{scrollTop:gudts[this.index]-200});
		}
	}
	gudts.push(qjd.offsetTop);
	gudts.push(cnxh.offsetTop);
	var totop=$(".totop")[0];
	totop.onclick=function(){
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0})
	}
	var topf=true;
	window.onscroll=function(){
		var topse=$(".topse")[0];
		var stop=document.documentElement.scrollTop||document.body.scrollTop;
		if(stop>1700){
			gudin.style.display="block";
			guding.style.display="block";
			daoha.style.display="block";
			totop.style.display="block";
		}else{
			gudin.style.display="none";
			guding.style.display="none";
			daoha.style.display="none";
			totop.style.display="none";
		}
		if(stop>1300){
			if (topf) {
			topf=false;
			animate(topse,{top:0},300,function(){topf=true})}
		}else if(stop<1300){
			if (topf) {
			topf=false;
			animate(topse,{top:-50},300,function(){topf=true})}
		}

		for (var i = 0; i < gudts.length; i++) {
			if(gudts[i]<stop+300){
				for(var j=0;j<gud.length;j++){
				gud[j].style.background="";
			}
				gud[i].style.background="transparent";
			}
		}
	}
	window.onscroll()
	// 导航侧栏结束
	var rgu=$(".rgu")[0];
	var ph=document.documentElement.clientHeight||document.body.clientHeight;
	rgu.style.height=ph+'px';
	var gation=$(".gation");
	var shangyi=$(".shangyi");
	for (var i = 0; i < gation.length; i++) {
		gation[i].index=i;
		hover(gation[i],function(){
			// $("img",shangyi[this.index])[0].style.zIndex=1;
			animate($("img",shangyi[this.index])[0],{top:-13},200);
		},function(){
			animate($("img",shangyi[this.index])[0],{top:0},200);
		})
	}
	var tequan=$(".tequan")[0];
	hover(tequan,function(){
		animate($(".fsj",tequan)[0],{left:0,opacity:1});
		animate($(".ftequan",tequan)[0],{left:-80,opacity:1});
	},function(){
		animate($(".fsj",tequan)[0],{left:-50,opacity:0});
		animate($(".ftequan",tequan)[0],{left:-130,opacity:0});
	})
	var azc=$(".azc")[0];
	hover(azc,function(){
		animate($(".fsj",azc)[0],{left:0,opacity:1});
		animate($(".fzc",azc)[0],{left:-80,opacity:1});
	},function(){
		animate($(".fsj",azc)[0],{left:-50,opacity:0});
		animate($(".fzc",azc)[0],{left:-130,opacity:0});
	})
	var rxh=$(".rxh")[0];
	hover(rxh,function(){
		animate($(".fsj",rxh)[0],{left:0,opacity:1});
		animate($(".fxh",rxh)[0],{left:-80,opacity:1});
	},function(){
		animate($(".fsj",rxh)[0],{left:-50,opacity:0});
		animate($(".fxh",rxh)[0],{left:-130,opacity:0});
	})
	var rsc=$(".rsc")[0];
	hover(rsc,function(){
		animate($(".fsj",rsc)[0],{left:0,opacity:1});
		animate($(".fsc",rsc)[0],{left:-80,opacity:1});
	},function(){
		animate($(".fsj",rsc)[0],{left:-50,opacity:0});
		animate($(".fsc",rsc)[0],{left:-130,opacity:0});
	})
	var rls=$(".rls")[0];
	hover(rls,function(){
		animate($(".fsj",rls)[0],{left:0,opacity:1});
		animate($(".fls",rls)[0],{left:-80,opacity:1});
	},function(){
		animate($(".fsj",rls)[0],{left:-50,opacity:0});
		animate($(".fls",rls)[0],{left:-130,opacity:0});
	})
	var rcz=$(".rcz")[0];
	hover(rcz,function(){
		animate($(".fsj",rcz)[0],{left:0,opacity:1});
		animate($(".fcz",rcz)[0],{left:-80,opacity:1});
	},function(){
		animate($(".fsj",rcz)[0],{left:-50,opacity:0});
		animate($(".fcz",rcz)[0],{left:-130,opacity:0});
	})
	var rfk=$(".rfk")[0];
	hover(rfk,function(){
		animate($(".fsj",rfk)[0],{left:0,opacity:1});
		animate($(".ffk",rfk)[0],{left:-80,opacity:1});
	},function(){
		animate($(".fsj",rfk)[0],{left:-50,opacity:0});
		animate($(".ffk",rfk)[0],{left:-130,opacity:0});
	})
	var rtt=$(".rtt")[0];
	hover(rtt,function(){
		animate($(".fsj",rtt)[0],{left:0,opacity:1});
		animate($(".fdb",rtt)[0],{left:-80,opacity:1});
	},function(){
		animate($(".fsj",rtt)[0],{left:-50,opacity:0});
		animate($(".fdb",rtt)[0],{left:-130,opacity:0});
	})
	rtt.onclick=function(){
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0})
	}
	var rapp=$(".rapp")[0];
	var rappbj=$(".bj",rapp)[0];
	hover(rapp,function(){
		rappbj.style.display="block";
	},function(){
		rappbj.style.display="none";
	})
})
