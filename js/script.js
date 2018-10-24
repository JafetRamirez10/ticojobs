$(document).ready(function(){
	/*===========================================================
	=            Modal de Registro o Iniciar  Sesion            =
	===========================================================*/
		$(".btnCrear").click(function(){
		texto=$(".btnCrear").html();
	if(texto=="Iniciar Sesión"){
		$(".iniciarSesion").attr("style"," ");
		$(".btnIniciar").attr("name","iniciar");
		$(".btnIniciar").html("Iniciar Sesión");
		$(".CrearCuenta").attr("style","display:none");
		$(".btnCrear").html("Crear Cuenta");
		console.log("Ingresa");
	}else{
		$(".iniciarSesion").attr("style","display:none");
		$(".btnIniciar").attr("name","crear");
		$(".btnIniciar").html("Crear Cuenta");
		$(".CrearCuenta").attr("style"," ");
		$(".btnCrear").html("Iniciar Sesión");
	}
		
	})
			
	/*=====  End of Modal de Registro o Iniciar  Sesion  ======*/
})
	

	
