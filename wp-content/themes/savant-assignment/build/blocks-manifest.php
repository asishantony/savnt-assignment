<?php
// This file is generated. Do not modify it manually.
return array(
	'banner' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/banner',
		'version' => '0.1.0',
		'title' => 'Banner',
		'category' => 'Custom',
		'icon' => 'banner',
		'description' => 'Banner block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'bannerType' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'innerBackgroundColor' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'ctaButtonText' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctaButtonLink' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageUrl' => array(
				'type' => 'string'
			),
			'imageId' => array(
				'type' => 'number'
			),
			'preTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'content' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'banner',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'heading' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/heading',
		'version' => '0.1.0',
		'title' => 'Heading',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Your Heading'
			),
			'subheading' => array(
				'type' => 'string',
				'default' => 'Your Subheading'
			),
			'background' => array(
				'type' => 'string',
				'default' => 'default'
			)
		),
		'textdomain' => 'heading',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'icon-display' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/icon-display',
		'version' => '0.1.0',
		'title' => 'Icon Display',
		'category' => 'Custom',
		'icon' => 'icon',
		'description' => 'Icon Display block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p',
				'default' => ''
			),
			'icons' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'textdomain' => 'banner',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'myfooter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/myfooter',
		'version' => '0.1.0',
		'title' => 'Myfooter',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'myfooter',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'myheader' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/myheader',
		'version' => '0.1.0',
		'title' => 'Myheader',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'myheader',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
