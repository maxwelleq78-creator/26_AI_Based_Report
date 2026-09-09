"use strict";
const S=[
["Plaça Catalunya",41.386255,2.169782,1,"플라사 카탈루냐입니다. 바르셀로나의 구시가지와 19세기 확장도시 에이샴플라가 맞닿는 경계이자, 람블라와 파세이그 데 그라시아가 갈라지는 도시의 중심입니다. 중세 바르셀로나는 지금의 고딕지구를 중심으로 성벽 안에 모여 있었지만, 19세기 중반 성벽이 철거되면서 도시는 북쪽으로 크게 확장됐습니다. 그래서 이 광장을 기준으로 남쪽은 오래된 바르셀로나, 북쪽은 계획도시 바르셀로나라고 생각하면 도시 구조가 훨씬 쉽게 보입니다. 지금부터 Red Route를 따라가면서 중세도시, 모더니즘, 올림픽 도시재생, 해안 재개발까지 바르셀로나가 여러 시대에 걸쳐 어떻게 변했는지 한 번에 보게 됩니다."],
["Casa Batlló · Museu Tàpies",41.390979,2.166518,1,"카사 바트요 구간입니다. 그리고 이 정류장은 이번 여행에서 머무시는 Mandarin Oriental Barcelona 바로 앞입니다. 호텔이 자리한 파세이그 데 그라시아는 19세기 말 바르셀로나 부유층이 새로 만든 에이샴플라에 저택을 짓고 건축으로 부와 취향을 경쟁하던 거리였습니다. 그 경쟁이 가장 화려하게 드러나는 구간이 바로 이른바 불화의 블록, 만사나 데 라 디스코르디아입니다. 가우디가 1904년부터 개조한 카사 바트요는 뼈를 연상시키는 기둥, 물결치는 외벽, 용의 등을 떠올리게 하는 지붕으로 유명합니다. 길 건너와 주변 건물들을 같이 보면 한 건물만 보는 것보다 당시 바르셀로나 상류층의 미적 경쟁이 훨씬 잘 느껴집니다. 버스를 타고 지나갈 때는 건물 전체 실루엣과 파세이그 데 그라시아의 넓은 가로축을 함께 보시면 좋습니다."],
["Eixample",41.381348,2.144751,1,"에이샴플라입니다. 19세기 도시계획가 일데폰스 세르다는 성벽 철거 이후 급격히 팽창하는 바르셀로나를 위해 대규모 격자형 신도시를 설계했습니다. 가장 눈에 띄는 특징은 교차로마다 건물 모서리가 45도로 잘려 있는 팔각형 블록입니다. 처음에는 마차의 회전과 시야를 넓히고 햇빛과 통풍을 확보하기 위한 장치였는데, 오늘날에는 자동차와 보행자에게도 넓은 교차 공간을 만들어 줍니다. 세르다는 도로 폭, 녹지, 위생과 채광까지 고려한 상당히 현대적인 도시를 꿈꿨지만 실제 개발 과정에서는 건물 밀도가 높아졌습니다. 그래도 위에서 바르셀로나를 보면 정교한 격자가 도시 전체에 펼쳐지는 이유는 바로 이 계획 때문입니다. 버스에서 창밖 블록 모서리 모양을 반복해서 보면 에이샴플라의 구조가 금방 눈에 들어옵니다."],
["Sants · Pg. Sant Antoni",41.378218,2.138206,0,"산츠입니다. 지금은 바르셀로나를 대표하는 철도 허브로 가장 먼저 떠올리는 지역이지만, 19세기에는 섬유공장과 산업시설이 밀집했던 별도의 노동자 마을이었습니다. 철도가 들어오면서 도시의 서쪽 관문 역할이 더욱 커졌고, 오늘날에는 마드리드와 바르셀로나를 연결하는 고속철도까지 이곳을 중심으로 움직입니다. 이번 여행에서도 마드리드에서 Iryo를 타고 바르셀로나에 도착할 때 처음 만나게 되는 지역입니다."],
["Plaça d’Espanya",41.373637,2.149889,1,"플라사 데스파냐입니다. 이 광장과 몬주익으로 올라가는 거대한 축은 1929년 바르셀로나 국제박람회를 위해 대대적으로 조성됐습니다. 광장에서 몬주익 방향을 보면 두 개의 베네치아식 탑이 일종의 관문처럼 서 있고, 그 뒤로 넓은 아빙구다 데 라 레이나 마리아 크리스티나가 이어집니다. 더 안쪽에는 지금의 MNAC가 있는 팔라우 나시오날이 높은 곳에서 축을 마무리합니다. 즉 이 공간 전체가 박람회 방문객에게 바르셀로나의 규모와 자신감을 보여주기 위한 거대한 도시 무대였습니다. 지금도 전시장과 박람회 시설이 남아 있어 1929년의 도시계획이 현재의 바르셀로나 관광 동선과 행사 공간에 그대로 영향을 주고 있습니다."],
["CaixaForum · Mies van der Rohe",41.37105,2.149667,1,"카이샤포룸과 미스 반 데어 로에 파빌리온 구간입니다. 카이샤포룸 건물은 원래 모더니즘 건축가 푸이그 이 카다팔크가 설계한 카사라모나 섬유공장이었습니다. 벽돌을 장식적으로 사용한 산업건축인데, 지금은 문화센터로 재생돼 전시 공간으로 쓰이고 있습니다. 바로 인근의 바르셀로나 파빌리온은 완전히 다른 시대의 미학을 보여줍니다. 미스 반 데어 로에가 1929년 국제박람회를 위해 설계한 이 건물은 얇은 지붕, 자유롭게 놓인 벽, 대리석과 유리 같은 고급 재료로 근대건축의 핵심 개념을 압축했습니다. 현재 건물은 원래 파빌리온이 철거된 뒤 1980년대에 원형대로 재건된 것입니다. 짧은 거리 안에서 화려한 카탈루냐 모더니즘과 절제된 국제주의 건축을 비교할 수 있는 재미있는 구간입니다."],
["Poble Espanyol",41.36949,2.146533,0,"포블레 에스파뇰입니다. 1929년 국제박람회를 위해 스페인 각 지역의 대표적인 건축양식과 광장, 골목을 한 공간에 압축해 재현한 야외 건축마을입니다. 원래는 박람회가 끝나면 철거할 계획이었지만 예상보다 큰 인기를 얻으면서 남게 됐습니다. 지금은 건축 전시뿐 아니라 공예, 공연, 식당과 문화행사가 결합된 공간으로 사용됩니다."],
["MNAC · Palau Nacional",41.368098,2.151482,1,"카탈루냐 국립미술관 MNAC가 있는 팔라우 나시오날입니다. 이 거대한 건물 역시 1929년 국제박람회의 중심 전시관으로 세워졌고, 몬주익의 높은 지점에서 플라사 데스파냐까지 이어지는 축을 내려다봅니다. 현재 MNAC는 카탈루냐 미술을 시대별로 폭넓게 보여주는데, 특히 피레네 산맥의 중세 교회에서 옮겨온 로마네스크 벽화 컬렉션으로 세계적으로 유명합니다. 당시 벽화를 원래 교회에서 떼어 박물관으로 옮긴 것은 해외 반출과 훼손을 막기 위한 보존 작업의 성격도 있었습니다. 건물 앞 계단과 테라스는 바르셀로나 시내를 넓게 볼 수 있는 대표적인 전망 포인트이기도 합니다."],
["Anella Olímpica",41.366082,2.153196,1,"1992년 바르셀로나 올림픽의 중심, 아넬라 올림피카입니다. 이곳에는 올림픽 주경기장, 팔라우 산 조르디, 수영장과 여러 스포츠 시설이 집중돼 있습니다. 특히 바르셀로나 올림픽은 단순히 경기장을 지은 행사가 아니라 도시 전체를 다시 설계한 프로젝트에 가까웠습니다. 항구와 해변을 정비하고, 순환도로를 만들고, 낙후된 산업지역을 재개발하면서 시민이 바다에 접근할 수 있는 도시로 바뀌었습니다. 그래서 오늘날 관광객이 좋아하는 바르셀로나의 해변과 해안 산책로도 1992년을 빼고 설명하기 어렵습니다. 이 구간을 지나면서는 올림픽 시설 자체보다, 올림픽을 계기로 도시 전체가 얼마나 크게 변했는지를 떠올리면 좋습니다."],
["Fundació Joan Miró",41.367891,2.159966,0,"호안 미로 미술관입니다. 미로와 건축가 호세프 류이스 세르트의 협업으로 만들어졌고, 흰색 외벽과 자연광, 중정과 테라스를 활용해 작품이 건물과 함께 보이도록 설계됐습니다. 미로의 색채와 자유로운 형태를 좋아한다면 작품뿐 아니라 건축 자체도 볼 가치가 있는 공간입니다."],
["Telefèric de Montjuïc",41.36886,2.164551,0,"몬주익 케이블카 구간입니다. 케이블카를 이용하면 몬주익 정상에 있는 성까지 올라갈 수 있습니다. 몬주익 성은 오랫동안 항구와 도시를 통제하던 군사요새였고 바르셀로나의 복잡한 정치사를 상징하는 장소이기도 합니다. 지금은 도시와 지중해, 항만을 넓게 내려다보는 전망지로 성격이 크게 바뀌었습니다."],
["Miramar",41.370237,2.169511,1,"미라마르 전망 구간입니다. 여기서는 몬주익에서 바르셀로나 항구와 지중해 쪽 시야가 크게 열립니다. 오늘날 바르셀로나는 바다와 아주 가까운 도시처럼 느껴지지만, 과거에는 철도와 항만 산업시설이 시민과 해안을 물리적으로 갈라놓고 있었습니다. 20세기 후반 항만 재개발과 1992년 올림픽을 거치면서 낡은 산업공간이 철거되거나 새 용도로 바뀌고, 해변과 산책로가 시민에게 다시 열렸습니다. 앞으로 버스가 해안으로 내려가면 그 도시재생의 결과를 직접 보게 됩니다. 높은 곳에서 항구 전체의 구조를 먼저 눈에 담아두면 이후 Port Olímpic과 Barceloneta 구간이 더 이해하기 쉽습니다."],
["Arc de Triomf · Barcelona Nord",41.394547,2.181885,1,"아르크 데 트리옹프입니다. 1888년 바르셀로나 만국박람회의 주출입문으로 건축가 호세프 빌라세카가 설계했습니다. 파리의 개선문처럼 군사적 승리를 기념하는 성격보다는 산업과 문화, 상업의 도시로 성장한 바르셀로나가 세계 방문객을 환영하는 문에 가까웠습니다. 붉은 벽돌과 네오무데하르 계열의 장식이 특징이라 유럽의 석조 개선문과는 인상이 꽤 다릅니다. 이 개선문을 지나 시우타델라 공원 쪽으로 이어지는 축이 당시 박람회의 주요 동선이었습니다. 1888년 박람회는 바르셀로나가 국제도시로 자신을 본격적으로 알린 첫 번째 큰 사건 중 하나이고, 1929년 국제박람회와 1992년 올림픽으로 이어지는 도시 이벤트의 출발점으로 볼 수 있습니다."],
["Sagrada Família",41.402967,2.173793,1,"사그라다 파밀리아입니다. 공사는 1882년에 시작됐고, 가우디가 이듬해부터 프로젝트를 맡으면서 기존의 네오고딕 계획을 완전히 다른 성당으로 발전시켰습니다. 가우디는 나무의 가지처럼 갈라지는 기둥, 자연에서 가져온 기하학, 빛의 변화와 기독교 상징을 하나의 건축 체계로 결합했습니다. 탄생의 파사드는 가우디 생전에 상당 부분 완성돼 그의 손길을 가장 직접적으로 느낄 수 있고, 수난의 파사드는 훨씬 절제되고 날카로운 조각 언어를 사용합니다. 이번 여행에서는 별도의 한국어 가우디 전일 투어가 있으니 지금 버스에서는 세부 조각보다 성당 전체가 에이샴플라의 규칙적인 도시 조직 안에서 얼마나 압도적인 수직 랜드마크로 보이는지에 집중하시면 좋습니다. 나중에 가까이서 볼 때와 지금 멀리서 볼 때의 인상이 꽤 다를 겁니다."],
["Torre Glòries · 22@",41.404099,2.189332,1,"글로리에스와 22앳 지구입니다. 장 누벨이 설계한 토레 글로리에스가 이 지역의 가장 눈에 띄는 랜드마크입니다. 둥근 탄환형 실루엣과 빛에 따라 달라지는 외피 때문에 가우디의 도시라는 이미지와 전혀 다른 현대 바르셀로나의 모습을 보여줍니다. 주변 포블레노우는 한때 공장과 창고가 밀집했던 산업지대였지만, 22앳 프로젝트를 통해 기술기업, 대학, 스타트업, 디자인 스튜디오가 모이는 혁신지구로 전환됐습니다. 흥미로운 점은 오래된 공장 굴뚝과 새 유리 오피스가 한 동네에 함께 남아 있다는 것입니다. 바르셀로나가 과거 건축을 보존하면서도 새로운 산업을 끌어들이는 방식을 보기 좋은 구간입니다."],
["Poblenou",41.401054,2.199086,0,"포블레노우입니다. 19세기에는 공장 굴뚝이 빽빽해 '카탈루냐의 맨체스터'라고 불릴 정도로 중요한 산업지대였습니다. 이후 제조업이 쇠퇴하면서 낙후됐지만 지금은 옛 공장과 창고를 오피스, 대학, 디자인 공간으로 재활용하면서 새로운 창조산업 지역으로 바뀌고 있습니다. 오래된 붉은 벽돌 건물과 현대식 건물이 섞여 있는 풍경을 보면 변화가 잘 보입니다."],
["Parc Diagonal Mar",41.40507,2.213923,0,"디아고날 마르입니다. 바르셀로나를 비스듬히 가로지르는 대로 디아고날이 지중해와 만나는 동쪽 끝부분입니다. 2000년대 도시재생을 통해 대형 주거단지와 상업시설, 공원과 해안 공간이 새롭게 조성됐습니다. 중세 구시가지나 모더니즘 중심부와는 완전히 다른 21세기 바르셀로나의 표정을 보여줍니다."],
["Fòrum",41.410695,2.218686,1,"포룸 구역입니다. 2004년 세계문화포럼을 위해 조성된 대규모 해안 공간으로, 바르셀로나가 1992년 올림픽 이후에도 동쪽 해안의 도시재생을 계속했다는 것을 보여주는 곳입니다. 이곳은 전통적인 관광지라기보다 현대건축, 대형 행사장, 공공공간과 해안 인프라가 결합된 도시계획 프로젝트에 가깝습니다. 관광객 입장에서는 구시가지의 좁은 골목이나 에이샴플라의 규칙적인 블록과 대비되는 넓고 개방적인 공간감이 가장 큰 특징입니다. 버스가 다시 남서쪽 해안으로 내려가기 시작하면 이제 바르셀로나의 도시 해변을 연속해서 보게 됩니다."],
["Platja Nova Mar Bella",41.400954,2.212074,0,"노바 마르 벨라 해변입니다. 지금은 길게 이어진 모래사장이 너무 자연스럽게 느껴지지만, 오늘날 바르셀로나 해안의 상당 부분은 1992년 올림픽을 전후해 산업시설과 철도를 정비하면서 새롭게 만들어지거나 복원된 도시 해변입니다. 이 구간은 관광지보다는 현지 주민의 생활형 해변 분위기를 느끼기 좋습니다."],
["Platja del Bogatell",41.392571,2.204417,0,"보가텔 해변입니다. 바르셀로네타보다 상대적으로 관광객 밀도가 낮고 현지 주민이 운동이나 산책을 즐기는 생활형 해변의 성격이 강합니다. 바다와 평행하게 이어지는 산책로와 자전거 동선을 보면 1990년대 이후 바르셀로나가 해안을 시민의 일상 공간으로 바꾸려 했던 도시계획이 잘 드러납니다."],
["Port Olímpic · Zoo",41.387918,2.197059,1,"포르트 올림픽입니다. 1992년 올림픽을 위해 조성된 마리나로, 이곳을 중심으로 바르셀로나의 해안 풍경이 크게 바뀌었습니다. 두 개의 고층건물인 토레 마프레와 호텔 아츠가 멀리서도 보이는 해안 스카이라인을 만들고, 인근에는 프랭크 게리가 설계한 거대한 금빛 물고기 조형물이 있습니다. 이 지역이 중요한 이유는 단순히 올림픽 시설이기 때문이 아니라, 과거 산업시설과 철도로 막혀 있던 해안을 시민과 관광객에게 다시 연결한 상징적인 장소이기 때문입니다. 지금 바라보는 바다, 마리나, 해변과 산책로의 조합은 오늘날 바르셀로나 이미지의 핵심이지만 실제로는 비교적 최근에 완성된 도시 풍경입니다."],
["Barceloneta",41.381003,2.184009,1,"바르셀로네타입니다. 18세기 중반 항구 주변 주민들을 수용하기 위해 계획적으로 조성된 동네로, 바다와 아주 가까운 좁고 규칙적인 골목이 특징입니다. 오랫동안 어업과 항만 노동자의 생활권이었기 때문에 해산물과 쌀요리 문화가 강하게 남아 있습니다. 오늘날에는 해변 관광지로 유명하지만 골목 안으로 들어가면 오래된 공동주택과 작은 바, 현지 생활이 여전히 이어집니다. 바르셀로나의 화려한 모더니즘 건축과는 완전히 다른 서민적이고 해양적인 얼굴을 보여주는 지역입니다. 버스에서 볼 때는 해변만 보지 말고, 안쪽으로 이어지는 촘촘한 거리 구조도 함께 눈여겨보시면 좋습니다."],
["La Rambla · Colom",41.376055,2.178255,1,"람블라 남쪽 끝과 콜럼버스 기념탑입니다. 기념탑은 1888년 만국박람회를 계기로 세워졌고, 높은 기둥 위의 콜럼버스상이 항구 쪽을 바라보는 듯한 모습으로 서 있습니다. 바로 주변에는 중세 왕립 조선소인 드라사네스가 있는데, 아라곤 왕국과 바르셀로나가 지중해 해상세력으로 성장하던 시기의 흔적을 보여주는 중요한 건축물입니다. 여기서 북쪽으로 이어지는 람블라는 고딕지구와 라발 사이를 가르며 플라사 카탈루냐까지 연결됩니다. 낮에는 관광객이 매우 많은 구간이므로 휴대폰과 가방은 특히 신경 쓰는 편이 좋습니다. 버스에서는 람블라 전체 길이와 항구가 어떻게 직접 연결되는지를 보는 데 의미가 있습니다."],
["World Trade Center · Port Vell",41.373156,2.178164,1,"월드 트레이드 센터와 포르트 벨입니다. 이곳은 바르셀로나가 오래전부터 지중해 상업항구로 성장해온 역사와, 20세기 말 항만 재개발의 결과를 동시에 볼 수 있는 구간입니다. 항구 기능이 변화하면서 오래된 부두와 창고 일부는 업무, 문화, 쇼핑과 여가 공간으로 재편됐습니다. 월드 트레이드 센터는 바다 쪽으로 돌출된 부두에 자리하고 있어 크루즈와 항만 풍경을 가까이 볼 수 있습니다. 이제 Red Route는 다시 도심 방향으로 돌아가며, 앞에서 봤던 플라사 카탈루냐와 파세이그 데 그라시아 쪽으로 연결됩니다. 한 바퀴를 다 돌고 나면 바르셀로나가 단순히 가우디의 도시가 아니라, 박람회와 올림픽, 산업 전환과 해안 재개발을 통해 여러 번 자신을 다시 만든 도시라는 점이 더 선명하게 보일 겁니다."]
];

