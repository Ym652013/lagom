const showCouponLink = document.querySelector('.show-coupon');
const couponForm = document.querySelector('.coupon-form');

showCouponLink.addEventListener('click', () => {
    couponForm.style.display = couponForm.style.display === 'none' ? 'block' : 'none';
});