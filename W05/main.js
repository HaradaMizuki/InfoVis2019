function main(){
  var width = 500;
  var height = 500;

  var scene = new THREE.Scene();

  var fov =45;
  var aspect =width/height;
  var near =1;
  var far =1000;
  var camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
  camera.position.set(0,0,5);
  scene.add(camera);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width,height);
  document.body.appendChild( renderer.domElement);

  var light =new THREE.PointLight();
  light.position.set(5,5,5);
  scene.add(light);

  var vertices = [
    [ -1, -1, -1 ], // 0
    [  1, -1, -1 ], // 1
    [  1,  1, -1 ], // 2
    [ -1,  1, -1 ], // 3
    [ -1, -1,  1 ], // 4
    [  1, -1,  1 ], // 5
    [  1,  1,  1 ], // 6
    [ -1,  1,  1 ]  // 7
  ];
  var faces =[
    [ 0, 2, 1 ], // f0
    [ 0, 3, 2 ], // f1
    [ 0, 1, 5 ], // f2
    [ 4, 0, 5 ], // f3
    [ 0, 4, 3 ], // f4
    [ 3, 4, 7 ], // f5
    [ 1, 2, 5 ], // f6
    [ 2, 6, 5 ], // f7
    [ 2, 3, 6 ], // f8
    [ 3, 7, 6 ], // f9
    [ 4, 5, 6 ], // f10
    [ 4, 6, 7 ], // f11
  ];

  var geometry = new THREE.Geometry();
  var material = new THREE.MeshLambertMaterial();

  for( var i=0;i<vertices.length;i++){
    var v= new THREE.Vector3().fromArray( vertices[i]);
    geometry.vertices.push(v);
  }
  for( var i=0;i<faces.length;i++){
    var id =faces[i];
    var f=new THREE.Face3(id[0],id[1],id[2]);
    geometry.faces.push(f);
  }
  material.vertexColors=THREE.FaceColors;
  for ( var i = 0; i < faces.length; i++ )
    {
        geometry.faces[i].color = new THREE.Color( 1, 1, 1 );
    }

    geometry.computeFaceNormals();

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

  loop();

  function loop(){
    requestAnimationFrame(loop);
    cube.rotation.x += 0.002;
        cube.rotation.y += 0.002;
    renderer.render(scene,camera);
  }



}
