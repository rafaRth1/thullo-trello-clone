import { handleShowModal } from '../store';
import { useAppDispatch } from '../hooks';
import { IoAddOutline } from 'react-icons/io5';

interface Props {
	text: string;
	handleDispatch: () => any;
}

export const AddElementLabel = ({ text, handleDispatch }: Props) => {
	const dispatch = useAppDispatch();

	return (
		<div
			className='add-element-label-content flex items-center w-80 bg-blue-200 py-1 px-4 rounded-xl cursor-pointer'
			onClick={handleDispatch}>
			<span className='flex-1 text-blue-500'>{text}</span>
			<IoAddOutline color='blue' />
		</div>
	);
};
