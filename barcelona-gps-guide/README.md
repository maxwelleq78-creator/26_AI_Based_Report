# Barcelona GPS Guide PWA

Android/Chrome용 개인 여행 PWA입니다.

- 대상: Barcelona Bus Turístic Red Route
- 추천 시작: Mandarin Oriental Barcelona 앞 Casa Batlló – Museu Tàpies 정류장
- 기능: GPS 접근 감지, 한국어 TTS 자동 재생, 핵심/전체 해설, 다시 듣기, 다음 해설, PWA 설치, 오프라인 앱 셸
- 개인정보: 위치정보는 브라우저 내부에서만 계산하며 외부 전송 코드가 없습니다.

## Android
1. GitHub Pages HTTPS 주소를 Chrome에서 열기
2. 메뉴 → 앱 설치 / 홈 화면에 추가
3. 정확한 위치 허용
4. Galaxy 배터리 설정에서 가능하면 제한 없음
5. 버스 탑승 직전 GPS GUIDE START

## Important
여행 당일 공식 운행 변경 확인:
https://www.barcelonabusturistic.cat/en/service-information

개인 여행용 비공식 가이드이며 Barcelona Bus Turístic/TMB 공식 앱이 아닙니다.



## v1.3.7 map update
- Red line uses the operator's published full road geometry (1,533 latitude/longitude points), retrieved 2026-09-08 from https://www.barcelonabusturistic.cat/en/red-route/modal/mapa_v1 (`drupalSettings.tmbModuleNodeRutaMaps.coords`). Metadata lives in `route-data.js`. No stop-to-stop straight-line interpolation or generic driving route is used.
- The published basic route may differ from temporary diversions. Check https://www.barcelonabusturistic.cat/en/service-information on the day of travel. Existing narration/GPS stop sequence has not been changed; the official landing page and detailed map should be reconciled separately before changing narration order.
- Light OpenFreeMap Positron vector style is stored in `map-style.json`; POI layers are omitted so restaurant, cafe and shopping symbols are not drawn. Street labels and app landmarks remain. OpenFreeMap/OpenMapTiles/OpenStreetMap credits appear on the map.
- MapLibre GL 5.6.2 + Leaflet adapter 0.0.22 are pinned. Vector background requires WebGL and network access; failures show a map-only status message, with guide controls still available. Local style/geometry are service-worker core assets. External map tiles, dependencies, fonts and photos are not cached by this app.
