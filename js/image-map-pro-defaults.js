(function($, window, document, undefined) {
	
    $.imageMapProShapeDefaults = {
		id: 'spot-0',
		fullname:'',
		savoirplus:0,
		title: '',
		type: 'spot',
		x: -1,
		y: -1,
		width: 44,
		height: 44,
		phase_popover_exist:0,
		connected_to: '',
		use_connected_shape_tooltip: 0,
		
		actions: {
			click: 'no-action',
			link: '#',
			open_link_in_new_window: 1,
			script: ''
		},
		default_style: {
			opacity: 1,
			border_radius: 50,
			background_color: '#FF6630',
			background_opacity: 1,
			border_width: 2,
			border_style: 'solid',
			border_color: '#ffffff',
			border_opacity: 1,

			// poly-specific
			fill: '#000000',
			fill_opacity: 0.4,
			stroke_color: '#ffffff',
			stroke_opacity: 0.75,
			stroke_width: 0,
			stroke_dasharray: '10 10',
			stroke_linecap: 'round',

			// spot-specific
			use_icon: 1,
			icon_type: 'library', // or 'custom'
			icon_svg_path: 'M111.575,5.462l34.489,69.827l77.087,11.226l-55.778,54.371l13.17,76.784l-68.958-36.267      l-68.958,36.267l13.18-76.784L0,86.525l77.096-11.226L111.575,5.462',
			icon_svg_viewbox: '0 0 223.151 223.151',
			icon_fill: '#6A2943',
			icon_url: '',
			icon_is_pin: 1,
			icon_shadow: 0,
			use_icon_style: 1,
		},
		mouseover_style: {
			opacity: 1,
			border_radius: 50,
			background_color: '#ffffff',
			background_opacity: 0.4,
			border_width: 0,
			border_style: 'solid',
			border_color: '#ffffff',
			border_opacity: 1,

			// poly-specific
			fill: '#ffffff',
			fill_opacity: 0.4,
			stroke_color: '#ffffff',
			stroke_opacity: 0.75,
			stroke_width: 0,
			stroke_dasharray: '10 10',
			stroke_linecap: 'round',

			// spot-specific
			icon_fill: '#ffffff'
		},
		tooltip_style: {
			buffer: 40,
			border_radius: 5,
			padding: 20,
			background_color: '#000000',
			background_opacity: 0.7,
			position: 'top',
			width: 300, //important;
			auto_width: 1 //important;
		},
		tooltip_content: {
			content_type: 'plain-text',
			plain_text: 'Lorem Ipsum',
			plain_text_color: '#ffffff',
			squares_settings: {
				containers: [{
					id: "sq-container-403761",
					settings: {
						elements: [{
							settings: {
								name: "Paragraph",
								iconClass: "fa fa-paragraph"
							}
						}]
					}
				}]
			}
		},
		points: [],
		vs: []
	};

    $.imageMapProEditorDefaults = {
		id: 0,
		editor: {
			previewMode: 0,
			selected_shape: -1,
			tool: 'spot',
			state: {
				dragging: false
			}
		},
		runtime: {
			is_fullscreen: 0
		},
		general: {
			name: '',
			fullname:'',			
			shortcode: '',
			image_file:'',
			width: 1280,
			height: 776,
			naturalWidth: 1280,
			naturalHeight: 776,
			responsive: 1,
			savoirplus:0,
			preserve_quality: 1,
			pageload_animation: 'none',
			center_image_map: 1,
			background_image_color: '#ffffff'
		},
	
		image: {
			url: 'img/template.jpg',
		},
		fullscreen: {
			enable_fullscreen_mode: 0,
			start_in_fullscreen_mode: 0,
			fullscreen_background: '#000000',
			fullscreen_button_position: 3,
			fullscreen_button_type: 'icon_and_text',
			fullscreen_button_color: '#ffffff',
			fullscreen_button_text_color: '#222222'
		},
		tooltips: {
			show_tooltips: 'click',
			sticky_tooltips: 0,
			constrain_tooltips: 1,
			tooltip_animation: 'none',
			fullscreen_tooltips: 'always', // none / mobile / always,
		}, 
		title:{
			title_name:'"Votre mini-expo"',
			title_police: '\'Source Sans Pro\', sans-serif',
			title_fontsize: 16,
			title_color:'#000000',
			title_align:'center',
			title_color_sep:'#b7b7b7'
		},
		phase:{
			phase_popover_exist:0,
			phase_header_exist:0,
			phase_accroche:'Phrase d\'accroche',
			phase_descriptif:'ocusamus et iusto odios',
			phase_fond_color:'#FF6631',
			phase_contour_color:'#FF6631',
			phase_text_color:'#FFFFFF',
		},
		infosplus:{
			infosplus_exist:0,
			infosplus_title:'Acusamus et iusto odixxo',
			infosplus_descriptif:'ocusamus et iusto odios',
			infosplus_fond_color:'#FF6631',
			infosplus_contour_color:'#FF6631',
			infosplus_text_color:'#FFFFFF',
		},
		custom_code: {
			custom_css: '',
			custom_js: ''
		},
		spots: []
	};
})(jQuery, window, document);