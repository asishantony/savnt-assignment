<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */?>
<header id="masthead" class="site-header">
<div class="container">
	<div class="menu-wrapper">
		<div class="header-left">
			<div class="site-branding">
				<!-- load logo from assets images -->
				<?php
				$logo_url = get_template_directory_uri() . '/assets/images/logo.svg';
				?>
				<img src="<?php echo esc_url($logo_url); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" class="site-logo">
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e('Primary Menu', 'savant-assignment'); ?></button>
				<?php
				$menu_location = 'primary';
				$menu_items = array();

				if (($locations = get_nav_menu_locations()) && isset($locations[$menu_location])) {
					$menu = wp_get_nav_menu_object($locations[$menu_location]);
					$menu_items = wp_get_nav_menu_items($menu->term_id);
				}

				if ($menu_items) {
					echo '<ul id="primary-menu" class="menu header-menu">';

					$parent_items = array();
					$child_items = array();

					// Separate parent and child menu items
					foreach ($menu_items as $item) {
						if ($item->menu_item_parent == 0) {
							$parent_items[] = $item;
						} else {
							$child_items[$item->menu_item_parent][] = $item;
						}
					}

					// Display parent menu items
					foreach ($parent_items as $item) {
						$has_children = isset($child_items[$item->ID]) && !empty($child_items[$item->ID]);
						$classes = $has_children ? ' class="menu-item-has-children"' : ' class="menu-item"';

						echo '<li id="menu-item-' . $item->ID . '"' . $classes . '>';
						echo '<a href="' . esc_url($item->url) . '">' . esc_html($item->title) . '</a>';

						// Display child menu items if any
						if ($has_children) {
							echo '<ul class="sub-menu">';
							foreach ($child_items[$item->ID] as $child) {
								echo '<li id="menu-item-' . $child->ID . '" class="menu-item">';
								echo '<a href="' . esc_url($child->url) . '">' . esc_html($child->title) . '</a>';
								echo '</li>';
							}
							echo '</ul>';
						}

						echo '</li>';
					}

					echo '</ul>';
				} else {
					echo '<p>Please assign a menu to the primary menu location</p>';
				}
				?>
			</nav><!-- #site-navigation -->
		</div>
		<div class="header-right">
			<ul class="menu header-menu">
				<li class="menu-item"><a href="#">Login</a></li>
				<li class="menu-item"><a href="#">Pricing</a></li>
				<li class="menu-item"><button class="btn btn-primary">Schedule a Demo</button></li>

			</ul>
		</div>
	</div>
</div>
</header><!-- #masthead -->