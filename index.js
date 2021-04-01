<!DOCTYPE HTML>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<title>Proyecto con JavaScript</title>

		<!-- Estilos CSS -->
		<link rel="stylesheet" type="text/css" href="css/styles.css" />
		<link id="theme" rel="stylesheet" type="text/css" href="css/green.css" />

		<!-- jQuery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

		<!-- Slider --> 
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
		<script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
	
		<!-- Moment -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.0/moment.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.0/locale/es.js"></script>

		<!-- Mis Scripts -->
		<script type="text/javascript" src="js/main.js"></script>
	</head>
	<body>
		<div id="selector-theme">
			<div id="to-green"></div>
			<div id="to-red"></div>
			<div id="to-blue"></div>
		</div>

		<section id="global">

			<!-- Cabecera -->
			<header>
				<div id="logo">
					<h1>Proyecto JS</h1>
				</div>

				<div class="clearfix"></div>

				<nav id="menu">
					<ul>
						<li><a href="index.html">Inicio</a></li>
						<li><a href="reloj.html">Reloj</a></li>
						<li><a href="about.html">Sobre mi</a></li>
						<li><a href="contact.html">Contacto</a></li>
					</ul>
				</nav>
			</header>

			<!-- Slider -->
			<div id="slider">
				<div class="galeria">
				  <div><img src="img/hojas.jpg" title="Hojas"></div>
				  <div><img src="img/rojo.jpg" title="The long and winding road"></div>
				  <div><img src="img/cielo.jpg" title="Happy trees"></div>
				</div>
			</div>

			<!-- Contenido -->
			<section id="content">

				<div id="posts">
					<!-- Cargar posts desde json -->
				</div>

				<aside id="sidebar">
					<div id="about">
						<h4><span>¿Quien soy?</span></h4>
						<img src="img/caracol.jpg" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo.</p>
					</div>

					<div id="login">
						<h4><span>Identificate</span></h4>
						<form>
							<label for="name">
								Nombre
							</label>
							<input type="text" name="name" id="form_name"/>

							<label for="email">
								Correo
							</label>
							<input type="text" name="email" />

							<label for="password">
								Contraseña
							</label>
							<input type="password" name="password" />

							<input type="submit" value="Entrar" />
						</form>
					</div>

				</aside>

				<div class="clearfix"></div>
			</section>

		</section>

		<footer>
			Master de JavaScript Lautaro Garay &copy;

			<a href="#" class="subir">Ir arriba</a>
		</footer>
	</body>
</html>
