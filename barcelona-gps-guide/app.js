"use strict";
const S=[
["Plaça Catalunya",41.386255,2.169782,1,"플라사 카탈루냐입니다. 구시가지와 19세기 확장도시 에이샴플라가 맞닿는 바르셀로나의 중심입니다. 람블라와 파세이그 데 그라시아가 여기서 갈라집니다."],
["Casa Batlló · Museu Tàpies",41.390979,2.166518,1,"카사 바트요 구간입니다. 파세이그 데 그라시아는 19세기 말 부르주아 계층이 건축으로 부와 취향을 경쟁하던 거리였습니다. 가우디가 개조한 카사 바트요는 곡선과 생명체 같은 표면을 사용한 모더니즘의 상징입니다. Mandarin Oriental Barcelona도 바로 이 정류장 앞에 있습니다."],
["Eixample",41.381348,2.144751,1,"에이샴플라입니다. 도시계획가 일데폰스 세르다는 성벽 밖을 규칙적인 격자로 설계했습니다. 모서리가 잘린 팔각형 블록은 햇빛과 통풍, 교통 시야를 확보하기 위한 장치였습니다."],
["Sants · Pg. Sant Antoni",41.378218,2.138206,0,"산츠입니다. 오늘날 핵심 철도 허브이지만 19세기에는 섬유공장이 밀집했던 노동자 마을이었습니다."],
["Plaça d’Espanya",41.373637,2.149889,1,"플라사 데스파냐입니다. 이 광장과 몬주익 축은 1929년 국제박람회를 위해 대대적으로 정비됐습니다. 두 개의 베네치아식 탑과 넓은 대로가 몬주익의 전시장으로 방문객을 이끕니다."],
["CaixaForum · Mies van der Rohe",41.37105,2.149667,1,"카이샤포룸과 미스 반 데어 로에 파빌리온 구간입니다. 카이샤포룸은 옛 카사라모나 공장을 문화공간으로 바꾼 곳이고, 인근 바르셀로나 파빌리온은 1929년 국제박람회를 위해 설계된 근대건축의 대표작입니다."],
["Poble Espanyol",41.36949,2.146533,0,"포블레 에스파뇰입니다. 1929년 국제박람회를 위해 스페인 각 지역의 건축양식을 한 공간에 압축해 재현한 야외 건축마을입니다."],
["MNAC · Palau Nacional",41.368098,2.151482,1,"카탈루냐 국립미술관 MNAC가 있는 팔라우 나시오날입니다. 1929년 국제박람회의 중심 건물로 세워졌으며 카탈루냐 미술, 특히 로마네스크 벽화 컬렉션으로 유명합니다."],
["Anella Olímpica",41.366082,2.153196,1,"1992년 바르셀로나 올림픽의 중심, 아넬라 올림피카입니다. 이 올림픽은 항만과 해변, 도로를 재정비해 바르셀로나를 오늘날의 국제 관광도시로 바꾼 결정적인 도시 프로젝트였습니다."],
["Fundació Joan Miró",41.367891,2.159966,0,"호안 미로 미술관입니다. 미로와 건축가 호세프 류이스 세르트의 협업으로 탄생한 건물은 자연광과 중정, 테라스를 활용한 지중해적 합리주의 건축입니다."],
["Telefèric de Montjuïc",41.36886,2.164551,0,"몬주익 케이블카 구간입니다. 케이블카를 타면 정상의 몬주익 성까지 올라갑니다. 과거 군사요새였던 성은 오늘날 도시와 지중해를 내려다보는 전망지입니다."],
["Miramar",41.370237,2.169511,1,"미라마르 전망 구간입니다. 몬주익에서 항구와 지중해가 열립니다. 한때 철도와 산업시설로 바다와 단절됐던 바르셀로나는 항만 재개발과 1992년 올림픽을 거치며 해안을 다시 시민 공간으로 만들었습니다."],
["Arc de Triomf · Barcelona Nord",41.394547,2.181885,1,"아르크 데 트리옴프입니다. 1888년 바르셀로나 만국박람회의 주출입문으로 세워졌습니다. 붉은 벽돌과 장식적 형태로 산업과 문화의 도시 이미지를 강조했습니다."],
["Sagrada Família",41.402967,2.173793,1,"사그라다 파밀리아입니다. 공사는 1882년에 시작됐고 가우디가 이듬해부터 프로젝트를 맡아 완전히 새로운 성당으로 발전시켰습니다. 이번 여행에서는 별도 한국어 가우디 투어가 있으니 버스에서는 전체 실루엣과 도시 속 위치를 보는 데 집중하시면 좋습니다."],
["Torre Glòries · 22@",41.404099,2.189332,1,"글로리에스와 22앳 지구입니다. 장 누벨의 토레 글로리에스가 보이고, 옛 공업지대 포블레노우는 기술기업과 대학, 디자인 스튜디오가 모이는 혁신지구로 변했습니다."],
["Poblenou",41.401054,2.199086,0,"포블레노우입니다. 19세기에는 공장 굴뚝이 빽빽해 카탈루냐의 맨체스터라 불린 산업지대였고, 지금은 공장과 현대 오피스, 디자인 공간이 섞인 창조지구입니다."],
["Parc Diagonal Mar",41.40507,2.213923,0,"디아고날 마르입니다. 대로 디아고날이 바다와 만나는 동쪽 끝으로, 2000년대 도시재생을 통해 주거와 상업, 공원이 새롭게 조성됐습니다."],
["Fòrum",41.410695,2.218686,1,"포룸 구역입니다. 2004년 세계문화포럼을 위해 조성된 해안 공간으로, 바르셀로나가 올림픽 이후에도 동쪽 해안 도시재생을 계속해왔음을 보여줍니다."],
["Platja Nova Mar Bella",41.400954,2.212074,0,"노바 마르 벨라 해변입니다. 현재와 같은 바르셀로나 도시 해변의 상당 부분은 1992년 올림픽 전후 해안 정비와 도시재생의 결과입니다."],
["Platja del Bogatell",41.392571,2.204417,0,"보가텔 해변입니다. 관광객이 집중되는 바르셀로네타보다 생활형 해변 분위기가 강하고, 올림픽 이후 시민과 지중해를 다시 연결한 해안 산책로가 이어집니다."],
["Port Olímpic · Zoo",41.387918,2.197059,1,"포르트 올림픽입니다. 1992년 올림픽을 위해 조성된 마리나로, 토레 마프레와 호텔 아츠가 해안 스카이라인을 만듭니다. 산업 해안이 여가와 관광의 해안으로 바뀐 상징적인 장소입니다."],
["Barceloneta",41.381003,2.184009,1,"바르셀로네타입니다. 18세기 중반 계획적으로 조성된 항구 노동자와 해양 생활의 동네로, 좁고 규칙적인 골목과 해산물 문화가 특징입니다."],
["La Rambla · Colom",41.376055,2.178255,1,"람블라 남쪽 끝과 콜럼버스 기념탑입니다. 기념탑은 1888년 만국박람회를 계기로 세워졌고, 인근 중세 왕립 조선소 드라사네스는 지중해 해군력의 흔적을 보여줍니다."],
["World Trade Center · Port Vell",41.373156,2.178164,1,"월드 트레이드 센터와 포르트 벨입니다. 오래된 상업항구의 역사와 20세기 말 항만 재개발을 함께 볼 수 있는 구간입니다. 이제 버스는 다시 도심 방향으로 돌아갑니다."]
];

