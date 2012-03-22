/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var templateJsmart = "\
    <p>Perfil con JSmart</p>\
        {foreach $items as $i => $perfil}\
            <div>Nombre y apellido: {$perfil.nombre} {$perfil.apellido}</div>\
            <div>Edad: {$perfil.edad}</div>\
            <div>Email: {$perfil.email}</div>\
            <div>Ciudad: {$perfil.ciudad}</div>\
            <div>Pais: {$perfil.pais}</div>\
            <div>Universidad: {$perfil.universidad}</div>\
            <p></p>\
        {/foreach}\
";

$(document).ready(function(){
    var tpl = new jSmart(templateJsmart);
    var res = tpl.fetch( json );
    $("#jsmart").html(res);
});