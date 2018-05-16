// Squares
// Description: Interactive and embeddable HTML content builder.
// Author: Ayoub Ghaddab & Anzieu Antoine
// License: CulturMoov

; (function ($, window, document, undefined) {
    /*------- Creating Title element OK -------*/
    var titreElementOptions = {
        name: "Titre",
        iconClass: "fa fa-font",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-title-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "font-family: 'Open Sans', sans-serif; font-size: 14px; margin-bottom: 0px; padding: 10px;"
                }
            },
            titre: {
                text: {
                    name: 'Titre',
                    type: 'textarea',
                    default: 'Lorem Ipsum'
                },
            }
        },
        controlGroupIcons: {
            titre: 'fa fa-font'
        },
        useFontControls: false,

        content: function (id) {

            var elemID = "title-" + this.controls.general.id.getVal();

            var elemClass = this.controls.general.classes.getVal();

            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = this.controls.general.css.getVal();

            var html =  '<div id="' + elemID + '" class="' + elemClass +'" style="' + elemStyle + '">';
            html +=     this.controls.titre.text.getVal();
            html +=     '</div>';
            return html;
        },
        render: function (options, id) {

            var elemID = "title-" + options.general.id;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
  
            var elemStyle = options.general.css;
          
            var html =  '<div id="' + elemID + '" class="' + elemClass +'" style="' + elemStyle + '">';
            html +=         options.titre.text;
            html +=     '</div>';
            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(titreElementOptions);
    }
    $.squaresRendererRegisterElement(titreElementOptions);

    /*------- Creating Paragraph element OK-------*/
    var paragraphElementOptions = {
        name: "Paragraphe",
        iconClass: "fa fa-paragraph",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-paragraph-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "font-family: 'Open Sans', sans-serif; font-size: 14px; padding: 10px; "
                }
            },
            text: {
                text: {
                    name: 'Texte',
                    type: 'textarea',
                    default: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                }
            }
        },
        controlGroupIcons: {
            text: 'fa fa-paragraph'
        },
        // remove it to use fontSyle Controls Global;
        useFontControls: false,

        content: function (id) {

            var elemID = "paragraph-" + this.controls.general.id.getVal();
            var elemClass = this.controls.general.classes.getVal();

            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
           
            var text = this.controls.text.text.getVal();

            var html = '<div id="' + elemID + '" style="' + this.controls.general.css.getVal() + '" class="' + elemClass + '">';
            html +=         text;
            html +=     '</div>';
            return html;
        },
        render: function (options, id) {

            var elemID = "paragraph-" + options.general.id;
            var elemClass = options.general.classes;

            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale'){ elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var text = options.text.text;

            var html = '<div id="' + elemID + '" style="' + options.general.css + options.fontStyles + '" class="' + elemClass + '">';
            html +=         text;
            html +=    '</div>';
            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(paragraphElementOptions);
    }
    $.squaresRendererRegisterElement(paragraphElementOptions);

    /*------- Creating Adresse element Need param Image Download -------*/
    var addressLogoElementOptions = {
        name: "Adresse",
        iconClass: "fa fa-address-book",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-address-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "font-family: 'Open Sans', sans-serif; font-size: 12px; margin: 0px; padding: 10px; line-height: 14px; height:110px; "
                }
            },
            address: {
                button: {
                    name: 'Couleur du texte',
                    type: 'color-multi',
                    options: 0,
                    default: { 
                        background: "",
                        text: "#000000"
                    },
                },
                address: {
                    name: 'Votre addresse complète',
                    type: 'address',
                    options: ["Nom du lieu","Logo","Adresse","Code Postal","Ville","Téléphone","E-mail"],
                    default: {
                        place: "CulturMoov",
                        address: '14 rue de paris',
                        zipcode: "93980",
                        city: "Paris",
                        tel: "01.30.42.44.55",
                        mail: "culturmoov@culturmoov.com",
                        infos: "",
                        url: "https://backend.culturmoov.com:8001/logo.png",
                    }
                }
            }
        },
        controlGroupIcons: {
            address: 'fa fa-address-book',
        },
        useFontControls: false,
        content: function (id) {

            var elemID = "address-" + this.controls.general.id.getVal();

            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var logoSrc = '';
            if(this.controls.address.address.getVal().url){
                logoSrc = this.controls.address.address.getVal().url;
            } else {
                logoSrc = 'https://backend.culturmoov.com:8001/logo.png';
            }
            var buttonStyle = '';
            // buttonStyle += 'background-color: ' + this.controls.access.button.getVal().background +'; ';
            // buttonStyle += 'border-color: ' + this.controls.access.button.getVal().background + '; ';
            buttonStyle += 'color: ' + this.controls.address.button.getVal().text + '; ';
            buttonStyle += 'text-decoration: none; ';

            var elemStyle = this.controls.general.css.getVal();

            var html = '';
            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + '">';
            html += '   <div class="' + elemClass + '-adresse" style="float:left; width:60%; text-align:left; ">'
            html += '       <p style="'+ buttonStyle + '">'
            if (this.controls.address.address.getVal().place)
                html +=         this.controls.address.address.getVal().place + '</br>';
            if (this.controls.address.address.getVal().address)
                html +=         this.controls.address.address.getVal().address + '</br>';
            if (this.controls.address.address.getVal().zipcode)
                html +=         this.controls.address.address.getVal().zipcode + '</br>';
            if (this.controls.address.address.getVal().city)
                html +=         this.controls.address.address.getVal().city + '</br>';
            if (this.controls.address.address.getVal().tel)
                html +=         this.controls.address.address.getVal().tel + '</br>';
            if (this.controls.address.address.getVal().mail)
                html +=         this.controls.address.address.getVal().mail;
            html += '       </p>';
            html += '   </div>';
            html += '   <div class="' + elemClass + '-logo" style="float:right; width:40%; text-align:right; ">'
            html += '       <img src="' + logoSrc +'" style="max-height: 80px; margin-left: auto;">'
            html += '   </div>';
            html += '</div>';
            
            return html;

        },
        render: function (options, id) {
           
            var elemID = "address-" + options.general.id;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var logoSrc = '';
            if(options.address.address.url){
                logoSrc = options.address.address.url;
            } else {
                logoSrc = 'https://backend.culturmoov.com:8001/logo.png';
            }
            var buttonStyle = '';
            // buttonStyle += 'background-color: ' + options.access.button.background +'; ';
            // buttonStyle += 'border-color: ' + options.access.button.background + '; ';
            buttonStyle += 'color: ' + options.address.button.text + '; ';
            buttonStyle += 'text-decoration: none; ';

            var elemStyle = options.general.css;

            var html = '';
            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + '">';
            html += '   <div class="' + elemClass + '-adresse" style="float:left; width:60%; text-align:left; ">'
            html += '       <p style="'+ buttonStyle + '">'
            if (options.address.address.place)
                html +=         options.address.address.place + '</br>';
            if (options.address.address.address)
                html +=         options.address.address.address + '</br>';
            if (options.address.address.zipcode)
                html +=         options.address.address.zipcode + '</br>';
            if (options.address.address.city)
                html +=         options.address.address.city + '</br>';
            if (options.address.address.tel)
                html +=         options.address.address.tel + '</br>';
            if (options.address.address.mail)
                html +=         options.address.address.mail;
            html += '       </p>';
            html += '   </div>';
            html += '   <div class="' + elemClass + '-logo" style="float:right; width:40%; text-align:right; ">'
            html += '       <img src="' + logoSrc +'" style="max-height: 80px; margin-left: auto;">'
            html += '   </div>';
            html += '</div>';
            
            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(addressLogoElementOptions);
    }
    $.squaresRendererRegisterElement(addressLogoElementOptions);

    /*------- Creating Jours et Horaire element Ok -------*/
    var joursHeuresElementOptions = {
        name: "Jours et Heures",
        iconClass: "fa fa-calendar",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-horaires-',
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "font-family: 'Open Sans', sans-serif; font-size: 14px; margin: 0px; padding: 10px; "
                }
            },
            horaires: {
                button: {
                    name: 'Couleur du titre',
                    type: 'color-multi',
                    options: 0, // Change value to 1 for upadte with background property
                    default:{ 
                        background: "",
                        text: "#000000"
                    },
                },
                select:{
                    name: "Date et heure",
                    type: 'horaires',
                    options: {
                        jour_start: {
                            options: ['fermé', 'lundi', 'mardi', 'mercredi','jeudi','vendredi','samedi','dimanche'],
                            default: ['lundi'],
                        },
                        jour_end: {
                            options: ['','uniquement','lundi', 'mardi', 'mercredi','jeudi','vendredi','samedi','dimanche'],
                            default: ['vendredi'],
                        },
                        hours_start:{
                            default: ['10:00']
                        },
                        hours_end:{
                            default: ['18:00']
                        },
                        add: 1
                    },
                    default: "<div><p>lundi-vendredi 10:00-18:00</p></div>",
                },
                infos: {
                    name: 'Informations supplémentaire',
                    type: 'textarea',
                    default: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                }
            },
            
        },
        controlGroupIcons: {
            horaires: 'fa fa-clock'
        },
        useFontControls: false,
        content: function (id) {
            
            var elemStyle = this.controls.general.css.getVal();
            var elemClass = this.controls.general.classes.getVal();

            var elemID = "horaires-" + this.controls.general.id.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var titleCss = 'style="font-family: \'Open Sans\', sans-serif; font-size: 16px; font-weight: bold; line-height: 18px"';
            
            var buttonStyle = '', horaireColor = '';
            horaireColor += 'color: ' + this.controls.horaires.button.getVal().text + '; ';
            // buttonStyle += 'background-color: ' + this.controls.horaires.button.getVal().background +'; '; // update options to 1 to use it
            // buttonStyle += 'border-color: ' + this.controls.horaires.button.getVal().background + '; ';    // update options to 1 to use it
            buttonStyle += 'color: ' + this.controls.horaires.button.getVal().text + '; ';
            buttonStyle += 'text-decoration: none; ';

            var infos = this.controls.horaires.infos.getVal();
            
            var horaires = this.controls.horaires.select.getVal();

            var html = '';

            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + ' display: inline-grid; " >';
            html += '   <p class="' + elemClass + '-title"' + titleCss + '>';
            html += '       <a class="" style="' + buttonStyle + '" data-toggle="collapse" href="#collapse-'+ elemID +'" role="button" aria-expanded="false" aria-controls="collapse-'+ elemID +'">';
            html += '           <i class="fa fa-clock"></i>';
            html += '           &nbspHoraires d\'ouvertures&nbsp;';
            html += '           <i class="fa fa-caret-down"></i>';
            html += '       </a>';
            html += '   </p>';
            html += '   <div class="'+ elemClass + '-horaires" style="'+ horaireColor + ' display: inline-grid;">'
            html +=         horaires;
            html += '   </div>'
            html += '   <div id="text-' + elemID + '" class="' + elemClass + '-text">';
            html +=         infos;
            html += '   </div>';
            html += '</div>';

            return html;
        },
        render: function (options, id) {

            var elemStyle = options.general.css;
            var elemClass = options.general.classes;
            
            var elemID = "horaires-" + options.general.id;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var titleCss = 'style="font-family: \'Open Sans\', sans-serif; font-size: 16px; font-weight: bold; line-height: 18px"';

            var buttonStyle = '', horaireColor = '';
            horaireColor += 'color: ' + options.horaires.button.text + '; ';
            // buttonStyle += 'background-color: ' + options.horaires.button.background +'; ';  // update options to 1 to use it
            // buttonStyle += 'border-color: ' + options.horaires.button.background + '; ';     // update options to 1 to use it
            buttonStyle += 'color: ' + options.horaires.button.text + '; ';
            buttonStyle += 'text-decoration: none; ';

            var infos = options.horaires.infos;

            var horaires = options.horaires.select;
          
            var html = '';

            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + ' display: inline-grid; " >';
            html += '   <p class="' + elemClass + '-title"' + titleCss + '>';
            html += '       <a class="" style="' + buttonStyle + '" data-toggle="collapse" href="#collapse-'+ elemID +'" role="button" aria-expanded="false" aria-controls="collapse-'+ elemID +'">';
            html += '           <i class="fa fa-clock"></i>';
            html += '           &nbsp;Horaires d\'ouvertures&nbsp;';
            html += '           <i class="fa fa-caret-down"></i>';
            html += '       </a>';
            html += '   </p>';
            html += '   <div class="collapse ' + elemClass +'-content" id="collapse-'+ elemID +'">';
            html += '       <div class="'+ elemClass + '-horaires" style="'+ horaireColor + ' display: inline-grid; ">'
            html +=             horaires;
            html += '       </div>'
            html += '       <div id="text-' + elemID + '" class="' + elemClass + '-text">';
            html +=             infos;
            html += '       </div>';
            html += '   </div>';
            html += '</div>';

            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(joursHeuresElementOptions);
    }
    $.squaresRendererRegisterElement(joursHeuresElementOptions);

    /*------- Creating Tarifs element OK -------*/
    var tarifsElementOptions = {
        name: "Tarifs",
        iconClass: "fas fa-euro-sign",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-tarifs-',
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "line-height:16px; font-family: 'Open Sans', sans-serif; font-size: 14px;  padding: 10px; margin: 0px;"
                }
            },
            tarifs: {
                button: {
                    name: 'Couleur du titre',
                    type: 'color-multi',
                    options: 0, // change value to 1 to use background property
                    default:{ 
                        background: "",
                        text: "#000000"
                    },
                },
                select:{
                    name: "Tarifs",
                    type: 'Tarifs',
                    options: {
                        tarifs: ["Tarif plein : ", "Tarifs réduits : ", "Tarifs de groupe : "],
                        
                    },
                    default: {
                        html : '',
                        check: [ 0, 0, 0 ],
                        price : ["10", "12", "20"],
                     }
                },
                infos: {
                    name: 'Conditions particulières',
                    type: 'textarea',
                    default: 'ex: étudiants, moins de X ans, sans emploi etc....'
                },
               
            },
            
        },
        controlGroupIcons: {
            tarifs: 'fas fa-euro-sign'
        },
        useFontControls: false,
        
        content: function (id) {

            var elemStyle = this.controls.general.css.getVal();
            var elemClass = this.controls.general.classes.getVal();
            
            var elemID = "tarifs-" + this.controls.general.id.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var titleCss = 'style="font-family: \'Open Sans\', sans-serif; font-size: 16px; font-weight: bold; line-height: 18px"';

            var buttonStyle = '', textColor = '';
            textColor += 'color: ' + this.controls.tarifs.button.getVal().text + '; ';
            // buttonStyle += 'background-color: ' + this.controls.tarifs.button.getVal().background +'; ';
            // buttonStyle += 'border-color: ' + this.controls.tarifs.button.getVal().background + '; ';
            buttonStyle += 'color: ' + this.controls.tarifs.button.getVal().text + '; ';
            buttonStyle += 'text-decoration: none; ';
            
            var infos = this.controls.tarifs.infos.getVal();

            var type = this.controls.tarifs.select.getVal().html;

            var html = '';

            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + ' display: inline-grid; " >';
            html += '   <p class="' + elemClass + '-title"' + titleCss + '>';
            html += '       <a class="" style="' + buttonStyle + '" data-toggle="collapse" href="#collapse-'+ elemID +'" role="button" aria-expanded="false" aria-controls="collapse-'+ elemID +'">';
            html += '           <i class="fas fa-euro-sign"></i>';
            html += '           &nbsp;Tarifs&nbsp;';
            html += '           <i class="fa fa-caret-down"></i>';
            html += '       </a>';
            html += '   </p>';
            html += '   <div class="'+ elemClass +'-tarifs" style="'+ textColor +'">';
            html +=         type;
            html += '    </div>';
            html += '    <div id="text-' + elemID + '" class="' + elemClass + '-text">';
            html +=         infos;
            html +=     '</div>';
            html += '</div>';

            return html;
        },
        render: function (options, id) {

            var elemStyle = options.general.css;
            var elemClass = options.general.classes;

            var elemID = "tarifs-" + options.general.id;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var titleCss = 'style="font-family: \'Open Sans\', sans-serif; font-size: 16px; font-weight: bold; line-height: 18px"';

            var buttonStyle = '', textColor = '';
            textColor += 'color: ' + options.tarifs.button.text + '; ';
            // buttonStyle += 'background-color: ' + options.tarifs.button.background +'; ';
            // buttonStyle += 'border-color: ' + options.tarifs.button.background + '; ';
            buttonStyle += 'color: ' + options.tarifs.button.text + '; ';
            buttonStyle += 'text-decoration: none; ';
            
            var infos = options.tarifs.infos;

            var type = options.tarifs.select.html;
            
            var html = '';

            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + ' display: inline-grid; " >';
            html += '   <p class="' + elemClass + '-title"' + titleCss + '>';
            html += '       <a class="" style="' + buttonStyle + '" data-toggle="collapse" href="#collapse-'+ elemID +'" role="button" aria-expanded="false" aria-controls="collapse-'+ elemID +'">';
            html += '           <i class="fas fa-euro-sign"></i>';
            html += '           &nbsp;Tarifs&nbsp;';
            html += '           <i class="fa fa-caret-down"></i>';
            html += '       </a>';
            html += '   </p>';
            html +='    <div class="collapse ' + elemClass +'-content" id="collapse-'+ elemID +'">';
            html += '       <div class="'+ elemClass +'-tarifs" style="'+ textColor +'">';
            html +=             type;
            html += '       </div>';
            html += '       <div id="text-' + elemID + '" class="' + elemClass + '-text">';
            html +=             infos;
            html += '       </div>';
            html += '   </div>';
            html += '</div>';

            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(tarifsElementOptions);
    }
    $.squaresRendererRegisterElement(tarifsElementOptions);
    
    /*------- Creating transport element OK -------*/
    var transportsElementSettings = {
        name: "Transport",
        iconClass: "fa fa-subway",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-transports-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: ' padding: 10px; margin: 0px;'
                }
            },
            transports: {
                button: {
                    name: 'Couleur du titre',
                    type: 'color-multi',
                    options: 0,
                    default:{ 
                        background: "",
                        text: "#000000"
                    },
                },
                infos: {
                    name: 'Transports',
                    type: 'textarea',
                    default: 'ex: Métro A, Ligne 13, bus 425, etc....'
                },
            },
            adresse:{
                button: {
                    name: 'Style du bouton S\'y rendre',
                    type: 'color-multi',
                    options: 1,
                    default:{ 
                        background: "#511F46",
                        text: "#FFFFFF"
                    },
                },
                text: {
                    name: 'Texte',
                    type: 'text',
                    options: 10,
                    default: 'S\'y rendre'
                },
                map:{
                    name:'Localisation',
                    type:'map',
                    default: {
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
                }
            }
        },
        controlGroupIcons: {
            transports: 'fa fa-subway',
            adresse:'fa fa-map-marker'
        },
        useFontControls: false,

        content: function (id) {

            var elemID = "transports-" + this.controls.general.id.getVal();
            var elemStyle = this.controls.general.css.getVal();

            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var titleCss = 'style="font-family: \'Open Sans\', sans-serif; font-size: 16px; font-weight: bold; line-height: 18px"';

            var buttonStyle = '', transportsColor = '';
            transportsColor += 'color: ' + this.controls.transports.button.getVal().text + '; ';
            // buttonStyle += 'background-color: ' + this.controls.transports.button.getVal().background +'; ';
            // buttonStyle += 'border-color: ' + this.controls.transports.button.getVal().background + '; ';
            buttonStyle += 'color: ' + this.controls.transports.button.getVal().text + '; ';
            buttonStyle += 'text-decoration: none; '
            
            var infos = this.controls.transports.infos.getVal();

            /* configure button Google */
            var buttonGoogle = '';
            buttonGoogle = 'background-color: ' + this.controls.adresse.button.getVal().background +'; ';
            buttonGoogle += 'border-color: ' + this.controls.adresse.button.getVal().background + '; ';
            buttonGoogle += 'color: ' + this.controls.adresse.button.getVal().text + '; ';
            buttonGoogle += 'display: block; ';
            buttonGoogle += 'height: 40px; ';
            buttonGoogle += 'line-height: 28px;';
            buttonGoogle += 'border-radius: 10px; ';
            buttonGoogle += 'padding-left: 20px; ';
            buttonGoogle += 'padding-right: 20px; ';
            buttonGoogle += 'margin: auto; ';
            buttonGoogle += 'width: 70%; ';

            var textGoogle = this.controls.adresse.text.getVal();

            var urlGoogle;
            if ($.imageMapProIsMobile()){
                urlGoogle = '';
            } else {
                this.controls.adresse.map.getVal().url ? urlGoogle = 'href="' + this.controls.adresse.map.getVal().url + '" target="_blank"' : urlGoogle = '';
            }

            var googlemapID = this.controls.adresse.map.getVal().id;

            var html = '';

            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + '" >';
            html += '   <p class="' + elemClass + '-title"' + titleCss + '>';
            html += '       <a class="" style="' + buttonStyle + '" data-toggle="collapse" href="#collapse-'+ elemID +'" role="button" aria-expanded="false" aria-controls="collapse-'+ elemID +'">';
            html += '           <i class="fa fa-subway"></i>';
            html += '           &nbsp;Transports&nbsp;';
            html += '           <i class="fa fa-caret-down"></i>';
            html += '       </a>';
            html += '   </p>';
            html += '   <div id="text-' + elemID + '" class="' + elemClass + '-text" style="'+ transportsColor +'">';
            html +=         infos;
            html += '   </div>';
            html += '   <div id="googlemap-' + elemID + '" style="' + elemStyle + 'margin-top: 10px;" class="' + elemClass + '-googlemap">';
            html += '       <a id="' + googlemapID + '" class="btn btn-primary" style="' + buttonGoogle + '" role="button"' + urlGoogle + '>';
            // html += '           <i class="fa fa-car"></i>';
            html += '           <i class="cm cm-route"></i>';
            html += '           &nbsp;' + textGoogle;
            html += '       </a>';
            html += '   </div>';
            html += '</div>';

            return html;
        },
        render: function (options, id) {

            var elemID = "transports-" + options.general.id;
            var elemStyle = options.general.css;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation';
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var titleCss = 'style="font-family: \'Open Sans\', sans-serif; font-size: 16px; font-weight: bold; line-height: 18px"';

            var buttonStyle = '', transportsColor = '';
            transportsColor += 'color: ' + options.transports.button.text + '; ';
            // buttonStyle += 'background-color: ' + options.transports.button.background +'; ';
            // buttonStyle += 'border-color: ' + options.transports.button.background + '; ';
            buttonStyle += 'color: ' + options.transports.button.text + '; ';
            buttonStyle += 'text-decoration: none; ';
            
            var infos = options.transports.infos;

            /* configure button Google */
            var buttonGoogle = 'background-color: ' + options.adresse.button.background +'; ';
            buttonGoogle += 'border-color: ' + options.adresse.button.background + '; ';
            buttonGoogle += 'color: ' + options.adresse.button.text + '; ';
            buttonGoogle += 'display: block; ';
            buttonGoogle += 'height: 40px; ';
            buttonGoogle += 'line-height: 28px;';
            buttonGoogle += 'border-radius: 10px; ';
            buttonGoogle += 'padding-left: 20px; ';
            buttonGoogle += 'padding-right: 20px; ';
            buttonGoogle += 'margin: auto; ';
            buttonGoogle += 'width: 70%; ';
            
            var textGoogle = options.adresse.text;

            var urlGoogle;
            if ($.imageMapProIsMobile()){
                urlGoogle = '';
            } else {
                options.adresse.map.url ? urlGoogle = 'href="' + options.adresse.map.url + '" target="_blank"' : urlGoogle = '';
            }

            var googlemapID = options.adresse.map.id;

            var html = '';

            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + '" >';
            html += '   <p class="' + elemClass + '-title"' + titleCss + '>';
            html += '       <a class="" style="' + buttonStyle + '" data-toggle="collapse" href="#collapse-'+ elemID +'" role="button" aria-expanded="false" aria-controls="collapse-'+ elemID +'">';
            html += '           <i class="fa fa-subway"></i>';
            html += '           &nbsp;Transports&nbsp;';
            html += '           <i class="fa fa-caret-down"></i>';
            html += '       </a>';
            html += '   </p>';
            html += '   <div class="collapse ' + elemClass +'-content" id="collapse-'+ elemID +'">';
            html += '       <div id="text-' + elemID + '" class="' + elemClass + '-text" style="'+ transportsColor +'">';
            html +=             infos;
            html += '       </div>';
            html += '   </div>';
            html += '    <div id="googlemap-' + elemID + '" style="' + elemStyle + 'margin-top: 15px;" class="' + elemClass + '-googlemap">';
            html += '       <a id="' + googlemapID + '" class="btn btn-primary" style="' + buttonGoogle + '" role="button"' + urlGoogle + '>';
            // html += '           <i class="fa fa-car"></i>';
            html += '           <i class="cm cm-route"></i>';
            html += '           &nbsp;' + textGoogle;
            html += '       </a>';
            html += '   </div>';
            html += '</div>';

            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(transportsElementSettings);
    }
    $.squaresRendererRegisterElement(transportsElementSettings);

    /*------- Creating Accessibility element -------*/
    var accessibliteElementOptions = {
        name: "Accessibilité",
        iconClass: "fa fa-wheelchair",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-accessibility-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "font-weight: bold; font-family: 'Open Sans', sans-serif; font-size: 16px; margin: 0px; padding: 10px; "
                }
            },
            access: {
                button: {
                    name: 'Couleur du titre',
                    type: 'color-multi',
                    options: 0,
                    default:{ 
                        background: "",
                        text: "#000000"
                    },
                },
                all: {
                    name: 'Sélectionner vos icones d\'accessibilité',
                    type: 'accessibility',
                    options: {
                        text: ["handicapé","sourdité","audio-description","sous-titre informatifs","accessible pour tous","aveugle","braille","langage des signes français","langage des signes américain"],
                        icon: ["wheelchair","deaf","audio-description","closed-captioning","universal-access","blind","braille","sign-language","american-sign-language-interpreting"],
                    },
                    default: {
                        handicap: {
                            check: 1,
                            name: 'handicapé',
                            color: "#000000",
                        },
                        sourd: {
                            check: 0,
                            name: 'sourdité',
                            color: "#000000",
                        },
                        audiodescritpion: {
                            check: 0,
                            name: 'audio-description',
                            color: "#000000",
                        },
                        closecaption: {
                            check: 0,
                            name: 'sous-titre informatifs',
                            color: "#000000",
                        },
                        allacces: {
                            check: 0,
                            name: 'accessible pour tous',
                            color: "#000000",
                        },
                        aveugle: {
                            check: 0,
                            name: 'aveugle',
                            color: "#000000",
                        },
                        braille: {
                            check: 0,
                            name: 'braille',
                            color: "#000000",
                        },
                        frenchsign: {
                            check: 0,
                            name: 'langage des signes français',
                            color: "#000000",
                        },
                        americansign: {
                            check: 0,
                            name: 'langage des signes américain',
                            color: "#000000",
                        },
                    }
                }
            }
        },
        controlGroupIcons: {
            access: 'fa fa-wheelchair',
        },
        useFontControls: false,
        content: function (id) {

            var elemID = "accessibilite-" + this.controls.general.id.getVal();

            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var buttonStyle = '';
            // buttonStyle += 'background-color: ' + this.controls.access.button.getVal().background +'; ';
            // buttonStyle += 'border-color: ' + this.controls.access.button.getVal().background + '; ';
            buttonStyle += 'color: ' + this.controls.access.button.getVal().text + '; ';
            buttonStyle += 'text-decoration: none; ';
            var titleCss = 'style="font-family: \'Open Sans\', sans-serif; font-size: 16px; font-weight: bold; line-height: 18px"';


            var elemStyle = this.controls.general.css.getVal();

            var html = '';
            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + '">';
            html += '   <p class="' + elemClass + '-title"' + titleCss + '>';
            html += '       <a class="" style="' + buttonStyle + '" data-toggle="collapse" href="#collapse-'+ elemID +'" role="button" aria-expanded="false" aria-controls="collapse-'+ elemID +'">';
            html += '           <i class="fa fa-wheelchair"></i>';
            html += '           &nbsp;Accessibilité&nbsp;';
            html += '           <i class="fa fa-caret-down"></i>';
            html += '       </a>';
            html += '   </p>';
            html += '   <div class="site-icon-acces" style="padding:5px; font-size:1.4em; text-align: center;">'
            if (this.controls.access.all.getVal().handicap.check === 1)
                html += '   <i style="padding:5px; text-decoration: none; color: ' + this.controls.access.all.getVal().handicap.color + '; " class="fa fa-wheelchair"></i>'
            if (this.controls.access.all.getVal().sourd.check === 1)
                html += '   <i style="padding:5px; text-decoration: none; color: ' + this.controls.access.all.getVal().sourd.color + '; " class="fa fa-deaf"></i>'
            if (this.controls.access.all.getVal().audiodescritpion.check === 1)
                html += '   <i style="padding:5px; text-decoration: none; color: ' + this.controls.access.all.getVal().audiodescritpion.color + '; " class="fa fa-audio-description"></i>'
            if (this.controls.access.all.getVal().closecaption.check === 1)
                html += '   <i style="padding:5px; text-decoration: none; color: ' + this.controls.access.all.getVal().closecaption.color + '; " class="fa fa-closed-captioning"></i>'
            if (this.controls.access.all.getVal().allacces.check === 1)
                html += '   <i style="padding:5px; text-decoration: none; color: ' + this.controls.access.all.getVal().allacces.color + '; " class="fa fa-universal-access"></i>'
            if (this.controls.access.all.getVal().aveugle.check === 1)
                html += '   <i style="padding:5px; text-decoration: none; color: ' + this.controls.access.all.getVal().aveugle.color + '; " class="fa fa-blind"></i>'
            if (this.controls.access.all.getVal().braille.check === 1)
                html += '   <i style="padding:5px; text-decoration: none; color: ' + this.controls.access.all.getVal().braille.color + '; " class="fa fa-braille"></i>'
            if (this.controls.access.all.getVal().frenchsign.check === 1)
                html += '   <i style="padding:5px; text-decoration: none; color: ' + this.controls.access.all.getVal().frenchsign.color + '; " class="fa fa-sign-language"></i>'
            if (this.controls.access.all.getVal().americansign.check === 1)
                html += '   <i style="padding:5px; text-decoration: none; color: ' + this.controls.access.all.getVal().americansign.color + '; " class="fa fa-american-sign-language-interpreting"></i>'
            html += '   </div>';
            html += '</div>';
            
            
            return html;

        },
        render: function (options, id) {
           
            var elemID = "accessibilite-" + options.general.id;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var buttonStyle = '';
            // buttonStyle += 'background-color: ' + options.access.button.background +'; ';
            // buttonStyle += 'border-color: ' + options.access.button.background + '; ';
            buttonStyle += 'color: ' + options.access.button.text + '; ';
            buttonStyle += 'text-decoration: none; ';
            var titleCss = 'style="font-family: \'Open Sans\', sans-serif; font-size: 16px; font-weight: bold; line-height: 18px"';


            var elemStyle = options.general.css;

            var html = '';
            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + '">';
            html += '   <p class="' + elemClass + '-title"' + titleCss + '>';
            html += '       <a class="" style="' + buttonStyle + '" data-toggle="collapse" href="#collapse-'+ elemID +'" role="button" aria-expanded="false" aria-controls="collapse-'+ elemID +'">';
            html += '           <i class="fa fa-wheelchair"></i>';
            html += '           &nbsp;Accessibilité&nbsp;';
            html += '           <i class="fa fa-caret-down"></i>';
            html += '       </a>';
            html += '   </p>';
            html += '   <div class="collapse ' + elemClass +'-content" id="collapse-'+ elemID +'">';
            html += '       <div class="site-icon-access" style="padding:5px; font-size:1.4em; text-align: center;">'
            if (options.access.all.handicap.check === 1)
                html += '       <i style="padding:5px; text-decoration: none; color: ' + options.access.all.handicap.color + '; " class="fa fa-wheelchair"></i>'
            if (options.access.all.sourd.check === 1)
                html += '       <i style="padding:5px; text-decoration: none; color: ' + options.access.all.sourd.color + '; " class="fa fa-deaf"></i>'
            if (options.access.all.audiodescritpion.check === 1)
                html += '       <i style="padding:5px; text-decoration: none; color: ' + options.access.all.audiodescritpion.color + '; " class="fa fa-audio-description"></i>'
            if (options.access.all.closecaption.check === 1)
                html += '       <i style="padding:5px; text-decoration: none; color: ' + options.access.all.closecaption.color + '; " class="fa fa-closed-captioning"></i>'
            if (options.access.all.allacces.check === 1)
                html += '       <i style="padding:5px; text-decoration: none; color: ' + options.access.all.allacces.color + '; " class="fa fa-universal-access"></i>'
            if (options.access.all.aveugle.check === 1)
                html += '       <i style="padding:5px; text-decoration: none; color: ' + options.access.all.aveugle.color + '; " class="fa fa-blind"></i>'
            if (options.access.all.braille.check === 1)
                html += '       <i style="padding:5px; text-decoration: none; color: ' + options.access.all.braille.color + '; " class="fa fa-braille"></i>'
            if (options.access.all.frenchsign.check === 1)
                html += '       <i style="padding:5px; text-decoration: none; color: ' + options.access.all.frenchsign.color + '; " class="fa fa-sign-language"></i>'
            if (options.access.all.americansign.check === 1)
                html += '       <i style="padding:5px; text-decoration: none; color: ' + options.access.all.americansign.color + '; " class="fa fa-american-sign-language-interpreting"></i>'
            html += '       </div>';
            html += '   </div>';
            html += '</div>';
            
            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(accessibliteElementOptions);
    }
    $.squaresRendererRegisterElement(accessibliteElementOptions);

    /*------- Creating Images element NEED UPLOAD AND SAVE ON SERVER -------*/
    var imageElementSettings = {
        name: "Image",
        iconClass: "fa fa-camera",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-image-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: 'width: 100%; margin: 0px; padding: 5px; '
                }
            },
            image: {
                url: {
                    name: 'Image URL',
                    type: 'url',
                    default: 'https://webcraftplugins.com/uploads/placeholder_image.png'
                },
                file: {
                    name: 'Importer une image',
                    type: 'dropzone',
                    options: {
                        maxFiles: 1,
                    },
                    default: [{
                        infos:"",
                        url:"",
                    }]   // Array not very fonctionnal see subtract Function at line 2204 on square.js 
                },
                image_is_a_link: {
                    name: 'Ajouter un lien sur la bannière',
                    type: 'switch',
                    default: 0
                },
                link_to: {
                    name: 'Lien de redirection',
                    type: 'url',
                    default: 'http://monsiteperso.com/'
                }
            }
        },
        controlGroupIcons: {
            image: 'fa fa-camera'
        },
        useFontControls: false,

        content: function (id) {
            
            var elemStyle = this.controls.general.css.getVal();
            var elemID = "image-" + this.controls.general.id.getVal();
            var elemClass = this.controls.general.classes.getVal();

            if (id === 'geolocation'){ elemClass += 'geolocation';
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var srcImg = '';
            if (this.controls.image.file.getVal()[0].infos) {
                srcImg = this.controls.image.file.getVal()[0].url;
            } else {
                srcImg = this.controls.image.url.getVal();
            }
            var html = '';
            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle +'">';
            if (parseInt(this.controls.image.image_is_a_link.getVal(), 10) == 1) {
                html += '<a href="' + this.controls.image.link_to.getVal() + '">';
            }
            html += '   <img src="' + srcImg + '" style="' + elemStyle + '">';
            if (parseInt(this.controls.image.image_is_a_link.getVal(), 10) == 1) {
                html += '</a>';
            }
            html += '</div>';

            return html;
        },
        render: function (options, id) {

            var elemStyle = options.general.css;
            var elemID = "image-" + options.general.id;
            var elemClass = options.general.classes;

            if (id === 'geolocation'){ elemClass += 'geolocation';
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var srcImg = '';
            if (options.image.file[0].infos) {
                srcImg = options.image.file[0].url;
            } else {
                srcImg = options.image.url;
            }
            var html = '';
            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle +'">';
            if (parseInt(options.image.image_is_a_link, 10) == 1) {
                html += '<a href="' + options.image.link_to + '">';
            }
            html += '   <img src="' + srcImg + '" style="' + elemStyle + '">';
            if (parseInt(options.image.image_is_a_link, 10) == 1) {
                html += '</a>';
            }
            html += '</div>';

            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(imageElementSettings);
    }
    $.squaresRendererRegisterElement(imageElementSettings);

    /*------- Creating Banniere element NEED UPLOAD AND SAVE ON SERVER -------*/
    var sponsoImageElementSettings = {
        name: "Bannière Sponso",
        iconClass: "fab fa-leanpub",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-banniere-sponso-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: 'width: 100%; padding: 0px; margin: 0px; '
                }
            },
            image: {
                url: {
                    name: 'Image URL',
                    type: 'url',
                    default: 'img/bannierespec.jpg'
                },
                // file: {
                //     name: 'Télécharger une image depuis votre ordinateur',
                //     type: 'file',
                //     default: "null"
                // },
                image_is_a_link: {
                    name: 'Ajouter un lien sur la bannière',
                    type: 'switch',
                    default: 0
                },
                link_to: {
                    name: 'Lien de redirection',
                    type: 'url',
                    default: 'http://monsiteperso.com/'
                }
            }
        },
        controlGroupIcons: {
            image: 'fab fa-leanpub'
        },
        useFontControls: false,
        content: function (id) {

            var elemStyle = this.controls.general.css.getVal();
            var elemID = "banniere-sponso-" + this.controls.general.id.getVal();
            var elemClass = this.controls.general.classes.getVal();
            
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var html = '';
            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle +' max-height:168px; ">'
            if (parseInt(this.controls.image.image_is_a_link.getVal(), 10) == 1) {
                html += '<a href="' + this.controls.image.link_to.getVal() + '">';
            }

            html += '<img src="' + this.controls.image.url.getVal() + '" style="' + elemStyle + '">';

            if (parseInt(this.controls.image.image_is_a_link.getVal(), 10) == 1) {
                html += '</a>';
            }

            html+= '</div>'

            return html;
        },
        render: function (options, id) {

            var elemStyle = options.general.css;
            var elemID = "banniere-sponso-" + options.general.id;
            var elemClass = options.general.classes;

            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var html = '';
            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + ' height:168px;">'

            if (parseInt(options.image.image_is_a_link, 10) == 1) {
                html += '<a href="' + options.image.link_to + '">';
            }

            html += '<img src="' + options.image.url + '" style="' + elemStyle + ' position: inherit;">';

            if (parseInt(options.image.image_is_a_link, 10) == 1) {
                html += '</a>';
            }

            html+= '</div>'
            
            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(sponsoImageElementSettings);
    }
    $.squaresRendererRegisterElement(sponsoImageElementSettings);

    /*------- Creating Gallery element NEED UPLOAD AND SAVE ON SERVER -------*/
    var carrouselElementOptions = {
        name: "Gallerie d'images",
        iconClass: "far fa-images",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-carrousel-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: ''
                }
            },
            gallerie: {
                file: {
                    name: 'Importer une image',
                    type: 'dropzone',
                    options: {
                        maxFiles: 10,
                    },
                    default: [{
                        infos:"",
                        url:"https://webcraftplugins.com/uploads/placeholder_image.png",
                    },
                    {
                        infos:"",
                        url:"https://webcraftplugins.com/uploads/placeholder_image.png",
                    },
                    {
                        infos:"",
                        url:"",
                    },
                    {
                        infos:"",
                        url:"",
                    },
                    {
                        infos:"",
                        url:"",
                    },
                    {
                        infos:"",
                        url:"",
                    },
                    {
                        infos:"",
                        url:"",
                    },
                    {
                        infos:"",
                        url:"",
                    },
                    {
                        infos:"",
                        url:"",
                    },
                    {
                        infos:"",
                        url:"",
                    }]   // Array not very fonctionnal see subtract Function at line 2204 on square.js 
                },
            }
        },
        controlGroupIcons: {
            gallerie: 'far fa-images'
        },
        // remove it to use fontSyle Controls Global;
        useFontControls: false,

        content: function (id) {

            var elemID = "owl-carousel-" + this.controls.general.id.getVal();
            var elemClass = this.controls.general.classes.getVal();
            
            if (id === 'geolocation') { elemClass += 'geolocation';
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
            
            var html =  '<div id="' + elemID +'" class="'+ elemClass + ' owl-carousel owl-theme +" style="' + this.controls.general.css.getVal() + this.fontStyles + '">';
            var value = this.controls.gallerie.file.getVal();
            for (var key in value){
                if(value[key].url)
                    html += '   <div><img src="'+this.controls.gallerie.file.getVal()[key].url +'" /></div>'
            }
            html +=     '</div>';
            html +=     '<script> $(document).ready(function(){';
            html +=     '   $(".owl-carousel").owlCarousel({';
            html +=     '       lazyLoad: true,center:true, items:1, loop:true, margin:10, autoHeight:true});'
            html +=     '   });';
            html +=     '</script>';

            return html;
        },
        render: function (options, id) {

            var elemID = "owl-carousel-" + options.general.id;
            var elemClass = options.general.classes;
            
            if (id === 'geolocation') { elemClass += 'geolocation';
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            var html =  '<div id="' + elemID +'" class="'+ elemClass + ' owl-carousel owl-theme" style="' + options.general.css + options.fontStyles + '">';
            var value = options.gallerie.file;
            for (var key in value){
                if(value[key].url)
                    html += '   <div><img src="'+options.gallerie.file[key].url +'" /></div>'
            }
            html +=     '</div>';

            html +=     '<script> $(document).ready(function(){';
            html +=     '   $(".owl-carousel").owlCarousel({';
            html +=     '       lazyLoad: true,center:true, items:1, loop:true, margin:10, autoHeight:true});'
            html +=     '   });';
            html +=     '</script>';
            
            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(carrouselElementOptions);
    }
    $.squaresRendererRegisterElement(carrouselElementOptions);

    /*------- Creating Sites And Reseaux element OK-------*/
    var siteReseauxElementOptions = {
        name: "Site & Médias",
        iconClass: "fa fa-globe",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-site-reseaux-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "text-align: center; font-weight: bold; font-family: 'Open Sans', sans-serif; font-size: 16px; margin: 0px; padding: 10px; "
                }
            },
            site: {
                input: {
                    name: 'Url',
                    type: 'Site',
                    default: {
                        url: 'https://www.culturmoov.com/',
                        texte: 'CulturMoov'
                    }
                },
                text_color: {
                    name: 'Couleur du texte',
                    type: 'color',
                    default: '#000000'
                },
            },
            reseaux: {
                all: {
                    name: 'Sélectionner vos réseaux sociaux',
                    type: 'Reseaux',
                    options: {
                        name: ["facebook-f","twitter","google","snapchat-ghost","instagram","pinterest","vimeo","tumblr","linkedin","youtube"],
                        url: ["http://www.facebook.com/votre-nom-utilisateur", "http://twitter.com/votre-nom-utilisateur" , "http://plus.google.com/votre-nom-utilisateur", "http://www.snapchat.com/add/votre-nom-utilisateur", "http://www.instagram.com/votre-nom-utilisateur", "http://www.pinterest.com/votre-nom-utilisateur", "http://vimeo.com/votre-nom-utilisateur", "http://votre-nom-utilisateur.tumblr.com", "http://www.linkedin.com/company/votre-nom-utilisateur", "http://www.youtube.com/channel/votre-nom-utilisateur" ],
                    },
                    default: {
                        facebook: {
                            check: 0,
                            url: 'https://www.facebook.com/culturmoov/',
                            color: "#435f9a",
                        },
                        twitter: {
                            check: 0,
                            url: 'https://twitter.com/romainprevalet',
                            color: "#2aa3ef",
                        },
                        google: {
                            check: 0,
                            url: 'https://plus.google.com/culturmoov',
                            color: "#dd4b3a",
                        },
                        snapchat: {
                            check: 0,
                            url: 'https://www.snapchat.com/add/romainartyfunk',
                            color: "#fffa37",
                        },
                        instagram: {
                            check: 0,
                            url: 'https://www.instagram.com/culturmoov/',
                            color: "#cc41a0",
                        },
                        pinterest: {
                            check: 0,
                            url: 'https://www.pinterest.com/culturmoov/',
                            color: "#cd1d21",
                        },
                        vimeo: {
                            check: 0,
                            url: 'https://vimeo.com/culturmoov',
                            color: "#1eb3e8",
                        },
                        tumblr: {
                            check: 0,
                            url: 'http://palaisdetokyo.tumblr.com/',
                            color: "#36455e",
                        },
                        linkedin: {
                            check: 0,
                            url: 'https://www.linkedin.com/company/culturmoov',
                            color: "#1178b3",
                        },
                        youtube: {
                            check: 0,
                            url: 'https://www.youtube.com/channel/UCagf1CqajknsFZJlG8nov5g',
                            color: "#cd191e",
                        },
                    }
                }
            }
        },
        controlGroupIcons: {
            site: 'fa fa-globe',
            reseaux: 'fab fa-facebook-f'
        },
        useFontControls: false,
        content: function (id) {

            var elemID = "site-" + this.controls.general.id.getVal();

            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = this.controls.general.css.getVal();

            var urlStyle = '';
            urlStyle += 'color: ' + this.controls.site.text_color.getVal() + '; ';
            urlStyle += 'text-decoration: none; ';

            var url = this.controls.site.input.getVal().url;

            var texte = this.controls.site.input.getVal().texte;
            
            var html = '';
            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + '">';
            html += '   <div class="site-url-internet" style="margin-bottom:2px">'
            html += '       <a  style="' + urlStyle + '" target="_blank" " href="' + url + '">'+ texte +'</a>';
            html += '   </div>';
            html += '   <div class="site-icon-reseaux-sociaux" style="padding:5px; font-size:1.4em; ">'
            if (this.controls.reseaux.all.getVal().facebook.check === 1)
                html += '   <a href="' + this.controls.reseaux.all.getVal().facebook.url + '" target="_blank" style="padding:5px; text-decoration: none; color: ' + this.controls.reseaux.all.getVal().facebook.color + '; " class="fab fa-facebook-f"></a>'
            if (this.controls.reseaux.all.getVal().twitter.check === 1)
                html += '   <a href="' + this.controls.reseaux.all.getVal().twitter.url + '" target="_blank" style="padding:5px; text-decoration: none; color: ' + this.controls.reseaux.all.getVal().twitter.color + '; " class="fab fa-twitter"></a>'
            if (this.controls.reseaux.all.getVal().google.check === 1)
                html += '   <a href="' + this.controls.reseaux.all.getVal().google.url + '" target="_blank" style="padding:5px; text-decoration: none; color: ' + this.controls.reseaux.all.getVal().google.color + '; " class="fab fa-google"></a>'
            if (this.controls.reseaux.all.getVal().snapchat.check === 1)
                html += '   <a href="' + this.controls.reseaux.all.getVal().snapchat.url + '" target="_blank" style="padding:5px; text-decoration: none; color: ' + this.controls.reseaux.all.getVal().snapchat.color + '; " class="fab fa-snapchat-ghost"></a>'
            if (this.controls.reseaux.all.getVal().instagram.check === 1)
                html += '   <a href="' + this.controls.reseaux.all.getVal().instagram.url + '" target="_blank" style="padding:5px; text-decoration: none; color: ' + this.controls.reseaux.all.getVal().instagram.color + '; " class="fab fa-instagram"></a>'
            if (this.controls.reseaux.all.getVal().pinterest.check === 1)
                html += '   <a href="' + this.controls.reseaux.all.getVal().pinterest.url + '" target="_blank" style="padding:5px; text-decoration: none; color: ' + this.controls.reseaux.all.getVal().pinterest.color + '; " class="fab fa-pinterest"></a>'
            if (this.controls.reseaux.all.getVal().vimeo.check === 1)
                html += '   <a href="' + this.controls.reseaux.all.getVal().vimeo.url + '" target="_blank" style="padding:5px; text-decoration: none; color: ' + this.controls.reseaux.all.getVal().vimeo.color + '; " class="fab fa-vimeo"></a>'
            if (this.controls.reseaux.all.getVal().tumblr.check === 1)
                html += '   <a href="' + this.controls.reseaux.all.getVal().tumblr.url + '" target="_blank" style="padding:5px; text-decoration: none; color: ' + this.controls.reseaux.all.getVal().tumblr.color + '; " class="fab fa-tumblr"></a>'
            if (this.controls.reseaux.all.getVal().linkedin.check === 1)
                html += '   <a href="' + this.controls.reseaux.all.getVal().linkedin.url + '" target="_blank" style="padding:5px; text-decoration: none; color: ' + this.controls.reseaux.all.getVal().linkedin.color + '; " class="fab fa-linkedin"></a>'
            if (this.controls.reseaux.all.getVal().youtube.check === 1)
                html += '   <a href="' + this.controls.reseaux.all.getVal().youtube.url + '" target="_blank" style="padding:5px; text-decoration: none; color: ' + this.controls.reseaux.all.getVal().youtube.color + '; " class="fab fa-youtube"></a>'
            html += '   </div>';
            html += '</div>';
            
            
            return html;

        },
        render: function (options, id) {

            var elemID = "site-" + options.general.id;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = options.general.css;

            var urlStyle = '';
            urlStyle += 'color: ' + options.site.text_color + '; ';
            urlStyle += 'text-decoration: none; ';

            var url = options.site.input.url;

            var texte = options.site.input.texte;
            
            var html = '';
            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + '">';
            html += '   <div class="site-url-internet" style="margin-bottom:2px">'
            html += '       <a  style="' + urlStyle + '" target="_blank" " href="' + url + '">'+ texte +'</a>';
            html += '   </div>';
            html += '   <div class="site-icon-reseaux-sociaux" style="padding:5px; font-size:1.4em; ">'
            if (options.reseaux.all.facebook.check === 1)
                html += '   <a href="' + options.reseaux.all.facebook.url + ' " target="_blank" style="padding:5px; text-decoration: none; color: ' + options.reseaux.all.facebook.color + '; " class="fab fa-facebook-f"></a>'
            if (options.reseaux.all.twitter.check === 1)
                html += '   <a href="' + options.reseaux.all.twitter.url + ' " target="_blank" style="padding:5px; text-decoration: none; color: ' + options.reseaux.all.twitter.color + '; " class="fab fa-twitter"></a>'
            if (options.reseaux.all.google.check === 1)
                html += '   <a href="' + options.reseaux.all.google.url + ' " target="_blank" style="padding:5px; text-decoration: none; color: ' + options.reseaux.all.google.color + '; " class="fab fa-google"></a>'
            if (options.reseaux.all.snapchat.check === 1)
                html += '   <a href="' + options.reseaux.all.snapchat.url + ' " target="_blank" style="padding:5px; text-decoration: none; color: ' + options.reseaux.all.snapchat.color + '; " class="fab fa-snapchat-ghost"></a>'
            if (options.reseaux.all.instagram.check === 1)
                html += '   <a href="' + options.reseaux.all.instagram.url + ' " target="_blank" style="padding:5px; text-decoration: none; color: ' + options.reseaux.all.instagram.color + '; " class="fab fa-instagram"></a>'
            if (options.reseaux.all.pinterest.check === 1)
                html += '   <a href="' + options.reseaux.all.pinterest.url + ' " target="_blank" style="padding:5px; text-decoration: none; color: ' + options.reseaux.all.pinterest.color + '; " class="fab fa-pinterest"></a>'
            if (options.reseaux.all.vimeo.check === 1)
                html += '   <a href="' + options.reseaux.all.vimeo.url + ' " target="_blank" style="padding:5px; text-decoration: none; color: ' + options.reseaux.all.vimeo.color + '; " class="fab fa-vimeo"></a>'
            if (options.reseaux.all.tumblr.check === 1)
                html += '   <a href="' + options.reseaux.all.tumblr.url + ' " target="_blank" style="padding:5px; text-decoration: none; color: ' + options.reseaux.all.tumblr.color + '; " class="fab fa-tumblr"></a>'
            if (options.reseaux.all.linkedin.check === 1)
                html += '   <a href="' + options.reseaux.all.linkedin.url + ' " target="_blank" style="padding:5px; text-decoration: none; color: ' + options.reseaux.all.linkedin.color + '; " class="fab fa-linkedin"></a>'
            if (options.reseaux.all.youtube.check === 1)
                html += '   <a href="' + options.reseaux.all.youtube.url + ' " target="_blank" style="padding:5px; text-decoration: none; color: ' + options.reseaux.all.youtube.color + '; " class="fab fa-youtube"></a>'
            html += '   </div>';
            html += '</div>';
            
            
            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(siteReseauxElementOptions);
    }
    $.squaresRendererRegisterElement(siteReseauxElementOptions);


    /*------- Creating Youtube iframe element -------*/
    var youtubeElementSettings = {
        name: "YouTube",
        iconClass: "fab fa-youtube",
        useStyleControls: false,
        useFontControls: false,
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-youtube-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "text-align: center; font-weight: bold; font-family: 'Open Sans', sans-serif; font-size: 16px; margin: 0px; padding: 0px; "
                }
            },
            youtube: {
                embed_code: {
                    name: 'Embed Code',
                    type: 'textarea-iframe-with-id',
                    default: {
                        iframe: '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/6NC_ODHu5jg" frameborder="0" allowfullscreen></iframe>',
                        iframe_id: ''
                    }
                },
            }
        },
        controlGroupIcons: {
            youtube: 'fab fa-youtube'
        },

        content: function (id) {

            var elemID = "youtube-" + this.controls.general.id.getVal();

            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = this.controls.general.css.getVal();

            var embedCode = this.controls.youtube.embed_code.getVal().iframe;
            var embedId = this.controls.youtube.embed_code.getVal().iframe_id;
            var html = '';

            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';

            /*----- NEED TO GET THE ID of the Iframe to parse control after to stop playing with reload src ----*/
            embedCode = embedCode.replace('<iframe ', '<iframe id="youtube-' + embedId + '" ');
            // Set width always 100%
            embedCode = embedCode.replace(/width="\d+"/g, 'width="100%"');
            // Set height always auto
            embedCode = embedCode.replace(/height="\d+"/g, 'height="auto"');

            html += embedCode;

            html += '</div>';

            return html;
        },
        render: function (options, id) {
           
            var elemID = "youtube-" + options.general.id;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = options.general.css;

            var embedCode = options.youtube.embed_code.iframe;
            var embedId = options.youtube.embed_code.iframe_id;
            var html = '';

            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';

            /*----- NEED TO GET THE ID of the Iframe to parse control after ----*/
            embedCode = embedCode.replace('<iframe ', '<iframe id="youtube-' + embedId + '" ');
            // Set width always 100%
            embedCode = embedCode.replace(/width="\d+"/g, 'width="100%"');
            // Set height always auto
            embedCode = embedCode.replace(/height="\d+"/g, 'height="auto"');

            html += embedCode;

            html += '</div>';

            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(youtubeElementSettings);
    }
    $.squaresRendererRegisterElement(youtubeElementSettings);

    /*------- Creating Upload Video element -------*/
    var videoElementSettings = {
        name: "Vidéo",
        iconClass: "fas fa-video",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-video-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "width:100%; height:auto; text-align: center; font-weight: bold; font-family: 'Open Sans', sans-serif; font-size: 16px; margin: 0px; padding: 0px; "
                }
            },
            video: {
                video: {
                    name: 'URL de la vidéo',
                    type: 'video-url',
                    default: {
                        url: 'http://webcraftplugins.com/uploads/example_video.webm',
                        video_id: ''
                    }
                },
                video_has_cover: {
                    name: 'rajouter une cover à la vidéo',
                    type: 'switch',
                    default: 0
                },
                image_link: {
                    name: 'url de l\'image',
                    type: 'url',
                    default: ''
                },
                image_server: {
                    name: 'télécharger une cover',
                    type: 'dropzone',
                    options: {
                        maxFiles: 1,
                    },
                    default: [{
                        infos:"",
                        url:"",
                    }]   // Array not very fonctionnal see subtract Function at line 2204 on square.js 
                },
            }
        },
        useFontControls: false,
        controlGroupIcons: {
            video: 'fas fa-video'
        },
        content: function (id) {
            var elemID = "video-" + this.controls.general.id.getVal();

            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = this.controls.general.css.getVal();
            var cover_exit = "";
            if(parseInt(this.controls.video.video_has_cover.getVal(),10) == 1){
                if(this.controls.video.image_server.getVal()[0].url){
                    cover_exit += 'poster="' + this.controls.video.image_server.getVal()[0].url + '" ';
                } else if (this.controls.video.image_link.getVal()){
                    cover_exit += 'poster="' + this.controls.video.image_link.getVal() + '" ';
                } else {
                    cover_exit += "";
                }
            }
            var url = this.controls.video.video.getVal().url;

            var video = '<video ' + cover_exit + 'id="'+ this.controls.video.video.getVal().video_id + '" controls style="' + elemStyle + '" class="' + elemClass + '-video-url">'
            /* check extension of video */
            var ext = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2);
            if (ext)
                video += '  <source src="' + url + '" type="video/'+ ext +'">'
            video += '</video>';
            var html = '';
            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';
            html +=     video
            html += '</div>';
            return html;
        },
        render: function (options, id) {
            var elemID = "video-" + options.general.id;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = options.general.css;
            var cover_exit = "";
            if(parseInt(options.video.video_has_cover,10) == 1){
                if(options.video.image_server[0].url){
                    cover_exit += 'poster="' + options.video.image_server[0].url + '" ';
                } else if (options.video.image_link){
                    cover_exit += 'poster="' + options.video.image_link + '" ';
                } else {
                    cover_exit += "";
                }
            }
            var url = options.video.video.url;

            var video = '<video ' + cover_exit + 'id="'+ options.video.video.video_id + '" controls style="' + elemStyle + '" class="' + elemClass + '-video-url">'
            /* check extension of video */
            var ext = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2);
            if (ext)
                video += '  <source src="' + url + '" type="video/'+ ext +'">'
            video += '</video>';
            var html = '';
            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';
            html +=     video
            html += '</div>';
            return html;
        },
    }
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(videoElementSettings);
    }
    $.squaresRendererRegisterElement(videoElementSettings);

    /*------- Creating Audio element -------*/
    var soundElementOptions = {
        name: "Audio",
        iconClass: "fa fa-volume-up",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-audio-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: 'width:100%;'
                }
            },
            audio: {
                audio: {
                    name: 'URL du fichier audio',
                    type: 'audio-url',
                    default: {
                        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                        audio_id: ''
                    }
                },
            }
        },
        controlGroupIcons: {
            audio: 'fa fa-volume-up'
        },
        useFontControls: false,
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function (id) {
            var elemID = "audio-" + this.controls.general.id.getVal();

            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = this.controls.general.css.getVal();
           
            var url = this.controls.audio.audio.getVal().url;

            var audio = '<audio id="'+ this.controls.audio.audio.getVal().audio_id + '" controls style="' + elemStyle + '" class="' + elemClass + '-url">'
            /* check extension of audio */
            var ext = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2);
            if (ext)
                audio += '  <source src="' + url + '" type="audio/'+ ext +'">'
            audio += '</audio>';
            var html = '';
            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';
            html +=     audio
            html += '</div>';
            return html;
        },
        render: function (options, id) {
            var elemID = "audio-" + options.general.id;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = options.general.css;
           
            var url = options.audio.audio.url;

            var audio = '<audio id="'+ options.audio.audio.audio_id + '" controls style="' + elemStyle + '" class="' + elemClass + '-url">'
            /* check extension of audio */
            var ext = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2);
            if (ext)
                audio += '  <source src="' + url + '" type="audio/'+ ext +'">'
            audio += '</audio>';
            var html = '';
            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';
            html +=     audio
            html += '</div>';
            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(soundElementOptions);
    }
    $.squaresRendererRegisterElement(soundElementOptions);

    /*------- Creating SketchFab element -------*/
    var SketchElementOptions = {
        useStyleControls: false,
        useFontControls: false,
        name: "SketchFab",
        iconClass: "fa fa-cube",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-sketchfab-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "text-align: center; font-weight: bold; font-family: 'Open Sans', sans-serif; font-size: 16px; margin: 0px; padding: 0px; "
                }
            },
            sketchfab: {
                embed_code: {
                    name: 'embed code',
                    type: 'textarea-iframe-with-id',
                    default: {
                        iframe: '<iframe width="340" height="280" src="https://sketchfab.com/models/f2bed2f433a740299abdb598d7678627/embed" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>  ',
                        iframe_id: ''
                    }
                },
               
            }
        },
        controlGroupIcons: {
            sketchfab: 'fa fa-cube'
        },
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function (id) {
            var elemID = "sketchfab-" + this.controls.general.id.getVal();

            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = this.controls.general.css.getVal();
            // to do:
            // get the embed code from the controls, wrap it in a div, apply ID, CSS and classes to the DIV and set the iframe to 100% width and height
            // also implement the "allow fullscreen" option

            var embedCode = this.controls.sketchfab.embed_code.getVal().iframe;
            var embedId = this.controls.sketchfab.embed_code.getVal().iframe_id;
            var html = '';

            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';

            // Allow fullscreen
            // embedCode = embedCode.replace('allowfullscreen', '');
            // if (parseInt(this.controls.youtube.allow_fullscreen.getVal(), 10) == 1 && embedCode.indexOf('allowfullscreen') == -1) {
                // embedCode = embedCode.replace('></iframe>', ' allowfullscreen></iframe>');
            // }

            /*----- NEED TO GET THE ID of the Iframe to parse control after to stop playing with reload src ----*/
            embedCode = embedCode.replace('<iframe ', '<iframe id="sketchfab-' + embedId + '" ');
            // Set width always 100%
            embedCode = embedCode.replace(/width="\d+"/g, 'width="100%"');
            // Set height always auto
            embedCode = embedCode.replace(/height="\d+"/g, 'height="auto"');

            html += embedCode;

            html += '</div>';

            return html;
        },
        render: function (options, id) {
            // to do:
            // get the embed code from the controls, wrap it in a div, apply ID, CSS and classes to the DIV and set the iframe to 100% width and height
            // also implement the "allow fullscreen" option

            var elemID = "youtube-" + options.general.id;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = options.general.css;
            // to do:
            // get the embed code from the controls, wrap it in a div, apply ID, CSS and classes to the DIV and set the iframe to 100% width and height
            // also implement the "allow fullscreen" option

            var embedCode = options.sketchfab.embed_code.iframe;
            var embedId = options.sketchfab.embed_code.iframe_id;
            var html = '';

            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';

            // Allow fullscreen
            // embedCode = embedCode.replace('allowfullscreen', '');
            // if (parseInt(options.youtube.allow_fullscreen, 10) == 1 && embedCode.indexOf('allowfullscreen') == -1) {
                // embedCode = embedCode.replace('></iframe>', ' allowfullscreen></iframe>');
            // }

            /*----- NEED TO GET THE ID of the Iframe to parse control after to stop playing with reload src ----*/
            embedCode = embedCode.replace('<iframe ', '<iframe id="sketchfab-' + embedId + '" ');
            // Set width always 100%
            embedCode = embedCode.replace(/width="\d+"/g, 'width="100%"');
            // Set height always auto
            embedCode = embedCode.replace(/height="\d+"/g, 'height="auto"');

            html += embedCode;

            html += '</div>';

            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(SketchElementOptions);
    }
    $.squaresRendererRegisterElement(SketchElementOptions);



    /*------- Creating Quizz With Json element -------*/
    var QuizzJsonElementOptions = {
        useStyleControls: false,
        useFontControls: false,
        name: "Quiz",
        iconClass: "fa fa-gamepad",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-quizz-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "text-align: center; font-family: 'Open Sans', sans-serif; font-size: 16px; margin: 0px; padding: 0px; "
                }
            },
            quizz: {
                quizz: {
                    name: 'Selectionner votre quiz',
                    type: 'Quizz',
                    default: {
                        html:'<div style="padding:10px; font-size:14px;"><p>Choisissez un quiz dans la liste déroulante dans paramètre</p></div>',
                        quizz: 3,
                        title: '',
                        quizzId:'',
                        background: "#511F46",
                        text: "#FFFFFF"
                    }
                },
                // button: {
                //     name: 'Style des boutons',
                //     type: 'color-multi',
                //     options: 1,
                //     default:{ 
                //         background: "#511F46",
                //         text: "#FFFFFF"
                //     }
                // }
            }
        },
        controlGroupIcons: {
            quizz: 'fa fa-gamepad'
        },
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function (id) {
            var elemID = "quizz-" + this.controls.general.id.getVal();

            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = this.controls.general.css.getVal();

            var html = '';

            var quizzElement = this.controls.quizz.quizz.getVal().html;
            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';
            html +=    quizzElement
            html += '</div>';

            return html;
        },
        render: function (options, id) {
            var elemID = "quizz-" + options.general.id;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
        
            var elemStyle = options.general.css;

            var html = '';
            var quizzElement = options.quizz.quizz.html;
            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';
            html +=     quizzElement;
            html += '</div>';

            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(QuizzJsonElementOptions);
    }
    $.squaresRendererRegisterElement(QuizzJsonElementOptions);



    /*------- Creating btn classic element -------*/
    var buttonElementSettings = {
        name: "Bouton",
        iconClass: "fa fa-link",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-button-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "text-align: center; font-weight: bold; font-family: 'Open Sans', sans-serif; font-size: 16px; margin: 0px; padding: 10px; "
                }
            },
            button: {
                button: {
                    name: 'Style du bouton',
                    type: 'color-multi',
                    options: 1,
                    default:{ 
                        background: "#511F46",
                        text: "#FFFFFF"
                    },
                },
                input: {
                    name: 'Url',
                    type: 'Site',
                    default: {
                        url: 'https://www.culturmoov.com/',
                        texte: 'CulturMoov'
                    }
                },
            }
        },
        controlGroupIcons: {
            button: 'fa fa-link'
        },
        useFontControls: false,
        content: function (id) {

            var elemID = "button-" + this.controls.general.id.getVal();
            var elemStyle = this.controls.general.css.getVal();

            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            /* configure button Google */
            var buttonStyle = '';
            buttonStyle = 'background-color: ' + this.controls.button.button.getVal().background +'; ';
            buttonStyle += 'border-color: ' + this.controls.button.button.getVal().background + '; ';
            buttonStyle += 'color: ' + this.controls.button.button.getVal().text + '; ';
            buttonStyle += 'display: block; ';
            buttonStyle += 'height: 40px; ';
            buttonStyle += 'line-height: 28px;';
            buttonStyle += 'border-radius: 10px; ';
            buttonStyle += 'padding-left: 20px; ';
            buttonStyle += 'padding-right: 20px; ';
            buttonStyle += 'margin: auto; ';
            buttonStyle += 'width: 70%; ';
            buttonStyle += 'text-decoration: none; '

            var textButton = this.controls.button.input.getVal().texte;

            var urlButton;
            if ($.imageMapProIsMobile()){
                urlButton = '';
            } else {
                this.controls.button.input.getVal().url ? urlButton = 'href="' + this.controls.button.input.getVal().url + '" target="_blank"' : urlButton = '';
            }

            var html = '';

            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + '" >';
            html += '       <a id="button-' + elemID + '" class="btn btn-primary" style="' + buttonStyle + '" role="button"' + urlButton + '>';
            html +=             textButton;
            html += '       </a>';
            html += '</div>';

            return html;

            // return '<div id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + '" class="' + this.controls.general.classes.getVal() + '"><a href="' + this.controls.button.link_to.getVal() + '" style="' + buttonStyle + '" ' + newTab + ' class="squares-button">' + this.controls.button.text.getVal() + '</a></div>';
        },
        render: function (options, id) {

            var elemID = "button-" + options.general.id;
            var elemStyle = options.general.css;

            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }

            /* configure button Google */
            var buttonStyle = '';
            buttonStyle = 'background-color: ' + options.button.button.background +'; ';
            buttonStyle += 'border-color: ' + options.button.button.background + '; ';
            buttonStyle += 'color: ' + options.button.button.text + '; ';
            buttonStyle += 'display: block; ';
            buttonStyle += 'height: 40px; ';
            buttonStyle += 'line-height: 28px;';
            buttonStyle += 'border-radius: 10px; ';
            buttonStyle += 'padding-left: 20px; ';
            buttonStyle += 'padding-right: 20px; ';
            buttonStyle += 'margin: auto; ';
            buttonStyle += 'width: 70%; ';
            buttonStyle += 'text-decoration: none; '

            var textButton = options.button.input.texte;

            var urlButton;
            if ($.imageMapProIsMobile()){
                urlButton = '';
            } else {
                options.button.input.url ? urlButton = 'href="' + options.button.input.url + '" target="_blank"' : urlButton = '';
            }

            var html = '';

            html += '<div id="' + elemID + '" class="' + elemClass + '" style="' + elemStyle + '" >';
            html += '       <a id="button-' + elemID + '" class="btn btn-primary" style="' + buttonStyle + '" role="button"' + urlButton + '>';
            html +=             textButton;
            html += '       </a>';
            html += '</div>';

            return html; 
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(buttonElementSettings);
    }
    $.squaresRendererRegisterElement(buttonElementSettings);

    /*-------------------------------------------------------------*/
    /*-------------------------------------------------------------*/
    /*-------------------------------------------------------------*/
    /*-------------------------------------------------------------*/

    /** 
     * OLD VAR NOT USE
    */
    /*------- creating table element NOT USE -------*/
    /*var CelluleElementOptions = {
        name: "cellule",
        iconClass: "fa fa-minus-square-o",
        controls: {
            text: {
                text: {
                    name: 'Text',
                    type: 'textarea',
                    default: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                }
            }
        },
        controlGroupIcons: {
            text: 'fa fa-ellipsis-h'
        },
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function () {
            var text = this.controls.text.text.getVal();

            // Strip slashes
            text = text.replace(/\\(.)/mg, "$1");

            // Replace line breaks with <br>
            text = text.replace(/\n/mg, "<br>");

            return '<p id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + this.fontStyles + ' margin: 0; padding: 0;" class="' + this.controls.general.classes.getVal() + '">' + text + '</p>';
        },
        render: function (options) {
            var text = options.text.text;

            // Strip slashes
            text = text.replace(/\\(.)/mg, "$1");

            // Replace line breaks with <br>
            text = text.replace(/\n/mg, "<br>");

            return '<p id="' + options.general.id + '" style="' + options.general.css + options.fontStyles + ' margin: 0; padding: 0;" class="' + options.general.classes + '">' + text + '</p>';
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(CelluleElementOptions);
    } $.squaresRendererRegisterElement(CelluleElementOptions);*/

    /*------- creating old Heading element NOT USE -------*/
    /* var headingElementOptions = {
        name: "Heading",
        iconClass: "fa fa-header",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: ''
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: ''
                }
            },
            heading: {
                text: {
                    name: 'Text',
                    type: 'text',
                    default: 'Lorem Ipsum'
                },
                heading: {
                    name: 'Heading',
                    type: 'select',
                    options: ['h1', 'h2', 'h3'],
                    default: 'h3'
                }
            }
        },
        controlGroupIcons: {
            heading: 'fa fa-header'
        },
        content: function () {
            return '<' + this.controls['heading']['heading'].getVal() + ' id="' + this.controls['general']['id'].getVal() + '" style="' + this.controls['general']['css'].getVal() + this.fontStyles + ' margin: 0; padding: 0;" class="' + this.controls['general']['classes'].getVal() + '">' + this.controls.heading.text.getVal() + '</' + this.controls['heading']['heading'].getVal() + '>';
        },
        render: function (options) {
            return '<' + options['heading']['heading'] + ' id="' + options['general']['id'] + '" style="' + options['general']['css'] + options.fontStyles + ' margin: 0; padding: 0;" class="' + options['general']['classes'] + '">' + options.heading.text + '</' + options['heading']['heading'] + '>';
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(headingElementOptions);
    }
    $.squaresRendererRegisterElement(headingElementOptions); */

    /*------- Creating Quizz Iframe element -------*/
    /*------- Uncomment to use it -------
    var QuizzIframeElementOptions = {
        useStyleControls: false,
        useFontControls: false,
        name: "Quizz",
        iconClass: "fa fa-gamepad",
        controls: {
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: 'sq-element-sketchfab-'
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: "text-align: center; font-weight: bold; font-family: 'Open Sans', sans-serif; font-size: 16px; margin: 0px; padding: 0px; "
                }
            },
            quizz: {
                embed_code: {
                    name: 'embed code',
                    type: 'textarea-iframe-with-id',
                    default: {
                        iframe: '<iframe src="http://195.154.34.247:8099/drupal/?q=h5p/embed/20" width="928" height="606" frameborder="0" allowfullscreen="allowfullscreen"></iframe>',
                        iframe_id: ''
                    }
                }
            }
        },
        controlGroupIcons: {
            quizz: 'fa fa-gamepad'
        },
        content: function (id) {
            var elemID = "quizz-" + this.controls.general.id.getVal();
            var elemClass = this.controls.general.classes.getVal();
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
            var elemStyle = this.controls.general.css.getVal();
            var embedCode = this.controls.quizz.embed_code.getVal().iframe;
            var embedId = this.controls.quizz.embed_code.getVal().iframe_id;
            var html = '';
            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';
            embedCode = embedCode.replace('<iframe ', '<iframe id="quizz-' + embedId + '" ');
            embedCode = embedCode.replace(/width="\d+"/g, 'width="100%"');
            embedCode = embedCode.replace(/height="\d+"/g, 'height="auto"');
            html += embedCode;
            html += '</div>';
            return html;
        },
        render: function (options, id) {
            var elemID = "quizz-" + options.general.id;
            var elemClass = options.general.classes;
            if (id === 'geolocation'){ elemClass += 'geolocation'
            } else if (id === 'infoslegale') { elemClass += 'infoslegale';
            } else { elemClass += 'pi'; }
            var elemStyle = options.general.css;
            var embedCode = options.quizz.embed_code.iframe;
            var embedId = options.quizz.embed_code.iframe_id;
            var html = '';
            html += '<div id="' + elemID + '" style="' + elemStyle + '" class="' + elemClass + '">';
            embedCode = embedCode.replace('<iframe ', '<iframe id="quizz-' + embedId + '" ');
            embedCode = embedCode.replace(/width="\d+"/g, 'width="100%"');
            embedCode = embedCode.replace(/height="\d+"/g, 'height="auto"');
            html += embedCode;
            html += '</div>';
            return html;
        }
    };
    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(QuizzIframeElementOptions);
    }
    $.squaresRendererRegisterElement(QuizzIframeElementOptions);*/

})(jQuery, window, document);
