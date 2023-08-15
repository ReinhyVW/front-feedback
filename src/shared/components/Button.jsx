export default function Button({ action, content, size }) {
    const sizeDictionary = {
        sm: "h-14 w-[5%]",
        md: "h-14 w-[10%]",
        lg: "h-14 w-48"
    }

    const btnSize = sizeDictionary[size]

    return <button className={`text-sky-950 ${btnSize} bg-sky-300 rounded-3xl hover:bg-sky-200`} onClick={action}>{content}</button>;
}