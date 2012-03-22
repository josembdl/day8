/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var templateMustache = "\
        <p>Perfil con Mustache\
        </p> \
        {{#items}}\
                <div>Nombre y apellido: {{nombre}} {{apellido}}</div>\
                <div>Edad: {{edad}}</div>\
                <div>Email: {{email}}</div>\
                <div>Ciudad: {{ciudad}}</div>\
                <div>Pais: {{pais}}</div>\
                <div>Universidad: {{universidad}}</div>\
                <p>\
                </p>\
        {{/items}}\
        ";

$(document).ready(function(){
                var output = Mustache.render(templateMustache, json);
                $("#mustache").html(output);
            });
            
