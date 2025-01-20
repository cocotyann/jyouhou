      function checkFortune() {
            var feeling = document.getElementById('feeling-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result ="もう一度挑戦！"; // デフォルトの値

            if (feeling === "体を動かす気分" && number === 1) {
                result = "公園";
            } else if (feeling === "体を動かす気分" && number === 2) {
                result = "地域のスポーツセンター";
            }  else if (feeling === "のんびり気分" && number  === 1) {　　
            　　result = "温泉";
            } else if (feeling === "のんびり気分" && number === 2) {
                result = "お家でゴロゴロ";
            } else if (feeling === "癒し気分" && number === 1) {
                result = "動物園";
            } else if (feeling === "癒し気分" && number === 2) {
                result = "水族館";
            } else if (feeling === "スッキリ気分" && number === 1) {
                result = "遊園地";
            } else if (feeling === "スッキリ気分" && number === 2) { 　
                  result = "ネットで買い物　部屋の掃除";
            } else if (feeling ==="家で過ごす気分" && number === 1) {
                result = "ドラマ鑑賞　読書";
            } else if (feeling ==="家で過ごす気分" && number === 2) {
                result = "料理";
            } else if (feeling ==="ダイエット気分" && number === 1) {
                result = "ランニング";
      　    } else if (feeling ==="ダイエット気分" && number === 2) {
                result = "筋トレ";
            } else if (feeling ==="叫びたい気分" && number === 1) {
                result = "遊園地の中でも、ジェトコースターとお化け屋敷";
             } else if (feeling ==="叫びたい気分" && number === 2) {
                result = "カラオケ";
            } 
           document.getElementById('result-output').innerText = "君のお出かけ先は【" + result + "】です。持ち物を忘れずに、楽しんでいってらっしゃい！よい１日を～";
      }




