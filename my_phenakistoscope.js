const SLICE_COUNT = 11;

function setup_pScope(pScope){
   pScope.output_mode(ANIMATED_DISK);
  // pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("stingray" , "png");
  pScope.load_image("fish" , "png");
  pScope.load_image("fish2" , "png");
  pScope.load_image("seaweed" , "png");
  pScope.load_image("shoreline5" , "png");
  pScope.load_image("background" , "png");
  pScope.load_image_sequence("stingray" , "png", 10)
  pScope.load_image_sequence("seaweed" , "png", 4)
  pScope.load_image_sequence("fish" , "png", 4)
  pScope.load_image_sequence("bubbles" , "png", 4)

}

function setup_layers(pScope){

  new PLayer(null, "#14b5d6");  

  var layer1 = new PLayer(stingray);
  layer1.mode( RING );
  layer1.set_boundary( 0, 1750 );

  var layer2 = new PLayer(wave);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

}

//////// INNER CIRCLE ///////////
  

function stingray(x, y, animation, pScope){

    // SPINNING OCEAN BACKGROUND
  push()
     if(animation.frame == 0){
       scale(4.5)
       pScope.draw_image("background",x,y);
  }
  pop() 


  // TALL SEAWEED
  push()
       scale(0.6);
       rotate(16+animation.wave()*5);
      pScope.draw_image_from_sequence("seaweed",x+1100,y+1000, animation.frame); 
  pop()

  // SHORT SEAWEED
  push()
   scale(0.6,-0.6);
   rotate(16+animation.wave()*5);
    pScope.draw_image_from_sequence("seaweed",x-350,y+1600, animation.frame); 
  pop()


  // LARGE FISH
  // push()
  //   scale(0.4);  
  //   rotate(16+animation.wave()*5);
  //   pScope.draw_image_from_sequence("fish",x+500,y+1500, animation.frame); 
  // pop()

  // SMALL FISH
  push()
    scale(0.25);
    rotate(16+animation.wave()*5);
    pScope.draw_image_from_sequence("fish",x+1350,y+2800, animation.frame); 
  pop()

  // STINGRAY
  push()
    scale(0.4,-0.5);
    rotate(12+animation.wave()*5);
    pScope.draw_image_from_sequence("stingray",+200,y-1200, animation.frame); 
  pop()

  // LOWER BUBBLES
  push()
    scale(0.3);
    rotate(16+animation.wave()*5);
    pScope.draw_image_from_sequence("bubbles",x+50,y+2700, animation.frame); 
  pop()

  // UPPER BUBBLES
  push()
    scale(0.2,-0.2);
    rotate(16+animation.wave()*3);
    pScope.draw_image_from_sequence("bubbles",x+800,y+2700, animation.frame); 
  pop()

}


//////////// OUTER CIRCLE //////////////

function wave(x, y, animation, pScope){

  strokeWeight(1);
  stroke("#31548f");

push()

  let angleOffset = (90 / SLICE_COUNT) / 1
  let backgroundArcStart = 100 - angleOffset;
  let backgroundArcEnd = 350 + angleOffset;

  // CENTER SUN
  fill("#f59f58") 
  arc(x,y,150,160,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

pop()

// SUN RAYS
push()
  fill("#f59f58");
  rect(-10,-150-animation.wave(600)*5,5,10) 
pop()

// SPINNING SHORELINE
push()
if(animation.frame == 0){
  scale(2)
  pScope.draw_image("shoreline5",x,y);
  }
pop()



}