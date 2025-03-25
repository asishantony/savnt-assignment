<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$heading = $attributes['heading'];
$subheading = $attributes['subheading'];
$bacground_class = $attributes['background'];
?>
<div class="heading <?php echo $bacground_class; ?>">
    <h2><?php echo $heading; ?></h2>
    <?php if($subheading): ?>
    <p><?php echo $subheading; ?></p>
    <?php endif; ?>
</div>


