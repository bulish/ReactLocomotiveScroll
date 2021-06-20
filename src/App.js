import React, {useRef} from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Page1 from './component';
import Page2 from './component2';
import Page3 from './component3';

import './base.css';
import './styles.scss';

function App() {
  const containerRef = useRef(null);
	return (
		<div>
			<LocomotiveScrollProvider
				options={{smooth: true,}}
				watch={['Virtual Scroll']}
				containerRef={containerRef}
			>
				<div data-scroll-container ref={containerRef}>
					<section><Page1 /></section>
					<section><Page2 /></section>
					<section><Page3 /></section>
				</div>
			</LocomotiveScrollProvider>
		</div>
	);
}

export default App;
