import { useQuery } from '@tanstack/react-query';

const fetchUser = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	return await response.json();
};

export const useUserQuery = () => {
	return useQuery({
		queryKey: ['users'],
		queryFn: fetchUser,
	});
};
