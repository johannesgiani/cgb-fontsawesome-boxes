/**
 * BLOCK: fontsawesome-boxes
 */

import './style.scss';
import './editor.scss';
import Box from './model';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { TextareaControl } from '@wordpress/components';

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
				new Box('fas fa-handshake', 'Beratende Ingenieure und Architekten'),
				new Box('fas fa-building', 'Sachverständige für das Bauwesen'),
				new Box('fas fa-users', 'Mitglieder der Ingenieur- u. Architektenkammer'),
			],
		}
	},

	edit: function( props ) {

		const onChangeText = ( text, index ) => {
			let newBoxes = [];
			Object.assign(newBoxes, props.attributes.boxes);
			newBoxes[index].text = text;
			props.setAttributes({ boxes: newBoxes})
		};

		const boxes = props.attributes.boxes.map((box, index) =>
			<li>
				<TextareaControl
					value={box.text}
					onChange={ ( text ) => onChangeText( text, index ) }
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
