<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://github.com/jn199
 * @since             1.0.0
 * @package           D_Cookie
 *
 * @wordpress-plugin
 * Plugin Name:       DangerousCookie
 * Plugin URI:        https://github.com/jn199/Dangerous-Cookie-Wordpress-Plugin
 * Description:       With this plugin, you can alert visitors that "This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use.".
 * Version:           1.0.0
 * Author:            Joshua Neve
 * Author URI:        https://github.com/jn199
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       d-cookie
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'PLUGIN_NAME_VERSION', '1.0.0' );

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_d_cookie() {

	$plugin = new D_Cookie();
	$plugin->run();

}
//Including the JS and CSS files.
add_action( 'wp_enqueue_scripts', 'dangerous_banner' );
function dangerous_banner() {

    // Enqueue the style
	wp_register_style('dangerous-banner-style',  plugin_dir_url( __FILE__ ) .'dangerous-banner.css');
    wp_enqueue_style('dangerous-banner-style');
    // Enqueue the script
    wp_register_script('dangerous-banner-script', plugin_dir_url( __FILE__ ) . 'dangerous-banner.js', array( 'jquery' ));
    wp_enqueue_script('dangerous-banner-script');
	}

?>
