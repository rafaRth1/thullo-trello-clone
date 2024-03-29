import { ReactElement, useContext, useRef, cloneElement, useMemo, isValidElement, Children } from 'react';
import { PopoverContext } from './PopoverContext';

interface Props {
	children: ReactElement;
}

const Trigger = ({ children }: Props) => {
	const { setIsMounted, setTriggerRect } = useContext(PopoverContext);
	const ref = useRef<HTMLDivElement>(null);

	const onClick = () => {
		const element = ref.current;

		if (element === null) {
			return;
		}

		const rect = element.getBoundingClientRect();

		setTriggerRect(rect);
		setIsMounted((isShow) => !isShow);
	};

	const child = useMemo(() => {
		return Children.only(children);
	}, [children]);

	const childrenTriggerModal = cloneElement(child, {
		onClick,
		ref,
	});

	return childrenTriggerModal;
};

Trigger.displayName = 'Popover.Trigger';

export default Trigger;
