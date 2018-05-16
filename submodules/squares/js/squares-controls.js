// Squares
// Description: Interactive and embeddable HTML content builder.
// Author: Nikolay Dyankov, additionnal controls Anzieu Antoine
// License: MIT, additionnal controls : Licence CulturMoov

;(function ($, window, document, undefined) {
    
    /*---------------------- SPECIFIC CONTROLS ----------------------*/
    /*---------------------------------------------------------------*/
    /*--- Controls for Horaires open multi selector OK --*/
    $.squaresRegisterControl({
        type: 'horaires',
        customLabel: true,
        getValue: function() {
            var element = $('#' + this.elementID);
            var datestart, dateend, hoursstart, hoursend;
            var html = '';
            this.options.jour_start.default = [];
            this.options.jour_end.default = [];
            this.options.hours_start.default = [];
            this.options.hours_end.default = [];
            for (var k = 0 ; k < this.options.add; k++){
                var exist = " - ";
                datestart = element.find('#date-start-' + k).val();
                dateend = element.find('#date-end-' + k).val();
                if (dateend === "")
                    exist = "";
                hoursopen = element.find('#hours-open-' + k).val();
                hoursclose = element.find('#hours-close-' + k).val();
                this.options.jour_start.default.push(datestart);
                this.options.jour_end.default.push(dateend);
                this.options.hours_start.default.push(hoursopen);
                this.options.hours_end.default.push(hoursclose);
                html += '<div style="display: inline-block;" class="sq-element-horaires-list">'
                html += '   <p style="float:left; font-size:14px;">'
                html += '       <span id="datestart-'+ k + '">' + datestart + '</span>' + exist + '<span id="dateend-' + k + '">' + dateend + '</span>'
                html += '   </p>'
                html +=  '  <p style="float: right; font-size:14px;">'
                html += '       <span id="hoursopen-'+ k + '">' + hoursopen + '</span> - <span id="hoursclose-' + k + '">' + hoursclose + '</span>'
                html += '   </p>'
                html +=  '</div>'
            }
            return html;
           
        },
        setValue: function(v) {
            var element = $('#' + this.elementID);
            for (var k = 0 ; k < this.options.add; k++){
                datestart = element.find('#date-start-' + k)
                dateend = element.find('#date-end-' + k)
                hoursopen = element.find('#hours-open-' + k)
                hoursclose = element.find('#hours-close-' + k)
                datestart.val(this.options.jour_start.default[k]);
                dateend.val(this.options.jour_end.default[k]);
                hoursopen.val(this.options.hours_start.default[k]);
                hoursclose.val(this.options.hours_end.default[k]);
            }
            $('#' + this.elementID).val(v);
        },
        HTML: function(id) {
            if(!id) {
                id = 0;
            }
            var html = '';
            if(id === 0) {
                html += '<label for="'+ this.elementID +'">'+ this.name +'</label>';
                html += '<div id="' + this.elementID + '">'
            }
            for (var k = id ; k < this.options.add; k++){
                html += '<div id="' + this.elementID + '-' + k + '" class="sq-all-date">';
                html += '   <div class="sq-grid-date-control">'
                html += '       <div class="sq-select-date">'
                html += '           <select id="date-start-' + k + '" value="'+ this.options.jour_start.default[k] + '">';
                for (var i=0; i < this.options.jour_start.options.length; i++) {
                    html += '           <option value="' + this.options.jour_start.options[i] + '">' + this.options.jour_start.options[i] + '</option>';
                }
                html += '           </select>';
                html += '       </div>'
                html += '       <div class="sq-select-date">'
                html += '           <select id="date-end-' + k + '" value="'+ this.options.jour_end.default[k] + '">';
                for (var i=0; i < this.options.jour_end.options.length; i++) {
                    html += '           <option value="'+ this.options.jour_end.options[i] +'">' + this.options.jour_end.options[i] + '</option>';
                }
                html += '           </select>';
                html += '       </div>'
                html += '       <div class="sq-select-hours">'
                html += '           <input type="time" name="open" id="hours-open-' + k + '" value="10:00">'
                html += '       </div>'
                html += '       <div class="sq-select-hours">'
                html += '           <input type="time" name="close" id="hours-close-' + k + '" value="18:00">'
                html += '       </div>'
                if (k === 0) {
                    html += '   <div class="sq-control-button-plus" id="' + this.elementID + '-btnplus" >+</div>';
                    html += '   <div class="sq-control-button-less" id="' + this.elementID + '-btnless" >-</div>';
                }
                html += '   </div>'
                html += '</div>'
            }
            if (id === 0)
                html += '</div>'
            return html;
        },
        init: function() {
            var self = this;
            var id, prev;
            $(document).on('click', '#' + this.elementID + '-btnplus', function() {
                if(self.options.add <= 8){
                    id = self.options.add; // vaut 1 at first time
                    prev = id - 1; // vaut 0 at first time
                    self.options.add += 1;
                    $('#' + self.elementID + '-' + prev + '').after(self.HTML(id));
                }
                self.valueChanged()
            });
            $(document).on('click', '#' + this.elementID + '-btnless', function() {
                if (self.options.add > 1){
                    id = self.options.add; // vaut 1 at first time
                    prev = id - 1; // vaut 0 at first time
                    self.options.add -= 1;
                    $('#' + self.elementID + '-' + prev + ':last-child').remove();
                }
                self.valueChanged()
            });
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /*--- Controls for Tarifs OK --*/
    $.squaresRegisterControl({
        type: 'Tarifs',
        customLabel: true,
        getValue: function() {

            var element = $('#' + this.elementID);
            // var color = $()
            var v = {
                price : ["","",""],
                check : [0,0,0],
                html : "",
            }

            var options, price;
            for (var k = 0 ; k < this.options.tarifs.length; k++){
                tmp_price = element.find('#price-' + k).val();
                v.price[k] = tmp_price;
                options =  element.find('#tarifs-' + k);
                if (options.get(0).checked === true) {
                    v.html += '<p>' + this.options.tarifs[k] + v.price[k] +' €</p>';
                    v.check[k] = 1;
                } else {
                    v.check[k] = 0;
                }
            }
            // element.val(v);
            return v;
        },
        setValue: function(v) {
            var element = $('#' + this.elementID).val(v);

            for (var k = 0 ; k < this.options.tarifs.length; k++){
                element.find('#price-' + k).val(v.price[k]);
                if (v.check[k] === 1) {
                    element.find('#tarifs-' + k).get(0).checked = true;
                }
                else {
                    element.find('#tarifs-' + k).get(0).checked = false;
                }
            }
        },
        HTML: function() {

            var html = '';

            html += '<label for="'+ this.elementID +'">'+ this.name +'</label>';
            html += '<div id="' + this.elementID + '">'

            for (var k = 0 ; k < 3; k++){
                html += '<div id="' + this.elementID + '-' + k + '" class="sq-all-date">';
                html += '   <div class="sq-grid-tarifs-control">';
                html += '       <div class="sq-select-tarifs">';
                html += '           <input type="checkbox" id="tarifs-'+k+'">';
                html += '           <label for="tarifs-'+ k +'">' + this.options.tarifs[k] + '</label>';
                html += '       </div>';
                html += '       <div class="sq-select-price">';
                html += '           <input type="number" min="0.01" step="0.01" max="2500" value="" id="price-' + k + '">';
                html += '           <label for="price-' + k + '"> € </label>';
                html += '       </div>'
              
                html += '   </div>'
                html += '</div>'
            }
            html += '</div>'
            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /* map google Control OK --*/
    $.squaresRegisterControl({
        type: 'map',
        getValue: function() {
            var v = {
                address: '',
                address_components: '',
                name: '',
                website: '',
                googleid: '',
                url: '',
                latLongGoogle: {
                    lat: '',
                    lng: '',
                },
                place_id: '',
                infoshtml: '',
            }
            var geocoder = new google.maps.Geocoder();
            // setTimeout(() => {
                geocoder.geocode( { 'placeId': infoFromGoogle.place_id}, function(results, status) {
                    if (status == 'OK') {
                        v.latLongGoogle.lat = results[0].geometry.location.lat();
                        v.latLongGoogle.lng = results[0].geometry.location.lng();
                    } else {
                        // alert('Geocode was not successful for the following reason: ' + status);
                        v.latLongGoogle.lat = "";
                        v.latLongGoogle.lng = "";
                    }
                });

                v.address = $('#pac-input-' + this.elementID).val();
                v.address_components = infoFromGoogle.address_components;
                v.name = infoFromGoogle.name;
                v.website = infoFromGoogle.website;
                v.googleid = 'googlemaps-click-' + this.elementID; // important to event on app 
                v.url = infoFromGoogle.url;
                v.place_id = infoFromGoogle.place_id;

                var address = "";
                if (v.address_components) {
                        address = [
                        (v.address_components[0] && v.address_components[0].short_name || ""),
                        (v.address_components[1] && v.address_components[1].short_name || ""),
                        (v.address_components[2] && v.address_components[2].short_name || ""),
                        ].join(" ");
                }
                v.infoshtml = "";
                v.infoshtml += '<div style="max-width:200px;">';
                if (v.name) {
                    v.infoshtml += '<strong>' + v.name + '</strong>';
                }
                v.infoshtml += '<br>' + address + '<br>';
                if (v.website) {
                    var site = v.website.substring(7, (v.website.indexOf("/", 7)));
                    v.infoshtml += '<br><a style="" href="'+ v.website +'" target="_blank">' + site + '</a>';
                }
                v.infoshtml += '</div>';
            // }, 400);

            return v;          
        },
        setValue: function(v) {
            if(v.address)
                $('#pac-input-' + this.elementID).val(v.address);
            if(v.latLongGoogle) {
                setTimeout(() => {
                    if (infowindow)
                        infowindow.close();
                    if (v.latLongGoogle.lat != "" && v.latLongGoogle.lng != "") {
                        var latlng = new google.maps.LatLng(v.latLongGoogle.lat, v.latLongGoogle.lng);
                        if(map){
                            map.setCenter(latlng);
                            map.setZoom(17);
                        }
                    }
                    if(marker)
                        marker.setVisible(false);
                    if(marker && latlng){
                        marker.setPosition(latlng);
                        marker.setVisible(true);
                    }
                    if (v.infoshtml && infowindow)
                        infowindow.setContent(v.infoshtml);
                    if (infowindow)
                        infowindow.open(map, marker);
                }, 100);
            }
        },
        HTML: function() {
            var html = ''
            html += '<input id="pac-input-' + this.elementID + '" class="controls-map-google searchbar" type="text" placeholder="Entrez votre adresse" onkeyup="$.squaresVerifyInput(\'text\', \'pac-input-'+ this.elementID +'\')">'

            html += '<div id="'+this.elementID+'" style="width:100%;height:300px">'
            html += '</div>'
            html += '<script>'
            html += 'function initMap() {'
            html += '   map = new google.maps.Map(document.getElementById("' + this.elementID + '"), {'
            html += '       zoom: 10,'
            html += '       center: {lat: 48.862725, lng: 2.287592000000018},'
            html += '   });'
            html += '   var input = /** @type {!HTMLInputElement} */('
            html += '       document.getElementById("pac-input-' + this.elementID + '"));'
            html += '   var autocomplete = new google.maps.places.Autocomplete(input);'
            html += '   autocomplete.bindTo("bounds", map);'

            html += '   infowindow = new google.maps.InfoWindow();'
            html += '   marker = "";';
            html += '   marker = new google.maps.Marker({'
            html += '       map: map,'
            html += '       anchorPoint: new google.maps.Point(0, -29)'
            html += '   });'

            html += '   autocomplete.addListener("place_changed", function() {'
            html += '       infowindow.close();'
            html += '       marker.setVisible(false);'
            html += '       infoFromGoogle = autocomplete.getPlace();'
            html += '       if (!infoFromGoogle.geometry)'
            html += '           window.alert("No details available for input");'
            html += '       if (infoFromGoogle.geometry.viewport) {'
            html += '           map.fitBounds(infoFromGoogle.geometry.viewport);'
            html += '       } else {'
            html += '           map.setCenter(infoFromGoogle.geometry.location);'
            html += '           map.setZoom(17);'
            html += '       }'
            html += '       marker.setPosition(infoFromGoogle.geometry.location);'
            html += '       marker.setVisible(true);'

            html += '       var address = "";'
            html += '       if (infoFromGoogle.address_components) {'
            html += '            address = ['
            html += '               (infoFromGoogle.address_components[0] && infoFromGoogle.address_components[0].short_name || ""),'
            html += '               (infoFromGoogle.address_components[1] && infoFromGoogle.address_components[1].short_name || ""),'
            html += '               (infoFromGoogle.address_components[2] && infoFromGoogle.address_components[2].short_name || ""),'
            html += '            ].join(" ");'
            html += '       }'
            html += '       infowindow.setContent(\'<div><strong>\' + infoFromGoogle.name + \'</strong><br>\' + address);'
            html += '       infowindow.open(map, marker);'
            html += '   });'
            html += '}'
            html += 'initMap();'
            html += '</script>'
            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#pac-input-' + this.elementID, function() {
                setTimeout(() => {
                    self.valueChanged();
                }, 500);
            });
        }
    });
    /*-- Controls Site text OK --*/ 
    $.squaresRegisterControl({
        type: 'Site',
        customLabel: true,
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
            var v = {
                url: '',
                texte: '',
            }
            v.url =  $('#site-url-' + this.elementID).val();
            v.texte =  $('#site-texte-' + this.elementID).val();
            
            return v;
        },
        setValue: function(v) {
            $('#site-url-' + this.elementID).val(v.url);
            $('#site-texte-' + this.elementID).val(v.texte);
        },
        HTML: function() {
            var html = '';

            html += '<label for="'+ this.elementID +'">'+ this.name +'</label>';
            html += '<div id="' + this.elementID + '">'
            html += '   Url du site : <input style="margin-bottom: 5px;" onkeyup="$.squaresVerifyInput(\'url\', \'site-url-'+ this.elementID +'\')" type="text" id="site-url-'+ this.elementID +'" placeholder="Entrez l\'url de votre site">';
            html += '   Texte ou nom du site &nbsp;'
            html += '   <i>(longueur max 15 caractères)</i>'
            html += '   <input onkeyup="$.squaresVerifyInput(\'text\', \'site-texte-'+ this.elementID +'\')" type="text" id="site-texte-'+ this.elementID +'" maxlength="15" placeholder="Entrez un texte">';
            html += '</div>';
            return html;
            // return '<input type="text" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;

            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /*-- Controls Reseaux OK --*/ 
    $.squaresRegisterControl({
        type: 'Reseaux',
        customLabel: true,
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
            var v = {
                facebook: {
                    check: 0,
                    url: '',
                    color: '',
                },
                twitter: {
                    check: 0,
                    url: '',
                    color: '',
                },
                google: {
                    check: 0,
                    url: '',
                    color: '',
                },
                snapchat: {
                    check: 0,
                    url: '',
                    color: '',
                },
                instagram: {
                    check: 0,
                    url: '',
                    color: '',
                },
                pinterest: {
                    check: 0,
                    url: '',
                    color: '',
                },
                vimeo: {
                    check: 0,
                    url: '',
                    color: '',
                },
                tumblr: {
                    check: 0,
                    url: '',
                    color: '',
                },
                linkedin: {
                    check: 0,
                    url: '',
                    color: '',
                },
                youtube: {
                    check: 0,
                    url: '',
                    color: '',
                },
            }
            /*-- Text inside input */
            v.facebook.url = $('#text-facebook-f-' + this.elementID).val();
            v.twitter.url = $('#text-twitter-' + this.elementID).val();
            v.google.url = $('#text-google-' + this.elementID).val();
            v.snapchat.url = $('#text-snapchat-ghost-' + this.elementID).val();
            v.instagram.url = $('#text-instagram-' + this.elementID).val();
            v.vimeo.url = $('#text-vimeo-' + this.elementID).val();
            v.tumblr.url = $('#text-tumblr-' + this.elementID).val();
            v.linkedin.url = $('#text-linkedin-' + this.elementID).val();
            v.youtube.url = $('#text-youtube-' + this.elementID).val();
            v.pinterest.url = $('#text-pinterest-' + this.elementID).val();

            /*-- Check inside input */
            $('#check-facebook-f-' + this.elementID).get(0).checked === true ? v.facebook.check = 1 : v.facebook.check = 0;
            $('#check-twitter-' + this.elementID).get(0).checked === true ? v.twitter.check = 1 : v.twitter.check = 0;
            $('#check-google-' + this.elementID).get(0).checked === true  ? v.google.check = 1 : v.google.check = 0;
            $('#check-snapchat-ghost-' + this.elementID).get(0).checked === true ? v.snapchat.check = 1 : v.snapchat.check = 0;
            $('#check-instagram-' + this.elementID).get(0).checked === true ? v.instagram.check = 1 : v.instagram.check = 0;
            $('#check-vimeo-' + this.elementID).get(0).checked === true ? v.vimeo.check = 1 : v.vimeo.check = 0;
            $('#check-tumblr-' + this.elementID).get(0).checked === true ? v.tumblr.check = 1 : v.tumblr.check = 0;
            $('#check-linkedin-' + this.elementID).get(0).checked === true ? v.linkedin.check = 1 : v.linkedin.check = 0;
            $('#check-youtube-' + this.elementID).get(0).checked === true ? v.youtube.check = 1 : v.youtube.check = 0;
            $('#check-pinterest-' + this.elementID).get(0).checked === true  ? v.pinterest.check = 1 : v.pinterest.check = 0;

            /*-- Color inside input */
            v.facebook.color = $('#color-facebook-f-' + this.elementID).val();
            v.twitter.color = $('#color-twitter-' + this.elementID).val();
            v.google.color = $('#color-google-' + this.elementID).val();
            v.snapchat.color = $('#color-snapchat-ghost-' + this.elementID).val();
            v.instagram.color = $('#color-instagram-' + this.elementID).val();
            v.vimeo.color = $('#color-vimeo-' + this.elementID).val();
            v.tumblr.color = $('#color-tumblr-' + this.elementID).val();
            v.linkedin.color = $('#color-linkedin-' + this.elementID).val();
            v.youtube.color = $('#color-youtube-' + this.elementID).val();
            v.pinterest.color = $('#color-pinterest-' + this.elementID).val();

            /*-- Color ICON  */
            $('#icon-facebook-f-' + this.elementID).css("color",  $('#color-facebook-f-' + this.elementID).val());
            $('#icon-twitter-' + this.elementID).css("color", $('#color-twitter-' + this.elementID).val());
            $('#icon-google-' + this.elementID).css("color", $('#color-google-' + this.elementID).val());
            $('#icon-snapchat-ghost-' + this.elementID).css("color",  $('#color-snapchat-ghost-' + this.elementID).val());
            $('#icon-instagram-' + this.elementID).css("color",  $('#color-instagram-' + this.elementID).val());
            $('#icon-vimeo-' + this.elementID).css("color", $('#color-vimeo-' + this.elementID).val());
            $('#icon-tumblr-' + this.elementID).css("color",  $('#color-tumblr-' + this.elementID).val());
            $('#icon-linkedin-' + this.elementID).css("color", $('#color-linkedin-' + this.elementID).val());
            $('#icon-youtube-' + this.elementID).css("color", $('#color-youtube-' + this.elementID).val());
            $('#icon-pinterest-' + this.elementID).css("color",  $('#color-pinterest-' + this.elementID).val());
            return v;
        },
        setValue: function(v) {
            /*-- Text inside input */
            $('#text-facebook-f-' + this.elementID).val(v.facebook.url);
            $('#text-twitter-' + this.elementID).val(v.twitter.url);
            $('#text-google-' + this.elementID).val(v.google.url);
            $('#text-snapchat-ghost-' + this.elementID).val(v.snapchat.url);
            $('#text-instagram-' + this.elementID).val(v.instagram.url);
            $('#text-vimeo-' + this.elementID).val(v.vimeo.url);
            $('#text-tumblr-' + this.elementID).val(v.tumblr.url);
            $('#text-linkedin-' + this.elementID).val(v.linkedin.url);
            $('#text-youtube-' + this.elementID).val(v.youtube.url);
            $('#text-pinterest-' + this.elementID).val(v.pinterest.url);

            /*-- Check inside input */
            v.facebook.check === 1 ? $('#check-facebook-f-' + this.elementID).get(0).checked = true : $('#check-facebook-f-' + this.elementID).get(0).checked = false;
            v.twitter.check === 1 ? $('#check-twitter-' + this.elementID).get(0).checked = true : $('#check-twitter-' + this.elementID).get(0).checked = false;
            v.google.check === 1 ? $('#check-google-' + this.elementID).get(0).checked = true : $('#check-google-' + this.elementID).get(0).checked = false;
            v.snapchat.check === 1 ? $('#check-snapchat-ghost-' + this.elementID).get(0).checked = true : $('#check-snapchat-ghost-' + this.elementID).get(0).checked = false;
            v.instagram.check === 1 ? $('#check-instagram-' + this.elementID).get(0).checked = true : $('#check-instagram-' + this.elementID).get(0).checked = false;
            v.vimeo.check === 1 ? $('#check-vimeo-' + this.elementID).get(0).checked = true : $('#check-vimeo-' + this.elementID).get(0).checked = false;
            v.tumblr.check === 1 ? $('#check-tumblr-' + this.elementID).get(0).checked = true : $('#check-tumblr-' + this.elementID).get(0).checked = false;
            v.linkedin.check === 1 ? $('#check-linkedin-' + this.elementID).get(0).checked = true : $('#check-linkedin-' + this.elementID).get(0).checked = false;
            v.youtube.check === 1 ? $('#check-youtube-' + this.elementID).get(0).checked = true : $('#check-youtube-' + this.elementID).get(0).checked = false;
            v.pinterest.check === 1 ? $('#check-pinterest-' + this.elementID).get(0).checked = true : $('#check-pinterest-' + this.elementID).get(0).checked = false;

            /*-- Color inside input */
            $('#color-facebook-f-' + this.elementID).val(v.facebook.color);
            $('#color-twitter-' + this.elementID).val(v.twitter.color);
            $('#color-google-' + this.elementID).val(v.google.color);
            $('#color-snapchat-ghost-' + this.elementID).val(v.snapchat.color);
            $('#color-instagram-' + this.elementID).val(v.instagram.color);
            $('#color-vimeo-' + this.elementID).val(v.vimeo.color);
            $('#color-tumblr-' + this.elementID).val(v.tumblr.color);
            $('#color-linkedin-' + this.elementID).val(v.linkedin.color);
            $('#color-youtube-' + this.elementID).val(v.youtube.color);
            $('#color-pinterest-' + this.elementID).val(v.pinterest.color);

            /*-- Color ICON  */
            $('#icon-facebook-f-' + this.elementID).css("color",  $('#color-facebook-f-' + this.elementID).val());
            $('#icon-twitter-' + this.elementID).css("color", $('#color-twitter-' + this.elementID).val());
            $('#icon-google-' + this.elementID).css("color", $('#color-google-' + this.elementID).val());
            $('#icon-snapchat-ghost-' + this.elementID).css("color",  $('#color-snapchat-ghost-' + this.elementID).val());
            $('#icon-instagram-' + this.elementID).css("color",  $('#color-instagram-' + this.elementID).val());
            $('#icon-vimeo-' + this.elementID).css("color", $('#color-vimeo-' + this.elementID).val());
            $('#icon-tumblr-' + this.elementID).css("color",  $('#color-tumblr-' + this.elementID).val());
            $('#icon-linkedin-' + this.elementID).css("color", $('#color-linkedin-' + this.elementID).val());
            $('#icon-youtube-' + this.elementID).css("color", $('#color-youtube-' + this.elementID).val());
            $('#icon-pinterest-' + this.elementID).css("color",  $('#color-pinterest-' + this.elementID).val());
        },
        HTML: function() {
            var html = '';

            var styleGlobal = "padding: 4px; align-items: center;";
            var styleIcon = "font-size: 25px; margin-left: 8px; margin-right: 1px; width: 25px; text-align:center; ";
            var styleColor = "width: 40px; height: 40px; border: 0px; margin: 0px;"
            var styleTexte = "width: 250px; margin-left: 5px;";

            html += '<label for="'+ this.elementID +'">'+ this.name +'</label>';
            html += '<div id="' + this.elementID + '">'

            for (var k = 0 ; k < this.options.name.length; k++){
                html += '<div id="' + this.elementID + '-' + k + '" class="sq-all-date">';
                html += '   <div class="sq-grid-tarifs-control">';
                html += '       <div class="sq-select-tarifs" style="'+ styleGlobal + '">';
                html += '           <input type="checkbox" id="check-' + this.options.name[k] + '-' + this.elementID + '">';
                html += '           <i id="icon-' + this.options.name[k] + '-' + this.elementID + '" style="'+ styleIcon + '" class="fab fa-'+ this.options.name[k]+ '"></i>'
                html += '           <input style="' + styleColor + '" type="color" id="color-' + this.options.name[k] + '-' + this.elementID + '">';
                html += '           <input style="'+ styleTexte + '" type="text" id="text-' + this.options.name[k] + '-' + this.elementID + '" onkeyup="$.squaresVerifyInput(\'url\', \'text-' + this.options.name[k] + '-' + this.elementID + '\')" placeholder="' + this.options.url[k] + '">';
                html += '       </div>'
                html += '   </div>'
                html += '</div>'
            }

            html += '</div>'
            return html;
        },
        init: function() {
            var self = this;

            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /*-- Controls Acces  --*/ 
    $.squaresRegisterControl({
        type: 'accessibility',
        customLabel: true,
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
            var v = {
                handicap: {
                    check: 0,
                    color: "",
                },
                sourd: {
                    check: 0,
                    color: "",
                },
                audiodescritpion: {
                    check: 0,
                    color: "",
                },
                closecaption: {
                    check: 0,
                    color: "",
                },
                allacces: {
                    check: 0,
                    color: "",
                },
                aveugle: {
                    check: 0,
                    color: "",
                },
                braille: {
                    check: 0,
                    color: "",
                },
                frenchsign: {
                    check: 0,
                    color: "",
                },
                americansign: {
                    check: 0,
                    color: "",
                },
            }

            /*-- Check inside input */
            $('#check-wheelchair-' + this.elementID).get(0).checked === true ? v.handicap.check = 1 : v.handicap.check = 0;
            $('#check-deaf-' + this.elementID).get(0).checked === true ? v.sourd.check = 1 : v.sourd.check = 0;
            $('#check-audio-description-' + this.elementID).get(0).checked === true  ? v.audiodescritpion.check = 1 : v.audiodescritpion.check = 0;
            $('#check-closed-captioning-' + this.elementID).get(0).checked === true ? v.closecaption.check = 1 : v.closecaption.check = 0;
            $('#check-universal-access-' + this.elementID).get(0).checked === true ? v.allacces.check = 1 : v.allacces.check = 0;
            $('#check-blind-' + this.elementID).get(0).checked === true ? v.aveugle.check = 1 : v.aveugle.check = 0;
            $('#check-braille-' + this.elementID).get(0).checked === true ? v.braille.check = 1 : v.braille.check = 0;
            $('#check-sign-language-' + this.elementID).get(0).checked === true ? v.frenchsign.check = 1 : v.frenchsign.check = 0;
            $('#check-american-sign-language-interpreting-' + this.elementID).get(0).checked === true ? v.americansign.check = 1 : v.americansign.check = 0;

            /*-- Color inside input */
            v.handicap.color = $('#color-wheelchair-' + this.elementID).val();
            v.sourd.color = $('#color-deaf-' + this.elementID).val();
            v.audiodescritpion.color = $('#color-audio-description-' + this.elementID).val();
            v.closecaption.color = $('#color-closed-captioning-' + this.elementID).val();
            v.allacces.color = $('#color-universal-access-' + this.elementID).val();
            v.aveugle.color = $('#color-blind-' + this.elementID).val();
            v.braille.color = $('#color-braille-' + this.elementID).val();
            v.frenchsign.color = $('#color-sign-language-' + this.elementID).val();
            v.americansign.color = $('#color-american-sign-language-interpreting-' + this.elementID).val();

            /*-- Color ICON  */
            $('#icon-wheelchair-' + this.elementID).css("color",  $('#color-wheelchair-' + this.elementID).val());
            $('#icon-deaf-' + this.elementID).css("color", $('#color-deaf-' + this.elementID).val());
            $('#icon-audio-description-' + this.elementID).css("color", $('#color-audio-description-' + this.elementID).val());
            $('#icon-closed-captioning-' + this.elementID).css("color",  $('#color-closed-captioning-' + this.elementID).val());
            $('#icon-universal-access-' + this.elementID).css("color",  $('#color-universal-access-' + this.elementID).val());
            $('#icon-blind-' + this.elementID).css("color", $('#color-blind-' + this.elementID).val());
            $('#icon-braille-' + this.elementID).css("color",  $('#color-braille-' + this.elementID).val());
            $('#icon-sign-language-' + this.elementID).css("color", $('#color-sign-language-' + this.elementID).val());
            $('#icon-american-sign-language-interpreting-' + this.elementID).css("color", $('#color-american-sign-language-interpreting-' + this.elementID).val());
            return v;
        },
        setValue: function(v) {
            /*-- Check inside input */
            v.handicap.check === 1 ? $('#check-wheelchair-' + this.elementID).get(0).checked = true : $('#check-wheelchair-' + this.elementID).get(0).checked = false;
            v.sourd.check === 1 ? $('#check-deaf-' + this.elementID).get(0).checked = true : $('#check-deaf-' + this.elementID).get(0).checked = false;
            v.audiodescritpion.check === 1 ? $('#check-audio-description-' + this.elementID).get(0).checked = true : $('#check-audio-description-' + this.elementID).get(0).checked = false;
            v.closecaption.check === 1 ? $('#check-closed-captioning-' + this.elementID).get(0).checked = true : $('#check-closed-captioning-' + this.elementID).get(0).checked = false;
            v.allacces.check === 1 ? $('#check-universal-access-' + this.elementID).get(0).checked = true : $('#check-universal-access-' + this.elementID).get(0).checked = false;
            v.aveugle.check === 1 ? $('#check-blind-' + this.elementID).get(0).checked = true : $('#check-blind-' + this.elementID).get(0).checked = false;
            v.braille.check === 1 ? $('#check-braille-' + this.elementID).get(0).checked = true : $('#check-braille-' + this.elementID).get(0).checked = false;
            v.frenchsign.check === 1 ? $('#check-sign-language-' + this.elementID).get(0).checked = true : $('#check-sign-language-' + this.elementID).get(0).checked = false;
            v.americansign.check === 1 ? $('#check-american-sign-language-interpreting-' + this.elementID).get(0).checked = true : $('#check-american-sign-language-interpreting-' + this.elementID).get(0).checked = false;

            /*-- Color inside input */
            $('#color-wheelchair-' + this.elementID).val(v.handicap.color);
            $('#color-deaf-' + this.elementID).val(v.sourd.color);
            $('#color-audio-description-' + this.elementID).val(v.audiodescritpion.color);
            $('#color-closed-captioning-' + this.elementID).val(v.closecaption.color);
            $('#color-universal-access-' + this.elementID).val(v.allacces.color);
            $('#color-blind-' + this.elementID).val(v.aveugle.color);
            $('#color-braille-' + this.elementID).val(v.braille.color);
            $('#color-sign-language-' + this.elementID).val(v.frenchsign.color);
            $('#color-american-sign-language-interpreting-' + this.elementID).val(v.americansign.color);

            /*-- Color ICON  */
            $('#icon-wheelchair-' + this.elementID).css("color",  $('#color-wheelchair-' + this.elementID).val());
            $('#icon-deaf-' + this.elementID).css("color", $('#color-deaf-' + this.elementID).val());
            $('#icon-audio-description-' + this.elementID).css("color", $('#color-audio-description-' + this.elementID).val());
            $('#icon-closed-captioning-' + this.elementID).css("color",  $('#color-closed-captioning-' + this.elementID).val());
            $('#icon-universal-access-' + this.elementID).css("color",  $('#color-universal-access-' + this.elementID).val());
            $('#icon-blind-' + this.elementID).css("color", $('#color-blind-' + this.elementID).val());
            $('#icon-braille-' + this.elementID).css("color",  $('#color-braille-' + this.elementID).val());
            $('#icon-sign-language-' + this.elementID).css("color", $('#color-sign-language-' + this.elementID).val());
            $('#icon-american-sign-language-interpreting-' + this.elementID).css("color", $('#color-american-sign-language-interpreting-' + this.elementID).val());
        },
        HTML: function() {
            var html = '';

            var styleGlobal = "padding: 4px; align-items: center;";
            var styleIcon = "font-size: 25px; margin-left: 8px; margin-right: 10px; width: 25px; text-align:center; ";
            var styleColor = "width: 40px; height: 40px; border: 0px; margin: 0px;"
            var styleTexte = "width: 250px; margin-left: 5px;";

            html += '<label for="'+ this.elementID +'">'+ this.name +'</label>';
            html += '<div id="' + this.elementID + '">'

            for (var k = 0 ; k < this.options.icon.length; k++){
                html += '<div id="' + this.elementID + '-' + k + '" class="sq-all-date">';
                html += '   <div class="sq-grid-tarifs-control">';
                html += '       <div class="sq-select-tarifs" style="'+ styleGlobal + '">';
                html += '           <input type="checkbox" id="check-' + this.options.icon[k] + '-' + this.elementID + '">';
                html += '           <i id="icon-' + this.options.icon[k] + '-' + this.elementID + '" style="'+ styleIcon + '" class="fa fa-'+ this.options.icon[k]+ '"></i>'
                html += '           <input style="' + styleColor + '" type="color" id="color-' + this.options.icon[k] + '-' + this.elementID + '">';
                html += '           <span>' + this.options.text[k] + '</span>';
                html += '       </div>'
                html += '   </div>'
                html += '</div>'
            }

            html += '</div>'
            return html;
        },
        init: function() {
            var self = this;

            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /*-- Controls QUIZZ  --*/ 
    $.squaresRegisterControl({
        type: 'Quizz',
        customLabel: true,
        
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
            var v = {
                html: '',
                quizz: 0,
                title: '',
                quizzId: '',
                background: "",
                text: ""
            }

            // Get the all json code before set the html
            var code_json = JSON.parse($('#' + this.elementID).val().code_json);
            console.log(code_json);
            v.quizzId = $('#' + this.elementID).val()._id;
            v.title = $('#' + this.elementID).val().title;
            v.quizz =  $('#quizz-select-' + this.elementID).val();
            v.background = $('#background-' + this.elementID).val();
            v.text = $('#titre-' + this.elementID).val();
            /*--- !IMPORTANT ---*/
            /*--- probleme avec le path de l'image du quizz en attente d'une correction coté dev */
            if(code_json.media.params.file){
                v.html += '<div id="image-' + v.quizzId + '">'
                v.html += '     <img style="width:100%" src="http://195.154.34.247:8099/drupal/sites/default/files/h5p/content/' + code_json.nid + '/'+ code_json.media.params.file.path +'">'
                v.html += '</div>'
            }
            v.html += '<div id="question-' + v.quizzId + '" class="quizz-question">' + code_json.question + '</div>'
            v.html += '<div id="save-' + v.quizzId + '" style="display:none;">' + code_json.question + '</div>';
            v.html += '<div style="width:100%;">'
            v.html += '     <div class="row quizz-content">'
            for (var i = 0; i < code_json.answers.length; i++) {
                v.html += '     <div class="col-md-6 col-6 col-xs-6 col-sm-6 quizz-col">'
                v.html += '         <button data-back="' + v.background + '" data-question="' + v.quizzId + '" data-quizz="quizz-'+ v.quizzId + '-' + i + '" class="btn quizz-button active" data-resp="'+ code_json.answers[i].correct + '"role="button" aria-pressed="true" style="background-color:'+ v.background +'; color:'+ v.text +'">'+ code_json.answers[i].text +'</button>'
                v.html += '     </div>'
                v.html += '     <div style="display:none" class="quizz-response" id="quizz-'+ v.quizzId + '-' + i + '">'
                v.html +=           code_json.answers[i].tipsAndFeedback.chosenFeedback;                                
                v.html += '     </div>'
            }
            v.html += '         <button id="button-' + v.quizzId + '" class="btn btn-primary quizz-button-again quizz-button-check">' + code_json.UI.tryAgainButton + '</button>'
            v.html += '     </div>'
            v.html += '</div>'

            return v;
        },
        setValue: function(v) {
            $('#quizz-select-' + this.elementID).val(v.quizz);
            $('#background-' + this.elementID).val(v.background);
            $('#titre-' + this.elementID).val(v.text);
            if(allquizz && v.quizz){
                var selectQuizz = allquizz[v.quizz]
                this.HTML(1);
                $('#' + this.elementID).val(selectQuizz);
            }
        },
        HTML: function(bool) {
            var html = '';

            html += '<label for="'+ this.elementID +'">'+ this.name +'</label>';
            html += '<div id="' + this.elementID + '">'
            html += '   <select id="quizz-select-'+ this.elementID +'">';
            if (allquizz){
                for (var i=0; i < allquizz.length ; i++) {
                    html += '<option value="'+ i +'">'+ allquizz[i].title +'</option>';
                }
            }

            if(bool){
                // Set value to get in changed if need 
                // $('#' + this.elementID).val(code_json);
            }

            html += '   </select>';
            html += '   <div class="sq-color-button-multi" style="display: flex; ">'
            html += '      <input type="color" id="background-'+ this.elementID +'">';
            html += '       <label for="background-'+ this.elementID +'">Couleur des boutton</label>'
            html += '   </div>'
            html += '   <div class="sq-color-button-multi" style="display: flex; ">'
            html += '       <input type="color" id="titre-'+ this.elementID +'">';
            html += '       <label for="titre-'+ this.elementID +'">Couleur du texte des boutons</label>'
            html += '   </div>'
            html += '</div>'
            return html;
        },
        init: function() {
            console.log("INIT");
            //Call server to get all
            $.wcpGetQuizzAllByUser( $.wcpGetEmailUser(), "http://195.154.34.247:38000/quiz/all", $.wcpCallbackFromServer);
            
            var self = this;

            $(document).on('change', '#' + this.elementID, function() {
                var select = $('#quizz-select-' + self.elementID).val();
                if(allquizz && select){
                    var selectQuizz = allquizz[select]
                    $('#' + self.elementID).val(selectQuizz);
                    // self.HTML(1);
                }
                self.valueChanged();
            });
            // $(document).on('change', '#quizz-select-' + this.elementID, function() {
            //     self.valueChanged();
            // });
        }
    });
    /*---------------------- TEXT INPUT CONTROLS ----------------------*/
    /*-----------------------------------------------------------------*/
    /*-- Text Input --*/
    $.squaresRegisterControl({
        type: 'text',
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            var html = '';
            if(this.options)
                html += '<i>(longueur max ' + this.options + ' caractères)</i>'
            html += '<input onkeyup="$.squaresVerifyInput(\'text\', \'' + this.elementID + '\')" type="text" id="'+ this.elementID +'" maxlength="' + this.options + '" placeholder="Rentrer votre texte">';
            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /*-- audio url input --*/
    $.squaresRegisterControl({
        type: 'audio-url',
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
            var v = {
                url: '',
                audio_id: ''
            }
            v.url = $('#' + this.elementID).val();
            v.audio_id = this.elementID;
            return v;
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v.url);
        },
        HTML: function() {
            var html = '';
            if(this.options)
                html += '<i>(longueur max ' + this.options + ' caractères)</i>'
            html += '<i>(Type d\'audio accepté .mp3, .wmp .....)</i>'
            html += '<input onkeyup="$.squaresVerifyInput(\'text\', \'' + this.elementID + '\')" type="text" id="'+ this.elementID +'" maxlength="' + this.options + '" placeholder="Rentrer l\'url de votre vidéo">';
            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /*-- video url input --*/
    $.squaresRegisterControl({
        type: 'video-url',
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
            var v = {
                url: '',
                video_id: ''
            }
            v.url = $('#' + this.elementID).val();
            v.video_id = this.elementID;
            return v;
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v.url);
        },
        HTML: function() {
            var html = '';
            if(this.options)
                html += '<i>(longueur max ' + this.options + ' caractères)</i>'
            html += '<i>(Type de vidéo accepté .mp4, .avi .webm .ovg .....)</i>'
            html += '<input onkeyup="$.squaresVerifyInput(\'text\', \'' + this.elementID + '\')" type="text" id="'+ this.elementID +'" maxlength="' + this.options + '" placeholder="Rentrer l\'url de votre vidéo">';
            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /*-- url Input OK --*/
    $.squaresRegisterControl({
        type: 'url',
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            var html = '';
            if(this.options)
                html += '<i>(longueur max ' + this.options + ' caractères)</i>'
            html += '<input onkeyup="$.squaresVerifyInput(\'url\', \'' + this.elementID + '\')" type="text" id="'+ this.elementID +'" maxlength="' + this.options + '" placeholder="Indiquez une url">';
            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /*-- Textarea use form specifique summernote --*/
    $.squaresRegisterControl({
        type: 'textarea',
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
            var str = $('#' + this.elementID).val();
            return str;
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function(v) {
            var html = ''
         
            html += '<textarea class="squareEditorTextarea" style="display:none" id="'+ this.elementID +'" rows="5"></textarea>';
            html += '<div class="squareEditorShowTextarea">' + v + '</div>'
            html += '<div style="display:block; float:right; margin-top:5px;">'
            html += '   <button style="background:#7757ce" id="editsummer-' + this.elementID + '" class="btn btn-primary btnedit" type="button">Editer</button>'
            html += '   <button style="background:#a3adb5" id="savesummer-' + this.elementID + '" class="btn btn-primary btnedit" type="button">Sauvegarder</button>'
            html += '</div>'
            return html;
        },
        init: function() {
            var self = this;
            $(document).on('click', '#editsummer-' + self.elementID, function() {
                $('#editsummer-' + self.elementID).css('background','#a3adb5')
                $('#savesummer-' + self.elementID).css('background','#7757ce')
                $('.squareEditorTextarea').summernote({
                    toolbar: [
                        ["color", ["color"]],
                        ["fontname", ["fontname"]],
                        ['fontsize', ['fontsize']],
                        ["font", ["bold", "italic", "underline"]],
                        ["para", ["ul", "ol", "paragraph"]],
                        ["insert", ["link", "picture"]],
                        ["view", ["fullscreen", "codeview", "help"]]
                    ],
                    focus: true,
                });
                $('.squareEditorShowTextarea').hide();
            });
            $(document).on('click', '#savesummer-' + self.elementID, function() {
                $('#editsummer-' + self.elementID).css('background','#7757ce')
                $('#savesummer-' + self.elementID).css('background','#a3adb5')
                var markup = $('.squareEditorTextarea').summernote('code');
                self.valueChanged();
                $('.squareEditorTextarea').summernote('destroy');
                $('.squareEditorTextarea').css('display','none');
                $('.squareEditorShowTextarea').show();
                $('.squareEditorShowTextarea').html(markup);
            });
            $(document).on('change', '#' + self.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /*-- Text Input --*/
    $.squaresRegisterControl({
        type: 'address',
        customLabel: true,

        getValue: function() {
            var v = {
                place: "",
                address: "",
                zipcode: "",
                city: "",
                tel: "",
                mail: "",
                infos :"",
                url: "",
                file:"",
            };

            v.place = $('#place-' + this.elementID).val();
            v.address = $('#address-' + this.elementID).val();
            v.zipcode = $('#zipcode-' + this.elementID).val();
            v.city = $('#city-' + this.elementID).val();
            v.mail = $('#email-' + this.elementID).val();
            v.tel = $('#tel-' + this.elementID).val();

            if($('#logo-' + this.elementID).val()){
                /*---- recup path from server and put it on url -----*/
                v.file = $('#logo-' + this.elementID).val().file;
                v.infos = $('#logo-' + this.elementID).val().resp;
                if(v.infos)
                    v.url = 'file:///Users/antoineanzieu/Downloads/CULTURMOOV/PLUGINIMP/ImageMapPro/server_node_test_upload/' + v.infos.path;
                

                /*---- display logo on controls show or hide -----*/
                if(v.url){
                    $('#logo-' + this.elementID).attr('src', v.url);
                    $('#logo-' + this.elementID).show();
                } else {
                    $('#logo-' + this.elementID).hide();
                }
            }
            return (v);
        },

        setValue: function(v) {
            var self = this;

            var html = '';

            html += '<div id="template-' + this.elementID + '" class="file-row">'
            html += '   <div class="dz-thumbnail">'
            html += '       <span class="preview"><img data-dz-thumbnail /></span>'
            html += '   </div>'
            html += '   <div class="dz-texte">'
            html += '       <p class="name" data-dz-name></p>'
            html += '       <p class="error text-danger" data-dz-errormessage></p>'
            html += '   </div>'
            html += '   <div class="dz-size">'
            html += '       <p class="size" data-dz-size></p>'
            html += '           <div id="total-progress" class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">'
            html += '               <div class="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress></div>'
            html += '           </div>'
            html += '   </div>'
            html += '   <div class="dz-btn">'
            /*-- ONLY FOR TEST WITH autoQueu False on Dropzone ----*/
            // html += '        <button class="btn btn-primary start">'
            // html += '            <i class="glyphicon glyphicon-upload"></i>'
            // html += '            <span>Start</span>'
            // html += '        </button>'
            html += '       <button data-dz-remove class="btn btn-danger delete">'
            html += '           <i class="glyphicon glyphicon-trash"></i>'
            // html += '            <span>Delete</span>'
            html += '       </button>'
            html += '   </div>'
            html += '</div>'

          
            $('#dropzone-' + self.elementID).dropzone({
                /*---- Set the url IMPORTANT -------------------------*/
                /*---- https://backend.culturmoov.com:8001/ ???----------*/
                /*---- need config post and get ----------------------*/
                url: "http://localhost:3000/upload", // Local test with server node and express
                thumbnailWidth: 80,
                thumbnailHeight: 80,
                acceptedFiles: 'image/*,',
                createImageThumbnails: true,
                method: 'post',
                // headers: {
                //     'x-csrf-token': document.querySelectorAll('meta[name=csrf-token]')[0].getAttributeNode('content').value,
                //   },
                parallelUploads: 1,
                /*---- Maximun Files 1 for logo ----------------------*/
                maxFiles: 1,
                previewTemplate: html,
                /*---- Make sure the files aren't queued until -------*/
                /*---- automatic added -------------------------------*/
                autoQueue: true,
                /*---- Define the container to display the previews --*/
                previewsContainer: '#previews-' + self.elementID,
                /*---- Define the element that should be used as -----*/
                /*---- click trigger to select files. ----------------*/
                clickable: '.fileinput-button-' + self.elementID,
                /*---- PERAPS NEED CONFIG INIT -----------------------*/
                /*---- to recup information from server --------------*/
                init: function () {
                    // if(v.file){
                    //     this.element.classList.add('dz-max-files-reached');
                    //     this.addFile.call(this, v.file);
                    //     // this.getAcceptedFiles();
                    //     v.file.previewElement.classList.add('dz-success');
                    //     v.file.previewElement.classList.add('dz-complete');
                    //     v.file.previewElement.classList.add('dz-processing');
                    //     v.file.previewElement.querySelectorAll("[data-dz-uploadprogress]")[0].style.width = "100%";
                    // }
                    /*---- To listen if maxfiles exceeded --*/
                    /*---- and show max-dz-upload ----------*/
                    // delete this.element.dropzone.element.dropzone;
                    this.on("maxfilesexceeded", function(file) {
                        $('#max-dz-upload-' + this.elementID).show();
                        this.removeFile(file);
                    });
                    /*---- To listen when file is on queue before --*/
                    /*---- click to start ONLY FOR DEV -------------*/
                    this.on("addedfile", function(file) {
                        if(this.element.classList.contains('dz-max-files-reached')){
                            this.removeFile(file);
                        }
                    /*---- Decomment this to test when ---------*/
                    /*---- autoQueue is false to test, ---------*/
                    //      file.previewElement.querySelector(".start").onclick = function() {
                    //          newDropzone.enqueueFile(file);
                    //      }
                    });
                    /*---- To listen when file is delete -------------*/
                    this.on("removedfile", function(file, resp) {
                        /*---- need to change and delete igm on server -------*/
                        // $.ajax({
                        //     url: 'http://localhost:3000/delete',
                        //     type : 'POST',
                        //     data: file.upload.uuid,
                        //     timeout: 5000,
                        //     error: console.log("ERROR") 
                        // });
                    });
                    /*---- To listen when file is upload on server ---*/
                    /*---- change val of input logo ------------------*/
                    this.on("success",  function( file, resp ) {
                        console.log("succes", resp);
                        var allInfos = {
                            file: "",
                            resp:""
                        };
                        allInfos.file = file;
                        allInfos.resp = resp;
                        /*--- change value and save of input --*/
                        $('#logo-'+ self.elementID).val(allInfos);
                        /*--- valueChange only if success --*/
                        self.valueChanged();
                    });
                 }
            });

            /*---- set all Value for informations -----*/
            $('#place-' + this.elementID).val(v.place);
            $('#address-' + this.elementID).val(v.address);
            $('#zipcode-' + this.elementID).val(v.zipcode);
            $('#city-' + this.elementID).val(v.city);
            $('#email-' + this.elementID).val(v.mail);
            $('#tel-' + this.elementID).val(v.tel);
            /*---- display logo on controls show or hide -----*/
            if (v.url) {
                $('#logo-' + this.elementID).attr('src', v.url);
                $('#logo-' + this.elementID).show();
            } else {
                $('#logo-' + this.elementID).hide();
            }
        },

        HTML: function() {
            var inputStyle = "margin-bottom: 5px;"

            var html = '';
            html += '<label for="'+ this.elementID +'">'+ this.name +'</label>';

            html += '<div id="'+this.elementID+'">'
            /*---- Name of place --------*/
            html +=     this.options[0];
            html += '   <input onkeyup="$.squaresVerifyInput(\'text\', \'place-' + this.elementID + '\')" type="text" id="place-'+ this.elementID +'" placeholder="Nom du lieu" style="'+ inputStyle + '">';
            /*---- Logo and Dropzone ----*/
            html +=     this.options[1];
            /*---- Start Dropzone -------*/
            html += '   <div>'
            html += '       <div id="dropzone-'+ this.elementID +'" style="margin-top: 5px;">'
            html += '           <button style="margin-right:5px; height: 45px;" id="add-' + this.elementID + '" class="btn btn-success fileinput-button-' + this.elementID +' dz-clickable">'
            html += '               <i class="glyphicon glyphicon-plus"></i>'
            html += '               <span>Ajouter</span>'
            html += '           </button>'
            html += '           <span id="max-dz-upload-'+ this.elementID + '" style="display:none;color:red">Maximun 1 image</span>';
            html += '           <img src="" id="logo-'+ this.elementID +'" style="max-height:45px; float:right;"></img>';
            html += '       </div>'
            html += '       <div class="dropzone-plugin" id="previews-'+this.elementID+'">'
        /*--- implement this on setValue because Dropzone error to previewTemplate change 
            html += '           <div id="template-' + this.elementID + '" class="file-row">'
            html += '               <div class="dz-thumbnail">'
            html += '                   <span class="preview"><img data-dz-thumbnail /></span>'
            html += '               </div>'
            html += '               <div class="dz-texte">'
            html += '                   <p class="name" data-dz-name></p>'
            html += '                   <p class="error text-danger" data-dz-errormessage></p>'
            html += '               </div>'
            html += '               <div class="dz-size">'
            html += '                   <p class="size" data-dz-size></p>'
            html += '                   <div id="total-progress" class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">'
            html += '                       <div class="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress></div>'
            html += '                   </div>'
            html += '               </div>'
            html += '               <div class="dz-btn">'
            html += '                    <button class="btn btn-primary start">'
            html += '                        <i class="glyphicon glyphicon-upload"></i>'
            html += '                        <span>Start</span>'
            html += '                    </button>'
            html += '                   <button data-dz-remove class="btn btn-danger delete">'
            html += '                       <i class="glyphicon glyphicon-trash"></i>'
            html += '                    <span>Delete</span>'
            html += '                   </button>'
            html += '               </div>'
            html += '           </div>'
        ----*/
            html += '       </div>'
            html += '   </div>'

            /*-- Need get URl from server to input value of image always dipslay none ----*/

            html +=     this.options[2];
            html += '   <input onkeyup="$.squaresVerifyInput(\'text\', \'address-' + this.elementID + '\')" type="text" id="address-'+ this.elementID +'" placeholder="Rentrer votre texte" style="'+ inputStyle + '">';
            html +=     this.options[3];
            html += '   <input onkeyup="$.squaresVerifyInput(\'text\', \'zipcode' + this.elementID + '\')" type="text" id="zipcode-'+ this.elementID +'" placeholder="Rentrer votre texte" style="'+ inputStyle + '">';
            html +=     this.options[4];
            html += '   <input onkeyup="$.squaresVerifyInput(\'text\', \'city-' + this.elementID + '\')" type="text" id="city-'+ this.elementID +'" placeholder="Rentrer votre texte" style="'+ inputStyle + '">';
            html +=     this.options[5];
            html += '   <input onkeyup="$.squaresVerifyInput(\'tel\', \'tel-' + this.elementID + '\')" type="tel" id="tel-'+ this.elementID +'" placeholder="01.30.24.56" style="'+ inputStyle + '">';
            html +=     this.options[6];
            html += '   <input onkeyup="$.squaresVerifyInput(\'email\', \'email-' + this.elementID + '\')" type="email" id="email-'+ this.elementID +'" placeholder="Rentrer votre texte" style="'+ inputStyle + '">';
            html += '</div>'
            
            return html;
        },
        init: function() {
            var self = this;

            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    /*-- Textarea with no style apply --*/
    $.squaresRegisterControl({
        type: 'textarea-iframe-with-id',
        getValue: function() {
            var v = {
                iframe: '',
                iframe_id: ''
            }
            v.iframe = $('#' + this.elementID).val();
            v.iframe_id = this.elementID;
            return v;
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v.iframe);
        },
        HTML: function() {
            return '<textarea id="'+ this.elementID +'" rows="5"></textarea>';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });

    /*---------------------- INPUT OTHER CONTROLS -------------------*/
    /*---------------------------------------------------------------*/
    /*-- Check Box --*/
    $.squaresRegisterControl({
        type: 'checkbox',
        getValue: function() {
            if ($('#' + this.elementID).get(0).checked == true) {
                return 1;
            } else {
                return 0;
            }
        },
        setValue: function(v) {
            if (parseInt(v, 10) === 1) {
                $('#' + this.elementID).get(0).checked = true;
            } else {
                $('#' + this.elementID).get(0).checked = false;
            }
        },
        HTML: function() {
            return '<input type="checkbox" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });

    /*-- Multi color OK --*/
    $.squaresRegisterControl({
        type: 'color-multi',
        getValue: function() {
            var v = {
                background:"",
                text:"",
            }
            v.background = $('#background-' + this.elementID).val();
            v.text = $('#titre-' + this.elementID).val();
            
            return v;
        },
        setValue: function(v) {
            $('#background-' + this.elementID).val(v.background);
            $('#titre-' + this.elementID).val(v.text);
        },
        HTML: function() {
            var html = '';
            
            html += '<div id="' + this.elementID + '">'
            if (this.options === 1) {
                html += '<div class="sq-color-button-multi" style="display: flex; ">'
                html += '   <input type="color" id="background-'+ this.elementID +'">';
                html += '   <label for="background-'+ this.elementID +'">Couleur du bouton</label>'
                html += '</div>'
            }
            html += '<div class="sq-color-button-multi" style="display: flex; ">'
            html += '   <input type="color" id="titre-'+ this.elementID +'">';
            html += '   <label for="titre-'+ this.elementID +'">Couleur du texte</label>'
            html += '</div>'
            html += '</div>'            

            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });

    /*-- Color --*/
    $.squaresRegisterControl({
        type: 'color',
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            return '<input type="color" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });

    /*-- Select --*/
    $.squaresRegisterControl({
        type: 'select',
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            var html = '';

            html += '<select id="'+ this.elementID +'">';

            for (var i=0; i<this.options.length; i++) {
                html += '<option value="'+ this.options[i] +'">'+ this.options[i] +'</option>';
            }

            html += '</select>';

            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });

    /*---------------------- BOX GRID CONTROLS ----------------------*/
    /*---------------------------------------------------------------*/
    /*-- Box Model --*/
    $.squaresRegisterControl({
        type: 'box model',
        getValue: function() {
            return {
                margin: {
                    top: parseInt($('#sq-element-option-boxmodel-margin-top').val(), 10),
                    bottom: parseInt($('#sq-element-option-boxmodel-margin-bottom').val(), 10),
                    left: parseInt($('#sq-element-option-boxmodel-margin-left').val(), 10),
                    right: parseInt($('#sq-element-option-boxmodel-margin-right').val(), 10)
                },
                padding: {
                    top: parseInt($('#sq-element-option-boxmodel-padding-top').val(), 10),
                    bottom: parseInt($('#sq-element-option-boxmodel-padding-bottom').val(), 10),
                    left: parseInt($('#sq-element-option-boxmodel-padding-left').val(), 10),
                    right: parseInt($('#sq-element-option-boxmodel-padding-right').val(), 10)
                }
            }
        },
        setValue: function(v) {
            $('#sq-element-option-boxmodel-margin-top').val(this._value.margin.top);
            $('#sq-element-option-boxmodel-margin-bottom').val(this._value.margin.bottom);
            $('#sq-element-option-boxmodel-margin-left').val(this._value.margin.left);
            $('#sq-element-option-boxmodel-margin-right').val(this._value.margin.right);

            $('#sq-element-option-boxmodel-padding-top').val(this._value.padding.top);
            $('#sq-element-option-boxmodel-padding-bottom').val(this._value.padding.bottom);
            $('#sq-element-option-boxmodel-padding-left').val(this._value.padding.left);
            $('#sq-element-option-boxmodel-padding-right').val(this._value.padding.right);
        },
        HTML: function() {
            var html = '';

            html += '<div class="sq-boxmodel-margin" id="'+ this.elementID +'">';
            html += '   <div id="sq-boxmodel-label-margin">margin</div>';
            html += '   <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-margin-top">';
            html += '   <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-margin-bottom">';
            html += '   <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-margin-left">';
            html += '   <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-margin-right">';
            html += '   <div class="sq-boxmodel-padding">';
            html += '       <div id="sq-boxmodel-label-padding">padding</div>';
            html += '       <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-padding-top">';
            html += '       <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-padding-bottom">';
            html += '       <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-padding-left">';
            html += '       <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-padding-right">';
            html += '   </div>';
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID + ' input', function() {
                self.valueChanged();
            });
        }
    });

    /*-- Grid System --*/
    $.squaresRegisterControl({
        type: 'grid system',
        getValue: function() {
            // tmp
            var res = {
                xs: {
                    use: 1,
                    class: 'sq-col-xs-1',
                    visible: 1
                },
                sm: {
                    use: 1,
                    class: 'sq-col-sm-1',
                    visible: 1
                },
                md: {
                    use: 1,
                    class: 'sq-col-md-1',
                    visible: 1
                },
                lg: {
                    use: 1,
                    class: 'sq-col-lg-1',
                    visible: 1
                },
            };

            var root = $('#' + this.elementID);

            // XS ---------
            var xsGroup = root.find('.sq-grid-system-control-res-group-xs');

            // Use
            if (xsGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked) {
                res.xs.use = 1;
            } else {
                res.xs.use = 0;
            }

            // Class
            res.xs.class = xsGroup.find('.sq-grid-system-control-select-colspan').val();

            // Visible
            if (xsGroup.find('.sq-grid-system-control-visible').hasClass('sq-grid-system-control-visible-not')) {
                res.xs.visible = 0;
            } else {
                res.xs.visible = 1;
            }

            // SM ---------
            var smGroup = root.find('.sq-grid-system-control-res-group-sm');

            // Use
            if (smGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked) {
                res.sm.use = 1;
            } else {
                res.sm.use = 0;
            }

            // Class
            res.sm.class = smGroup.find('.sq-grid-system-control-select-colspan').val();

            // Visible
            if (smGroup.find('.sq-grid-system-control-visible').hasClass('sq-grid-system-control-visible-not')) {
                res.sm.visible = 0;
            } else {
                res.sm.visible = 1;
            }

            // MD ---------
            var mdGroup = root.find('.sq-grid-system-control-res-group-md');

            // Use
            if (mdGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked) {
                res.md.use = 1;
            } else {
                res.md.use = 0;
            }

            // Class
            res.md.class = mdGroup.find('.sq-grid-system-control-select-colspan').val();

            // Visible
            if (mdGroup.find('.sq-grid-system-control-visible').hasClass('sq-grid-system-control-visible-not')) {
                res.md.visible = 0;
            } else {
                res.md.visible = 1;
            }

            // LG ---------
            var lgGroup = root.find('.sq-grid-system-control-res-group-lg');

            // Use
            if (lgGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked) {
                res.lg.use = 1;
            } else {
                res.lg.use = 0;
            }

            // Class
            res.lg.class = lgGroup.find('.sq-grid-system-control-select-colspan').val();

            // Visible
            if (lgGroup.find('.sq-grid-system-control-visible').hasClass('sq-grid-system-control-visible-not')) {
                res.lg.visible = 0;
            } else {
                res.lg.visible = 1;
            }

            return res;
        },
        setValue: function(v) {
            var root = $('#' + this.elementID);

            // XS ---------
            var xsGroup = root.find('.sq-grid-system-control-res-group-xs');

            // Use
            if (parseInt(v.xs.use, 10) == 1) {
                xsGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = true;
                xsGroup.find('select').removeAttr('disabled');
                xsGroup.find('.sq-grid-system-control-visible').removeClass('sq-control-disabled');
            } else {
                xsGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = false;
                xsGroup.find('select').attr('disabled', 'disabled');
                xsGroup.find('.sq-grid-system-control-visible').addClass('sq-control-disabled');
            }

            // Class
            xsGroup.find('.sq-grid-system-control-select-colspan').val(v.xs.class);

            // Visible
            if (parseInt(v.xs.visible, 10) == 1) {
                xsGroup.find('.sq-grid-system-control-visible').removeClass('sq-grid-system-control-visible-not');
            } else {
                xsGroup.find('.sq-grid-system-control-visible').addClass('sq-grid-system-control-visible-not');
            }

            // SM ---------
            var smGroup = root.find('.sq-grid-system-control-res-group-sm');

            // Use
            if (parseInt(v.sm.use, 10) == 1) {
                smGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = true;
                smGroup.find('select').removeAttr('disabled');
                smGroup.find('.sq-grid-system-control-visible').removeClass('sq-control-disabled');
            } else {
                smGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = false;
                smGroup.find('select').attr('disabled', 'disabled');
                smGroup.find('.sq-grid-system-control-visible').addClass('sq-control-disabled');
            }

            // Class
            smGroup.find('.sq-grid-system-control-select-colspan').val(v.sm.class);

            // Visible
            if (parseInt(v.sm.visible, 10) == 1) {
                smGroup.find('.sq-grid-system-control-visible').removeClass('sq-grid-system-control-visible-not');
            } else {
                smGroup.find('.sq-grid-system-control-visible').addClass('sq-grid-system-control-visible-not');
            }

            // MD ---------
            var mdGroup = root.find('.sq-grid-system-control-res-group-md');

            // Use
            if (parseInt(v.md.use, 10) == 1) {
                mdGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = true;
                mdGroup.find('select').removeAttr('disabled');
                mdGroup.find('.sq-grid-system-control-visible').removeClass('sq-control-disabled');
            } else {
                mdGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = false;
                mdGroup.find('select').attr('disabled', 'disabled');
                mdGroup.find('.sq-grid-system-control-visible').addClass('sq-control-disabled');
            }

            // Class
            mdGroup.find('.sq-grid-system-control-select-colspan').val(v.md.class);

            // Visible
            if (parseInt(v.md.visible, 10) == 1) {
                mdGroup.find('.sq-grid-system-control-visible').removeClass('sq-grid-system-control-visible-not');
            } else {
                mdGroup.find('.sq-grid-system-control-visible').addClass('sq-grid-system-control-visible-not');
            }

            // LG ---------
            var lgGroup = root.find('.sq-grid-system-control-res-group-lg');

            // Use
            if (parseInt(v.lg.use, 10) == 1) {
                lgGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = true;
                lgGroup.find('select').removeAttr('disabled');
                lgGroup.find('.sq-grid-system-control-visible').removeClass('sq-control-disabled');
            } else {
                lgGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = false;
                lgGroup.find('select').attr('disabled', 'disabled');
                lgGroup.find('.sq-grid-system-control-visible').addClass('sq-control-disabled');
            }

            // Class
            lgGroup.find('.sq-grid-system-control-select-colspan').val(v.lg.class);

            // Visible
            if (parseInt(v.lg.visible, 10) == 1) {
                lgGroup.find('.sq-grid-system-control-visible').removeClass('sq-grid-system-control-visible-not');
            } else {
                lgGroup.find('.sq-grid-system-control-visible').addClass('sq-grid-system-control-visible-not');
            }
        },
        HTML: function() {
            var html = '';

            html += '<div class="sq-grid-system-control" id="'+ this.elementID +'">';

            // LG
            html += '   <div class="sq-grid-system-control-res-group sq-grid-system-control-res-group-lg">';
            html += '       <div class="sq-grid-system-control-res-name">LG</div>';
            html += '       <div class="sq-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="sq-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-colspan">';
            html += '           <select class="sq-grid-system-control-select-colspan">';
            html += '               <option value="sq-col-lg-1">1 Column</option>';
            html += '               <option value="sq-col-lg-2">2 Columns</option>';
            html += '               <option value="sq-col-lg-3">3 Columns</option>';
            html += '               <option value="sq-col-lg-4">4 Columns</option>';
            html += '               <option value="sq-col-lg-5">5 Columns</option>';
            html += '               <option value="sq-col-lg-6">6 Column</option>';
            html += '               <option value="sq-col-lg-7">7 Columns</option>';
            html += '               <option value="sq-col-lg-8">8 Columns</option>';
            html += '               <option value="sq-col-lg-9">9 Columns</option>';
            html += '               <option value="sq-col-lg-10">10 Columns</option>';
            html += '               <option value="sq-col-lg-11">11 Columns</option>';
            html += '               <option value="sq-col-lg-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // MD
            html += '   <div class="sq-grid-system-control-res-group sq-grid-system-control-res-group-md">';
            html += '       <div class="sq-grid-system-control-res-name">MD</div>';
            html += '       <div class="sq-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="sq-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-colspan">';
            html += '           <select class="sq-grid-system-control-select-colspan">';
            html += '               <option value="sq-col-md-1">1 Column</option>';
            html += '               <option value="sq-col-md-2">2 Columns</option>';
            html += '               <option value="sq-col-md-3">3 Columns</option>';
            html += '               <option value="sq-col-md-4">4 Columns</option>';
            html += '               <option value="sq-col-md-5">5 Columns</option>';
            html += '               <option value="sq-col-md-6">6 Column</option>';
            html += '               <option value="sq-col-md-7">7 Columns</option>';
            html += '               <option value="sq-col-md-8">8 Columns</option>';
            html += '               <option value="sq-col-md-9">9 Columns</option>';
            html += '               <option value="sq-col-md-10">10 Columns</option>';
            html += '               <option value="sq-col-md-11">11 Columns</option>';
            html += '               <option value="sq-col-md-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // SM
            html += '   <div class="sq-grid-system-control-res-group sq-grid-system-control-res-group-sm">';
            html += '       <div class="sq-grid-system-control-res-name">SM</div>';
            html += '       <div class="sq-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="sq-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-colspan">';
            html += '           <select class="sq-grid-system-control-select-colspan">';
            html += '               <option value="sq-col-sm-1">1 Column</option>';
            html += '               <option value="sq-col-sm-2">2 Columns</option>';
            html += '               <option value="sq-col-sm-3">3 Columns</option>';
            html += '               <option value="sq-col-sm-4">4 Columns</option>';
            html += '               <option value="sq-col-sm-5">5 Columns</option>';
            html += '               <option value="sq-col-sm-6">6 Column</option>';
            html += '               <option value="sq-col-sm-7">7 Columns</option>';
            html += '               <option value="sq-col-sm-8">8 Columns</option>';
            html += '               <option value="sq-col-sm-9">9 Columns</option>';
            html += '               <option value="sq-col-sm-10">10 Columns</option>';
            html += '               <option value="sq-col-sm-11">11 Columns</option>';
            html += '               <option value="sq-col-sm-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // XS
            html += '   <div class="sq-grid-system-control-res-group sq-grid-system-control-res-group-xs">';
            html += '       <div class="sq-grid-system-control-res-name">XS</div>';
            html += '       <div class="sq-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="sq-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-colspan">';
            html += '           <select class="sq-grid-system-control-select-colspan">';
            html += '               <option value="sq-col-xs-1">1 Column</option>';
            html += '               <option value="sq-col-xs-2">2 Columns</option>';
            html += '               <option value="sq-col-xs-3">3 Columns</option>';
            html += '               <option value="sq-col-xs-4">4 Columns</option>';
            html += '               <option value="sq-col-xs-5">5 Columns</option>';
            html += '               <option value="sq-col-xs-6">6 Column</option>';
            html += '               <option value="sq-col-xs-7">7 Columns</option>';
            html += '               <option value="sq-col-xs-8">8 Columns</option>';
            html += '               <option value="sq-col-xs-9">9 Columns</option>';
            html += '               <option value="sq-col-xs-10">10 Columns</option>';
            html += '               <option value="sq-col-xs-11">11 Columns</option>';
            html += '               <option value="sq-col-xs-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // end
            html += '   <div class="squares-clear"></div>';
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;
            // self.valueChanged();

            // "Use" checkboxes
            $(document).on('change', '#' + this.elementID + ' .sq-grid-system-control-res-use-checkbox', function() {
                // Enable/disable the other inputs from this resolution group

                if ($(this).get(0).checked) {
                    $(this).closest('.sq-grid-system-control-res-group').find('select').removeAttr('disabled');
                    $(this).closest('.sq-grid-system-control-res-group').find('.sq-grid-system-control-visible').removeClass('sq-control-disabled');
                } else {
                    $(this).closest('.sq-grid-system-control-res-group').find('select').attr('disabled', 'disabled');
                    $(this).closest('.sq-grid-system-control-res-group').find('.sq-grid-system-control-visible').addClass('sq-control-disabled');
                }

                self.valueChanged();
            });

            // Toggle visibility
            $(document).on('click', '#' + this.elementID + ' .sq-grid-system-control-visible', function() {
                $(this).toggleClass('sq-grid-system-control-visible-not');
                self.valueChanged();
            });

            // Select colspan
            $(document).on('change', '#' + this.elementID + ' .sq-grid-system-control-select-colspan', function() {
                self.valueChanged();
            });
        }
    });

    /*---------------------- BUTTONS CONTROLS ----------------------*/
    /*--------------------------------------------------------------*/
    /*-- Button group --*/
    $.squaresRegisterControl({
        type: 'button group',
        getValue: function() {
            var v = $('#' + this.elementID).find('.active[data-button-value]').data('button-value');

            return v;
        },
        setValue: function(v) {
            $('#' + this.elementID).find('[data-button-value]').removeClass('active');
            $('#' + this.elementID).find('[data-button-value="'+ v +'"]').addClass('active');
        },
        HTML: function() {
            var html = '';

            html += '<div class="sq-control-button-group" id="'+ this.elementID +'">';

            for (var i=0; i<this.options.length; i++) {
                html += '<div class="sq-control-button-group-button" data-button-value="'+ this.options[i] +'">'+ this.options[i] +'</div>';
            }

            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;

            $(document).on('click', '#' + this.elementID + ' .sq-control-button-group-button', function() {
                $(this).siblings().removeClass('active').removeClass('no-border-right');
                $(this).prev().addClass('no-border-right');
                $(this).addClass('active');
                self.valueChanged();
            });
        }
    });

    /*-- Switch --*/
    $.squaresRegisterControl({
        type: 'switch',
        customLabel: true,
        getValue: function() {
            var v = 0;

            if ($('#' + this.elementID).hasClass('active')) {
                v = 1;
            }

            return v;
        },
        setValue: function(v) {
            if (parseInt(v, 10) == 1) {
                $('#' + this.elementID).addClass('active');
            } else {
                $('#' + this.elementID).removeClass('active');
            }
        },
        HTML: function() {
            var html = '';

            html += '<div class="sq-control-switch" id="'+ this.elementID +'">';
            html += '   <div class="sq-control-switch-ball"></div>';
            html += '</div>';

            html += '<div class="sq-control-switch-label" id="'+ this.elementID +'-label">'+ this.name +'</div>';
            html += '<div class="squares-clear"></div>';

            return html;
        },
        init: function() {
            var self = this;
            $(document).on('click', '#' + this.elementID, function() {
                $(this).toggleClass('active');
                self.valueChanged();
            });
            $(document).on('click', '#' + this.elementID + '-label', function() {
                $('#' + self.elementID).toggleClass('active');
                self.valueChanged();
            });
        }
    });
   
    /*-- Slider --*/
    $.squaresRegisterControl({
        type: 'slider',
        getValue: function() {
            var v = 0;

            // Get the ball position
            var ball = $('#' + this.elementID).find('.sq-control-slider-ball');
            var ballPosition = ball.position().left;

            // Get the track width
            var track = $('#' + this.elementID).find('.sq-control-slider-track');
            var trackWidth = track.outerWidth();

            // Calculate value
            var progress = ballPosition / trackWidth;
            v = this.options.min + (this.options.max - this.options.min) * progress;

            if (this.options.type == 'int') v = Math.round(v);

            return v;
        },
        setValue: function(v) {
            if (this.options.type == 'int') v = Math.round(v);

            var progress = (v - this.options.min) / (this.options.max - this.options.min);

            var ball = $('#' + this.elementID).find('.sq-control-slider-ball');

            // Get the track width
            var track = $('#' + this.elementID).find('.sq-control-slider-track');
            var trackWidth = track.outerWidth();

            ball.css({
                left: trackWidth * progress
            });
        },
        HTML: function() {
            var html = '';

            html += '<div class="sq-control-slider" id="'+ this.elementID +'">';
            html += '   <div class="sq-control-slider-bubble"></div>';
            html += '   <div class="sq-control-slider-track"></div>';
            html += '   <div class="sq-control-slider-ball"></div>';
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;
            var ix = 0, iex = 0, dragging = false, ball = undefined, track = undefined, bubble = undefined;

            // Ball dragging
            $(document).on('mousedown', '#' + self.elementID + ' .sq-control-slider-ball', function(e) {
                ball = $('#' + self.elementID).find('.sq-control-slider-ball');
                track = $('#' + self.elementID).find('.sq-control-slider-track');
                bubble = $('#' + self.elementID).find('.sq-control-slider-bubble');
                ix = ball.position().left;
                iex = e.pageX;

                dragging = true;

                if ($.wcpEditorSliderStartedDragging) {
                    $.wcpEditorSliderStartedDragging();
                }

                // Show value bubble
                bubble.show();
            });
            $(document).on('mousemove.' + this.elementID, function(e) {
                if (dragging) {
                    var o = ix - iex + e.pageX;

                    if (o < 0) o = 0;
                    if (o > track.outerWidth()) o = track.outerWidth();

                    if (self.options.type == 'int') {
                        var step = track.outerWidth() / (self.options.max + 1);

                        o = o - (o % step);
                    }

                    ball.css({
                        left: o
                    });

                    self.valueChanged();

                    // Update value bubble
                    var rounded = Math.round(self.getValue() * 10)/10;

                    if (self.options.type == 'int') {
                        rounded = self.getValue();
                    }

                    bubble.html(rounded);
                    bubble.css({
                        left: o
                    });
                }
            });
            $(document).on('mouseup.' + this.elementID, function(e) {
                if (dragging) {
                    if ($.wcpEditorSliderFinishedDragging) {
                        $.wcpEditorSliderFinishedDragging();
                    }

                    dragging = false;
                    self.valueChanged();

                    // Hide value bubble
                    bubble.hide();
                }
            });

            // Click on the track
            $(document).on('mousedown', '#' + self.elementID + ' .sq-control-slider-track', function(e) {
                ball = $('#' + self.elementID).find('.sq-control-slider-ball');
                track = $('#' + self.elementID).find('.sq-control-slider-track');
                bubble = $('#' + self.elementID).find('.sq-control-slider-bubble');

                // Set the ball to the mouse position
                var o = e.pageX - track.offset().left;

                if (o < 0) o = 0;
                if (o > track.outerWidth()) o = track.outerWidth();

                ball.css({
                    left: o
                });

                // Start dragging
                ix = ball.position().left;
                iex = e.pageX;

                dragging = true;

                // Show value bubble
                bubble.show();
            });
        }
    });

    /*-- Other test for Button not fonctionnel --*/
    $.squaresRegisterControl({
        type: 'btn-plus-less',
        customLabel: true,
        getValue: function() {
            var v = 0;

            if ($('#' + this.elementID).hasClass('active')) {
                v = 1;
            }

            return v;
        },
        setValue: function(v) {
            if (parseInt(v, 10) == 1) {
                $('#' + this.elementID).addClass('active');
            } else {
                $('#' + this.elementID).removeClass('active');
            }
        },
        HTML: function() {
            var html = '';
            
            html += '<div class="toto" style="display:inline-flex; width:100%" id="'+ this.elementID +'">';
            html += '   <input style="width:100%; margin-right:5px" type="text" id="'+ this.elementID +'">';
            html += '   <div class="sq-control-button-plus">+</div>';
            html += '   <div class="sq-control-button-plus">+</div>';
            html += '</div>';
           
            // html += '</div>';

            html += '<div class="sq-control-button-plus-label" id="'+ this.elementID +'-label">'+ this.name +'</div>';
            html += '<div class="squares-clear"></div>';

            return html;
        },
        init: function() {
            var self = this;

            $(document).on('click', '#' + this.elementID, function() {
                $(this).toggleClass('active');
                self.valueChanged();
            });
            $(document).on('click', '#' + this.elementID + '-label', function() {
                $('#' + self.elementID).toggleClass('active');
                self.valueChanged();
            });
        }
    });

    /*---------------------- IMAGES CONTROLS ----------------------*/
    /*-------------------------------------------------------------*/
    /*-- Controls upload file with Dropzone SINGLE OR MULTI --*/ 
    $.squaresRegisterControl({
        type: 'dropzone',
        // customLabel: true, // IMPORTANT
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
            var v = []

            if (dataDropzone.length > 0) {
                for (var i = 0 ; i < dataDropzone.length; i++){
                    var infos = dataDropzone[i].infos;
                    var file = dataDropzone[i].file;
                    // Change URL here for server save
                    var url = 'file:///Users/antoineanzieu/Downloads/CULTURMOOV/PLUGINIMP/ImageMapPro/server_node_test_upload/' + infos.path;
                    v.push({
                        infos: infos,
                        url: url
                    });
                }
            } else {
                v.push({infos: "", url: ""});
            }
            return v
        },
        setValue: function(v) {
            var self = this;
            dataDropzone = [];
            for (var key in v){
                if(v[key].infos)
                    dataDropzone.push(v[key])
            }
            var html = '';

            html += '<div id="template-' + this.elementID + '" class="file-row">'
            html += '   <div class="dz-thumbnail">'
            html += '       <span class="preview"><img data-dz-thumbnail /></span>'
            html += '   </div>'
            html += '   <div class="dz-texte">'
            html += '       <p class="name" data-dz-name></p>'
            html += '       <p class="error text-danger" data-dz-errormessage></p>'
            html += '   </div>'
            html += '   <div class="dz-size">'
            html += '       <p class="size" data-dz-size></p>'
            html += '           <div id="total-progress" class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">'
            html += '               <div class="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress></div>'
            html += '           </div>'
            html += '   </div>'
            html += '   <div class="dz-btn">'
            /*-- ONLY FOR TEST WITH autoQueu False on Dropzone ----*/
            html += '        <button class="btn btn-primary start" data-wcp-tooltip="Charger" data-wcp-tooltip-position="bottom">'
            html += '            <i class="glyphicon glyphicon-upload"></i>'
            // html += '            <span>Start</span>'
            html += '        </button>'
            html += '       <button data-dz-remove class="btn btn-danger delete" data-wcp-tooltip="Supprimer" data-wcp-tooltip-position="bottom">'
            html += '           <i class="glyphicon glyphicon-trash"></i>'
            // html += '            <span>Delete</span>'
            html += '       </button>'
            html += '   </div>'
            html += '</div>'

          
            $('#dropzone-' + this.elementID).dropzone({
                /*---- Set the url IMPORTANT -------------------------*/
                /*---- https://backend.culturmoov.com:8001/ ----------*/
                /*---- need config post and get ----------------------*/
                url: "http://localhost:3000/upload", // Local test with server node and express
                thumbnailWidth: 80,
                thumbnailHeight: 80,
                acceptedFiles: 'image/*,', 
                // method: 'get',
                // headers: {
                //     'x-csrf-token': document.querySelectorAll('meta[name=csrf-token]')[0].getAttributeNode('content').value,
                //   },
                parallelUploads: 1,
                /*---- Maximun Files configure by options -------------------------*/
                // maxFiles: this.options.maxFiles,
                previewTemplate: html,
                /*---- Make sure the files aren't queued until -------*/
                /*---- automatic added -------------------------------*/
                autoQueue: false,
                /*---- Define the container to display the previews --*/
                previewsContainer: '#previews-' + self.elementID,
                /*---- Define the element that should be used as -----*/
                /*---- click trigger to select files. ----------------*/
                clickable: '.fileinput-button-' + self.elementID,
                /*---- PERAPS NEED CONFIG INIT -----------------------*/
                /*---- to recup information from server --------------*/
                init: function () {
                    var drop = this;
                    var i = 0;
                    for (var key in v) {
                        if (v[key].infos){
                          
                            i++;
                            var mockFile = { name: v[key].infos.originalname, size: v[key].infos.size };
                            // Call the default addedfile event handler
                            this.emit("addedfile", mockFile);

                            // And optionally show the thumbnail of the file:
                            this.emit("thumbnail", mockFile, v[key].url);
                            // Or if the file on your server is not yet in the right
                            // size, you can let Dropzone download and resize it
                            // callback and crossOrigin are optional.
                            // this.createThumbnailFromUrl(file, imageUrl, callback, crossOrigin);

                            // Make sure that there is no progress bar, etc...
                            this.emit("complete", mockFile);
                            // If you use the maxFiles option, make sure you adjust it to the
                            // correct amount:
                            // var existingFileCount = g; // The number of files already uploaded
                            // this.options.maxFiles -= i;

                            // this.addFile.call(this, v.datas[g].file);
                            // v.datas[g].file.previewElement.classList.add('dz-success');
                            // v.datas[g].file.previewElement.classList.add('dz-complete');
                            // v.datas[g].file.previewElement.classList.add('dz-processing');
                            // self.valueChanged();
                        }
                    }
                    /*---- To listen if maxfiles exceeded --*/
                    /*---- and show max-dz-upload ----------*/
                    this.on("maxfilesexceeded", function(file) {
                        console.log("max file call");
                        $('#max-dz-upload-' + self.elementID).show();
                        this.removeFile(file);
                    });
                    /*---- To listen when file is on queue before --*/
                    /*---- click to start ONLY FOR DEV -------------*/
                    this.on("addedfile", function(file) {
                        console.log("add File");
                        /*---- Decomment this to test when ---------*/
                        /*---- autoQueue is false to test, ---------*/
                         file.previewElement.querySelector(".start").onclick = function() {
                             drop.enqueueFile(file);
                         }
                    });
                    /*---- To listen when file is delete -------------*/
                    /*---- need to change and delete on server -------*/
                    this.on("removedfile", function(file) {
                        console.log("Removed file call");
                        for (var d = 0; d < dataDropzone.length; d++){
                            if (file.name === dataDropzone[d].infos.originalname){
                                dataDropzone.splice(d, 1);
                                this.options.maxFiles -= 1
                                break;
                            }
                        }
                        // setTimeout(() => {
                        self.valueChanged();
                        // }, 200);
                    });
                    /*---- To listen when file is upload on server ---*/
                    /*---- change val of input logo ------------------*/
                    this.on("success",  function( file, resp ) {
                        /*-- NEED TO CONFIGURE URL FROM SERVER HERE */
                        /*--- change value of input --*/
                        var allInfos = {
                            file: "",
                            infos:""
                        };
                        allInfos.file = file;
                        allInfos.infos = resp;
                        dataDropzone.push(allInfos);
                        // setTimeout(() => {
                        console.log("succes to upload serve");
                        self.valueChanged();
                        // }, 200);
                    });
                }
            });
        },

        HTML: function() {
            // console.log(this);
            // var inputStyle = "margin-bottom: 5px;"
            var html = '';

            html += '<div id="'+ this.elementID + '">'
            html += '   <div id="dropzone-'+this.elementID+'" class="fallback">'
            html += '       <div style="margin-top: 5px;">'
            html += '           <button style="margin-right:5px;" id="add-' + this.elementID + '" class="btn btn-success fileinput-button-' + this.elementID +' dz-clickable">'
            html += '               <i class="glyphicon glyphicon-plus"></i>'
            html += '               <span>Ajouter une image</span>'
            html += '           </button>'
            html += '           <span id="max-dz-upload-'+ this.elementID + '" style="display:none;color:red">Maximun 1 image</span>';
            // for (var i = 0; i < this._value.nbr; i++) {
            html += '            <img src="" id="image-'+ this.elementID +'" style="max-height:45px; float:right; display:none"></img>';
            // }
            html += '       </div>'
            html += '       <div class="dropzone-plugin" id="previews-'+this.elementID+'">'
            /*---- first test implement not very fonctionnal 
            html += '           <div id="template-' + this.elementID + '" class="file-row">'
            html += '               <div class="dz-thumbnail">'
            html += '                   <span class="preview"><img data-dz-thumbnail /></span>'
            html += '               </div>'
            html += '               <div class="dz-texte">'
            html += '                   <p class="name" data-dz-name></p>'
            html += '                   <p class="error text-danger" data-dz-errormessage></p>'
            html += '               </div>'
            html += '               <div class="dz-size">'
            html += '                   <p class="size" data-dz-size></p>'
            html += '                   <div id="total-progress" class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">'
            html += '                       <div class="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress></div>'
            html += '                   </div>'
            html += '               </div>'
            html += '               <div class="dz-btn">'
            // html += '                    <button class="btn btn-primary start">'
            // html += '                        <i class="glyphicon glyphicon-upload"></i>'
            // html += '                        <span>Start</span>'
            // html += '                    </button>'
            html += '                   <button data-dz-remove class="btn btn-danger delete">'
            html += '                       <i class="glyphicon glyphicon-trash"></i>'
            // html += '                    <span>Delete</span>'
            html += '                   </button>'
            html += '               </div>'
            html += '           </div>'
            ---*/
            html += '       </div>'
            html += '   </div>'
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                console.log("DOCUMENT LISTEN");
                // self.valueChanged();
            });
        }
    });

    /*-- Controls Confirm Value Apercu to image --*/
    $.squaresRegisterControl({
        type: 'confirm',
        getValue: function() {
            return this.elementID 
        },
        setValue: function(v) {
           // $('#' + this.elementID + ' input').val(v);
        },
        HTML: function() {
            return '<div class="wcp-editor-control-button" id="'+this.elementID+'">Apercu</div>';
        },
        init: function() {
            var self = this;

          //  var inputSelector = '#' + this.elementID + ' input';
            var buttonSelector = '#' + this.elementID + ' .wcp-editor-control-button';


            $(document).on('click', '#' + this.elementID + '', function() {
                self.valueChanged();
            });
            
        }
    });

    /*-- Controls upload file not fonctionnel --*/ 
    $.squaresRegisterControl({
        type: 'file',
        getId : function(){
            return this.elementID;
        },
        getValue: function() {
   
            return this.elementID;
        },
        setValue: function(v) {
            
           // $('#' + this.elementID).val(parseInt(v, 10));
        },
        HTML: function() {
            return '<input type="file" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
   
    /*---------------------- UNIT CONTROLS ----------------------*/
    /*-----------------------------------------------------------*/
    /*-- Controls value int OK --*/ 
    $.squaresRegisterControl({
        type: 'int',
        getValue: function() {
            return parseInt($('#' + this.elementID).val(), 10);
        },
        setValue: function(v) {
            $('#' + this.elementID).val(parseInt(v, 10));
        },
        HTML: function() {
            return '<input type="text" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });

    /*-- Controls Float Value Ok --*/
    $.squaresRegisterControl({
        type: 'float',
        getValue: function() {
            return parseFloat($('#' + this.elementID).val());
        },
        setValue: function(v) {
            $('#' + this.elementID).val(parseFloat(v));
        },
        HTML: function() {
            return '<input type="text" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });

    /* wp media File NOT FONCTIONNEL BECAUSE $.wcpWPMedia is not a function at SquaresControl.init
    $.squaresRegisterControl({
        type: 'wp media file',
        getValue: function() {
            return $('#' + this.elementID + ' input').val();
        },
        setValue: function(v) {
         //   $('#' + this.elementID + ' input').val(v);
        },
        HTML: function() {
            return '<div class="sq-input-with-button" id="'+ this.elementID +'"><input type="file"><div class="sq-control-button">Choose Media</div></div>';
        },
        init: function() {
            var self = this;

            var inputSelector = '#' + this.elementID + ' input';
            var buttonSelector = '#' + this.elementID + ' .sq-control-button';

            $.wcpWPMedia(inputSelector, buttonSelector, function() {
                self.valueChanged();
            });
        }
    }); */

    /* wp media upload NOT FONCTIONNEL BECAUSE $.wcpWPMedia is not a function at SquaresControl.init
    $.squaresRegisterControl({
        type: 'wp media upload',
        getValue: function() {
            return $('#' + this.elementID + ' input').val();
        },
        setValue: function(v) {
            $('#' + this.elementID + ' input').val(v);
        },
        HTML: function() {
            return '<div class="sq-input-with-button" id="'+ this.elementID +'"><input type="text"><div class="sq-control-button">Choose Media</div></div>';
        },
        init: function() {
            console.log(this);
            var self = this;

            var inputSelector = '#' + this.elementID + ' input';
            var buttonSelector = '#' + this.elementID + ' .sq-control-button';

            $.wcpWPMedia(inputSelector, buttonSelector, function() {
                self.valueChanged();
            });
        }
    });*/

})(jQuery, window, document);
