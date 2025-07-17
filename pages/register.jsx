export default function Register() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
            <h1 className="text-4xl mb-4">📝 Register</h1>
            <form className="flex flex-col space-y-4 w-64">
                <input className="p-2 rounded bg-gray-700" placeholder="Email" />
                <input className="p-2 rounded bg-gray-700" placeholder="Password" type="password" />
                <button className="p-2 rounded bg-green-500">Register</button>
            </form>
        </div>
    );
}
