  class Jigyosha {
  
  JigyoshaMei;
  Ido;
  Keido;
  Hankei;
  TodohuKen;
  SityoSon;
  YubinBango
  Jusho;
  IraiKaishiJikoku;
  IraiShimekiriJikoku;
  HaitatuSharei;
  
  
  constructor() {
  }
  

  
  
  setParam(){

	TextboxJigyoshaMei = document.getElementById("JigyoshaMei1");
	TextboxIdo = document.getElementById("Ido1");
	TextboxKeido = document.getElementById("Keido1");
	TextboxHankei = document.getElementById("Hankei1");
	TextboxTodohuKen = document.getElementById("TodohuKen1");
	TextboxSityoSon = document.getElementById("SityoSon1");
	TextboxJusho = document.getElementById("Jusho1");
	TextboxYubinBango = document.getElementById("YubinBango1");
	TextboxIraiKaishiJikoku = document.getElementById("IraiKaishiJikoku1");
	TextboxIraiShimekiriJikoku = document.getElementById("IraiShimekiriJikoku1");
	TextboxHaitatuSharei = document.getElementById("HaitatuSharei1");

  
	TextboxJigyoshaMei.value=JigyoshaMei
	TextboxIdo.value=Ido
	TextboxKeido.value=Keido
	TextboxHankei.value=Hankei
	TextboxTodohuKen.value=TodohuKen
	TextboxSityoSon.value=SityoSon
	TextboxYubinBango.value=YubinBango
	TextboxJusho.value=Jusho
	TextboxIraiKaishiJikoku.value=IraiKaishiJikoku
	TextboxIraiShimekiriJikoku.value=IraiShimekiriJikoku
	TextboxHaitatuSharei.value=HaitatuSharei
  }
  
  
}


  function getJigyoshaParam(){
  
	TextboxJigyoshaMei = document.getElementById("JigyoshaMei1");
	TextboxIdo = document.getElementById("Ido1");
	TextboxKeido = document.getElementById("Keido1");
	TextboxHankei = document.getElementById("Hankei1");
	TextboxTodohuKen = document.getElementById("TodohuKen1");
	TextboxSityoSon = document.getElementById("SityoSon1");
	TextboxYubinBango = document.getElementById("YubinBango1");
	TextboxJusho = document.getElementById("Jusho1");
	TextboxIraiKaishiJikoku = document.getElementById("IraiKaishiJikoku1");
	TextboxIraiShimekiriJikoku = document.getElementById("IraiShimekiriJikoku1");
	TextboxHaitatuSharei = document.getElementById("HaitatuSharei1");
	
	MyJigyosha.JigyoshaMei = TextboxJigyoshaMei.value;
	MyJigyosha.Ido = TextboxIdo.value;
	MyJigyosha.Keido = TextboxKeido.value;
	MyJigyosha.Hankei = TextboxHankei.value;
	MyJigyosha.TodohuKen = TextboxTodohuKen.value;
	MyJigyosha.SityoSon = TextboxSityoSon.value;
	MyJigyosha.YubinBango = TextboxYubinBango.value;
	MyJigyosha.Jusho = TextboxJusho.value;
	MyJigyosha.IraiKaishiJikoku = TextboxIraiKaishiJikoku.value;
	MyJigyosha.IraiShimekiriJikoku = TextboxIraiShimekiriJikoku.value;
	MyJigyosha.HaitatuSharei = TextboxHaitatuSharei.value;
	
	
  }



var textOfFile1;

