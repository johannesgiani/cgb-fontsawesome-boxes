/**
 * BLOCK: fontsawesome-boxes
 */

import './style.scss';
import './editor.scss';
import Box from './model';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { TextareaControl, TextControl } from '@wordpress/components';

/**
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-fontsawesome-boxes', {
	title: __( 'Fontsawesome Boxes' ),
	icon: 'layout',
	category: 'common',
	attributes: {
		boxes: {
			type: "array",
			default: [
				new Box(),
				new Box(),
				new Box(),
			],
		}
	},

	edit: function( props ) {

		const onChange = ( box, index ) => {
			let newBoxes = [];
			Object.assign(newBoxes, props.attributes.boxes);
			newBoxes[index] = box;
			props.setAttributes({ boxes: newBoxes})
		}

		const boxes = props.attributes.boxes.map((box, index) =>
			<li>
				<TextControl
					label="CSS-Klassen des Icons"
					value={ box.iconClass }
					onChange={ ( iconClass ) => onChange( new Box(iconClass, box.text), index ) }
				/>
				<TextareaControl
					label="Textinhalt"
					value={ box.text }
					onChange={ ( text ) => onChange( new Box(box.iconClass, text), index ) }
				/>
			</li>
		);

		return (
			<ul className={ props.className }>
				{ boxes }
			</ul>
		);
	},

	save: function( props ) {
		const boxes = props.attributes.boxes.map((box) =>
			<li>
				<i className={ box.iconClass }></i>
				<p>{ box.text } </p>
			</li>
		);

		return (
			<ul className={ props.className }>
				{ boxes }
			</ul>
		);
	},
} );
