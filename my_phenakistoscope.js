const SLICE_COUNT = 8;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("stingray" , "png");

}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(stingray);
  layer1.mode( SWIRL(4) );
  layer1.set_boundary( 200, 1500 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

}
  

function stingray(x, y, animation, pScope){
  scale(0.5);
  var stingrayx = animation.wave(5)*100;
  pScope.draw_image("stingray",stingrayx,y); 


  // scale(animation.frame*2);

  // fill (0,100,200)
  // ellipse(0,0,30,200); // draw head
 
  


}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
 
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(100, 400, 0) //INNER CIRCLE BACKGRPUND)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(200,200,0) // INNER CIRCLE IMAGE
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}
