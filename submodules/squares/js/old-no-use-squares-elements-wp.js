// Squares
// Description: Interactive and embeddable HTML content builder.
// Author: Ayoub Ghaddab
// License:IRSEL

; (function ($, window, document, undefined) {
    // Register built-in elements using the public API
    var soundElementOptions = {
        name: "Audio",
        iconClass: "fa fa-volume-up",
        controls: {
            text: {
                text: {
                    name: 'Url mp3',
                    type: 'text',
                    default: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                },
                autoplay: {
                    name: 'Autoplay',
                    type: 'switch',
                    default: 0
                }
                ,
                loop: {
                    name: 'Loop',
                    type: 'switch',
                    default: 0
                }
                ,
                manuel: {
                    name: 'Manuel',
                    type: 'switch',
                    default: 0
                }
            }
        },
        controlGroupIcons: {
            text: 'fa fa-ellipsis-h'
        },
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function () {
            var html = '';
            var audioTagAtts = '';

            if (parseInt(this.controls.text.autoplay.getVal(), 10) == 1) {
                audioTagAtts += ' autoplay ';
            }
            if (parseInt(this.controls.text.loop.getVal(), 10) == 1) {
                audioTagAtts += ' loop ';
            }
            if (parseInt(this.controls.text.manuel.getVal(), 10) == 1) {

                audioTagAtts = '';
            }
            return '<div><audio id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal()+';width:100%" controls class="' + this.controls.general.classes.getVal() + '"><source  src="'+this.controls.text.text.getVal() +'" type="audio/mp3"></audio></div>';
        },
        render: function (options) {
            var html = '';
            var audioTagAtts = '';
           
            if (options.text.autoplay == 1) {
                audioTagAtts += ' autoplay ';
            }
            if (options.text.loop == 1) {
                audioTagAtts += ' loop ';
            }
            if (options.text.manuel == 1) {

                audioTagAtts = '';
            }

            return '<div><audio id="' + options.general.id + '" style="' + options.general.css  + ';width:100%" controls class="' + options.general.classes + '"><source  src="'+options.text.text+'" type="audio/mp3"></audio></div>';
        }
    };

    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(soundElementOptions);
    }
    $.squaresRendererRegisterElement(soundElementOptions);




    var JoursHeuresElementOptions = {
        name: "JoursHeures",
        iconClass: "fa fa-calendar-alt",
        controls: {
            text: {
                text: {
                    name: 'Url mp3',
                    type: 'text',
                    default: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                },
                autoplay: {
                    name: 'Autoplay',
                    type: 'switch',
                    default: 0
                }
                ,
                loop: {
                    name: 'Loop',
                    type: 'switch',
                    default: 0
                }
                ,
                manuel: {
                    name: 'Manuel',
                    type: 'switch',
                    default: 0
                }
            }
        },
        controlGroupIcons: {
            text: 'fa fa-calendar-alt'
        },
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function () {
            var html = '';
            var audioTagAtts = '';

        
            return '<div><audio id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal()+';width:100%" controls class="' + this.controls.general.classes.getVal() + '"><source  src="'+this.controls.text.text.getVal() +'" type="audio/mp3"></audio></div>';
        },
        render: function (options) {
            var html = '';
            var audioTagAtts = '';
           
       

            return '<div><audio id="' + options.general.id + '" style="' + options.general.css  + ';width:100%" controls class="' + options.general.classes + '"><source  src="'+options.text.text+'" type="audio/mp3"></audio></div>';
        }
    };

    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(JoursHeuresElementOptions);
    }
    $.squaresRendererRegisterElement(JoursHeuresElementOptions);



   // creating table element 

   /*
   var CelluleElementOptions = {
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
}
$.squaresRendererRegisterElement(CelluleElementOptions);

   */
    var paragraphElementOptions = {
        name: "Paragraph",
        iconClass: "fa fa-paragraph",
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
            console.log("COUCOU");
            
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
        $.squaresRegisterElement(paragraphElementOptions);
    }
    $.squaresRendererRegisterElement(paragraphElementOptions);


    var paragraphElementOptions = {
        name: "Gallerie d'images",
        iconClass: "fa fa-picture-o",
        controls: {
            text: {
                // text: {
                //     name: 'Text',
                //     type: 'textarea',
                //     default: 'habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                // },
                url1: {
                    name: 'Image URL 1',
                    type: 'text',
                    default: 'http://www.dynamicdrive.com/dynamicindex4/pool.jpg'
                },
                url2: {
                    name: 'Image URL 2',
                    type: 'text',
                    default: 'http://www.dynamicdrive.com/dynamicindex4/fruits.jpg'
                },
                url3: {
                    name: 'Image URL 3',
                    type: 'text',
                    default: 'http://www.dynamicdrive.com/dynamicindex4/autumn.jpg'
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

         //   return '<p id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + this.fontStyles + ' margin: 0; padding: 0;" class="' + this.controls.general.classes.getVal() + '">' + text + '</p>';
            return '<div  style="' + this.controls.general.css.getVal() + this.fontStyles + ' margin: 0; padding: 0;"  id="touchgallery1" class="touchgallery"> <ul> <li><img src="'+this.controls.text.url1.getVal()+'" /></li> <li><img src="'+this.controls.text.url2.getVal()+'" /></li> <li><img src="'+this.controls.text.url3.getVal()+'" /></li> <li><img src="http://www.dynamicdrive.com/dynamicindex4/autumn.jpg" /></li> </ul> </div><script> jQuery(function(){ $("div#touchgallery1").touchgallery({  width: 250, height: 200 }); });</script>'
        },
        render: function (options) {
            var text = options.text.text;

            // Strip slashes
            text = text.replace(/\\(.)/mg, "$1");

            // Replace line breaks with <br>
            text = text.replace(/\n/mg, "<br>");

            return '<div  style="' + options.general.css + options.fontStyles + ' margin: 0; padding: 0;" id="touchgallery1" class="touchgallery"> <ul> <li><img src="'+options.text.url1+'" /></li> <li><img src="'+options.text.url2+'" /></li> <li><img src="'+options.text.url3+'" /></li> <li><img src="http://www.dynamicdrive.com/dynamicindex4/autumn.jpg" /></li> </ul> </div><script> jQuery(function(){  $("div#touchgallery1").touchgallery({  width: 250, height: 200 }); });</script>'
        }
    };

    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(paragraphElementOptions);
    }
    $.squaresRendererRegisterElement(paragraphElementOptions);



    var headingElementOptions = {
        name: "Heading",
        iconClass: "fa fa-header",
        controls: {
            heading: {
                text: {
                    name: 'Text',
                    type: 'text',
                    default: 'Lorem Ipsum2'
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
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
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
    $.squaresRendererRegisterElement(headingElementOptions);
// creating header for culturMoov

var TitreElementOptions = {
    name: "Titre",
    iconClass: "fa fa-font",
    controls: {
        heading: {
            text: {
                name: 'Text',
                type: 'text',
                default: 'Lorem Ipsum3'
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
        heading: 'fa fa-font'
    },
    // Obsolete with the "render" function.
    // To be removed after squares.js is reworked to use the "render" function.
    content: function () {
        return '<' + this.controls['heading']['heading'].getVal() + ' id="' + this.controls['general']['id'].getVal() + '" style="' + this.controls['general']['css'].getVal() + this.fontStyles + '" class="' + this.controls['general']['classes'].getVal() + '">' + this.controls.heading.text.getVal() + '</' + this.controls['heading']['heading'].getVal() + '>';
    },
    render: function (options) {
        return '<' + options['heading']['heading'] + ' id="' + options['general']['id'] + '" style="' + options['general']['css'] + options.fontStyles + '" class="' + options['general']['classes'] + '">' + options.heading.text + '</' + options['heading']['heading'] + '>';
    }
};

if ($.squaresRegisterElement) {
    $.squaresRegisterElement(TitreElementOptions);
}
$.squaresRendererRegisterElement(TitreElementOptions);
//creation the table for date

//creation titre 
var SiteElementOptions = {
    name: "Site",
    iconClass: "fa fa-globe",
    controls: {
        heading: {
            text: {
                name: 'Url',
                type: 'text',
                default: 'https://www.culturmoov.com/'
            },
            text_head: {
                name: 'Site',
                type: 'text',
                default: 'Culturmoov'
            },
            newtab:{
                name:'Ouvrir dans une nouvelle fenêtre',
                type:'switch',
                default:0
            }
            
        }
    },
    controlGroupIcons: {
        heading: 'fa fa-font'
    },
    // Obsolete with the "render" function.
    // To be removed after squares.js is reworked to use the "render" function.
    content: function () {
       
        this.controls.font.text_align.setVal("center");
       // this.controls.heading.newtab.setVal(1);
        var open ;
        if(parseInt(this.controls.heading.newtab.getVal()== 1)){
            open = "yes";
        }else{
            open = "no";
        }                                                                                                                                                                                                           
        return '<a id="' + this.controls.general.id.getVal() + '" style="color:#FF6631;font-size:18px;font-style:bold;margin-left:10px;font-weight:bold;' + this.controls.general.css.getVal() + '" target="_blank" href="'+this.controls.heading.text.getVal()+'">'+this.controls.heading.text_head.getVal()+'</a>';

    },
    render: function (options) {
      //  this.controls.font.text_align.setVal("center");
        var open;
        if(parseInt(options.heading.new_tab) == 1){
            open = "yes";
        }else{
            open = "no";
        }
      //  return '<a id="' + options.general.id + '" style="color:#FF6631;font-size:18px;font-style:bold;margin-left:10px;font-weight:bold;'+options.general.css+'" target="_blank" onclick="window.open('+options.heading.text+', "_system", location='+open+');">'+options.heading.text_head+'</a>';
        return '<a id="' + options.general.id + '" style="color:#FF6631;font-size:18px;font-style:bold;margin-left:10px;font-weight:bold;' + options.general.css + '" target="_blank" href="'+options.heading.text+'"  >'+options.heading.text_head+'</a>';

    }
};

if ($.squaresRegisterElement) {
    $.squaresRegisterElement(SiteElementOptions);
}
$.squaresRendererRegisterElement(SiteElementOptions);
//creation the table for date


    var imageElementSettings = {
        name: "Image",
        iconClass: "fa fa-camera",
        controls: {
            image: {
                url: {
                    name: 'Image URL',
                    type: 'text',
                    default: 'https://webcraftplugins.com/uploads/placeholder_image.png'
                }/*,
                file: {
                    name: 'Télécharger une image depuis votre ordinateur',
                    type: 'file',
                    default: null
                },*/,
                image_is_a_link: {
                    name: 'Image is a Link',
                    type: 'switch',
                    default: 0
                },
                link_to: {
                    name: 'Link to',
                    type: 'text',
                    default: '#'
                }
            }
        },
        controlGroupIcons: {
            image: 'fa fa-camera'
        },
        useFontControls: false,
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function () {
            var html = '';
           
            if (parseInt(this.controls.image.image_is_a_link.getVal(), 10) == 1) {
                html += '<a href="' + this.controls.image.link_to.getVal() + '">';
            }
           
                html += '<img src="' + this.controls.image.url.getVal() + '" id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + '" class="' + this.controls.general.classes.getVal() + '">';
                
            

            if (parseInt(this.controls.image.image_is_a_link.getVal(), 10) == 1) {
                html += '</a>';
            }

            return html;
        },
        render: function (options) {
            var html = '';

            if (parseInt(options.image.image_is_a_link, 10) == 1) {
                html += '<a href="' + options.image.link_to + '">';
            }

            html += '<img src="' + options.image.url + '" id="' + options.general.id + '" style="' + options.general.css + '" class="' + options.general.classes + '">';

            if (parseInt(options.image.image_is_a_link, 10) == 1) {
                html += '</a>';
            }

            return html;
        }
    };

    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(imageElementSettings);
    }
    $.squaresRendererRegisterElement(imageElementSettings);

    var videoElementSettings = {
        name: "Video",
        iconClass: "fa fa-video-camera",
        controls: {
            video: {
                mp4_url: {
                    name: 'MP4 URL',
                    type: 'text',
                    default: 'http://webcraftplugins.com/uploads/example_video.mp4'
                },
                webm_url: {
                    name: 'WEBM URL',
                    type: 'text',
                    default: 'http://webcraftplugins.com/uploads/example_video.webm'
                },
                ogv_url: {
                    name: 'OGV URL',
                    type: 'text',
                    default: 'http://webcraftplugins.com/uploads/example_video.ogv'
                },
                video_is_a_link: {
                    name: 'Video is a Link',
                    type: 'switch',
                    default: 0
                },
                link_to: {
                    name: 'Link to',
                    type: 'text',
                    default: '#'
                },
                autoplay: {
                    name: 'Autoplay',
                    type: 'switch',
                    default: 0
                },
                loop: {
                    name: 'Loop',
                    type: 'switch',
                    default: 0
                },
                controls: {
                    name: 'Controls',
                    type: 'switch',
                    default: 0
                }
            }
        },
        useFontControls: false,
        controlGroupIcons: {
            video: 'fa fa-video-camera'
        },
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function () {
            var html = '';

            if (parseInt(this.controls.video.video_is_a_link.getVal(), 10) == 1) {
                html += '<a href="' + this.controls.video.link_to.getVal() + '">';
            }

            var videoTagAtts = '';

            if (parseInt(this.controls.video.autoplay.getVal(), 10) == 1) {
                videoTagAtts += ' autoplay ';
            }
            if (parseInt(this.controls.video.loop.getVal(), 10) == 1) {
                videoTagAtts += ' loop ';
            }
            if (parseInt(this.controls.video.controls.getVal(), 10) == 1) {
                videoTagAtts += ' controls ';
            }

            html += '<video ' + videoTagAtts + ' id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + '" class="' + this.controls.general.classes.getVal() + '"><source src="' + this.controls.video.mp4_url.getVal() + '" type="video/mp4"><source src="' + this.controls.video.webm_url.getVal() + '" type="video/webm"><source src="' + this.controls.video.ogv_url.getVal() + '" type="video/ogv"></video>';

            if (parseInt(this.controls.video.video_is_a_link.getVal(), 10) == 1) {
                html += '</a>';
            }

            return html;
        },
        render: function (options) {
            var html = '';

            if (parseInt(options.video.video_is_a_link, 10) == 1) {
                html += '<a href="' + options.video.link_to + '">';
            }

            var videoTagAtts = '';

            if (parseInt(options.video.autoplay, 10) == 1) {
                videoTagAtts += ' autoplay ';
            }
            if (parseInt(options.video.loop, 10) == 1) {
                videoTagAtts += ' loop ';
            }
            if (parseInt(options.video.controls, 10) == 1) {
                videoTagAtts += ' controls ';
            }

            html += '<video ' + videoTagAtts + ' id="' + options.general.id + '" style="' + options.general.css + '" class="' + options.general.classes + '"><source src="' + options.video.mp4_url + '" type="video/mp4"><source src="' + options.video.webm_url + '" type="video/webm"><source src="' + options.video.ogv_url + '" type="video/ogv"></video>';

            if (parseInt(options.video.video_is_a_link, 10) == 1) {
                html += '</a>';
            }

            return html;
        }
    };

    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(videoElementSettings);
    }
    $.squaresRendererRegisterElement(videoElementSettings);

    var youtubeElementSettings = {
        name: "YouTube",
        iconClass: "fa fa-youtube",
        useStyleControls: false,
        useFontControls: false,
        controls: {
            youtube: {
                embed_code: {
                    name: 'Embed Code',
                    type: 'textarea',
                    default: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6NC_ODHu5jg" frameborder="0" allowfullscreen></iframe>'
                },
                allow_fullscreen: {
                    name: 'Allow Fullscreen',
                    type: 'switch',
                    default: 1
                },
                iframe_width: {
                    name: 'iframe Width',
                    type: 'int',
                    default: 320
                },
                iframe_auto_width: {
                    name: 'iframe Auto Width',
                    type: 'switch',
                    default: 1
                },
                iframe_height: {
                    name: 'iframe Height',
                    type: 'int',
                    default: 320
                }
            }
        },
        controlGroupIcons: {
            youtube: 'fa fa-youtube'
        },
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function () {
            // to do:
            // get the embed code from the controls, wrap it in a div, apply ID, CSS and classes to the DIV and set the iframe to 100% width and height
            // also implement the "allow fullscreen" option

            var embedCode = this.controls.youtube.embed_code.getVal();
            var html = '';

            html += '<div id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + '" class="' + this.controls.general.classes.getVal() + '">';

            // Allow fullscreen
            embedCode = embedCode.replace('allowfullscreen', '');
            if (parseInt(this.controls.youtube.allow_fullscreen.getVal(), 10) == 1 && embedCode.indexOf('allowfullscreen') == -1) {
                embedCode = embedCode.replace('></iframe>', ' allowfullscreen></iframe>');
            }

            // Set width
            if (parseInt(this.controls.youtube.iframe_auto_width.getVal(), 10) == 1) {
                embedCode = embedCode.replace(/width="\d+"/g, 'width="100%"');
            } else {
                embedCode = embedCode.replace(/width="\d+"/g, 'width="' + this.controls.youtube.iframe_width.getVal() + 'px"');
            }

            // Set height
            embedCode = embedCode.replace(/height="\d+"/g, 'height="' + this.controls.youtube.iframe_height.getVal() + 'px"');

            html += embedCode;

            html += '</div>';

            return html;
        },
        render: function (options) {
            // to do:
            // get the embed code from the controls, wrap it in a div, apply ID, CSS and classes to the DIV and set the iframe to 100% width and height
            // also implement the "allow fullscreen" option

            var embedCode = options.youtube.embed_code;
            var html = '';

            html += '<div id="' + options.general.id + '" style="' + options.general.css + '" class="' + options.general.classes + '">';

            // Allow fullscreen
            embedCode = embedCode.replace('allowfullscreen', '');
            if (parseInt(options.youtube.allow_fullscreen, 10) == 1 && embedCode.indexOf('allowfullscreen') == -1) {
                embedCode = embedCode.replace('></iframe>', ' allowfullscreen></iframe>');
            }

            // Set width
            if (parseInt(options.youtube.iframe_auto_width, 10) == 1) {
                embedCode = embedCode.replace(/width="\d+"/g, 'width="100%"');
            } else {
                embedCode = embedCode.replace(/width="\d+"/g, 'width="' + options.youtube.iframe_width + 'px"');
            }

            // Set height
            embedCode = embedCode.replace(/height="\d+"/g, 'height="' + options.youtube.iframe_height + 'px"');

            html += embedCode;

            html += '</div>';

            return html;
        }
    };

    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(youtubeElementSettings);
    }
    $.squaresRendererRegisterElement(youtubeElementSettings);

    var buttonElementSettings = {
        name: "Button",
        iconClass: "fa fa-link",
        controls: {
            button: {
                text: {
                    name: 'Text',
                    type: 'text',
                    default: 'Button'
                },
                link_to: {
                    name: 'Link to',
                    type: 'text',
                    default: '#'
                },
                new_tab: {
                    name: 'Open in New Tab',
                    type: 'switch',
                    default: 0
                },
                display: {
                    name: 'Display',
                    type: 'button group',
                    options: ['inline-block', 'block'],
                    default: 'inline-block'
                },
                height: {
                    name: 'Height',
                    type: 'int',
                    default: 44
                },
                bg_color: {
                    name: 'Background Color',
                    type: 'color',
                    default: '#2196f3'
                },
                text_color: {
                    name: 'Text Color',
                    type: 'color',
                    default: '#ffffff'
                },
                border_radius: {
                    name: 'Border Radius',
                    type: 'int',
                    default: 10
                },
                padding: {
                    name: 'Padding Left/Right',
                    type: 'int',
                    default: 20
                },
            }
        },
        controlGroupIcons: {
            button: 'fa fa-link'
        },
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function () {
            var buttonStyle = '';

            buttonStyle += 'display: ' + this.controls.button.display.getVal() + '; ';
            buttonStyle += 'height: ' + this.controls.button.height.getVal() + 'px; ';
            buttonStyle += 'line-height: ' + this.controls.button.height.getVal() + 'px; ';
            buttonStyle += 'background-color: ' + this.controls.button.bg_color.getVal() + '; ';
            buttonStyle += 'color: ' + this.controls.button.text_color.getVal() + '; ';
            buttonStyle += 'border-radius: ' + this.controls.button.border_radius.getVal() + 'px; ';
            buttonStyle += 'padding-left: ' + this.controls.button.padding.getVal() + 'px; ';
            buttonStyle += 'padding-right: ' + this.controls.button.padding.getVal() + 'px; ';

            var newTab = '';

            if (parseInt(this.controls.button.new_tab.getVal(), 10) == 1) {
                newTab = 'target="_blank"';
            }

            return '<div id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + '" class="' + this.controls.general.classes.getVal() + '"><a href="' + this.controls.button.link_to.getVal() + '" style="' + buttonStyle + '" ' + newTab + ' class="squares-button">' + this.controls.button.text.getVal() + '</a></div>';
        },
        render: function (options) {
            var buttonStyle = '';

            buttonStyle += 'display: ' + options.button.display + '; ';
            buttonStyle += 'height: ' + options.button.height + 'px; ';
            buttonStyle += 'line-height: ' + options.button.height + 'px; ';
            buttonStyle += 'background-color: ' + options.button.bg_color + '; ';
            buttonStyle += 'color: ' + options.button.text_color + '; ';
            buttonStyle += 'border-radius: ' + options.button.border_radius + 'px; ';
            buttonStyle += 'padding-left: ' + options.button.padding + 'px; ';
            buttonStyle += 'padding-right: ' + options.button.padding + 'px; ';

            var newTab = '';

            if (parseInt(options.button.new_tab, 10) == 1) {
                newTab = 'target="_blank"';
            }

            return '<div id="' + options.general.id + '" style="' + options.general.css + '" class="' + options.general.classes + '"><a href="' + options.button.link_to + '" style="' + buttonStyle + '" ' + newTab + ' class="squares-button">' + options.button.text + '</a></div>';
        }
    };

    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(buttonElementSettings);
    }
    $.squaresRendererRegisterElement(buttonElementSettings);


    // bouton syrendre

    var SyrendreElementSettings = {
        name: "S\'y rendre",
        iconClass: "fa fa-location-arrow",
        controls: {
            button: {
                text: {
                    name: 'Text',
                    type: 'text',
                    default: 'S\'y rendre'
                },
                link_to: {
                    name: 'Link to',
                    type: 'text',
                    default: 'https://www.google.com/maps/?q=48.8588377,2.2770203'
                },
                new_tab: {
                    name: 'Open in New Tab',
                    type: 'switch',
                    default: 0
                },
                display: {
                    name: 'Display',
                    type: 'button group',
                    options: ['inline-block', 'block'],
                    default: 'block'
                },
                height: {
                    name: 'Height',
                    type: 'int',
                    default: 44
                },
                bg_color: {
                    name: 'Background Color',
                    type: 'color',
                    default: '#511F46'
                },
                text_color: {
                    name: 'Text Color',
                    type: 'color',
                    default: '#ffffff'
                },
                border_radius: {
                    name: 'Border Radius',
                    type: 'int',
                    default: 10
                },
                padding: {
                    name: 'Padding Left/Right',
                    type: 'int',
                    default: 20
                },
            },
            Google:{
                adresse:{
                    name: 'Adresse',
                    type: 'text',
                    default: '12 Rue du Renard, 75004 Paris, France'
                },
                long: {
                    name: 'Longitude',
                    type: 'text',
                    default: '2.2770203'
                },
                lat: {
                    name: 'Latitude',
                    type: 'text',
                    default: '48.8588377'
                },

                google_map: {
                    name: 'Utiliser Google Map',
                    type: 'switch',
                    default: 0
                },
                map:{
                    name:'Google Map',
                    type:'map',
                    default:''
                }
            }
        },
        controlGroupIcons: {
            button: 'fa fa-map-marker',
            Google:'fa fa-google'
        },
        // Obsolete with the "render" function.
        // To be removed after squares.js is reworked to use the "render" function.
        content: function () {
            if(parseInt(this.controls.Google.google_map.getVal(), 10) == 1){

            
          if(globalLat != undefined && globalLong != undefined){
            console.log("the latitude is "+globalLat);
            this.controls.Google.lat.setVal(globalLat);
            console.log("the longitude is "+globalLong);
            this.controls.Google.long.setVal(globalLong);
          }else{
              console.log("one of them is undifined");
          }
        }
           var latlng = new google.maps.LatLng(this.controls.Google.lat, this.controls.Google.long);
           this.controls.Google.map.setVal(latlng);
         
            var buttonStyle = '';
         //   this.controls.Map.lat
            //this.controls.map.
            buttonStyle += 'display: ' + this.controls.button.display.getVal() + '; ';
            buttonStyle += 'height: ' + this.controls.button.height.getVal() + 'px; ';
            buttonStyle += 'line-height: ' + this.controls.button.height.getVal() + 'px; ';
            buttonStyle += 'background-color: ' + this.controls.button.bg_color.getVal() + '; ';
            buttonStyle += 'color: ' + this.controls.button.text_color.getVal() + '; ';
            buttonStyle += 'border-radius: ' + this.controls.button.border_radius.getVal() + 'px; ';
            buttonStyle += 'padding-left: ' + this.controls.button.padding.getVal() + 'px; ';
            buttonStyle += 'padding-right: ' + this.controls.button.padding.getVal() + 'px; ';

            var newTab = '';

            if (parseInt(this.controls.button.new_tab.getVal(), 10) == 1) {
                newTab = 'target="_blank"';
            }

            return '<div adress="'+this.controls.Google.adresse.getVal()+'" lat="'+this.controls.Google.lat.getVal()+'" long="'+this.controls.Google.long.getVal()+'" id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + '" class="' + this.controls.general.classes.getVal() + '"><a href="' + this.controls.button.link_to.getVal() + '" style="' + buttonStyle + '" ' + newTab + ' class="squares-button">' + this.controls.button.text.getVal() + '</a></div>';
        },
        render: function (options) {
            var buttonStyle = '';

            buttonStyle += 'display: ' + options.button.display + '; ';
            buttonStyle += 'height: ' + options.button.height + 'px; ';
            buttonStyle += 'line-height: ' + options.button.height + 'px; ';
            buttonStyle += 'background-color: ' + options.button.bg_color + '; ';
            buttonStyle += 'color: ' + options.button.text_color + '; ';
            buttonStyle += 'border-radius: ' + options.button.border_radius + 'px; ';
            buttonStyle += 'padding-left: ' + options.button.padding + 'px; ';
            buttonStyle += 'padding-right: ' + options.button.padding + 'px; ';

            var newTab = '';

            if (parseInt(options.button.new_tab, 10) == 1) {
                newTab = 'target="_blank"';
            }

            return '<div adress="'+options.Google.adresse+'" lat="'+options.Google.lat+'" long="'+options.Google.long+'" id="' + options.general.id + '" style="' + options.general.css + '" class="' + options.general.classes + '"><a href="' + options.button.link_to + '" style="' + buttonStyle + '" ' + newTab + ' class="squares-button">' + options.button.text + '</a></div>';
        }
    };

    if ($.squaresRegisterElement) {
        $.squaresRegisterElement(SyrendreElementSettings);
    }
    $.squaresRendererRegisterElement(SyrendreElementSettings);

})(jQuery, window, document);
