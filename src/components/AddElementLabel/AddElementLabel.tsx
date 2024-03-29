import { IoAddOutline } from 'react-icons/io5';

interface Props {
	text: string;
	className?: string;
	handleDispatch?: () => any;
}

export const AddElementLabel = ({ text, handleDispatch, className }: Props) => {
	return (
		<div
			className={`add-element-label-content flex items-center w-auto bg-neutral-800 py-1 px-4 rounded-xl cursor-pointer pointer-events-auto ${className}`}
			onClick={handleDispatch}>
			<span className='flex-1 text-blue-500'>{text}</span>
			<IoAddOutline color='blue' />
		</div>
	);
};
