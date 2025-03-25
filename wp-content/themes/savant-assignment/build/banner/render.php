<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$banner_type = $attributes['bannerType'];
$pre_title = $attributes['preTitle'];
$title = $attributes['title'];
$description = $attributes['content'];
$button_text = $attributes['ctaButtonText'];
$button_url = $attributes['ctaButtonLink'];
$image = $attributes['imageUrl'];
$image_id = $attributes['imageId'];
$background_class = '';
$background = $attributes['backgroundColor'];
if($background ){
    $background_class = "bg_$background";
}
$inner_background_class = '';
$inner_background = $attributes['innerBackgroundColor'];
if($inner_background && !in_array($banner_type,['default','simple']) ){
    $inner_background_class = "bg_inner_$inner_background";
}
$banner_class = '';
if ($banner_type == 'right-image') {
    $banner_class = 'banner__right banner__module';
} else if ($banner_type == 'left-image') {
    $banner_class = 'banner__left banner__module';
}
//get image alt from image id
$image_alt = get_post_meta($image_id, '_wp_attachment_image_alt', TRUE);
?>
<?php if ($banner_type != 'simple'): ?>
    <div class="banner <?php echo $banner_class.' '.$background_class; ?>">
        <div class="container">
            <div class="banner__content <?php echo $inner_background_class?>">
                <div class="banner__content-left">
                    <?php if ($banner_type == 'default'): ?>
                        <h2 class="banner__pre-title"><?php echo $pre_title; ?></h2>
                    <?php endif; ?>
                    <h1 class="banner__title"><?php echo $title; ?></h1>
                    <p class="banner__description"><?php echo $description; ?></p>
                    <?php if ($button_text): ?>
                        <a href="<?php echo $button_url; ?>" class="btn btn-primary banner__button"><?php echo $button_text; ?></a>
                    <?php endif; ?>
                </div>
                <div class="banner__content-right">
                    <img src="<?php echo $image; ?>" alt="<?php echo $image_alt ?>" />
                </div>
            </div>
        </div>
    </div>
<?php else: ?>
    <div class="banner__simple">
        <div class="container">
            <div class="banner__simple-content">
                    <div class="simple__content">
                        <?php echo $description; ?>
                    </div>
                    <div class="simple__image">
                        <img src="<?php echo $image; ?>" alt="<?php echo $image_alt ?>" />
                    </div>
            </div>
        </div>
    </div>
<?php endif; ?>