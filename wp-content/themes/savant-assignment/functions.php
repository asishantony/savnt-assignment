<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function savant_assignment_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );

    // Enable support for HTML5 markup.
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ) );

    // Add support for core custom logo.
    add_theme_support( 'custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
    ) );

    // Register navigation menus
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary Menu', 'savant-assignment' ),
        'footer'  => esc_html__( 'Footer Menu', 'savant-assignment' ),
    ) );
}
add_action( 'after_setup_theme', 'savant_assignment_setup' );
//enques the styles and scripts
function savant_assignment_scripts() {
    // Theme stylesheet.
    wp_enqueue_style( 'savant-assignment-style', get_stylesheet_uri() );
    // Load the block editor style.
    wp_enqueue_style( 'savant-assignment-editor-style', get_theme_file_uri( '/build/index.css' ) );
    // Load the theme block editor script.
    // wp_enqueue_script( 'savant-assignment-editor', get_theme_file_uri( '/build/index.js' ), array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ), filemtime( get_theme_file_path( '/build/index.js' ) ), true );
}
add_action( 'wp_enqueue_scripts', 'savant_assignment_scripts' );
// Registers the custom blocks
function myblocks_myheader_block_init(){

    $blocks = [
        'myheader',
        'myfooter',
        'heading',
        'banner',
        'icon-display',
    ];
    foreach($blocks as $block){
        register_block_type(__DIR__ . '/build/' . $block);
    }
   
}
add_action('init', 'myblocks_myheader_block_init');