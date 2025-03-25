/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl, PanelBody, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to set block attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { heading, subheading, background } = attributes;
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			{/* Inspector Controls (Sidebar) */}
			<InspectorControls>
				<PanelBody title="Block Settings">
					<SelectControl
						label="Background"
						value={background || "default"}
						options={[
							{ label: __("Default", "savant-assignment"), value: "default" },
							{ label: __("Primary", "savant-assignment"), value: "primary" },
							{
								label: __("Secondary", "savant-assignment"),
								value: "secondary",
							},
						]}
						onChange={(value) => setAttributes({ background: value })}
					/>
					<TextControl
						label="Heading"
						value={heading}
						onChange={(value) => setAttributes({ heading: value })}
					/>
					<TextControl
						label="Subheading"
						value={subheading}
						onChange={(value) => setAttributes({ subheading: value })}
					/>
				</PanelBody>
			</InspectorControls>

			{/* Block Preview in Editor */}
			<div className="dynamic-heading-wrapper">
				<div className="input-group">
					<div className="label">
						<span>{__("Title", "savant-assignment")}</span>
					</div>
					<RichText
						tagName="p"
						className="dynamic-heading"
						value={heading}
						onChange={(value) => setAttributes({ heading: value })}
						placeholder="Enter heading..."
					/>
				</div>
				<div className="input-group">
					<div className="label">
						<span>{__("Subheading", "savant-assignment")}</span>
					</div>
					<RichText
						tagName="p"
						className="dynamic-subheading"
						value={subheading}
						onChange={(value) => setAttributes({ subheading: value })}
						placeholder="Enter subheading..."
					/>
				</div>
			</div>
		</div>
	);
}
