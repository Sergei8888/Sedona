const _0x240a=['1262285vaFwcA','length','618311BCLKsM','current','min','765379axmHuH','center','filter','massCenter','cos','sin','reduce','1AaXXvj','color','objectList','frames','paddingRight','328836bUXQbR','paddingTop','66294QWJFhr','21KNELmQ','push','getElementById','anim-frame','2273KxGsAt','framesCount','objects','colors','31hLlxAF','width','73426GTYEaf'];(function(_0x4e7439,_0x2ce919){const _0x447f80=_0x55e9;while(!![]){try{const _0x5d789b=-parseInt(_0x447f80(0x1ab))+parseInt(_0x447f80(0x1ac))+-parseInt(_0x447f80(0x1a0))*parseInt(_0x447f80(0x1a1))+-parseInt(_0x447f80(0x19e))+-parseInt(_0x447f80(0x1a5))*parseInt(_0x447f80(0x1a9))+parseInt(_0x447f80(0x1ae))+parseInt(_0x447f80(0x199))*parseInt(_0x447f80(0x1b1));if(_0x5d789b===_0x2ce919)break;else _0x4e7439['push'](_0x4e7439['shift']());}catch(_0x86c3f5){_0x4e7439['push'](_0x4e7439['shift']());}}}(_0x240a,0xbeb14));let BALLS={'current':null,'frames':[],'colors':{},'massCenter':[]};function setup(){const _0x520750=_0x55e9;let _0x335674=document[_0x520750(0x1a3)](_0x520750(0x1a4)),_0x13d1dc=getComputedStyle(_0x335674),_0x11b2ba=parseInt(_0x13d1dc[_0x520750(0x1aa)],0xa)-parseInt(_0x13d1dc['paddingLeft'],0xa)-parseInt(_0x13d1dc[_0x520750(0x19d)],0xa),_0x4128bb=parseInt(_0x13d1dc['height'],0xa)-parseInt(_0x13d1dc[_0x520750(0x19f)],0xa)-parseInt(_0x13d1dc['paddingBottom'],0xa),_0x47641e=createCanvas(Math[_0x520750(0x1b0)](_0x11b2ba,_0x4128bb),Math[_0x520750(0x1b0)](_0x11b2ba,_0x4128bb));_0x47641e['parent'](_0x520750(0x1a4));}function onData(_0x5c16e9){const _0x451674=_0x55e9;BALLS={'current':null,'frames':[],'colors':{},'massCenter':[]};for(let _0x4b25a5,_0x51b5d3=0x0;_0x51b5d3<0x4b0;_0x51b5d3++){for(id in(_0x4b25a5={},_0x5c16e9[_0x451674(0x1a7)]))_0x4b25a5[id]=_0x5c16e9['objects'][id][_0x51b5d3],_0x51b5d3||(BALLS[_0x451674(0x1a8)][id]=vm[_0x451674(0x19b)][_0x451674(0x1b3)](_0x437cc1=>_0x437cc1['id']===id)[0x0][_0x451674(0x19a)]);BALLS['frames'][_0x451674(0x1a2)](_0x4b25a5);}BALLS[_0x451674(0x1a6)]=0x4b0,BALLS['current']=0x0;}function _0x55e9(_0x19fbff,_0x2a0010){_0x19fbff=_0x19fbff-0x197;let _0x240aba=_0x240a[_0x19fbff];return _0x240aba;}function draw(){const _0x299a3d=_0x55e9;push();let _0x11e4e7=width;if(noStroke(),fill(0x22),rect(0x0,0x0,_0x11e4e7,_0x11e4e7,0.04*_0x11e4e7),fill(0x16),circle(0.5*_0x11e4e7,0.5*_0x11e4e7,0.9*_0x11e4e7),fill(0x22),circle(0.5*_0x11e4e7,0.5*_0x11e4e7,0.7*_0x11e4e7),fill(0x37),rectMode(_0x299a3d(0x1b2)),rect(0.9*_0x11e4e7,0.5*_0x11e4e7,0.08*_0x11e4e7,0.02*_0x11e4e7,0.02*_0x11e4e7),rect(0.1*_0x11e4e7,0.5*_0x11e4e7,0.08*_0x11e4e7,0.02*_0x11e4e7,0.02*_0x11e4e7),null!==BALLS[_0x299a3d(0x1af)]){let _0x2e6977=[],_0xb5d82c=[];for(id in BALLS[_0x299a3d(0x1a8)]){fill(BALLS[_0x299a3d(0x1a8)][id]);let _0x4226a0=BALLS[_0x299a3d(0x19c)][BALLS['current']][id],_0xc1346d=0.5*_0x11e4e7+0.4*(Math[_0x299a3d(0x1b5)](_0x4226a0)*_0x11e4e7),_0x340976=0.5*_0x11e4e7-0.4*(Math[_0x299a3d(0x197)](_0x4226a0)*_0x11e4e7);_0x2e6977[_0x299a3d(0x1a2)](_0xc1346d),_0xb5d82c[_0x299a3d(0x1a2)](_0x340976),circle(_0xc1346d,_0x340976,0.07*_0x11e4e7);}if(massCenterX=_0x2e6977[_0x299a3d(0x198)]((_0x40b4d9,_0x5861f2)=>_0x40b4d9+_0x5861f2)/_0x2e6977[_0x299a3d(0x1ad)],massCenterY=_0xb5d82c[_0x299a3d(0x198)]((_0x11d8ab,_0xc544e5)=>_0x11d8ab+_0xc544e5)/_0xb5d82c[_0x299a3d(0x1ad)],0x1<BALLS[_0x299a3d(0x1af)]){noFill(),strokeWeight(0.01*_0x11e4e7);for(let _0x419568,_0x396b74=0x0;0x100>_0x396b74;_0x396b74++)_0x419568=_0x396b74-0x100-0x1+BALLS['current'],0x0<_0x419568&&(stroke(0xff,_0x396b74/0x1/2.55),line(...BALLS[_0x299a3d(0x1b4)][_0x419568-0x1],...BALLS[_0x299a3d(0x1b4)][_0x419568]));noStroke();}fill(0xff,0x64),circle(massCenterX,massCenterY,0.11*_0x11e4e7),BALLS[_0x299a3d(0x1b4)]['push']([massCenterX,massCenterY]),BALLS[_0x299a3d(0x1af)]++,BALLS['current']===BALLS[_0x299a3d(0x1a6)]&&(BALLS[_0x299a3d(0x1af)]=null);}pop();}