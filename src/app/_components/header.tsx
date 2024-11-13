export function Header() {
    console.log("Header","Rendered")

    return (
        <header className="flex items-center justify-between px-2 py-4 bg-white border-0 border-b shadow-md">
            <h1 className="font-semibold">State Man</h1>
            <strong className="font-light">Counter is {0} now!</strong>
        </header>
    )
}
