// クリックしたときにアラートを表示
$(document).ready(function() {
	$('#alert').click(function() {
			alert("準備中です");
	});
});

$(document).ready(function(){
	$('.formText')
})

//バリデーションチェック
document.getElementById('formSubmit').addEventListener('submit',function(event){
  //バリデーションチェック

// 変数の定義
var check = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let validation = true;

  if(name === ""){
    document.getElementById('message').innerHTML = "名前を入力して下さい";
    validation = false;
  } else{
    document.getElementById('message').innerHTML = "";
  }

  if(!check.test(email)){
    document.getElementById('message1').innerHTML = "メールアドレスの形式で入力して下さい";
    validation = false;
  }else{
    document.getElementById('message1').innerHTML = "";
  }

  // バリデーションに引っかかった場合は送信させない
  if(!validation){
    event.preventDefault();
  }
});
