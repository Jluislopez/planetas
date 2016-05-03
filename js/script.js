window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 300;
	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
	
	var jupiter = crearPlaneta({
									tamano 	: tamanoJupiter,
									imagen	: 'img/jupiter.jpg'
							  }),
		escalaJupiter = true;

	var mercurio = crearPlaneta({
									tamano : (tamanoJupiter*0.034),
									imagen : 'img/mercurio.jpg'
	}),
	escalaJupiter = true;

	var venus = crearPlaneta({
									tamano : (tamanoJupiter*0.084),
									imagen : 'img/venus.jpg'
	}),
	escalaJupiter = true;	


	var tierra = crearPlaneta({
									tamano : (tamanoJupiter*0.089),
									imagen : 'img/tierra.jpg'
	}),
	escalaJupiter = true;	
	var marte = crearPlaneta({
									tamano : (tamanoJupiter*0.047),
									imagen : 'img/marte.jpg'
	}),
	escalaJupiter = true;

	escena.add(tierra);
	escena.add(venus);
	escena.add(mercurio);
	escena.add(jupiter);
	escena.add(marte);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(jupiter.position);
	camara.lookAt(mercurio.position);
	jupiter.position.x = 500;
	mercurio.position.x = -250;
	venus.position.x = -150;
	tierra.position.x = -50;
	marte.position.x = 50;

	escena.add(camara);

	function renderizar()
	{
		jupiter.rotation.y += 0.001;
		mercurio.rotation.y += 0.05;
		venus.rotation.y += 0.05;
		tierra.rotation.y += 0.05;
		marte.rotation.y += 0.05;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}

	renderizar();
};