const $=id=>document.getElementById(id);
let running=false,paused=false,watchId=null,current=1,lastPassed=1,lastNarrated=1,played=new Set(),lastPos=null,wakeLock=null;
let map,mapReady=false,mapUserPosition=null;
let speechTimer=null,speechStart=0,speechEstimate=1,speechTextLen=1,voices=[],queuedIndex=null,speechToken=0,speakingIndex=null;

const dist=(a,b,c,d)=>{const R=6371000,r=x=>x*Math.PI/180,A=r(c-a),B=r(d-b),q=Math.sin(A/2)**2+Math.cos(r(a))*Math.cos(r(c))*Math.sin(B/2)**2;return 2*R*Math.asin(Math.sqrt(q))};
const fmt=m=>m<1000?Math.round(m)+" m":(m/1000).toFixed(1)+" km";
const secFmt=s=>String(Math.floor(s/60)).padStart(2,"0")+":"+String(Math.floor(s%60)).padStart(2,"0");
const eligible=i=>$("modeSelect").value==="all"||S[i][3]===1;
const nextEligible=(from=current)=>{let i=((from%S.length)+S.length)%S.length;for(let k=0;k<S.length;k++){if(eligible(i))return i;i=(i+1)%S.length}return i};
const summary=t=>{const parts=t.split(/(?<=[.!?다요])\s+/).filter(Boolean);let s=parts.slice(0,2).join(" ");if(s.length<75)s=parts.slice(0,3).join(" ");return s.length>175?s.slice(0,172)+"…":s};

