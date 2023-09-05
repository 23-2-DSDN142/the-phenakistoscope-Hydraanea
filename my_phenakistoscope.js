const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("stingray" , "png");
  pScope.load_image("fish" , "png");
  pScope.load_image("fish2" , "png");
  pScope.load_image_sequence("stingray" , "png", 10)

}

function setup_layers(pScope){

  new PLayer(null, "#14b5d6");  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(stingray);
  layer1.mode( RING );
  layer1.set_boundary( 100, 1500 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

}
  

function stingray(x, y, animation, pScope){
  scale(0.5);
  push()
  rotate(1*animation.frame);

  //var stingray = animation.wave(3)*400;
  pScope.draw_image_from_sequence("stingray",x,y-1000, animation.frame); 
  pop()

  //var stingray = animation.wave(1)*900;
  //pScope.draw_image_from_sequence("stingray",x,y); 

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



function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
 
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill("#b2e17a") //INNER CIRCLE BACKGRPUND)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill("#72B01D") // INNER CIRCLE IMAGE
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}
