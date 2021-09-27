// Checking how many hours of sleep the user got each night during the week.
// Comprobando cuántas horas de sueño el usuario tuvo cada noche durante la semana.
const getSleepHours = day => {
    switch(day){
      case 'Monday':
        return 8;
      case 'Tuesday':
        return 8;
      case 'Wednesday':
        return 8;
      case 'Thursday':
        return 8;
      case 'Friday':
        return 6;
      case 'Saturday':
        return 8;
      case 'Sunday':
        return 8;
    }
  };
  
  // Getting total sleep hours that the user actually slept for whole week.
  // Obteniendo el total de horas de sueño que el usuario durmió durante toda la semana.
  const getActualSleepHours = () =>{
    return getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
  }
  
  // Getting ideal sleep hours per day that user prefers, multiplying them by 7 as we need to count all days.
  // Obteniendo la cantidad ideal de horas de sueño por día que el usuario desea, multiplicándolas por 7 dado que necesitamos contar todos los días.
  const getIdealSleepHours = () =>{
    let idealHours = 8;
    return idealHours*7;
  }
  
  // Calculating sleep debt.
  // Calcular la falta de sueño.
  const calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
    // Output the result to the user, with hours, by comparing actualSleepHours and idealSleepHours.
    // Muestra el resultado al usuario, con horas, comparando actualSleepHours e idealSleepHours..
    if(actualSleepHours === idealSleepHours){
      console.log('You have got ' + actualSleepHours + ' hours of sleep this week, it is a perfect amount.');
    }
    if(actualSleepHours > idealSleepHours){
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week.');
    }
    if(actualSleepHours< idealSleepHours){
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
  }
  }
  
  // Start the program.
  // Iniciar el programa.
  calculateSleepDebt();