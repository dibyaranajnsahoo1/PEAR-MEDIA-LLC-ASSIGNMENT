document.getElementById('spin-btn').addEventListener('click', spinWheel);
    

    function spinWheel() {
      const btn = document.querySelector('.btn');
      const wheel = document.querySelector('.wheel');
      const arrow = document.querySelector('.arrow');
      const result = document.getElementById('result');
      wheel.style.animationIterationCount = 'infinite';
      wheel.style.animationPlayState = 'running';
      arrow.style.animationPlayState = 'running';
    
      setTimeout(() => {

        
        wheel.style.animationPlayState = 'paused';
        arrow.style.animationPlayState = 'paused';
    
        const slices = document.querySelectorAll('.slice');
        const winnerSlice = slices[Math.floor(Math.random() * slices.length)];
    
        if (winnerSlice.classList.contains('slice-2')) {
          result.innerHTML = 'Try Again';
        } else {
          result.innerHTML = `Congratulations! You won a ${winnerSlice.innerHTML} coupon!`;
        }
      }, 3000);
    }