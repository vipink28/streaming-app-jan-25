export const truncateText = (str = "", limit) => {
    if (str.length < limit) {
        return str;
    } else {
        return str.slice(0, limit) + "..."
    }
}