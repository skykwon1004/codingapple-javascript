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

let length = $('.tab-button').length
console.log(length)

for(let i = 0; i <length; i++){
    $('.tab-button').eq(i).on('click',function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    })
}