const PHOTO_QUERIES=[
  "Plaça de Catalunya Barcelona","Casa Batlló Barcelona","Eixample Barcelona","Barcelona Sants railway station",
  "Plaça d'Espanya Barcelona","CaixaForum Barcelona Mies van der Rohe Pavilion","Poble Espanyol Barcelona","Palau Nacional Barcelona MNAC",
  "Anella Olímpica Barcelona","Fundació Joan Miró Barcelona","Montjuïc Cable Car Barcelona","Miramar Montjuïc Barcelona",
  "Arc de Triomf Barcelona","Sagrada Família Barcelona","Torre Glòries Barcelona","Poblenou Barcelona",
  "Diagonal Mar Barcelona","Parc del Fòrum Barcelona","Nova Mar Bella beach Barcelona","Bogatell Beach Barcelona",
  "Port Olímpic Barcelona","Barceloneta Barcelona","La Rambla Columbus Monument Barcelona","Port Vell World Trade Center Barcelona"
];
const PHOTO_CACHE={};
function photoFallback(i){
  const name=(S[i]?.[0]||"Barcelona").replace(/&/g,"and");
  const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 480"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#30404e"/><stop offset="1" stop-color="#111820"/></linearGradient></defs><rect width="320" height="480" fill="url(#g)"/><text x="160" y="225" fill="#f2f5f7" text-anchor="middle" font-family="Arial" font-size="24">'+name+'</text><text x="160" y="258" fill="#9aa5af" text-anchor="middle" font-family="Arial" font-size="14">Barcelona GPS Guide</text></svg>';
  return "data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(svg)
}
async function updatePlacePhoto(i){
  const img=$("placeThumb"); if(!img)return;
  img.alt=S[i]?.[0]||"Barcelona";
  if(PHOTO_CACHE[i]){img.src=PHOTO_CACHE[i];return}
  const q=PHOTO_QUERIES[i]||((S[i]?.[0]||"Barcelona")+" Barcelona");
  img.src=photoFallback(i);
  try{
    const u1="https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch="+encodeURIComponent(q)+"&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=700&format=json&origin=*";
    const r1=await fetch(u1,{mode:"cors"}); const d1=await r1.json();
    const p1=d1.query?.pages?Object.values(d1.query.pages)[0]:null;
    let src=p1?.thumbnail?.source||"";
    if(!src){
      const u2="https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch="+encodeURIComponent(q)+"&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=700&format=json&origin=*";
      const r2=await fetch(u2,{mode:"cors"}); const d2=await r2.json();
      const p2=d2.query?.pages?Object.values(d2.query.pages)[0]:null;
      src=p2?.imageinfo?.[0]?.thumburl||p2?.imageinfo?.[0]?.url||"";
    }
    if(src){PHOTO_CACHE[i]=src;img.src=src}
  }catch(e){img.src=photoFallback(i)}
}

