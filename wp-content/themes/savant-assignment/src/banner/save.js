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
    const { bannerType, preTitle, title, content, ctaButtonText, ctaButtonLink, imageUrl } = attributes;
    const blockProps = useBlockProps.save();
    
    const bannerClass = `banner-wrapper ${bannerType || 'default'}`;

    return (
        <div {...blockProps}>
            <div className="container">
                <div className="banner__content">
                    <div className="banner__content-left">
                        {preTitle && (
                            <RichText.Content
                                tagName="h2"
                                className="banner__pre-title"
                                value={preTitle}
                            />
                        )}
                        
                        {title && (
                            <RichText.Content
                                tagName="h1"
                                className="banner__title"
                                value={title}
                            />
                        )}
                        
                        {content && (
                            <RichText.Content
                                tagName="p"
                                className="banner__description"
                                value={content}
                            />
                        )}
                        
                        {ctaButtonText && (
                            <a
                                href={ctaButtonLink || '#'}
                                className={`btn btn-primary banner__button`}
                            >
                                {ctaButtonText}
                            </a>
                        )}
                    </div>
                    
                    {imageUrl && (
                        <div className="banner__content-right">
                            <img src={imageUrl} alt="" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}