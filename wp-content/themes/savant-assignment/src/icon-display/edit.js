/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
    useBlockProps, 
    InspectorControls,
    RichText,
    MediaUpload,
    MediaUploadCheck 
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';


/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { 
    PanelBody, 
    Button, 
    TextControl,
    SelectControl 
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
    // Initialize icons array if it doesn't exist
    useEffect(() => {
        if (!attributes.icons || !Array.isArray(attributes.icons)) {
            setAttributes({ icons: [] });
        }
    }, []);

    // Local state for immediate UI updates
    const [icons, setIcons] = useState(attributes.icons || []);
    
    // Update local state when attributes change
    useEffect(() => {
        if (!attributes.icons || !Array.isArray(attributes.icons)) {
            setAttributes({ icons: [] });
        }
    }, [attributes.icons, setAttributes]);
    
    // Function to add a new icon
    const addIcon = () => {
        const newIcons = [...icons, {}];
        setIcons(newIcons);
        setAttributes({ icons: newIcons });
    };
    
    // Function to update an existing icon
    const updateIcon = (index, updatedProperties) => {
        const newIcons = [...icons];
        newIcons[index] = { ...newIcons[index], ...updatedProperties };
        setIcons(newIcons);
        setAttributes({ icons: newIcons });
    };
    
    // Function to remove an icon
    const removeIcon = (index) => {
        const newIcons = [...icons];
        newIcons.splice(index, 1);
        setIcons(newIcons);
        setAttributes({ icons: newIcons });
    };

    return (
    <>
        <InspectorControls>
            <PanelBody title={__('Content Settings', 'icon-display')} initialOpen={true}>
                <TextControl
                    label={__('Content', 'icon-display')}
                    value={attributes.content || ''}
                    onChange={(content) => setAttributes({ content })}
                />
            </PanelBody>
            
            <PanelBody title={__('Icons', 'icon-display')} initialOpen={true}>
                {icons.map((icon, index) => (
                    <div key={index} className="icon-item" style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc' }}>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(media) => updateIcon(index, { url: media.url, id: media.id })}
                                allowedTypes={['image']}
                                value={icon.id}
                                render={({ open }) => (
                                    <div style={{ marginBottom: '10px' }}>
                                        {icon.url ? (
                                            <div>
                                                <img src={icon.url} alt="" style={{ maxWidth: '100%', maxHeight: '100px' }} />
                                                <Button isSecondary onClick={open} style={{ marginTop: '5px' }}>
                                                    {__('Replace Icon', 'icon-display')}
                                                </Button>
                                            </div>
                                        ) : (
                                            <Button isPrimary onClick={open}>
                                                {__('Select Icon', 'icon-display')}
                                            </Button>
                                        )}
                                    </div>
                                )}
                            />
                        </MediaUploadCheck>
                        
                        <TextControl
                            label={__('Title', 'icon-display')}
                            value={icon.title || ''}
                            onChange={(title) => updateIcon(index, { title })}
                        />
                        
                        <Button isDestructive onClick={() => removeIcon(index)}>
                            {__('Remove Icon', 'icon-display')}
                        </Button>
                    </div>
                ))}
                
                <Button isPrimary onClick={addIcon}>
                    {__('Add Icon', 'icon-display')}
                </Button>
            </PanelBody>
        </InspectorControls>
        
        <div {...useBlockProps()}>
            <RichText
                tagName="p"
                value={attributes.content || ''}
                onChange={(content) => setAttributes({ content })}
                placeholder={__('Enter content here...', 'icon-display')}
            />
            <div className="icon-grid">
                {icons.map((icon, index) => (
                    <div key={index} className="icon-item">
                        {icon.url && <img src={icon.url} alt={icon.title || ''} />}
                        {icon.title && <p className="icon-title">{icon.title}</p>}
                    </div>
                ))}
            </div>
        </div>
    </>
    );
}