function loadVoices(){voices=speechSynthesis.getVoices();const ko=voices.filter(v=>(v.lang||"").toLowerCase().startsWith("ko"));const list=ko.length?ko:voices;$("voiceSelect").innerHTML="";if(!list.length){$("voiceSelect").innerHTML='<option value="">기기 기본 음성</option>';return}list.forEach(v=>{const o=document.createElement("option");o.value=voices.indexOf(v);o.textContent=v.name+" ("+v.lang+")";$("voiceSelect").appendChild(o)})}
function selectedVoice(){const i=parseInt($("voiceSelect").value,10);return Number.isInteger(i)?voices[i]:null}

// One native MapLibre camera and canvas owns the base, route and position geometry.
const collection=features=>({type:"FeatureCollection",features});
const pointFeature=(lat,lon,properties={})=>({type:"Feature",properties,geometry:{type:"Point",coordinates:[lon,lat]}});
function mapStatus(message){
  let status=document.getElementById("mapStatus");
  if(!status){status=document.createElement("div");status.id="mapStatus";status.className="map-status";status.setAttribute("role","status");$("map").appendChild(status)}
  status.textContent=message;
}
function buildMap(){
  if(!window.maplibregl){mapStatus("지도를 불러오지 못했습니다. 인터넷 연결 후 새로고침해 주세요.");return}
  try{
    map=new maplibregl.Map({container:"map",style:"./map-style.json?v=1.3.8",center:[2.1712,41.3952],zoom:13.5,minZoom:0,maxZoom:18,pitch:0,bearing:0,maxPitch:0,dragRotate:false,pitchWithRotate:false,touchPitch:false,attributionControl:false});
    map.touchZoomRotate.disableRotation();
    map.addControl(new maplibregl.AttributionControl({compact:true,customAttribution:'<a href="https://openfreemap.org/">OpenFreeMap</a> · <a href="https://openmaptiles.org/">© OpenMapTiles</a> · © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),"bottom-right");
    map.addControl(new maplibregl.ScaleControl({maxWidth:90,unit:"metric"}),"bottom-left");
    map.on("error",()=>mapStatus("지도 일부를 불러오지 못했습니다. 인터넷 연결을 확인해 주세요."));
    map.on("idle",()=>{const status=document.getElementById("mapStatus");if(status&&mapReady&&map.areTilesLoaded()&&map.getSource("guide-route"))status.remove()});
    map.on("load",()=>{
      const coords=window.BCN_RED_ROUTE?.coords;
      if(Array.isArray(coords)&&coords.length>1){
        map.addSource("guide-route",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:coords.map(([lat,lon])=>[lon,lat])}}});
        map.addLayer({id:"guide-route-casing",type:"line",source:"guide-route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#ffffff","line-width":7,"line-opacity":.85}});
        map.addLayer({id:"guide-route-line",type:"line",source:"guide-route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#ed3348","line-width":4}});
      }else mapStatus("공식 노선 데이터를 불러오지 못했습니다. 새로고침해 주세요.");
      map.addSource("guide-stops",{type:"geojson",data:collection(S.map(s=>pointFeature(s[1],s[2])))});
      map.addLayer({id:"guide-stop-points",type:"circle",source:"guide-stops",paint:{"circle-radius":3,"circle-color":"#f23947","circle-stroke-width":1,"circle-stroke-color":"#ffffff","circle-opacity":.38,"circle-stroke-opacity":.38}});
      map.addSource("guide-active",{type:"geojson",data:collection([])});
      map.addLayer({id:"guide-active-points",type:"circle",source:"guide-active",paint:{"circle-radius":8,"circle-color":["match",["get","kind"],"current","#f23947","#98a3ad"],"circle-stroke-width":2,"circle-stroke-color":"#ffffff"}});
      map.addSource("guide-user",{type:"geojson",data:collection([])});
      map.addLayer({id:"guide-user-halo",type:"circle",source:"guide-user",paint:{"circle-radius":14,"circle-color":"#297cff","circle-opacity":.2}});
      map.addLayer({id:"guide-user-point",type:"circle",source:"guide-user",paint:{"circle-radius":9,"circle-color":"#297cff","circle-stroke-width":2,"circle-stroke-color":"#ffffff"}});
      // Text labels also use the same renderer; no DOM overlay camera is involved.
      map.addSource("guide-landmarks",{type:"geojson",data:collection([
        pointFeature(41.39075,2.16631,{label:"Mandarin Oriental Barcelona 바로 앞",hotel:true}),
        pointFeature(41.39171,2.16495,{label:"La Pedrera"}),pointFeature(41.39098,2.16652,{label:"Casa Batlló"}),
        pointFeature(41.40297,2.17379,{label:"Sagrada Família"}),pointFeature(41.39105,2.18064,{label:"Arc de Triomf"})
      ])});
      map.addLayer({id:"guide-active-labels",type:"symbol",source:"guide-active",layout:{"text-field":["get","label"],"text-font":["Noto Sans Regular"],"text-size":11,"text-anchor":"top","text-offset":[0,1.1],"text-max-width":20},paint:{"text-color":"#17232d","text-halo-color":"#ffffff","text-halo-width":2}});
      map.addLayer({id:"guide-landmark-labels",type:"symbol",source:"guide-landmarks",layout:{"text-field":["get","label"],"text-font":["Noto Sans Regular"],"text-size":["case",["==",["get","hotel"],true],10,12],"text-anchor":"bottom","text-offset":[0,-.7],"text-max-width":24},paint:{"text-color":"#17232d","text-halo-color":"#ffffff","text-halo-width":2}});
      mapReady=true;updateMap();syncUser();
    });
  }catch(error){console.error("Map initialization failed",error);mapStatus("지도 배경을 표시할 수 없습니다. WebGL 지원 브라우저에서 다시 열어 주세요.")}
}
function updateMap(){
  const cur=S[lastNarrated]||S[1],ni=(!running&&current===lastNarrated)?nextEligible(current+1):nextEligible(current),nxt=S[ni];
  if(mapReady)map.getSource("guide-active").setData(collection([pointFeature(cur[1],cur[2],{kind:"current",label:cur[0]}),pointFeature(nxt[1],nxt[2],{kind:"next",label:nxt[0]})]));
  $("currentNarration").textContent=cur[0].replace(" · Museu Tàpies","");$("nextNarration").textContent=nxt[0];$("mapLinkBtn").dataset.lat=cur[1];$("mapLinkBtn").dataset.lon=cur[2];
}
function syncUser(){if(mapReady)map.getSource("guide-user").setData(collection(mapUserPosition?[pointFeature(mapUserPosition.lat,mapUserPosition.lon)]:[]))}
function setUser(lat,lon){mapUserPosition={lat,lon};syncUser()}
function nearest(lat,lon){let z={i:0,d:Infinity};S.forEach((s,i)=>{const d=dist(lat,lon,s[1],s[2]);if(d<z.d)z={i,d}});return z}
function forward(){let a=[];for(let k=0;k<6;k++)a.push((current+k)%S.length);return a}

