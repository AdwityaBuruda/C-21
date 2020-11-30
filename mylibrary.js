function isTouching(objA, objB){
    if (objA.x-objB.x < objA.width/2+fixedRect.width/2
      && objB.x-objA.x < objA.width/2+objB.width/2
      && objA.y-objB.y < objA.height/2+objB.height/2
      && objB.y-objA.y < objA.height/2+objB.height/2){
        return true;
        
      }
    else return false;
  }
  
  function bounce(objA, objB){
  if (objA.x-objB.x < objA.width/2+fixedRect.width/2
    && objB.x-objA.x < objA.width/2+objB.width/2){
    objA.velocityX=objA.velocityX*(-1);
    objB.velocityX=objB.velocityX*(-1);
    }
  if (objA.y-objB.y < objA.height/2+objB.height/2
    && objB.y-objA.y < objA.height/2+objB.height/2){
      objA.velocityY=objA.velocityY*(-1);
    objB.velocityY=objB.velocityY*(-1);
    }
  }