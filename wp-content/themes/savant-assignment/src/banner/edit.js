/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

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
	MediaUploadCheck,
} from "@wordpress/block-editor";

/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
	PanelBody,
	Button,
	TextControl,
	SelectControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Banner Settings", "savant-assignment")}>
					<SelectControl
						label={__("Banner Type", "savant-assignment")}
						value={attributes.bannerType || "default"}
						options={[
							{ label: __("Default", "savant-assignment"), value: "default" },
							{
								label: __("Right Image", "savant-assignment"),
								value: "right-image",
							},
							{
								label: __("Left Image", "savant-assignment"),
								value: "left-image",
							},
							{
								label: __("Simple", "savant-assignment"),
								value: "simple",
							},
						]}
						onChange={(bannerType) => setAttributes({ bannerType })}
					/>

					<SelectControl
						label={__("Background Color", "savant-assignment")}
						value={attributes.backgroundColor || "default"}
						options={[
							{ label: __("Default", "savant-assignment"), value: "default" },
							{
								label: __("Primary", "savant-assignment"),
								value: "primary",
							},
							{
								label: __("Secondary", "savant-assignment"),
								value: "secondary",
							},
						]}
						onChange={(backgroundColor) => setAttributes({ backgroundColor })}
					/>
					<SelectControl
						label={__("Inner Background Color", "savant-assignment")}
						value={attributes.innerBackgroundColor || "default"}
						options={[
							{ label: __("Default", "savant-assignment"), value: "default" },
							{
								label: __("Primary", "savant-assignment"),
								value: "primary",
							},
							{
								label: __("Secondary", "savant-assignment"),
								value: "secondary",
							},
						]}
						onChange={(innerBackgroundColor) => setAttributes({ innerBackgroundColor })}
					/>

					<TextControl
						label={__("CTA Button Text", "savant-assignment")}
						value={attributes.ctaButtonText || ""}
						onChange={(ctaButtonText) => setAttributes({ ctaButtonText })}
					/>

					<TextControl
						label={__("CTA Button Link", "savant-assignment")}
						value={attributes.ctaButtonLink || ""}
						onChange={(ctaButtonLink) => setAttributes({ ctaButtonLink })}
					/>

					<div className="banner-image-upload">
						<label>{__("Banner Image", "savant-assignment")}</label>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({ imageUrl: media.url, imageId: media.id })
								}
								allowedTypes={["image"]}
								value={attributes.imageId}
								render={({ open }) => (
									<div>
										{attributes.imageUrl ? (
											<div className="banner-image-preview">
												<img src={attributes.imageUrl} alt={__("Banner")} />
												<Button
													isDestructive
													onClick={() =>
														setAttributes({ imageUrl: null, imageId: null })
													}
												>
													{__("Remove", "savant-assignment")}
												</Button>
											</div>
										) : (
											<Button variant="secondary" onClick={open}>
												{__("Upload Image", "savant-assignment")}
											</Button>
										)}
									</div>
								)}
							/>
						</MediaUploadCheck>
					</div>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className="banner-content-edit">
					{attributes.bannerType != "simple" && (
						<div className="input-group">
							<div className="label">
								<span>{__("Pre Title", "savant-assignment")}</span>
							</div>
							<RichText
								tagName="p"
								className="banner-pre-title"
								value={attributes.preTitle || ""}
								onChange={(preTitle) => setAttributes({ preTitle })}
								placeholder={__("Pre title...", "savant-assignment")}
							/>
						</div>
					)}
					{attributes.bannerType != "simple" && (
						<div className="input-group">
							<div className="label">
								<span>{__("Title", "savant-assignment")}</span>
							</div>
							<RichText
								tagName="p"
								className="banner-title"
								value={attributes.title || ""}
								onChange={(title) => setAttributes({ title })}
								placeholder={__("Banner title...", "savant-assignment")}
								allowedFormats={[
									"core/bold",
									"core/italic",
									"core/link",
									"core/strikethrough",
									"core/underline",
									"core/text-color",
									"core/subscript",
									"core/superscript",
								]}
							/>
						</div>
					)}

					<div className="input-group">
						<div className="label">
							<span>{__("Content", "savant-assignment")}</span>
						</div>

						<RichText
							tagName="p"
							className="banner-content "
							value={attributes.content || ""}
							onChange={(content) => setAttributes({ content })}
							placeholder={__("Banner content...", "savant-assignment")}
						/>
					</div>

					{attributes.ctaButtonText && attributes.bannerType != "simple" && (
						<div className="input-group">
							<div className="label">
								<span>{__("CTA", "savant-assignment")}</span>
							</div>
							<div className="cta">
								<a
									href={attributes.ctaButtonLink || "#"}
									className={`cta-button ${attributes.bannerType || "default"}`}
								>
									{attributes.ctaButtonText}
								</a>
							</div>
						</div>
					)}

					{attributes.imageUrl && attributes.bannerType == "simple" && (
						<div className="input-group">
							<div className="label">
								<span>{__("Image", "savant-assignment")}</span>
							</div>
							<div className="image">
								<img src={attributes.imageUrl} alt={__("Banner")} />
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
