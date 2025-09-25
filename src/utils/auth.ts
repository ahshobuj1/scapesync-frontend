export const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return !!token; // true if exists
  }
  return false;
};

// const router = useRouter();

// useEffect(() => {
//   if (!isAuthenticated()) {
//     router.push("/auth/login");
//   }
// }, []);