function updateModeText(){$("modeText").textContent=$("modeSelect").value==="all"?"전체":"핵심"}
function renderStops(){for(const id of ["stopList","stopListMirror"]){const ol=$(id);ol.innerHTML="";S.forEach((s,i)=>{const li=document.createElement("li");li.textContent=s[0];if(s[3]){const b=document.createElement("span");b.className="badge";b.textContent="핵심";li.appendChild(b)}if(played.has(i))li.classList.add("done");if(i===nextEligible(current))li.classList.add("current");ol.appendChild(li)})}$("routeProgressText").textContent=played.size+" / "+S.length}

function speechProgressStart(text){clearInterval(speechTimer);speechStart=Date.now();speechTextLen=Math.max(1,text.length);speechEstimate=Math.max(10,text.length/(5.4*+$("rateSelect").value));$("progressFill").style.width="0%";$("timeText").textContent="00:00 / "+secFmt(speechEstimate);speechTimer=setInterval(()=>{if(paused)return;const e=(Date.now()-speechStart)/1000,p=Math.min(98,e/speechEstimate*100);$("progressFill").style.width=p+"%";$("timeText").textContent=secFmt(e)+" / "+secFmt(speechEstimate)},250)}
function actuallySpeak(i,interrupt=false){if(paused)return;const token=++speechToken;if(interrupt)speechSynthesis.cancel();speakingIndex=i;lastNarrated=i;const text=S[i][4],u=new SpeechSynthesisUtterance(text);u.lang="ko-KR";u.rate=+$("rateSelect").value;const v=selectedVoice();if(v)u.voice=v;speechProgressStart(text);u.onboundary=e=>{if(token===speechToken&&typeof e.charIndex==="number")$("progressFill").style.width=Math.min(100,e.charIndex/speechTextLen*100)+"%"};u.onend=()=>{if(token!==speechToken)return;clearInterval(speechTimer);$("progressFill").style.width="100%";speakingIndex=null;$("gpsStatus").textContent=running?"GPS 추적 중":"대기 중";if(queuedIndex!==null){const q=queuedIndex;queuedIndex=null;setTimeout(()=>actuallySpeak(q,false),180)}};speechSynthesis.speak(u);$("nowTitle").textContent=S[i][0].replace(" · Museu Tàpies","");$("nowText").textContent=summary(text);updatePlacePhoto(i);$("gpsStatus").textContent="해설 재생 중";updateMap()}
function requestNarration(i,interrupt=false){if(!interrupt&&(speechSynthesis.speaking||speakingIndex!==null)){queuedIndex=i;return}actuallySpeak(i,interrupt)}
function passStop(i,forceSpeak=false){lastPassed=i;played.add(i);if(forceSpeak||eligible(i))requestNarration(i,forceSpeak);current=(i+1)%S.length;renderStops();updateMap()}
function nextNarration(){const i=nextEligible(current);passStop(i,true)}

