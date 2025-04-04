/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Block attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
    const { content,icons } = attributes;
    const blockProps = useBlockProps.save();
    
    const bannerClass = `banner-wrapper ${bannerType || 'default'}`;

    return (
        <div {...blockProps}>
            {content && (
                <RichText.Content tagName="p" value={content} />
            )}
            {icons.length > 0 && (
                <div className="icon-display-container">
                    {icons.map((icon, index) => (
                        <div key={index} className="icon-item">
                            {icon.url && (
                                <img src={icon.url} alt={icon.alt || 'Icon'} />
                            )}
                            {icon.name && <span className="icon-name">{icon.name}</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}