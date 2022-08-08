export const truncateStr = (str: string, charLength: number = 35) =>
    str.length > charLength ? str.slice(0, charLength) + '...' : str
