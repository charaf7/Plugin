// Function image setting : upload image from computer 
var imageElementSettings = {
    name: "Image",
    iconClass: "fa fa-camera",
    controls: {
        image: {
            url: {
                name: 'Image URL',
                type: 'text',
                default: 'https://webcraftplugins.com/uploads/placeholder_image.png'
            },
            file: {
                name: 'Télécharger une image depuis votre ordinateur',
                type: 'file',
                default: null
            },
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
        if (this.controls.image.file.getVal() != null) {
            $.wcpEditorPresentLoadingScreen('Chargement de l\'image...');
            var og_id = this.controls.image.file.getVal();
            var image_id = this.controls.general.id.getVal();
            var url = $('#' + og_id).val();
            var input = $('#' + og_id)[0];
            var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
            //  console.log(ext);
            //  console.log(input);

            image_id = input.files[0].name;
            image_id = image_id.substring(0, image_id.indexOf('.'));

            html += '<img src="' + this.controls.image.url.getVal() + '" id="' + image_id + '" style="' + this.controls.general.css.getVal() + '" class="' + this.controls.general.classes.getVal() + '">';

            var self = this;
            if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
                var reader = new FileReader();
                reader.onload = function (e) {

                    $('#' + image_id).attr("src", e.target.result);
                    //   console.log(self.controls.image.url.getId());
                    $.wcpEditorHideLoadingScreen();

                    //    return e.target.result;
                }
                reader.readAsDataURL(input.files[0]);

            } else {
                $.wcpEditorHideLoadingScreenWithMessage('Erreur lors du chargement de l\'image!', true, false);
            }



        } else {
            html += '<img src="' + this.controls.image.url.getVal() + '" id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + '" class="' + this.controls.general.classes.getVal() + '">';

        }

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
function initMap() {
     var uluru = { lat: -25.363, lng: 131.044 };
      var map = new google.maps.Map(document.getElementById("'+this.elementID+'"));
      var latlng = new google.maps.LatLng(-34.397, 150.644);
      var mapOptions = 
      {
          zoom: 8,
          center:latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      var map = new google.maps.Map(mapDiv, mapOptions);
     
       console.log("init map is ok") }
/*
#index 
fromt ligne 2 ->107
function 
*/