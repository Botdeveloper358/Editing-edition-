export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white flex-col">
      <h1 className="text-4xl mb-4">🔑 Login</h1>
      <form className="flex flex-col space-y-4 w-64">
        <input className="p-2 rounded bg-gray-700" placeholder="Email" />
        <input className="p-2 rounded bg-gray-700" placeholder="Password" type="password" />
        <button className="p-2 rounded bg-blue-500">Login</button>
      </form>
    </div>
  );
          }
