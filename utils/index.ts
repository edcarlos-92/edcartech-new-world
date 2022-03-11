import Moment from 'moment';



export const Time = (theDate:any) =>{
    const date = new Date(theDate);
    let year = date.getFullYear();
    let  month = date.getMonth()+1;
    let day = date.getDate();
    let hour:any = date.getHours();
    let minutes:any = date.getMinutes();
    let dt;
    let mth;
    let hrs;
    let min;
    let finalTime;
   
     if (day < 10) {
         dt = '0' + dt;
     }
     if (month < 10) {
         mth = '0' + mth;
     }
  
  
     if (hour < 10) {
      hour = '0' + hour;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
   
     return finalTime = `${hour}:${minutes}`;
   }


export const HumanDateTime = (theDate?:any) =>{
    if (!theDate) theDate = Date.now()
    return `${Moment(theDate).format("ll")}, ${Time(theDate)}`;
   }