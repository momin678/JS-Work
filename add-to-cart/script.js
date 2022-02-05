// product add with price
function increament(incDec, price, priceShow){
    var countNumber = document.getElementById(incDec);
    var countPrice = document.getElementById(price);
    var countPriceShow = document.getElementById(priceShow);
    if(countNumber.value >= 5){
        countNumber.value = 5;
    }else{
        countNumber.value++;
        var price = parseInt(countPrice.innerHTML)*parseInt(countNumber.value);
        var priceShow = countPriceShow.innerHTML = price;
        totalPrice();
    }
}
// product minus with price
function decreament(incDec, price, priceShow){
    var countNumber = document.getElementById(incDec);
    var countPrice = document.getElementById(price);
    var countPriceShow = document.getElementById(priceShow);
    if(countNumber.value <= 0){
        countNumber.value = 0;
    }else{
        countNumber.value--;
        var price = parseInt(countPrice.innerHTML)*parseInt(countNumber.value);
        var priceShow = countPriceShow.innerHTML = price;
        totalPrice();
    }
}
// price calculate
function totalPrice(){
    var copon = document.getElementById('copon');
    var priceShow2 = document.getElementById('priceShow2');
    var priceShow1 = document.getElementById('priceShow1');
    var deliveryCharge = document.getElementById('deliveryCharge');
    var totalAmount = document.getElementById('totalAmount');
    var flowerAmount = document.getElementById('flowerAmount');
    var grandTotal = document.getElementById('grandTotal');
    var total = parseInt(priceShow2.innerHTML) + parseInt(priceShow1.innerHTML);
    flowerAmount.innerHTML = total;
    totalAmount.innerHTML = total + parseInt(deliveryCharge.innerHTML);
    grandTotal.innerHTML = total + parseInt(deliveryCharge.innerHTML);
    if(total == 0){
        totalAmount.innerHTML = 0;
    }
    if(total >= 1000){
        var discountCode = document.getElementById('discountCode');
        var copon = document.getElementById('copon');
        var coupnApply = document.getElementById('coupnApply');
        discountCode.innerHTML = "Your Discount Code is: Discount2022";
        copon.classList.remove('disable');
        coupnApply.classList.remove('disable');
        if(copon.value == 'Discount2022'){
            var coupnApply = document.getElementById('coupnApply');
            var coponResult = document.getElementById('coponResult');
            coponResult.innerHTML = "Greate! You get 30 Tk Discount of your purchase."
            coponResult.classList.add('coponResultrue')
            var coupnValue = 30;
            var grandTotal = document.getElementById('grandTotal');
            var amount = grandTotal.innerHTML;
            grandTotal.innerHTML = amount-coupnValue;
            copon.classList.add('disable');
            coupnApply.classList.add('disable');
            coupnValue = 0;
        }
    }else{
        var discountCode = document.getElementById('discountCode');
        var coupnApply = document.getElementById('coupnApply');
        var coponResult = document.getElementById('coponResult');
        discountCode.innerHTML = null;
        coponResult.innerHTML = null;
        var copon = document.getElementById('copon');
        copon.classList.add('disable');
        coupnApply.classList.add('disable');
        copon.value = null;
    }
}
// copon apply and calculate
var coupnApply = document.getElementById('coupnApply');

coupnApply.addEventListener('click', function(){
    var copon = document.getElementById('copon');
    if(copon.value == 'Discount2022'){
        var coupnApply = document.getElementById('coupnApply');
        var coponResult = document.getElementById('coponResult');
        coponResult.innerHTML = "Greate! You get 30 Tk Discount of your purchase."
        coponResult.classList.add('coponResultrue')
        var coupnValue = 30;
        var grandTotal = document.getElementById('grandTotal');
        var amount = grandTotal.innerHTML;
        grandTotal.innerHTML = amount-coupnValue;
        copon.classList.add('disable');
        coupnApply.classList.add('disable');
        coupnValue = 0;
    }else{
        var coponResult = document.getElementById('coponResult');
        if(copon.value == ""){
            coponResult.innerHTML = "Sorry! You are not give any code. Please try again."
            coponResult.classList.remove('coponResultrue');
            coponResult.classList.add('coponResultFlase');
        }else{
            coponResult.innerHTML = "Sorry! Your copon not match. Please try again."
            coponResult.classList.remove('coponResultrue');
            coponResult.classList.add('coponResultFlase');
        }
    }
});
