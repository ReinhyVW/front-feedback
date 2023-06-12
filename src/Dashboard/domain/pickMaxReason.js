export default function pickMaxReason(inputReason) {
    if (inputReason && Object.keys(inputReason).length > 0) {
        const reason = Object.keys(inputReason)[0];
        return reason;
    } else {
        return null;
    }
}