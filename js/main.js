function init() {
  // Disk
  const limitBar = document.getElementById("diskLimitBar");
  const limitBarFill = document.getElementById("diskLimitBarFill");
  const limitLeft = document.getElementById("diskLimitLeft");
  const limitLeftNum = limitLeft.dataset.left;
  //   let i = 0;
  let time = 0.8;
  let step = (1000 * time) / limitLeftNum;
  let i = setInterval(function () {
    if (i <= limitLeftNum) {
      limitLeft.innerHTML = i;
    } else {
      clearInterval(i);
    }
    i++;
  }, step);
  let limitBarNum = 100 - limitLeftNum;
  limitBarFill.style.width = limitBarNum + "%";
  limitBarFill.style.opacity = 1;

  const srBlock = document.querySelector(".circle-progress-count");
  const srNum = srBlock.dataset.num;
  let stepSr = (500 * time) / srNum;
  let m = setInterval(function () {
    if (m <= srNum) {
      srBlock.innerHTML = m;
    } else {
      clearInterval(m);
    }
    m++;
  }, stepSr);

  const circleTop = new ProgressBar.Circle("#progress", {
    color: "#ef5da8",
    duration: 3000,
    strokeWidth: 6,
    easing: "easeInOut",
  });
  const circlePro = new ProgressBar.Circle("#progress_pro", {
    color: "#5d5fef",
    duration: 3000,
    strokeWidth: 7,
    easing: "easeInOut",
  });

  const circleFresh = new ProgressBar.Circle("#progress_fresh", {
    color: "#3ac39f",
    duration: 3000,
    strokeWidth: 8,
    easing: "easeInOut",
  });
  const circlePortfolio = new ProgressBar.Circle("#progress_portfolio", {
    color: "#f178b6",
    duration: 3000,
    strokeWidth: 11,
    easing: "easeInOut",
  });
  const circleProfile = new ProgressBar.Circle("#progress_profile", {
    color: "#a5a6f6",
    duration: 3000,
    strokeWidth: 15,
    easing: "easeInOut",
  });

  circleTop.animate(0.1);
  circlePro.animate(1);
  circleFresh.animate(1);
  circlePortfolio.animate(0.5);
  circleProfile.animate(1);

  // Circles
  //   const circle = document.querySelector(".progress-ring-circle");
  //   const radius = circle.r.baseVal.value;
  //   console.log(radius);
  //   const circumference = 2 * Math.PI * radius;
  //   circle.style.strokeDasharray = ` ${circumference} ${circumference}`;
  //   circle.style.strokeDashoffset = circumference;
  //   function setProgress(percent) {
  //     const offset = circumference - (percent / 100) * circumference;
  //     circle.style.strokeDashoffset = offset;
  //   }
  //   setProgress(50);

  const boxes = document.querySelectorAll(".progress_bar");
  const progress_popover = document.querySelector(".progress_popover");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", function handleClick(event) {
      let progressName = event.target.parentElement.dataset.progressName;
      if (progressName != undefined) {
        progress_popover.innerHTML = progressName;
        progress_popover.style.display = "block";
      }
    });
    box.addEventListener("mouseleave", function handleClick(event) {
      progress_popover.style.display = "none";
    });
  });
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("circle-progress")) console.log(e.target);
  });
}

window.onload = init;
