<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
//get the theme url
$theme_url = get_template_directory_uri();
$logo = $theme_url . '/assets/images/logo.svg';
?>

<footer class="footer">
    <div class="container">
        <div class="footer__top">
            <?php
            $menu_location = 'footer';
            $menu_items = array();

            if (($locations = get_nav_menu_locations()) && isset($locations[$menu_location])) {
                $menu = wp_get_nav_menu_object($locations[$menu_location]);
                $menu_items = wp_get_nav_menu_items($menu->term_id);
            }

            if ($menu_items) {
                echo '<ul id="primary-menu" class="menu header-menu">';

                // Organize menu items into a hierarchical structure
                $menu_hierarchy = array();

                foreach ($menu_items as $item) {
                    // Top-level items (no parent)
                    if ($item->menu_item_parent == 0) {
                        $menu_hierarchy[$item->ID] = array(
                            'title' => $item->title,
                            'url' => $item->url,
                            'children' => array()
                        );
                    }
                    // Second-level items
                    elseif (isset($menu_hierarchy[$item->menu_item_parent])) {
                        $menu_hierarchy[$item->menu_item_parent]['children'][$item->ID] = array(
                            'title' => $item->title,
                            'url' => $item->url,
                            'children' => array()
                        );
                    }
                    // Third-level items
                    else {
                        // Find the parent of this item
                        foreach ($menu_hierarchy as &$top_level) {
                            foreach ($top_level['children'] as $second_id => &$second_level) {
                                if ($second_id == $item->menu_item_parent) {
                                    $second_level['children'][$item->ID] = array(
                                        'title' => $item->title,
                                        'url' => $item->url
                                    );
                                    break 2;
                                }
                            }
                        }
                    }
                }

                // Render the menu
                if (!empty($menu_hierarchy)) {
                    echo '<ul class="footer-menu">';

                    foreach ($menu_hierarchy as $top_item) {
                        echo '<li class="top-level-item">';
                        echo '<a href="' . esc_url($top_item['url']) . '">' . esc_html($top_item['title']) . '</a>';

                        // Second-level submenu
                        if (!empty($top_item['children'])) {
                            echo '<ul class="second-level-menu">';
                            foreach ($top_item['children'] as $second_item) {
                                echo '<li class="second-level-item">';
                                echo '<a href="' . esc_url($second_item['url']) . '">' . esc_html($second_item['title']) . '</a>';

                                // Third-level submenu
                                if (!empty($second_item['children'])) {
                                    echo '<ul class="third-level-menu">';
                                    foreach ($second_item['children'] as $third_item) {
                                        echo '<li class="third-level-item">';
                                        echo '<a href="' . esc_url($third_item['url']) . '">' . esc_html($third_item['title']) . '</a>';
                                        echo '</li>';
                                    }
                                    echo '</ul>';
                                }

                                echo '</li>';
                            }
                            echo '</ul>';
                        }

                        echo '</li>';
                    }

                    echo '</ul>';
                }
            } else {
            }
            ?>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom-left">
                <div class="footer__bottom-logo">
                    <img src="<?php echo $logo ?>" alt="" class="" />
                </div>
                <div class="footer__copyright">
                    <p>&copy; 2025 Savant Labs</p>
                </div>
            </div>
            <div class="footer__bottom-right">
                <ul class="footer__menu">
                    <li class="footer__menu-item"><a href="#">Privacy Policy</a></li>
                    <li class="footer__menu-item"><a href="#">Terms of Service</a></li>
                    <li class="footer__menu-item"><a href="#">Contact Us</a></li>
                </ul>         
            </div>
        </div>
    </div>
</footer>