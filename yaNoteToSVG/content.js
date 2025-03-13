(function() {
    // ダウンロード用のヘルパー関数
    function downloadSVG(dataUrl) {
      const a = document.createElement('a');
      a.href = dataUrl;
      
      // タイトルと日時を使ってファイル名を生成
      const titleField = document.querySelector('#titleField');
      const title = titleField ? titleField.value.trim() || "無題" : "無題";
      const now = new Date();
      const pad = (num) => String(num).padStart(2, '0');
      const fileName = `${title}_yaNote_${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}.svg`;
      
      a.download = fileName;
      // ページに一時的に追加してクリックをシミュレーション
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  
    // dom-to-image ライブラリが正しく読み込まれているか確認
    if (typeof domtoimage === 'undefined') {
      console.error('domtoimage ライブラリが読み込まれていません。');
      return;
    }
    
    // ドキュメント全体をSVGとして変換してダウンロード
    const canvasElement = document.getElementById('canvas');
    if (!canvasElement) {
      console.error('canvas IDのdivが見つかりません。');
      return;
    }

    domtoimage.toSvg(canvasElement)
      .then((dataUrl) => {
        downloadSVG(dataUrl);
      })
      .catch((error) => {
        console.error('SVGの変換に失敗しました:', error);
      });
  })();
