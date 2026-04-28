setInterval(() => {
    let create_time = Math.round(new Date('2026-04-28 20:01:36').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);
  
    var nol = function(h){
      return h>9?h:'0'+h;
    }
    if (second >= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600));
      second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
    }
    if (second >= 3600) {
      time[2] = nol(parseInt(second / 3600));
      second %= 3600;
    }
    if (second >= 60) {
      time[3] = nol(parseInt(second / 60));
      second %= 60;
    }
    if (second > 0) {
      time[4] = nol(second);
    }
  let statusIcon;
  if ((Number(time[2]) < 22) && (Number(time[2]) > 7)) {
    statusIcon = '<img src="/img/icon/day.png" class="runtime-icon" alt="online">';
  } else {
    statusIcon = '<img src="/img/icon/night.png" class="runtime-icon" alt="offline">';
  }
  
  const currentTimeHtml = `${statusIcon}
    <span class="runtime-display">${time[0]} 年 ${time[1]} 天 ${time[2]}:${time[3]}:${time[4]}</span>`;
    document.getElementById("workboard").innerHTML = currentTimeHtml;
  }, 1000);