const $=x=>document.getElementById(x);
let running=false,paused=false,watch=null,current=1,last=null,played=new Set(),pos=null,wake=null;
const dist=(a,b,c,d)=>{const R=6371000,r=x=>x*Math.PI/180,A=r(c-a),B=r(d-b),q=Math.sin(A/2)**2+Math.cos(r(a))*Math.cos(r(c))*Math.sin(B/2)**2;return 2*R*Math.asin(Math.sqrt(q))};
const fmt=m=>m<1000?Math.round(m)+" m":(m/1000).toFixed(1)+" km";
function speak(t,title){if(paused)return;speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(t);u.lang="ko-KR";u.rate=+$("rate").value;u.onstart=()=>$("status").textContent="해설 재생 중";u.onend=()=>{if(running&&!paused)$("status").textContent="GPS 추적 중"};speechSynthesis.speak(u);$("nowTitle").textContent=title;$("nowText").textContent=t}
function eligible(i){return $("mode").value==="all"||S[i][3]===1}
function render(){let ol=$("stops");ol.innerHTML="";S.forEach((s,i)=>{let li=document.createElement("li");li.textContent=s[0];if(s[3]){let b=document.createElement("span");b.className="badge";b.textContent="핵심";li.appendChild(b)}if(played.has(i))li.classList.add("played");if(i===current)li.classList.add("next");ol.appendChild(li)});$("next").textContent=S[current][0]}
function nearest(lat,lon){let z={i:0,d:1e12};S.forEach((s,i)=>{let d=dist(lat,lon,s[1],s[2]);if(d<z.d)z={i,d}});return z}
function narrate(i,force=false){last=i;played.add(i);if(force||eligible(i))speak(S[i][4],S[i][0]);current=(i+1)%S.length;render()}
function forward(){let a=[];for(let k=0;k<5;k++)a.push((current+k)%S.length);return a}
function onpos(p){if(!running||paused)return;let {latitude:lat,longitude:lon,accuracy}=p.coords;pos={lat,lon,accuracy};let n=nearest(lat,lon);$("nearest").textContent=S[n.i][0];$("accuracy").textContent="±"+Math.round(accuracy||0)+" m";let best={i:current,d:1e12};forward().forEach(i=>{let d=dist(lat,lon,S[i][1],S[i][2]);if(d<best.d)best={i,d}});$("distance").textContent=fmt(best.d);let radius=Math.max(220,Math.min(360,(accuracy||25)*2.2));if(best.d<=radius&&!played.has(best.i))narrate(best.i)}
function err(e){$("status").textContent=e.code===1?"위치 권한이 필요합니다":"GPS 오류";running=false}
async function awake(){try{if("wakeLock"in navigator)wake=await navigator.wakeLock.request("screen")}catch(e){}}
async function start(){if(running){stop();return}if(!navigator.geolocation){$("status").textContent="GPS 미지원";return}played.clear();last=null;current=$("startAt").value==="auto"?1:+$("startAt").value;render();running=true;paused=false;$("start").textContent="■ GPS GUIDE STOP";$("status").textContent="GPS 연결 중";speak("바르셀로나 한국어 GPS 가이드를 시작합니다. 위치가 확인되면 자동으로 해설하겠습니다.","GPS GUIDE");await awake();navigator.geolocation.getCurrentPosition(p=>{if($("startAt").value==="auto")current=nearest(p.coords.latitude,p.coords.longitude).i;render();onpos(p)},err,{enableHighAccuracy:true,timeout:15000,maximumAge:0});watch=navigator.geolocation.watchPosition(onpos,err,{enableHighAccuracy:true,maximumAge:2000,timeout:20000})}
function stop(){running=false;paused=false;if(watch!==null)navigator.geolocation.clearWatch(watch);watch=null;speechSynthesis.cancel();if(wake){try{wake.release()}catch(e){}wake=null}$("start").textContent="▶ GPS GUIDE START";$("status").textContent="중지됨"}
$("start").onclick=start;$("pause").onclick=()=>{if(!running)return;paused=!paused;speechSynthesis.cancel();$("pause").textContent=paused?"▶ 계속":"⏸ 일시정지";$("status").textContent=paused?"일시정지":"GPS 추적 중";if(!paused&&pos)onpos({coords:{latitude:pos.lat,longitude:pos.lon,accuracy:pos.accuracy}})};
$("replay").onclick=()=>{if(last===null){$("status").textContent="아직 재생된 해설이 없습니다";return}speak(S[last][4],S[last][0])};
$("skip").onclick=()=>{let i=current;for(let k=0;k<S.length;k++){if(eligible(i))break;i=(i+1)%S.length}narrate(i,true)};
$("test").onclick=()=>speak("안녕하세요. 바르셀로나 한국어 오디오가이드 음성 테스트입니다.","음성 테스트");
$("mode").onchange=render;$("startAt").onchange=()=>{if(!running){current=$("startAt").value==="auto"?1:+$("startAt").value;render()}};
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&running)awake()});
render();
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));