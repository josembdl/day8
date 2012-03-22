/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var templateUnderscore = "\
	<p>Perfil con Underscore</p>\
        <% var perfiles = json.items %>\
        <% for (var i = 0; i < perfiles.length; i++) { %>\
            <% var perfil = perfiles[i]; %>\
        	<div>Nombre y Apellido: <%= perfil.nombre %> <%= perfil.apellido %></div>\
                <div>Edad: <%= perfil.edad %></div>\
                <div>Email: <%= perfil.email %></div>\
                <div>Ciudad: <%= perfil.ciudad %></div>\
                <div>Pais: <%= perfil.pais %></div>\
                <div>Universidad: <%= perfil.universidad %></div>\
                <p></p\>\
                <% } %>\
";
    
            
$(document).ready(function(){
	var output = _.template(templateUnderscore, { json : json });
	$("#underscore").html(output);
});