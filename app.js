      function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "体を動かす気分" && number ===1 ) {
                result = "公園";
            } else if (colour === "のんびり気分" && number ===1 ）｛　　
            　　result = "温泉";
　　　　　　　｝else if (colour === "癒し気分" && number ===1 ) {
                result = "動物園";
            } else if (colour === "スキッリ気分" && number ===1 ) {
                result = "遊園地";
           } else if (colour === "家で過ごす気分" && number ===1 ) {
                result = "ドラマ鑑賞　読書";
            } else if (colour === "癒し気分" && number ===2 ) {
                result = "水族館";
            } else if (colour === "体を動かす気分" && number ===2  ) {
                result = "地域のスポーツセンター";
            } else if (colour === "のんびり気分 " && number ===2 ) {
                result = "お家でゴロゴロ";
            }else if (colour === "スキッリ気分" && number ===2  ) {
                result = "ネットで買い物";

            document.getElementById('result-output').innerText = "君のお出かけ先は【" + result + "】です";
        }
