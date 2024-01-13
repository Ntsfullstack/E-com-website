
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;
const interval = 5000; // Khoảng thời gian chuyển slide (5 giây)

function nextSlide() {
  slides[currentSlide].style.opacity = 0;

  // Tăng chỉ số của slide tiếp theo và kiểm tra xem có vượt qua số lượng slide không
  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].style.opacity = 1;
}

// Đặt độ trong suốt của ảnh đầu tiên là 1
slides[currentSlide].style.opacity = 1;

setInterval(nextSlide, interval);
