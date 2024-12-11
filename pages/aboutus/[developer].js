import { useRouter } from "next/router";

function DeveloperPage() {
  const router = useRouter();
  const { developer: id } = router.query; // Destructure the 'developer' param from the query

  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];


  const developer = details.find((dev) => dev.id === Number(id)); // Convert id to a number for comparison

  if (!developer) {
    return <h1>Developer doesn't exist</h1>;
  }

  return (
    <h1>{`${developer.name} - ${developer.role}`}</h1>
  );
}

export default DeveloperPage;