function handlePos(p){
  if(!running||paused)return;
  const {latitude:lat,longitude:lon,accuracy}=p.coords;
  lastPos={lat,lon,accuracy};
  setUser(lat,lon);
  if(map)map.easeTo({center:[lon,lat],duration:350});
  $("accuracyText").textContent="±"+Math.round(accuracy||0)+" m";
  const n=nearest(lat,lon);
  $("currentLocation").textContent=(n.d<500?S[n.i][0]:"GPS "+lat.toFixed(5)+", "+lon.toFixed(5));
  const ni=nextEligible(current);
  $("nextDistance").textContent=fmt(dist(lat,lon,S[ni][1],S[ni][2]));
  $("gpsStatus").textContent="GPS 추적 중";
  let best={i:current,d:Infinity};
  forward().forEach(i=>{const d=dist(lat,lon,S[i][1],S[i][2]);if(d<best.d)best={i,d}});
  const rad=Math.max(210,Math.min(340,(accuracy||25)*2.1));
  if(best.d<=rad&&!played.has(best.i))passStop(best.i,false)
}
function geoErr(e){$("gpsStatus").textContent=e.code===1?"위치 권한 필요":"GPS 오류";$("currentLocation").textContent=e.code===1?"위치 권한 필요":"GPS 오류"}

