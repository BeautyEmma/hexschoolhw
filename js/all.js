$(document).ready(function(){


$('#title').hide();
//選擇器
//a,.header
//先選擇好一個東西.然後要讓他做什麼功能

$('h1').click(function(event){
	//要做什麼動作
	//$('p').slideUp(1000).slideDown(3000);
//$('p').addClass('orange');
//動態產生class
$('p').toggleClass('orange');
//attr-動態改變html標籤屬性

//.html-動態加入html標籤，為何要動態新增html標籤?
//因為ex:需要動態產生數量按鈕(四張圖片就要四個按鈕，三張就三個)
//$('body').html('<h1>1234</h1>');

});









});