//Form要素を取得する
var form = document.getElementById("myform1");
var file = document.getElementById("myfile1");
//ファイルが読み込まれた時の処理
file.addEventListener('change', function(e) {
  
  //ここにファイル取得処理を書く
  result2 = e.target.files[0];
  
    //FileReaderのインスタンスを作成する
    var reader = new FileReader();
  
    //読み込んだファイルの中身を取得する
    reader.readAsText( result2 );
  
    //ファイルの中身を取得後に処理を行う
    reader.addEventListener( 'load', function() {
    
        //ファイルの中身をtextarea内に表示する
        textOfFile1 = reader.result;    
    })

})



  function SetTextbox(){
  
	TextboxJigyoshaMei = document.getElementById("JigyoshaMei1");
	TextboxIdo = document.getElementById("Ido1");
	TextboxKeido = document.getElementById("Keido1");
	TextboxHankei = document.getElementById("Hankei1");
	TextboxTodohuKen = document.getElementById("TodohuKen1");
	TextboxSityoSon = document.getElementById("SityoSon1");
	TextboxYubinBango = document.getElementById("YubinBango1");
	TextboxJusho = document.getElementById("Jusho1");
	TextboxIraiKaishiJikoku = document.getElementById("IraiKaishiJikoku1");
	TextboxIraiShimekiriJikoku = document.getElementById("IraiShimekiriJikoku1");
	TextboxHaitatuSharei = document.getElementById("HaitatuSharei1");
	

	TextboxJigyoshaMei.value=MyJigyosha.JigyoshaMei
	TextboxIdo.value=MyJigyosha.Ido
	TextboxKeido.value=MyJigyosha.Keido
	TextboxHankei.value=MyJigyosha.Hankei
	TextboxTodohuKen.value=MyJigyosha.TodohuKen
	TextboxSityoSon.value=MyJigyosha.SityoSon
	TextboxYubinBango.value=MyJigyosha.YubinBango
	TextboxJusho.value=MyJigyosha.Jusho
	TextboxIraiKaishiJikoku.value=MyJigyosha.IraiKaishiJikoku
	TextboxIraiShimekiriJikoku.value=MyJigyosha.IraiShimekiriJikoku
	TextboxHaitatuSharei.value=MyJigyosha.HaitatuSharei
		
  }
  function LoadJigyoshaParam(){
  	LoadJigyoshaParamFromJsonFile(textOfFile1);
  }
  
  function MakeJigyoShaInfoStr(){
  
  	getJigyoshaParam();
  	
  	ret1 = "";
  	ret1 += "事業者名:" + MyJigyosha.JigyoshaMei + "\r\n"
  	ret1 += "サービス中心緯度" + MyJigyosha.Ido +"\r\n"
	ret1 += "サービス中心経度" + ":" + MyJigyosha.Keido + "\r\n"
	ret1 += "サービス半径" + ":" + MyJigyosha.Hankei + " km \r\n"
	ret1 += "都道府県" + ":" + MyJigyosha.TodohuKen + "\r\n"
	ret1 += "市町村" + ":" + MyJigyosha.SityoSon + "\r\n"
	ret1 += "郵便番号" + ":" + MyJigyosha.YubinBango + "\r\n"
	ret1 += "住所" + ":" + MyJigyosha.Jusho + "\r\n"
	ret1 += "依頼開始時刻" + ":" + MyJigyosha.IraiKaishiJikoku + "\r\n"
	ret1 += "依頼締め切り時刻" + ":" + MyJigyosha.IraiShimekiriJikoku + "\r\n"
	ret1 += "一回の配達謝礼" + ":" + MyJigyosha.HaitatuSharei + " 円 \r\n"
	
	ret1 += "\r\n\r\n";
	
    var now2 = new Date();
    var nowYear2 = now2.getFullYear();
    var nowMonth2 = now2.getMonth()+1;
    var nowDate2 = now2.getDate();
    
	ret1 += "#買い物代行ネットロ"+nowYear2 +"年"+nowMonth2+"月"+nowDate2+"日"+"ロ";
	ret1 += "\r\n";
	ret1 += "#買い物代行ネットロ"+MyJigyosha.JigyoshaMei+"ロ";
	ret1 += "\r\n";
	ret1 += "#買い物代行ネットロ"+MyJigyosha.TodohuKen+"ロ";
	ret1 += "\r\n";
	ret1 += "#買い物代行ネットロ"+MyJigyosha.SityoSon+"ロ";
	ret1 += "\r\n";
	ret1 += "#買い物代行ネットロ"+MyJigyosha.YubinBango+"ロ";
	ret1 += "\r\n";
	
  	return ret1;
  }
  
