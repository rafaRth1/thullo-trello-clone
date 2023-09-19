import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAuthProvider } from '@hooks/';
import { ImageProfile, LabelElement, Logo } from '@components/';
import Popover from '@components/Popover';
import { Search } from '@pages/Home/components/';
import { ProjectTypes } from '@interfaces/';
import { IoApps } from 'react-icons/io5';
import { projectApi } from '@redux/home/apis';

interface Props {
	project: ProjectTypes;
}

export const HeaderContent = memo(({ project }: Props) => {
	const { auth, setAuth } = useAuthProvider();
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		setAuth({
			_id: '',
			name: '',
			email: '',
			confirm: false,
			colorImg: '',
		});

		dispatch(projectApi.util.resetApiState());

		localStorage.setItem('token', '');
	};

	return (
		<header className='shadow-[0_5px_20px_-5px_rgba(0,0,0,0.4)]'>
			<div className='border-b-neutral-700 relative flex items-center  mx-auto p-4'>
				<Link
					to='/'
					// onClick={handleLogout}
				>
					<Logo
						width={100}
						height={30}
					/>
				</Link>

				{location.pathname !== '/' && (
					<>
						<span className='px-2 border-r-2 border-neutral-700'>
							<p className='text-white font-medium capitalize'>{project.name}</p>
						</span>

						<Link
							to='/board'
							// onClick={handleResetProject}
						>
							<LabelElement
								label='All Board'
								classname='bg-neutral-700 mx-3'>
								<IoApps
									className='text-neutral-200'
									size={15}
								/>
							</LabelElement>
						</Link>
					</>
				)}

				<Search />

				<div className={`user-session relative flex items-center cursor-pointer`}>
					<Popover preferredPosition='bottom-center'>
						<Popover.PopoverContent>
							{(onClose) => (
								<>
									<Popover.Trigger>
										<div>
											<ImageProfile
												name={auth.name}
												color={auth.colorImg}
											/>
										</div>
									</Popover.Trigger>

									<Popover.Body>
										<div
											className={`border-neutral-600 bg-neutral-800 flex flex-col border rounded-md transition-opacity z-40 w-24 absolute -left-16`}>
											<span
												className='text-white hover:bg-red-600 transition-colors cursor-pointer p-2 rounded'
												onClick={handleLogout}>
												Logout
											</span>
										</div>
									</Popover.Body>
								</>
							)}
						</Popover.PopoverContent>
					</Popover>

					{/* {isShowMenuUser && (
						<div
							className={`border-neutral-600 bg-neutral-800 flex flex-col border ${
								isShowMenuUser ? 'opacity-100' : 'opacity-0'
							} rounded-md transition-opacity absolute top-10 right-0 p-1 z-40 w-24`}>
							<span
								className='text-white hover:bg-red-600 transition-colors cursor-pointer p-2 rounded'
								onClick={handleLogout}>
								Logout
							</span>
						</div>
					)} */}
				</div>
			</div>
		</header>
	);
});