async function acquireWakeLock(){try{if("wakeLock" in navigator){wakeLock=await navigator.wakeLock.request("screen");$("wakeText").textContent="켜짐";wakeLock.addEventListener("release",()=>{$("wakeText").textContent="꺼짐"})}else $("wakeText").textContent="미지원"}catch(e){$("wakeText").textContent="사용 안 함"}}
function releaseWake(){if(wakeLock){try{wakeLock.release()}catch(e){}wakeLock=null}$("wakeText").textContent="꺼짐"}

async function start(){if(running){stop();return}if(!navigator.geolocation){$("gpsStatus").textContent="GPS 미지원";return}running=true;paused=false;played.clear();queuedIndex=null;lastNarrated=1;if($("startSelect").value==="auto"){current=1;lastPassed=1}else{current=+$("startSelect").value;lastPassed=current}renderStops();updateMap();updateModeText();$("startBtn").innerHTML='<span>■</span> GPS GUIDE STOP';$("gpsStatus").textContent="GPS 연결 중";await acquireWakeLock();const u=new SpeechSynthesisUtterance("바르셀로나 한국어 GPS 가이드를 시작합니다. 위치가 확인되면 자동으로 해설하겠습니다.");u.lang="ko-KR";u.rate=+$("rateSelect").value;const v=selectedVoice();if(v)u.voice=v;speechSynthesis.speak(u);navigator.geolocation.getCurrentPosition(p=>{if($("startSelect").value==="auto"){const n=nearest(p.coords.latitude,p.coords.longitude);if(n.d<1500){current=n.i;lastPassed=n.i;renderStops();updateMap()}}handlePos(p)},geoErr,{enableHighAccuracy:true,timeout:15000,maximumAge:0});watchId=navigator.geolocation.watchPosition(handlePos,geoErr,{enableHighAccuracy:true,maximumAge:1500,timeout:20000})}
function stop(){running=false;paused=false;if(watchId!==null)navigator.geolocation.clearWatch(watchId);watchId=null;speechToken++;speechSynthesis.cancel();clearInterval(speechTimer);queuedIndex=null;speakingIndex=null;releaseWake();$("startBtn").innerHTML='<span>▶</span> GPS GUIDE START';$("pauseBtn").innerHTML='Ⅱ <small>일시정지</small>';$("gpsStatus").textContent="중지됨"}
function togglePause(){if(!running)return;paused=!paused;if(paused){speechSynthesis.pause();$("pauseBtn").innerHTML='▶ <small>계속</small>';$("gpsStatus").textContent="일시정지"}else{speechSynthesis.resume();$("pauseBtn").innerHTML='Ⅱ <small>일시정지</small>';$("gpsStatus").textContent=speechSynthesis.speaking?"해설 재생 중":"GPS 추적 중";if(lastPos&&!speechSynthesis.speaking)handlePos({coords:{latitude:lastPos.lat,longitude:lastPos.lon,accuracy:lastPos.accuracy}})}}
function reset(){played.clear();current=1;lastPassed=1;lastNarrated=1;queuedIndex=null;renderStops();updateModeText();updateMap();$("currentLocation").textContent="GPS 시작 전 · MO Barcelona 앞"; mapUserPosition=null;syncUser(); if(map) map.jumpTo({center:[2.1712,41.3952],zoom:13.5});$("nextDistance").textContent="—";$("accuracyText").textContent="—";$("progressFill").style.width="0%";$("timeText").textContent="00:00 / 00:00";$("nowTitle").textContent="Casa Batlló";$("nowText").textContent="Mandarin Oriental Barcelona 바로 앞의 Casa Batlló 정류장에서 시작하도록 설정되어 있습니다.";updatePlacePhoto(1)}

