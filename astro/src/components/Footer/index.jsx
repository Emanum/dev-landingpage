import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Manuel Eiweck
			<small className={Styles.byline}>🚀 Built using Astro</small>
		</footer>
	);
}
export default Footer;
