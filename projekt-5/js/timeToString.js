// Convert time to a format of hours, minutes, seconds.

export function timeToString(time) {
    const timeInHrs = time / 3600000;
    const hh = Math.floor(timeInHrs);
  
    const timeInMin = (timeInHrs - hh) * 60;
    const mm = Math.floor(timeInMin);
  
    const timeInSec = (timeInMin - mm) * 60;
    const ss = Math.floor(timeInSec);
  
    const formattedHH = hh.toString().padStart(2, "0");
    const formattedMM = mm.toString().padStart(2, "0");
    const formattedSS = ss.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}`;
  }
  