document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active"));b.classList.add("active");$(b.dataset.panel).classList.add("active");if(b.dataset.panel==="mapPanel")setTimeout(()=>{if(map)map.resize()},120)});
$("startBtn").onclick=start;$("pauseBtn").onclick=togglePause;$("replayBtn").onclick=()=>requestNarration(lastNarrated,true);$("nextBtn").onclick=nextNarration;$("demoBtn").onclick=nextNarration;$("testBtn").onclick=()=>{speechToken++;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance("안녕하세요. 바르셀로나 한국어 GPS 오디오가이드 음성 테스트입니다.");u.lang="ko-KR";u.rate=+$("rateSelect").value;const v=selectedVoice();if(v)u.voice=v;speechSynthesis.speak(u)};$("resetBtn").onclick=reset;$("modeSelect").onchange=()=>{updateModeText();renderStops();updateMap()};$("startSelect").onchange=()=>{if(!running){current=$("startSelect").value==="auto"?1:+$("startSelect").value;lastPassed=current;renderStops();updateMap()}};$("recenterBtn").onclick=()=>{if(!map)return;if(lastPos)map.jumpTo({center:[lastPos.lon,lastPos.lat],zoom:15});else map.jumpTo({center:[2.1712,41.3952],zoom:13.5})};$("mapLinkBtn").onclick=()=>{const lat=$("mapLinkBtn").dataset.lat||S[lastNarrated][1],lon=$("mapLinkBtn").dataset.lon||S[lastNarrated][2];window.open("https://www.google.com/maps/search/?api=1&query="+lat+","+lon,"_blank")};
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&running&&!wakeLock)acquireWakeLock()});
speechSynthesis.onvoiceschanged=loadVoices;buildMap();loadVoices();reset();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js?v=1.3.8").catch(()=>{}));


