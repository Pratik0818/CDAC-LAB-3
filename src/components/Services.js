export const angleToRadians=(angleInDeg)=>(Math.PI/180)*angleInDeg;

export const calculateDistance=(x,x1,y,y1)=>{    
    
      let xDiff=x-x1;
      let yDiff=y-y1;
      return (Math.sqrt((xDiff * xDiff) + (yDiff * yDiff)));
    
}