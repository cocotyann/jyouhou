      function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "晴れ" && number === 体を動かす気分) {
                result = "公園";
            } else if (colour === "晴れ" && number === のんびり気分）｛　　
            　　result = "温泉";
　　　　　　　｝else if (colour === "晴れ" && number === 癒し気分) {
                result = "動物園";
            } else if (colour === "晴れ" && number === スキッリ気分) {
                result = "遊園地";
           } else if (colour === "雨" && number === 家で過ごす気分) {
                result = "ドラマ鑑賞　読書";
            } else if (colour === "雨" && number === 癒し気分) {
                result = "水族館";
            } else if (colour === "雨" && number ===体を動かす気分 ) {
                result = "地域のスポーツセンター";
            } else if (colour === "雨" && number ===のんびり気分 ) {
                result = "お家でゴロゴロ";
            }else if (colour === "雨" && number ===スキッリ ) {
                result = "ネットで買い物";

            document.getElementById('result-output').innerText = "君のお出かけ先は【" + result + "】です";
        }
