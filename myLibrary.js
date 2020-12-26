function isTouching(body1,body2) {
    if(((body1.x - body2.x) <=  (body1.width/2 + body2.width/2)) &&
    ((body2.x - body1.x) <=  (body1.width/2 + body2.width/2)) &&
    ((body1.y - body2.y) <=  (body1.height/2 + body2.height/2)) &&
    ((body2.y - body1.y) <=  (body1.height/2 + body2.height/2)) ){
      return true;
    } else { 
      return false;
    }
  }
  
  function bounceOff(body1,body2) {
    if(((body1.x - body2.x) <=  (body1.width/2 + body2.width/2)) &&
    ((body2.x - body1.x) <=  (body1.width/2 + body2.width/2))){
      body1.velocityX = -(body1.velocityX);
    }
  
    if(((body1.y - body2.y) <=  (body1.height/2 + body2.height/2)) && 
    ((body2.y - body1.y) <=  (body1.height/2 + body2.height/2))){
      body1.velocityY = -((body1.velocityY));
    }
  }
  
  function bounce(body1,body2) {
    if(((body1.x - body2.x) <=  (body1.width/2 + body2.width/2)) &&
    ((body2.x - body1.x) <=  (body1.width/2 + body2.width/2))){
      body1.velocityX = -(body1.velocityX);
      body2.velocityX = -(body2.velocityX);
    }
  
    if(((body1.y - body2.y) <=  (body1.height/2 + body2.height/2)) && 
    ((body2.y - body1.y) <=  (body1.height/2 + body2.height/2))){
      body1.velocityY = -((body1.velocityY));
      body2.velocityY = -(body2.velocityY);
    }
  }
  
  function collide(body1,body2) {
    if(((body1.x - body2.x) <=  (body1.width/2 + body2.width/2)) &&
    ((body2.x - body1.x) <=  (body1.width/2 + body2.width/2))){
      body1.velocityX = 0;
    }
  
    if(((body1.y - body2.y) <=  (body1.height/2 + body2.height/2)) && 
    ((body2.y - body1.y) <=  (body1.height/2 + body2.height/2))){
      body1.velocityY = 0;
    }
  }
  
  function displace(body1,body2) {
    if(((body1.x - body2.x) <=  (body1.width/2 + body2.width/2)) &&
    ((body2.x - body1.x) <=  (body1.width/2 + body2.width/2))){
      body2.velocityX = body1.velocityX;
    }
  
    if(((body1.y - body2.y) <=  (body1.height/2 + body2.height/2)) && 
    ((body2.y - body1.y) <=  (body1.height/2 + body2.height/2))){
      body2.velocityY = body1.velocityY;
    }
  }