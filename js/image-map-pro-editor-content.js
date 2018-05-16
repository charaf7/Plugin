;(function ( $, window, document, undefined ) {
    $.image_map_pro_editor_content_title = function() {
        var settings = $.image_map_pro_editor_current_settings();

        var html = '';
        if (settings.title){
            // Set Css for Title
            var css_title = '';
            css_title += 'text-align: ' + settings.title.title_align + '; ';
            css_title += 'color : ' + settings.title.title_color + '; ',
            css_title += 'font-family :' + settings.title.title_police + '; ';
            css_title += 'font-size : ' + settings.title.title_fontsize + 'px; ';
            css_title += 'border-bottom : 2px solid; ';
            css_title += 'border-color: ' + settings.title.title_color_sep + '; ';
            
            html += '<div style="'+css_title + '">'
            html += '<i class="fa fa-cog" aria-hidden="true"></i>    Paramètres de ';
            html +=     settings.title.title_name;     
            html += '</div>';
        }
        return html;
    }

    $.image_map_pro_editor_content_phase = function() {
        var settings = $.image_map_pro_editor_current_settings();
        
        var html = '';

        if (settings.phase.phase_popover_exist) {
            // Sett Css for footer
            var css_phase = '';
            css_phase += 'color : ' + settings.phase.phase_text_color + '; ';
            css_phase += 'border : 2px solid; ';
            css_phase += 'border-color: ' + settings.phase.phase_contour_color + '; ';
            css_phase += 'background-color: ' + settings.phase.phase_fond_color + '; ';

            html += '<div id="wcp-editor-phrase-accroche-button" style="'+ css_phase + '">'
            html += '   <button class="fa fa-sort-up" type="button" data-toggle="collapse" data-target="#wcp-editor-phrase-accroche-desciption" aria-expanded="false" aria-controls="wcp-editor-phrase-accroche-desciption"></button>'
            html += '</div>'
            html += '<div id="wcp-editor-phrase-accroche-title" style="'+ css_phase + '">'
            html += '   <h3 style="margin:0px">'+ settings.phase.phase_accroche +'</h3>'
            html += '</div>'
            html += '<div class="collapse" id="wcp-editor-phrase-accroche-desciption" style="'+ css_phase + '">'
            html +=     settings.phase.phase_descriptif
            html +='</div>'
        }
        return html;
    }

    $.image_map_pro_editor_content_infosplus = function() {
        var settings = $.image_map_pro_editor_current_settings();
        
        var html = '';

        if (settings.infosplus.infosplus_exist) {
            // Sett Css for footer
            var css_infosplus = '';
            css_infosplus += 'color : ' + settings.infosplus.infosplus_text_color + '; ';
            css_infosplus += 'border : 2px solid; ';
            css_infosplus += 'border-color: ' + settings.infosplus.infosplus_contour_color + '; ';
            css_infosplus += 'background-color: ' + settings.infosplus.infosplus_fond_color + '; ';

            html += '<div class="wcp-editor-infosplus">'
            html += '   <div id="wcp-editor-infosplus-btn-first" class="wcp-editor-infosplus-wrap">'
            html += '       <div class="wcp-editor-infosplus-content">'
            html += '           <h3>'+ settings.infosplus.infosplus_title +'</h3>'
            // html += '           <p>dekdeosijd oseijd oseid joseidj oseidj oseidj oseijd oseijd oseijd oseijd oij </p>'
            html +=             settings.infosplus.infosplus_descriptif
            html += '       </div>'
            html += '   </div>'
            html += '   <button id="wcp-editor-infosplus-btn-sd" style="float:right;right: 50px;position: relative;;" class="btn fa-2x wcp-editor-infosplus-content-infos">'
            html += '       <i class="fa fa-plus-circle" style="zoom:1;"></i>'
            html += '   </button>'
            html += '</div>'
        }
        return html;
    }

    $.image_map_pro_editor_content = function() {
        var settings = $.image_map_pro_editor_current_settings();
        var options = $.image_map_pro_editor_current_options() ;
        var html = '';
        if (settings.editor.tool == 'zoom-in') {
            html += '<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-zoom-in"></div>';
        }
        if (settings.editor.tool == 'zoom-out') {
            html += '<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-zoom-out"></div>';
        }
        if (settings.editor.tool == 'drag' || settings.editor.state.dragging) {
            html += '<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-drag"></div>';
        }
        if (settings.editor.tool == 'spot' || settings.editor.tool == 'oval' || settings.editor.tool == 'geo' || settings.editor.tool == 'rect' || settings.editor.tool == 'infoslegale') {
            html += '<div id="imp-editor-shapes-container" style="cursor: crosshair;">';
        }
        else{
            html += '<div id="imp-editor-shapes-container">';
        }
        
        html += '<img id="imp-editor-image" src="'+ settings.image.url +'">';


        style_ = '';
        for (var i=0; i<settings.spots.length; i++) {
            var s = settings.spots[i];
            // for the edit menu, style_ is used to put this edit menu next to it button
                style_ += 'left: ' + s.x + '%;';
                style_ += 'top: ' + s.y + '%;';

            if (s.type == 'spot' || s.type == 'geo' || s.type == 'infoslegale') {
                if (parseInt(s.default_style.use_icon, 10) == 1) {
                    var style = '';
                    style += 'left: ' + s.x + '%;';
                    style += 'top: ' + s.y + '%;';

                    style += 'width: ' + s.width + 'px;';
                    style += 'height: ' + s.height + 'px;';
                    style += 'margin-left: -' + (s.width/2) + 'px;';
                    style += 'margin-top: -' + (s.height/2) + 'px;';
                    style += 'background-image: url('+ s.default_style.icon_url +')';
                    style += 'background-position: center;';
                    style += 'background-repeat: no-repeat;';

                    var iconStyle = '';
                    if (parseInt(s.default_style.icon_is_pin, 10) == 1) {
                        iconStyle += 'top: -50%;';
                        iconStyle += 'position: absolute;';
                    }
                    if (parseInt(s.default_style.use_icon_style, 10) == 1) {
                        var color_bg = hexToRgb(s.default_style.background_color) || { r: 0, b: 0, g: 0 };
                        var color_border = hexToRgb(s.default_style.border_color) || { r: 0, b: 0, g: 0 };

                        iconStyle += 'border-radius: ' + s.default_style.border_radius + 'px;';
                        iconStyle += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.default_style.background_opacity +');';
                        iconStyle += 'border-width: ' + s.default_style.border_width + 'px;';
                        iconStyle += 'border-style: ' + s.default_style.border_style + ';';
                        iconStyle += 'border-color: rgba('+ color_border.r +', '+ color_border.g +', '+ color_border.b +', '+ s.default_style.border_opacity +');';
                        iconStyle += 'padding: 5px; ';
                    }

                    html += '<div class="imp-editor-shape imp-editor-spot" data-id="'+ s.id +'" data-editor-object-type="1" style="'+ style +'"><div class="imp-selection" style="border-radius: '+ s.default_style.border_radius +'px;"></div>';
                    if (s.default_style.icon_type == 'library') {
                        html += '   <svg style="'+ iconStyle +'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="'+ s.default_style.icon_svg_viewbox +'" xml:space="preserve" width="'+ s.width +'px" height="'+ s.height +'px">';
                        html += '       <path style="fill:'+ s.default_style.icon_fill +'" d="'+ s.default_style.icon_svg_path +'"></path>';
                        html += '   </svg>';
                        
                    } else {
                        if (s.default_style.icon_url.length > 0) {
                            html += '<img style="'+ iconStyle +'" src="'+ s.default_style.icon_url +'">';
                        }
                    }
                    if (parseInt(s.default_style.icon_shadow, 10) == 1) {
                        var shadowStyle = '';
                        shadowStyle += 'width: ' + s.width + 'px;';
                        shadowStyle += 'height: ' + s.height + 'px;';
                        if (parseInt(s.default_style.icon_is_pin, 10) == 0) {
                            shadowStyle += 'top: '+ s.height/2 +'px;';
                        }
                        html += '<div style="'+ shadowStyle +'" class="imp-editor-shape-icon-shadow"></div>';
                    }

                    html += '</div>';
                } else {
                    var c_bg = hexToRgb(s.default_style.background_color);
                    var c_bo = hexToRgb(s.default_style.border_color);

                    var style = '';

                    style += 'left: ' + s.x + '%;';
                    style += 'top: ' + s.y + '%;';

                    style += 'width: ' + s.width + 'px;';
                    style += 'height: ' + s.height + 'px;';
                    style += 'margin-left: -' + (s.width/2) + 'px;';
                    style += 'margin-top: -' + (s.height/2) + 'px;';

                    style += 'background: rgba('+ c_bg.r +', '+ c_bg.g +', '+ c_bg.b +', '+ s.default_style.background_opacity +');';
                    // style += 'opacity: ' + s.default_style.opacity + ';';
                    style += 'border-color: rgba('+ c_bo.r +', '+ c_bo.g +', '+ c_bo.b +', '+ s.default_style.border_opacity +');';
                    style += 'border-width: ' + s.default_style.border_width + 'px;';
                    style += 'border-style: ' + s.default_style.border_style + ';';
                    style += 'border-radius: ' + s.default_style.border_radius + 'px;';

                    html += '<div class="imp-editor-shape imp-editor-spot" data-id="'+ s.id +'" data-editor-object-type="1" style="'+ style +'"><div class="imp-selection" style="border-radius: '+ s.default_style.border_radius +'px;"></div></div>';
                    
                    
                }
                
            }
            if (s.type == 'rect') {
                var c_bg = hexToRgb(s.default_style.background_color);
                var c_bo = hexToRgb(s.default_style.border_color);

                var style = '';

                style += 'left: ' + s.x + '%;';
                style += 'top: ' + s.y + '%;';

                style += 'width: ' + s.width + '%;';
                style += 'height: ' + s.height + '%;';

                style += 'background: rgba('+ c_bg.r +', '+ c_bg.g +', '+ c_bg.b +', '+ s.default_style.background_opacity +');';
                // style += 'opacity: ' + s.default_style.opacity + ';';
                style += 'border-color: rgba('+ c_bo.r +', '+ c_bo.g +', '+ c_bo.b +', '+ s.default_style.border_opacity +');';
                style += 'border-width: ' + s.default_style.border_width + 'px;';
                style += 'border-style: ' + s.default_style.border_style + ';';
                style += 'border-radius: ' + s.default_style.border_radius + 'px;';

                html += '<div class="imp-editor-shape imp-editor-rect" data-id="'+ s.id +'" data-editor-object-type="3" style="'+ style +'">';
                html += '   <div class="imp-selection" id="imp-selection-rect-oval" style="border-radius: '+ s.default_style.border_radius +'px;">';
                html += '       <div class="imp-selection-translate-boxes">';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-1" data-transform-direction="1" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-2" data-transform-direction="2" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-3" data-transform-direction="3" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-5" data-transform-direction="5" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-6" data-transform-direction="6" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-7" data-transform-direction="7" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="5"></div>';
                html += '       </div>';
                html += '   </div>';
                html += '</div>';
                
               
            }
            if (s.type == 'oval') {
                var c_bg = hexToRgb(s.default_style.background_color);
                var c_bo = hexToRgb(s.default_style.border_color);

                var style = '';

                style += 'left: ' + s.x + '%;';
                style += 'top: ' + s.y + '%;';

                style += 'width: ' + s.width + '%;';
                style += 'height: ' + s.height + '%;';

                style += 'background: rgba('+ c_bg.r +', '+ c_bg.g +', '+ c_bg.b +', '+ s.default_style.background_opacity +');';
                // style += 'opacity: ' + s.default_style.opacity + ';';
                style += 'border-color: rgba('+ c_bo.r +', '+ c_bo.g +', '+ c_bo.b +', '+ s.default_style.border_opacity +');';
                style += 'border-width: ' + s.default_style.border_width + 'px;';
                style += 'border-style: ' + s.default_style.border_style + ';';
                style += 'border-radius: 100% 100%;';

                html += '<div class="imp-editor-shape imp-editor-oval" data-id="'+ s.id +'" data-editor-object-type="2" style="'+ style +'">';
                html += '   <div class="imp-selection" id="imp-selection-rect-oval" style="border-radius: 100% 100%;">';
                html += '       <div class="imp-selection-translate-boxes">';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-1" data-transform-direction="1" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-2" data-transform-direction="2" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-3" data-transform-direction="3" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-5" data-transform-direction="5" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-6" data-transform-direction="6" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-7" data-transform-direction="7" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="5"></div>';
                html += '       </div>';
                html += '   </div>';
                html += '</div>';

                
            }
            if (s.type == 'poly' && s.points) {
                var c_fill = hexToRgb(s.default_style.fill);
                var c_stroke = hexToRgb(s.default_style.stroke_color);

                var style = '';
                style += 'left: ' + s.x + '%;';
                style += 'top: ' + s.y + '%;';
                style += 'width: ' + s.width + '%;';
                style += 'height: ' + s.height + '%;';
                // style += 'opacity: ' + s.default_style.opacity + ';';


                var svgStyle = '';
                svgStyle += 'width: 100%;';
                svgStyle += 'height: 100%;';
                svgStyle += 'fill: rgba('+ c_fill.r +', '+ c_fill.g +', '+ c_fill.b +', '+ s.default_style.fill_opacity +');';
                svgStyle += 'stroke: rgba('+ c_stroke.r +', '+ c_stroke.g +', '+ c_stroke.b +', '+ s.default_style.stroke_opacity +');';
                svgStyle += 'stroke-width: ' + s.default_style.stroke_width + 'px;';
                svgStyle += 'stroke-dasharray: ' + s.default_style.stroke_dasharray + ';';
                svgStyle += 'stroke-linecap: ' + s.default_style.stroke_linecap + ';';

                html += '<div class="imp-editor-shape imp-editor-poly" data-id="'+ s.id +'" data-editor-object-type="4" style="'+ style +'">';
                html += '   <div class="imp-editor-poly-svg-temp-control-point" data-editor-object-type="6"></div>';

                var shapeWidthPx = settings.general.width * (s.width/100);
                var shapeHeightPx = settings.general.height * (s.height/100);
                html += '   <div class="imp-editor-svg-wrap" style="padding: '+ (s.default_style.stroke_width) +'px; left: -'+ (s.default_style.stroke_width) +'px; top: -'+ (s.default_style.stroke_width) +'px;">'
                html += '       <svg class="imp-editor-poly-svg" viewBox="0 0 '+ shapeWidthPx +' '+ shapeHeightPx +'" preserveAspectRatio="none" style="'+ svgStyle +'">';
                html += '           <polygon points="';

                for (var j=0; j<s.points.length; j++) {
                    var x = s.default_style.stroke_width + (s.points[j].x / 100) * (shapeWidthPx - s.default_style.stroke_width*2);
                    var y = s.default_style.stroke_width + (s.points[j].y / 100) * (shapeHeightPx - s.default_style.stroke_width*2);
                    html += x + ',' + y + ' ';
                }

                html += '           "></polygon>';
                html += '       </svg>';
                html += '   </div>'; // end svg wrap
                html += '       <svg class="imp-editor-shape-poly-svg-overlay" viewBox="0 0 '+ shapeWidthPx +' '+ shapeHeightPx +'" preserveAspectRatio="none">';
                html += '           <polygon points="';

                for (var j=0; j<s.points.length; j++) {
                    var x = (s.points[j].x / 100) * shapeWidthPx;
                    var y = (s.points[j].y / 100) * shapeHeightPx;
                    html += x + ',' + y + ' ';
                }

                html += '           "></polygon>';
                html += '       </svg>';
                html += '   <div class="imp-selection imp-expanded-selection">';
                html += '       <div class="imp-selection-translate-boxes">';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-1" data-transform-direction="1" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-2" data-transform-direction="2" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-3" data-transform-direction="3" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-5" data-transform-direction="5" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-6" data-transform-direction="6" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-7" data-transform-direction="7" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="5"></div>';
                html += '       </div>';
                html += '   </div>';

                for (var j=0; j<s.points.length; j++) {
                    html += '       <div class="imp-poly-control-point" data-editor-object-type="7" data-index="'+ j +'" style="left: '+ s.points[j].x +'%; top: ' + s.points[j].y + '%;"></div>';
                }

                html += '</div>';
            }

        }
        
        // Close shapes container
        html += '</div>';
        //the new edit menu
        // console.log(style_);
        // html += '<div id="wcp-editor-list-item-title-Buttons" style="margin-bottom: 0;'+style_+'">';

        // for (var i=0; i<options.length; i++) {
        //     var b = options[i];
        //     html += '  <div class="wcp-editor-list-item-title-button" data-wcp-editor-list-item-title-button-name="'+ b.name +'" data-wcp-tooltip="'+ b.title +'" data-wcp-tooltip-position="bottom">';
        //     html += '      <i class="'+ b.icon +'" aria-hidden="true"></i>';
        //     html += '  </div>';
        // }
        // html += '  </div>';
        
        // $("#wcp-editor-list-item-title-Buttons").css("display","flex");
        // end of new edit menu
        
        // Close canvas inner wrap
        html += '</div>';

        return html;
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    }
})( jQuery, window, document );
