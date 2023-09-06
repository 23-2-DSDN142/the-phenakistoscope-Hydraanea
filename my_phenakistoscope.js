const SLICE_COUNT = 11;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("stingray" , "png");
  pScope.load_image("fish" , "png");
  pScope.load_image("fish2" , "png");
  pScope.load_image("seaweed" , "png");
  pScope.load_image("wave" , "png");
  pScope.load_image("shoreline3" , "png");
  pScope.load_image("background" , "png");
  pScope.load_image_sequence("stingray" , "png", 10)
  pScope.load_image_sequence("seaweed" , "png", 4)
  pScope.load_image_sequence("fish" , "png", 4)
  pScope.load_image_sequence("bubbles" , "png", 4)

}

function setup_layers(pScope){

  new PLayer(null, "#14b5d6");  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(stingray);
  layer1.mode( RING );
  layer1.set_boundary( 0, 1750 );

  var layer2 = new PLayer(wave);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

}
  

function stingray(x, y, animation, pScope){
  // scale(0.4);
// push()
// scale(1)
// scale(1*animation.frame);
// translate(x+1000,y+10);
// // rotate(100, 100);
//   pScope.draw_image_from_sequence("stingray",x,y, animation.frame); 
// pop()
  
  push()
if(animation.frame == 0){
  scale(4.5)
  pScope.draw_image("background",x,y);
  }
pop()



  push()
  rotate(16+animation.wave()*5);
  scale(0.6);
  pScope.draw_image_from_sequence("seaweed",x+1100,y+1000, animation.frame); 
  pop()

  push()
  rotate(16+animation.wave()*5);
  scale(0.6);
  pScope.draw_image_from_sequence("seaweed",x+900,y+1500, animation.frame); 
  pop()

  push()
  rotate(16+animation.wave()*5);
  scale(0.4);
  pScope.draw_image_from_sequence("fish",x+500,y+1500, animation.frame); 
  pop()

  push()
  rotate(16+animation.wave()*5);
  scale(0.3);
  pScope.draw_image_from_sequence("bubbles",x+50,y+2700, animation.frame); 
  pop()




 
  // scale(2)

  // rotate(2*animation.frame);
  // scale(11*animation.frame);
  // translate(9*animation.frame);

  // var x = animation.wave(1)*100;

  // push()

  // scale(0.4)
  // rotate(16*animation.frame);
  // //  var x = animation.wave(1)*900;
  // pScope.draw_image("fish2",x+1000,y); 

  // pop()



  // var stingray = animation.wave(1)*900;
  // pScope.draw_image("stingray",x,y); 

//   scale(0.5);
//   var fish2x = animation.wave(1)*1100;
// pScope.draw_image("fish2",fish2x,y); 

// var fish2x = animation.wave(4)*100;
// pScope.draw_image("fish2",fish2x,y); 

// var fishx = animation.wave(6)*600;
// pScope.draw_image("fish",fishx,y); 

// }
}
// }


// function stingray(fish2x, y, animation, pScope){
// scale(0.5);
// var fish2x = animation.wave(1)*1100;
// pScope.draw_image("fish2",fish2x,y); 
// }


// function fish(fishx, y, animation, pScope){
//   // scale(0);
//   var fishx = animation.wave(2)*200;
//   pScope.draw_image("fish",fishx,y); 
// // pop()

// }


function wave(x, y, animation, pScope){




  // this is how you set up a background for a specific layer
//  push()
//   let angleOffset = (360 / SLICE_COUNT) / 2
//   let backgroundArcStart = 270 - angleOffset;
//   let backgroundArcEnd = 270 + angleOffset;

//   fill(290,300,130) //INNER CIRCLE BACKGRPUND)
//   arc(x,y,700,700,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
// pop()

push()
if(animation.frame == 0){
  scale(2)
  pScope.draw_image("shoreline3",x,y);
  }
pop()


// push()
//   fill("#72B01D") // INNER CIRCLE IMAGE

//   scale(0.5);
//   translate(x+425,y+425);
//     pScope.draw_image("wave",x,y); 

//   // rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw
// pop()




// function Spin(x, y, animation, pScope){
//   push()
  
//   if(animation.frame == 0){
//   pScope.draw_image("spin",x,y);
//   }
//   pop()
//   //translate(50 * animation.frame, 0);
//   //scale(animation.frame*2);
//   // fill(196, 252, 255)
  
  // let ballSize  = 100 + (animation.wave(1)* 20)
  // let bouce = 50* animation.wave()
  // ellipse(150, 850+bouce ,ballSize); 
  

}
// function dots(x, y, animation, pScope){
// fill(225)
//   ellipse(0,0,10, 10)
// }