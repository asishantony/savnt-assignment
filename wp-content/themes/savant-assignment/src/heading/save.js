/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

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
	const { heading, subheading, background } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className="dynamic-heading-wrapper">
				<RichText.Content
					tagName="h2"
					className="dynamic-heading"
					value={heading}
				/>
				<RichText.Content
					tagName="p"
					className="dynamic-subheading"
					value={subheading}
				/>

				<RichText.Content
					tagName="p"
					className="dynamic-background"
					value={background}
				/>
			</div>
		</div>
	);
}
