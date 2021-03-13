export const getAvatarCharacters = (name: string): string => {
    if (name) {
        const nameList = name.split(' ');
    
        return `${nameList[0][0]}${nameList[1][0]}`.toUpperCase();
    } else {
        return '';
    }
};
