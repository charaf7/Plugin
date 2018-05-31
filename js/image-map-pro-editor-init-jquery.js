;(function ( $, window, document, undefined) {
    // Register Forms
    $.wcpEditorCreateForm({
        name: 'Image Map Settings',
        controlGroups: [
            {
                groupName: 'general',
                groupTitle: 'Projet',
                groupIcon: 'fa fa-file-alt',
                controls: [
                    /*{
                        type: 'text',
                        name: 'fullname',
                        title: 'Titre du projet',
                        value: $.imageMapProDefaultSettings.general.fullname
                    },*/
                    {
                        type: 'text',
                        name: 'image_map_name',
                        title: 'Nom du projet Mini-expo',
                        value: $.imageMapProDefaultSettings.general.name
                    },
                    {
                        type: 'switch',
                        name: 'savoirplus',
                        title: 'En savoir plus',
                        value: $.imageMapProDefaultSettings.general.savoirplus,
                        render: false
                    },
                    {
                        type: 'switch',
                        name: 'responsive',
                        title: 'Responsive',
                        value: $.imageMapProDefaultSettings.general.responsive,
                        render: false
                        
                    },
                    {
                        type: 'switch',
                        name: 'preserve_quality',
                        title: 'Préserver la qualité',
                        value: $.imageMapProDefaultSettings.general.preserve_quality,
                        render: false
                    },
                    {
                        type: 'int',
                        name: 'image_map_width',
                        title: 'Largeur',
                        value: $.imageMapProDefaultSettings.general.width,
                    },
                    {
                        type: 'int',
                        name: 'image_map_height',
                        title: 'Taille',
                        value: $.imageMapProDefaultSettings.general.height
                        },
                    {
                        type: 'buttonre',
                        name: 'reset_size',
                        title: 'Réinitialiser taille',
                        options: { event_name: 'button-reset-size-clicked' },
                        value: undefined,
                        render: false
                    },
                    {
                        type: 'select',
                        name: 'pageload_animation',
                        title: 'Animation de chargement de page',
                        options: [
                            { value: 'none', title: 'Aucun' },
                            { value: 'grow', title: 'popup' },
                            { value: 'fade', title: 'zoom' },
                        ],
                        value: $.imageMapProDefaultSettings.general.pageload_animation,
                        render: false
                    },
                    {
                        type: 'switch',
                        name: 'center_image_map',
                        title: 'Centrer image',
                        value: $.imageMapProDefaultSettings.general.center_image_map,
                        render: false
                    },
                ]
            },
            {
                groupName: 'title',
                groupTitle: 'Titre',
                groupIcon: 'fa fa-font',
                controls: [
                    {
                        type: 'text',
                        name: 'title_name',
                        title: 'Titre',
                        value: $.imageMapProDefaultSettings.general.title_name
                    },
                    {
                        type: 'police',
                        name: 'title_police',
                        title: 'Police de caractère',
                        options: [
                            { value: "'Open Sans', sans-serif", title: 'Open Sans' },
                            { value: "Arial", title: 'Arial' },
                            { value: "Comic Sans MS", title: 'Comic Sans MS' },
                            { value: "Courier New", title: 'Courier New' },
                            { value: "Impact", title: 'Impact' },
                            { value: "Lucida Grande", title: 'Lucida Grande' },
                            { value: "Tahoma", title: 'Tahoma' },
                            { value: "Times New Roman", title: 'Times New Roman' },
                            { value: "Verdana", title: 'Verdana' },
                            // { value: 18, title: '18' },
                            // { value: 20, title: '20' }
                        ],
                        value: $.imageMapProDefaultSettings.general.title_police,
                        style: 1
                    },
                    {
                        type: 'select',
                        name: 'title_fontsize',
                        title: 'Taille',
                        options: [
                            { value: 14, title: '14' },
                            { value: 16, title: '16' },
                            { value: 18, title: '18' },
                            { value: 20, title: '20' }
                        ],
                        value: $.imageMapProDefaultSettings.general.title_fontsize,
                    },
                    {
                        type: 'color',
                        name: 'title_color',
                        title: 'Couleur',
                        value: $.imageMapProDefaultSettings.general.title_color,
                    },
                    {
                        type: 'select',
                        name: 'title_align',
                        title: 'Alignement du texte',
                        options: [
                            { value: 'left', title: 'Gauche' },
                            { value: 'right', title: 'Droite' },
                            { value: 'center', title: 'Centré' },
                        ],
                        value: $.imageMapProDefaultSettings.general.title_align
                    },
                    {
                        type: 'color',
                        name: 'title_color_sep',
                        title: 'Barre de séperation',
                        value: $.imageMapProDefaultSettings.general.title_color_sep,
                    }
                ]
            },
            {
                groupName: 'image',
                groupTitle: 'Image principale',
                groupIcon: 'fa fa-image',
                controls: [
                    {
                        type: 'wp media file',
                        name: 'image_src',
                        title: 'Importer une image',
                        value: $.imageMapProDefaultSettings.general.image_file
                    },
                    {
                        type: 'wp media upload',
                        name: 'image_url',
                        title: 'Importer une image depuis une URL',
                        value: $.imageMapProDefaultSettings.general.image_url
                    },
                    {
                        type: 'color',
                        name: 'background_image',
                        title: 'Couleur de fond',
                        value: $.imageMapProDefaultSettings.general.background_image_color
                    }
                ]
            },
            {
                groupName: 'tooltips',
                groupTitle: 'Info-bulles',
                groupIcon: 'fa fa-comment',
                controls: [
                    {
                        type: 'select',
                        name: 'show_tooltips',
                        title: 'Afficher les info-bulles avec :',
                        options: [
                            { value: 'mouseover', title: 'Passez la souris' },
                            { value: 'click', title: 'Cliquez sur' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.actions.click
                    },
                    {
                        type: 'switch',
                        name: 'sticky_tooltips',
                        title: 'Infobulles collantes',
                        value: $.imageMapProDefaultSettings.general.sticky_tooltips,
                    },
                    {
                        type: 'switch',
                        name: 'constrain_tooltips',
                        title: 'Contraindre les info-bulles',
                        value: $.imageMapProDefaultSettings.general.constrain_tooltips,
                    },
                    {
                        type: 'select',
                        name: 'tooltip_animation',
                        title: 'Animation d\'info-bulle',
                        options: [
                            { value: 'none', title: 'Aucun' },
                            { value: 'grow', title: 's\'accroître' },
                            { value: 'fade', title: 'se baisser' },
                        ],
                        value: $.imageMapProDefaultSettings.general.tooltip_animation
                    },
                    {
                        type: 'select',
                        name: 'fullscreen_tooltips',
                        title: 'Infobulles plein écran',
                        options: [
                            { value: 'none', title: 'Aucun' },
                            { value: 'mobile-only', title: 'Sur Mobile seulement' },
                            { value: 'always', title: 'Toujours' },
                        ],
                        value: $.imageMapProDefaultSettings.general.fullscreen_tooltips
                    },
                ]
            },         
            
            {
                groupName: 'phase',
                groupTitle: 'Phrase d\'accroche',
                groupIcon: 'fa fa-comment-alt',
                controls: [
                    {
                        type: 'switch',
                        name: 'phase_popover_exist',
                        title: 'Activer la phrase d\'accroche',
                        value: $.imageMapProDefaultSettings.phase.phase_popover_exist
                    },
                    {
                        type: 'switch',
                        name: 'phase_header_exist',
                        title: 'Bandeau phrase d\'accorche visible',
                        value: $.imageMapProDefaultSettings.phase.phase_header_exist,
                        render: false
                    },
                    {
                        type: 'text',
                        name: 'phase_accroche',
                        title: 'Phrase d\'accroche',
                        value: $.imageMapProDefaultSettings.phase.phase_accroche
                    },
                    {
                        type: 'textarea',
                        name: 'phase_descriptif',
                        title: 'Descriptif (300 caractères max)',
                        value: $.imageMapProDefaultSettings.phase.phase_descriptif
                    },
                    {
                        type: 'color',
                        name: 'phase_fond_color',
                        title: 'Couleur de fond',
                        value: $.imageMapProDefaultSettings.phase.phase_fond_color,
                    },
                    {
                        type: 'color',
                        name: 'phase_contour_color',
                        title: 'Couleur des contours',
                        value: $.imageMapProDefaultSettings.phase.phase_contour_color,
                    },
                    {
                        type: 'color',
                        name: 'phase_text_color',
                        title: 'Couleur du texte',
                        value: $.imageMapProDefaultSettings.phase.phase_text_color,
                    }
                ]
            },
            {
                groupName: 'infosplus',
                groupTitle: 'Infos plus',
                groupIcon: 'fa fa-plus-circle',
                controls: [
                    {
                        type: 'switch',
                        name: 'infosplus_exist',
                        title: 'Activer l\'infos plus',
                        value: $.imageMapProDefaultSettings.infosplus.infosplus_exist
                    },
                    {
                        type: 'text',
                        name: 'infosplus_title',
                        title: 'Titre de l\'infos plus',
                        value: $.imageMapProDefaultSettings.infosplus.infosplus_title
                    },
                    {
                        type: 'textarea',
                        name: 'infosplus_descriptif',
                        title: 'Descriptif (300 caractères max)',
                        value: $.imageMapProDefaultSettings.infosplus.infosplus_descriptif
                    },
                    {
                        type: 'color',
                        name: 'infosplus_fond_color',
                        title: 'Couleur de fond',
                        value: $.imageMapProDefaultSettings.infosplus.infosplus_fond_color,
                    },
                    {
                        type: 'color',
                        name: 'infosplus_contour_color',
                        title: 'Couleur des contours',
                        value: $.imageMapProDefaultSettings.infosplus.infosplus_contour_color,
                    },
                    {
                        type: 'color',
                        name: 'infosplus_text_color',
                        title: 'Couleur du texte',
                        value: $.imageMapProDefaultSettings.general.infosplus_text_color,
                    }
                ]
            },
            {
                groupName: 'fullscreen',
                groupTitle: 'Plein écran',
                groupIcon: 'fa fa-arrows-alt',
                controls: [
                    {
                        type: 'switch',
                        name: 'enable_fullscreen_mode',
                        title: 'Activer le mode plein écran',
                        value: $.imageMapProDefaultSettings.fullscreen.enable_fullscreen_mode,
                    },
                    {
                        type: 'switch',
                        name: 'start_in_fullscreen_mode',
                        title: 'Démarrer en mode plein écran',
                        value: $.imageMapProDefaultSettings.fullscreen.start_in_fullscreen_mode,
                    },
                    {
                        type: 'color',
                        name: 'fullscreen_background',
                        title: 'Fond plein écran',
                        value: $.imageMapProDefaultSettings.fullscreen.fullscreen_background,
                    },
                    {
                        type: 'fullscreen button position',
                        name: 'fullscreen_button_position',
                        title: 'Position du bouton plein écran',
                        value: 1 // 0 = top left, 1 = top center, 2 = top right, 3 = bottom right, 4 = bottom center, 5 = bottom left
                    },
                    {
                        type: 'button group',
                        name: 'fullscreen_button_type',
                        title: 'Type de bouton',
                        options: [
                            { value: 'icon', title: 'Icône' },
                            { value: 'text', title: 'Texte' },
                            { value: 'icon_and_text', title: 'Icône et texte' }
                        ],
                        value: $.imageMapProDefaultSettings.fullscreen.fullscreen_button_type,
                    },
                    {
                        type: 'color',
                        name: 'fullscreen_button_color',
                        title: 'Couleur du bouton',
                        value: $.imageMapProDefaultSettings.fullscreen.fullscreen_button_color,
                    },
                    {
                        type: 'color',
                        name: 'fullscreen_button_text_color',
                        title: 'Icône de bouton / Couleur du texte',
                        value: $.imageMapProDefaultSettings.fullscreen.fullscreen_button_text_color,
                    }
                ]
            }
        ]
    });
    $.wcpEditorCreateForm({
        name: 'Shape Settings',
        controlGroups: [
            {
                groupName: 'Action',
                groupTitle: 'Action',
                groupIcon: 'fa fa-edit',
                controls: [
                    {
                        type: 'button',
                        name: 'button-lunch-editer',
                        title: 'Editer le contenu',
                        options: { event_name: 'button-launch-content-builder-clicked' },
                        value: undefined
                    },
                    // {
                    //     type: 'button',
                    //     name: 'rename',
                    //     title: 'Renommer',
                    //     options: { event_name: 'button-rename-the-style-clicked' },
                    //     value: undefined
                    // },
                    {
                        type: 'button',
                        name: 'copy',
                        title: 'Copier le style',
                        options: { event_name: 'button-copy-the-style-clicked' },
                        value: undefined
                    },
                    {
                        type: 'button',
                        name: 'paste',
                        title: 'Coller le style',
                        options: { event_name: 'button-paste-the-style-clicked' },
                        value: undefined
                    },
                    {
                        type: 'button',
                        name: 'duplicate',
                        title: 'Dupliquer l\'icône',
                        options: { event_name: 'button-duplicate-the-style-clicked' },
                        value: undefined
                    },
                    {
                        type: 'button',
                        name: 'delete',
                        title: 'Supprimer le point d\'intérêt',
                        options: { event_name: 'button-delete-the-style-clicked' },
                        value: undefined
                    },
                ]
            },
            {
                groupName: 'general',
                groupTitle: 'Taille',
                groupIcon: 'fa fa-expand-arrows-alt',
                controls: [
                    {
                        type: 'float',
                        name: 'x',
                        title: 'La position horizontalement',
                        value: $.imageMapProDefaultSpotSettings.x
                    },
                    {
                        type: 'float',
                        name: 'y',
                        title: 'La position verticalement',
                        value: $.imageMapProDefaultSpotSettings.y
                    },
                    {
                        type: 'slider',
                        name: 'width',
                        title: 'Largeur',
                        options: { min: 0, max: 60, type: 'float' },
                        value: $.imageMapProDefaultSpotSettings.width
                    },
                    {
                        type: 'slider',
                        name: 'height',
                        title: 'Hauteur',
                        options: { min: 0, max: 60, type: 'float' },
                        value: $.imageMapProDefaultSpotSettings.height
                    },
                    // {
                    //     type: 'float',
                    //     name: 'width',
                    //     title: 'Largeur',
                    //     value: $.imageMapProDefaultSpotSettings.width
                    // },
                    // {
                    //     type: 'float',
                    //     name: 'height',
                    //     title: 'Hauteur',
                    //     value: $.imageMapProDefaultSpotSettings.height
                    // },
                    {
                        type: 'select',
                        name: 'connected_to',
                        title: 'Connecté à la forme',
                        options: [
                            { value: '', title: '(Not Connected)' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.connected_to,
                        render: false
                    },
                    {
                        type: 'switch',
                        name: 'use_connected_shape_tooltip',
                        title: 'Utiliser l\'info-bulle de la forme connectée',
                        value: $.imageMapProDefaultSpotSettings.use_connected_shape_tooltip,
                        render: false
                    },
                ]
            },
            {
                groupName: 'actions',
                groupTitle: 'Actions',
                groupIcon: 'fa fa-bolt',
                controls: [
                    {
                        type: 'select',
                        name: 'click',
                        title: 'Cliquez sur Action',
                        options: [
                            { value: 'no-action', title: 'Pas d\'action' },
                            { value: 'run-script', title: 'Exécuter un script' },
                            { value: 'follow-link', title: 'Suivez le lien' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.actions.click
                    },
                    {
                        type: 'text',
                        name: 'link',
                        title: 'Lien URL',
                        value: $.imageMapProDefaultSpotSettings.actions.link
                    },
                    {
                        type: 'textarea',
                        name: 'script',
                        title: 'Script à exécuter',
                        value: $.imageMapProDefaultSpotSettings.actions.script
                    },
                    {
                        type: 'switch',
                        name: 'open_link_in_new_window',
                        title: 'Ouvre le lien dans une nouvelle fenêtre',
                        value: $.imageMapProDefaultSpotSettings.actions.open_link_in_new_window
                    },
                ]
            },
            {
                groupName: 'icon',
                groupTitle: 'L\'icône',
                groupIcon: 'fa fa-map-marker',
                controls: [
                    
                    {
                        type: 'button group',
                        name: 'icon_type',
                        title: '',
                        options: [
                            // { value: 'library', title: 'Bibliothèque' },
                            // { value: 'custom', title: 'Personnalisable' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_type
                    },
                    {
                        type: 'button',
                        name: 'choose_icon_from_library',
                        title: 'Utilisez la bibliothèque d\'icônes',
                        options: { event_name: 'button-choose-icon-clicked' },
                        value: undefined
                    },
                    {
                        type: 'text',
                        name: 'icon_svg_path',
                        title: 'Lien SVG',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_svg_path,
                        render: false
                    },
                    {
                        type: 'text',
                        name: 'icon_svg_viewbox',
                        title: 'Icône SVG Viewbox',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_svg_viewbox,
                        render: false
                    },
                    {
                        type: 'text',
                        name: 'icon_url',
                        title: 'Ou l\'URL d\'une icône',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_url
                    },
                    {
                        type: 'switch',
                        name: 'icon_is_pin',
                        title: 'L\'icône est un Pin',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_is_pin,
                        render: false
                    },
                    {
                        type: 'switch',
                        name: 'icon_shadow',
                        title: 'Ajouter une Ombre à l\'Icône',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_shadow
                    },
                    {
                        type: 'switch',
                        name: 'use_icon',
                        title: 'Utiliser le motif',
                        value: $.imageMapProDefaultSpotSettings.default_style.use_icon
                    },
                    {
                        type: 'switch',
                        name: 'use_icon_style',
                        title: 'Utiliser le fond',
                        value: $.imageMapProDefaultSpotSettings.default_style.use_icon_style
                    },
                ]
            },
            {
                groupName: 'default_style',
                groupTitle: 'Style',
                groupIcon: 'fa fa-paint-brush',
                controls: [
                    {
                        type: 'slider',
                        name: 'opacity',
                        title: 'Opacité',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.default_style.opacity
                    },
                    {
                        type: 'color',
                        name: 'icon_fill',
                        title: 'Couleur de remplissage',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_fill
                    },
                    {
                        type: 'select',
                        name: 'border_radius',
                        title: 'Forme',
                        options: [
                            { value: "0", title: "Carré"},
                            { value: "10", title: "Carré-arrondi"},
                            //{ value: "20", title: "moyenne"},
                            { value: "50", title: "Rond"}
                        ],
                        value: $.imageMapProDefaultSpotSettings.default_style.border_radius
                    },
                    {
                        type: 'color',
                        name: 'background_color',
                        title: 'Couleur de fond',
                        value: $.imageMapProDefaultSpotSettings.default_style.background_color
                    },
                    {
                        type: 'slider',
                        name: 'background_opacity',
                        title: 'Opacité de fond',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.default_style.background_opacity
                    },
                    {
                        type: 'slider',
                        name: 'border_width',
                        title: 'Largeur de la bordure',
                        options: { min: 0, max: 20, type: 'int' },
                        value: $.imageMapProDefaultSpotSettings.default_style.border_width
                    },
                    {
                        type: 'select',
                        name: 'border_style',
                        title: 'Style de bordure',
                        options: [
                            { value: 'none', title: 'None' },
                            { value: 'hidden', title: 'Hidden' },
                            { value: 'solid', title: 'Solid' },
                            { value: 'dotted', title: 'Dotted' },
                            { value: 'dashed', title: 'Dashed' },
                            { value: 'double', title: 'Double' },
                            { value: 'groove', title: 'Groove' },
                            { value: 'inset', title: 'Inset' },
                            { value: 'outset', title: 'Outset' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.default_style.border_style
                    },
                    {
                        type: 'color',
                        name: 'border_color',
                        title: 'Couleur de la bordure',
                        value: $.imageMapProDefaultSpotSettings.default_style.border_color
                    },
                    {
                        type: 'slider',
                        name: 'border_opacity',
                        title: 'Opacité de bordure',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.default_style.border_opacity
                    },
                    {
                        type: 'color',
                        name: 'fill',
                        title: 'Remplir',
                        value: $.imageMapProDefaultSpotSettings.default_style.fill
                    },
                    {
                        type: 'slider',
                        name: 'fill_opacity',
                        title: 'Remplir l\'opacité',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.default_style.fill_opacity
                    },
                    {
                        type: 'color',
                        name: 'stroke_color',
                        title: 'Couleur de trait',
                        value: $.imageMapProDefaultSpotSettings.default_style.stroke_color
                    },
                    {
                        type: 'slider',
                        name: 'stroke_opacity',
                        title: 'Opacité de trait',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.default_style.stroke_opacity
                    },
                    {
                        type: 'slider',
                        name: 'stroke_width',
                        title: 'Taille de trait',
                        options: { min: 0, max: 20, type: 'int' },
                        value: $.imageMapProDefaultSpotSettings.default_style.stroke_width
                    },
                    // {
                    //     type: 'text',
                    //     name: 'stroke_dasharray',
                    //     title: 'Stroke Dasharray',
                    //     value: $.imageMapProDefaultSpotSettings.default_style.stroke_dasharray
                    // },
                    // {
                    //     type: 'select',
                    //     name: 'stroke_linecap',
                    //     title: 'Stroke Linecap',
                    //     options: [
                    //         { value: 'butt', title: 'Butt' },
                    //         { value: 'round', title: 'Round' },
                    //         { value: 'square', title: 'Square' },
                    //     ],
                    //     value: $.imageMapProDefaultSpotSettings.default_style.stroke_linecap
                    // },
                ]
            },
            {
                groupName: 'mouseover_style',
                groupTitle: 'Style de souris',
                groupIcon: 'fa fa-paint-brush',
                controls: [
                    {
                        type: 'button',
                        name: 'copy_from_default_styles',
                        title: 'Copier à partir des styles par défaut',
                        options: { event_name: 'button-copy-from-default-styles-clicked' },
                        value: undefined
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_opacity',
                        title: 'Opacité',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.opacity
                    },
                    {
                        type: 'color',
                        name: 'mouseover_icon_fill',
                        title: 'Couleur de remplissage des icônes SVG ',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.icon_fill
                    },
                    {
                        type: 'int',
                        name: 'mouseover_border_radius',
                        title: 'Rayon de la bordure',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.border_radius
                    },
                    {
                        type: 'color',
                        name: 'mouseover_background_color',
                        title: 'Couleur de fond',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.background_color
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_background_opacity',
                        title: 'Opacité de fond',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.background_opacity
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_border_width',
                        title: 'Largeur de la bordure',
                        options: { min: 0, max: 20, type: 'int' },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.border_width
                    },
                    {
                        type: 'select',
                        name: 'mouseover_border_style',
                        title: 'Style de bordure',
                        options: [
                            { value: 'none', title: 'None' },
                            { value: 'hidden', title: 'Hidden' },
                            { value: 'solid', title: 'Solid' },
                            { value: 'dotted', title: 'Dotted' },
                            { value: 'dashed', title: 'Dashed' },
                            { value: 'double', title: 'Double' },
                            { value: 'groove', title: 'Groove' },
                            { value: 'inset', title: 'Inset' },
                            { value: 'outset', title: 'Outset' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.border_style
                    },
                    {
                        type: 'color',
                        name: 'mouseover_border_color',
                        title: 'Couleur de la bordure',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.border_color
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_border_opacity',
                        title: 'Opacité de bordure',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.border_opacity
                    },
                    {
                        type: 'color',
                        name: 'mouseover_fill',
                        title: 'Remplir',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.fill
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_fill_opacity',
                        title: 'Remplir l\'opacité',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.fill_opacity
                    },
                    {
                        type: 'color',
                        name: 'mouseover_stroke_color',
                        title: 'Stroke Color',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.stroke_color
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_stroke_opacity',
                        title: 'Stroke Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.stroke_opacity
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_stroke_width',
                        title: 'Stroke Width',
                        options: { min: 0, max: 20, type: 'int' },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.stroke_width
                    },
                    {
                        type: 'text',
                        name: 'mouseover_stroke_dasharray',
                        title: 'Stroke Dasharray',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.stroke_dasharray
                    },
                    {
                        type: 'select',
                        name: 'mouseover_stroke_linecap',
                        title: 'Stroke Linecap',
                        options: [
                            { value: 'butt', title: 'Butt' },
                            { value: 'round', title: 'Round' },
                            { value: 'square', title: 'Square' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.stroke_linecap
                    },
                ]
            },
            {
                groupName: 'tooltip_settings',
                groupTitle: 'Pop up',
                groupIcon: 'fa fa-comment',
                controls: [
                  
                    
                    {
                        type: 'int',
                        name: 'tooltip_border_radius',
                        title: 'Border Radius',
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.border_radius,
                        render: false
                    },
                    {
                        type: 'int',
                        name: 'tooltip_padding',
                        title: 'Le padding',
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.padding,
                        render: false
                    },
                    {
                        type: 'color',
                        name: 'tooltip_background_color',
                        title: 'Couleur de fond',
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.background_color
                    },
                    {
                        type: 'slider',
                        name: 'tooltip_background_opacity',
                        title: 'Opacité de fond',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.background_opacity
                    },
                    {
                        type: 'select',
                        name: 'tooltip_position',
                        title: 'La position',
                        options: [
                            { value: 'top', title: 'Haut' },
                            { value: 'bottom', title: 'Bas' },
                            { value: 'left', title: 'Gauche' },
                            { value: 'right', title: 'Droite' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.position,
                        render: false
                    },
                    {
                        type: 'switch',
                        name: 'tooltip_auto_width',
                        title: 'Largeur automatique',
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.auto_width,
                        render: false                        
                    },
                    {
                        type: 'int',
                        name: 'tooltip_width',
                        title: 'Largeur',
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.width,
                        render: false
                    },
                ]
            },
            {
                groupName: 'tooltip_content',
                groupTitle: 'Contenu de l\'info-bulle',
                groupIcon: 'fa fa-paragraph',
                controls: [
                    {
                        type: 'button group',
                        name: 'tooltip_content_type',
                        title: 'Contenu de l\'info-bulle',
                        options: [
                            { value: 'plain-text', title: 'Texte Simple' },
                            { value: 'content-builder', title: 'Le Builder' },
                        ]
                    },
                    {
                        type: 'textarea',
                        name: 'plain_text',
                        title: 'Contenu de l\'info-bulle',
                        value: $.imageMapProDefaultSpotSettings.tooltip_content.plain_text
                    },
                    {
                        type: 'color',
                        name: 'plain_text_color',
                        title: 'Couleur du texte',
                        value: $.imageMapProDefaultSpotSettings.tooltip_content.plain_text_color
                    },
                    {
                        type: 'object',
                        name: 'squares_settings',
                        title: 'Paramètres des carrés',
                        value: $.imageMapProDefaultSpotSettings.tooltip_content.squares_settings,
						render: false
                    },
                    {
                        type: 'button',
                        name: 'launch_content_builder',
                        title: 'Lancer le Builder',
                        options: { event_name: 'button-launch-content-builder-clicked' },
                        value: undefined
                    },
                ]
            },
        ]
    });

    // Register Tour
    $.wcpTourRegister({
        name: 'Visite',
        welcomeScreen: {
            title: 'Bienvenue!',
            text: 'Ceci est une visite guidée pour vous aider à démarrer rapidement avec CulturMoov Plugin. <br> Cliquez sur le bouton ci-dessous pour commencer!',
            startButtonTitle: 'Faites le tour',
            cancelButtonTitle: 'Ou passez ce guide',
        },
        steps: [
            {
                title: 'Drawing Shapes',
                text: 'Use the toolbar on the left to draw different kinds of shapes.<br>Choose between Spots/Icons, Ellipses, Rectangles or polygons.',
                tip: {
                    title: 'Toolbar',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/01-drawing-shapes.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/01-drawing-shapes.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/01-drawing-shapes.mp4',
                    },
                    position: 'bottom-left',
                    highlightRect: true
                },
            },
            {
                title: 'Customize Your Shapes',
                text: 'Change how the shapes look by selecting a shape <br>and clicking “Shape” on the left, and then “Default Style” or “Mouseover Style”.',
                tip: {
                    title: 'Shape Styles',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/02-customizing-shapes.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/02-customizing-shapes.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/02-customizing-shapes.mp4',
                    },
                    position: 'bottom-right',
                    arrowStyle: 'transform: scaleX(-1);',
                    highlightRect: true
                }
            },
            {
                title: 'Edit and Delete Shapes',
                text: 'From the list on the right you can do various things with your shapes, like <br>copy-pasting styles, reordering them, or deleting the shapes.',
                tip: {
                    title: 'Shapes List',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/03-list.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/03-list.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/03-list.mp4',
                    },
                    position: 'bottom-left',
                    highlightRect: true
                }
            },
            {
                title: 'Use Icons',
                text: 'To have an icon, place a Spot shape on the image, then open the “Icon” tab on the left to customize it.<br>Choose from 150 built-in SVG icons, or use your own!',
                tip: {
                    title: 'Icon Settings',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/04-icons.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/04-icons.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/04-icons.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
            {
                title: 'Tooltip Content Builder',
                text: 'Use a fully featured content builder to add rich content to the tooltips. <br>You can launch the content builder by selecting a shape and opening the "Tooltip Content" settings tab.',
                tip: {
                    title: 'Tooltip Content Settings',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/05-content-builder.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/05-content-builder.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/05-content-builder.mp4',
                    },
                    position: 'top-right',
                    highlightRect: true
                }
            },
            {
                title: 'Responsive &amp; Fullscreen Tooltips',
                text: 'Image Map Pro is fully optimized for mobile devices. It\'s responsive, <br>and you even have the option for fullscreen tooltips on mobile. To change these settings, open the "General" settings tab.',
                tip: {
                    title: 'Image Map Settings',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/06-responsive.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/06-responsive.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/06-responsive.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
            {
                title: 'Preview Mode',
                text: 'See how your image map will look like by entering Preview Mode. <br>You can continue to tweak settings and see the changes live!',
                tip: {
                    title: 'Preview Mode Button',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/07-preview-mode.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/07-preview-mode.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/07-preview-mode.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
            {
                title: 'Save and Load',
                text: 'This editor uses Local Storage to save your work. You can have <br>as many image maps as you want, and switch between them any time. No database needed!',
                tip: {
                    title: 'Save/Load Buttons',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
            {
                title: 'Import and Export',
                text: 'You can also import and export your data, <br>in case you need to switch devices, or save your work somewhere else.',
                tip: {
                    title: 'Import/Export Buttons',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/09-import-export.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/09-import-export.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/09-import-export.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
            {
                title: 'Easy Installation',
                text: 'When you are ready to add the image map to your site, simply click the <br>"Code" button and follow the instructions.',
                tip: {
                    title: 'Code Button',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/10-install.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/10-install.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/10-install.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
        ]
    });

    var extraMainButtons = [
        {
            name: 'code',
            icon: 'fa fa-code',
            title: 'Code',
            id:'extra-button-code'
        },
        {
            name: 'import',
            icon: 'fa fa-arrow-down',
            title: 'Importer',
            id:'extra-button-import'
        },
        {
            name: 'export',
            icon: 'fa fa-arrow-up',
            title: 'Exporter',
            id:'extra-button-export'
        }
        ,
        // {
        //     name: 'mobile',
        //     icon: 'fa fa-mobile',
        //     title: 'Mobile',
        //     id:'extra-button-mobile'
        // }
        // ,
        // {
        //     name: 'tablet',
        //     icon: 'fa fa-tablet',
        //     title: 'Tablette',
        //     id:'extra-button-tablet'
        // }
        // ,
        // {
        //     name: 'desktop',
        //     icon: 'fa fa-desktop',
        //     title: 'Originale',
        //     id:'extra-button-desktop'
        // }
    ];
    
    $.WCPEditorSettings = {
        mainTabs: [
            {
                name: 'Image Map',
                texte: 'Paramètres',
                icon: 'fa fa-cog',
                title: 'Paramètres de la Mini Expo'
            },
            {
                name: 'Shape',
                texte: 'Point d\intêret',
                icon: 'fa fa-object-ungroup',
                title: 'Le point d\'intérêt séléctionné'
            }
        ],
        toolbarButtons: [
            [
                {
                    name: 'spot',
                    icon: 'fa fa-star',
                    title: 'Ajouter une icône'
                },
                {
                    name: 'geo',
                    icon: 'fa fa-map-marker',
                    title: 'Ajouter une géolocalisation'
                },
                {
                    name: 'infoslegale',
                    icon: 'fa fa-exclamation',
                    title: 'Ajouter les infos légale',
                },
             
                {
                    name: 'oval',
                    customIcon: '<div style="width: 14px; height: 14px; border: 2px solid #222; border-radius: 50px;"></div>',
                    title: 'Créer une éllipse'
                },
                {
                    name: 'rect',
                    customIcon: '<div style="width: 20px; height: 14px; border: 2px solid #222; border-radius: 5px;"></div>',
                    title: 'Créer un réctangle'
                },
                {
                    name: 'poly',
                    customIcon: '<svg width="24px" height="24px" viewport="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" style="stroke: black; stroke-width: 2px;" points="20,20 18,4 7,7 4,20"></polygon><ellipse cx="20" cy="20" rx="3" ry="3"></ellipse><ellipse cx="18" cy="4" rx="3" ry="3"></ellipse><ellipse cx="7" cy="7" rx="3" ry="3"></ellipse><ellipse cx="4" cy="20" rx="3" ry="3"></ellipse></svg>',
                    title: 'Créer un polygone'
                },
            ],
            [
                {
                    name: 'select',
                    icon: 'fa fa-mouse-pointer',
                    title: 'Sélectionner une icône'
                },
                // {
                //     name: 'zoom-in',
                //     icon: 'fa fa-search-plus',
                //     title: 'Zoom Avant (CTRL +)',
                // },
                // {
                //     name: 'zoom-out',
                //     icon: 'fa fa-search-minus',
                //     title: 'Zoom Arrière (CTRL -)'
                // },
                {
                    name: 'drag',
                    icon: 'fa fa-hand-paper',
                    title: 'Faites glisser la toile (maintenez la barre d\'espace et faites glisser)'
                },
                {
                    name: 'reset',
                    icon: 'fas fa-expand',
                    title: 'Réinitialiser la position et les actions (CTRL + 0)',
                    kind: 'bouton'
                },
            ]
            
        ], 
        extraMainButtons: extraMainButtons,
        listItemButtons: [
               
        ],
        listItemTitle: 'Éditer',
        listItemTitleButtons: [
            {
                name: 'rename',
                icon: 'fa fa-pencil-alt',
                title: 'Renommer'
            },
            {
                name: 'copy',
                icon: 'fa fa-copy',
                title: 'Copier le style'
            },
            {
                name: 'paste',
                icon: 'fa fa-paste',
                title: 'Coller le style'
            },
            {
                name: 'duplicate',
                icon: 'fa fa-clone',
                title: 'dupliquer'
            },
            {
                name: 'delete',
                icon: 'fa fa-trash-alt',
                title: 'Effacer'
            },
        ],
        fullscreenButton: false,
        newButton: true,
        helpButton: false,
        previewToggle: true
    };

    // Init Editor
    $(document).ready(function() {
        $.image_map_pro_init_editor(undefined, $.WCPEditorSettings);
    });
})( jQuery, window, document );
