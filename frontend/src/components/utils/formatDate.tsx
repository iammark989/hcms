export function formatDate(date: string): string {
    if (!date) {
        return "";
    }
    return new Date(date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });
}