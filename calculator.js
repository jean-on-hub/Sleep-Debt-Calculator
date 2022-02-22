// get number of sleep hours
const getSleepHours = (day)=> {
    if (day.toLowerCase() === 'monday') {
      return 6;
    } else if (day.toLowerCase() === 'tuesday') {
      return 5;
    } else if (day.toLowerCase() === 'wednesday') {
      return 6;
    } else if (day.toLowerCase() === 'thursday') {
      return 5;
    } else if (day.toLowerCase() === 'friday') {
      return 8;
    } else if (day.toLowerCase() === 'saturday') {
      return 7;
    } else if (day.toLowerCase() === 'sunday') {
      return 7;
    }
  }
  

//   actual sleep hours
  const getActualSleepHours = ()=> {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  }
  

//   ideal sleep hours
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7
  }
  
// sleep debt 
  const calculateSleepDebt = ()=> {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return 'You have a perfect amount of sleep'
    } else if (actualSleepHours < idealSleepHours) {
      return `You have a deficit of ${idealSleepHours - actualSleepHours} hours of sleep. You need to rest more.`
    } else {
      return `You have overslept by ${idealSleepHours - actualSleepHours} hours. Cut down on the amount of sleep you get every night.`
    }
  }
  
  console.log(calculateSleepDebt());