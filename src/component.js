import React from 'react';

function Page() {
	return (
		<div data-scroll-section>
			<h1
				data-scroll
				data-scroll-speed="5"
				data-scroll-smooth="true"
			>
				Locomotive Scroll in React
			</h1>
			<p data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam nam,
				adipisci possimus beatae odio quia, quam corporis porro repellendus
				eveniet natus nulla iure illum itaque iusto distinctio corrupti quos.
				Esse laboriosam eius laudantium deleniti expedita delectus ad dolorem
				a maiores. Soluta sit sed illum architecto consequatur optio omnis
				fugit.
			</p>
		</div>
	);
}

export default Page;
