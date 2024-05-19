// 모든버튼에 붙은 orange 클래스명 제거
// 0번째 버튼을 누르면 orange 클래스명 추가
// 모든div에 붙은 show 클래스명 제거
// div에 show 클래스명 추가

// for(let i = 0; i <3; i++){
//     $('.tab-button').eq(i).on('click',function(){
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     })
// }

let length = $(".tab-button").length;
console.log(length);

// for(let i = 0; i <length; i++){
//     $('.tab-button').eq(i).on('click',function(){
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     })
// }

// 함수록 축약하기
// for (let i = 0; i < length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//         탭열기(i)
//     });
// }

$(".list").click(function (e) {
  // 지금 누른게 버튼0이면 탭열기(0)
  // 지금 누른게 버튼1이면 탭열기(1)
  // 지금 누른게 버튼2이면 탭열기(2)

  //   if (e.target == document.querySelectorAll(".tab-button")[0]) {
  //     탭열기(0);
  //   }
  //   if (e.target == document.querySelectorAll(".tab-button")[1]) {
  //     탭열기(1);
  //   }
  //   if (e.target == document.querySelectorAll(".tab-button")[2]) {
  //     탭열기(2);
  //   }
 console.log(e.target.dataset.id);
  탭열기(e.target.dataset.id);
});

function 탭열기(숫자) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(숫자).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(숫자).addClass("show");
}
