import { Navigate, Outlet } from 'react-router-dom';
import { Spinner } from '@components/';
import { AppProvider, BoardProvider } from '@context/';
import { useAuthProvider } from '@hooks/useAuthProvider';
import { Header, SubHeader } from '@pages/Home/views/';

export const Home = () => {
	const { auth, loading } = useAuthProvider();

	if (loading)
		return (
			<>
				<Spinner className='h-40' />
			</>
		);

	return (
		<>
			{auth?._id ? (
				<>
					<AppProvider>
						<Header />
						<SubHeader />

						<BoardProvider>
							<Outlet />
						</BoardProvider>
					</AppProvider>
				</>
			) : (
				<Navigate to='/auth/login' />
			)}
		</>
	);
};
