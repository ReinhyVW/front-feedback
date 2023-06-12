export default function Button({ action, content, size }) {
    const sizeDictionary = {
        sm: "h-14 w-24",
        md: "h-14 w-36",
        lg: "h-14 w-48"

    }

    const btnSize = sizeDictionary[size]

    return <button className={`text-sky-950 ${btnSize} bg-sky-300 rounded-3xl hover:bg-sky-200`} type="submit" onClick={action}>{content}</button>;
}