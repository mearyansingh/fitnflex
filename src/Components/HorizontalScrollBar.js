import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard';

/**Left arrow */
const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<div onClick={() => scrollPrev()} className="right-arrow">
			<i className='bi bi-arrow-left' />
		</div>
	);
};

/**Right arrow */
const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<div onClick={() => scrollNext()} className="left-arrow">
			<i className='bi bi-arrow-right' />
		</div>
	);
};

function HorizontalScrollBar({ data, bodyPart, setBodyPart, isBodyParts }) {


	return (
		<>
			<div className='pt-2'>
				<ScrollMenu
					LeftArrow={LeftArrow}
					RightArrow={RightArrow}
				>
					{data.map((item) => (
						<>{isBodyParts ?
							<BodyPart
								key={item?.id || item}
								itemId={item?.id || item}
								item={item}
								bodyPart={bodyPart}
								setBodyPart={setBodyPart}
							/>
							:
							<ExerciseCard exercise={item} isHorizontalScroll />
						}
						</>
					))}
				</ScrollMenu>
			</div>
		</>
	)
}

export default HorizontalScrollBar