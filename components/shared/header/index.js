export default function Header({ pageTitle }) {
  return (
    <div className="w-full max-w-6xl mx-auto py-4 px-4 bg-blue-100">
      <h1 className="text-4xl font-bold">{pageTitle}</h1>
    </div>
  );
}