function OutputStr(){
	str1 = MakeJigyoShaInfoStr();
	
	textArea1 = document.getElementById("TextArea1");
	textArea1.value = str1
	
}

function LoadSaveDataFile(){

	LoadGameDataFromJsonFile(textOfFile1)
}

function LoadGameDataFromJsonFile(JsonFileText1){

	text1 = JsonFileText1
	
	MyJigyosha = JSON.parse(text1)

	NowTime1 = showTime();
	ShimeTime1 = new Date();
	ShimeTime1 = addTime(ShimeTime1);
	ShimeTimeStr1 = getTimeStr(ShimeTime1)

    IraiKaishiJikoku = NowTime1;
    IraiShimekiriJikoku = ShimeTimeStr1;
    
    MyJigyosha.IraiKaishiJikoku = NowTime1;
    MyJigyosha.IraiShimekiriJikoku = ShimeTimeStr1;
    
    SetTextbox();
	
	alert('事業者情報を読み込みました')

}

function saveJigyoshaParam2(){
	saveJigyoshaParam(MyJigyosha);
}
  
function saveJigyoshaParam(Jigyosha1){
  
  SaveAsTextFile(JSON.stringify(Jigyosha1), "saveKaimonoDaikoJigyosha1.txt");
  
  alert('事業者データを保存しました');
  
  
  
 }

	function SaveAsTextFile(text, filename){
	  const blob = new Blob([text], { type: 'text/plain' });
	  const blobUrl = window.URL.createObjectURL(blob);
	  const link = document.createElement('a');
	  link.href = blobUrl;
	  link.download = filename;
	  link.click();
	  
	}
  
  function showTime() {
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth()+1;
    var nowDate = now.getDate();
    var nowhour = now.getHours();
    var nowminutes = now.getMinutes();
    var nowseconds = now.getSeconds();
  
    var text = nowYear+"." +nowMonth +"."+nowDate+"."
    + nowhour + ":" + nowminutes + ":" + nowseconds; 
    
    return text;
  }
  
  function addTime(Time1){
  	ret = Time1.setHours( Time1.getHours() + 1)
  	return new Date(ret)
  }
  
  function getTimeStr(Time1){
	    var Year1 = Time1.getFullYear();
	    var Month1 = Time1.getMonth()+1;
	    var Date1 = Time1.getDate();
	    var Hour1 = Time1.getHours();
	    var Minutes1 = Time1.getMinutes();
	    var Seconds1 = Time1.getSeconds();
	  
	    var text = Year1+"." +Month1 +"."+Date1+"."
	    + Hour1 + ":" + Minutes1 + ":" + Seconds1; 
	    
	    return text
  }
  
  function AddOneHour(){
    Time1 = ShimeTime1
  	Time2 = addTime(Time1)
  	TimeStr2 = getTimeStr(Time2);
  	
  
	Textbox2 = document.getElementById("IraiShimekiriJikoku1");
	Textbox2.value = TimeStr2
	
  }
  
  function ResetHour(){
    Time1 = new Date();
    
  	Time2 = addTime(Time1)
  	TimeStr2 = getTimeStr(Time2);
  	
  
	Textbox2 = document.getElementById("IraiShimekiriJikoku1");
	Textbox2.value = TimeStr2
  }
  
  function OutputJigyoShaStr(){
  }


MyJigyosha = new Jigyosha();
  
NowTime1 = showTime();
ShimeTime1 = new Date();
ShimeTime1 = addTime(ShimeTime1);
ShimeTimeStr1 = getTimeStr(ShimeTime1)


Textbox1 = document.getElementById("IraiKaishiJikoku1");
Textbox1.value = NowTime1

Textbox2 = document.getElementById("IraiShimekiriJikoku1");
Textbox2.value = ShimeTimeStr1


getJigyoshaParam()

