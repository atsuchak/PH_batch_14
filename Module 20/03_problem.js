function countHashtags(caption) {
    // Write your code here…

    if(typeof caption !== "string") return `Invalid`;
    else {
        let hashtagCount = 0;
        let longestTag = "";

        let arr = caption.split(" ");

        for(let ar of arr) {
            if(ar.startsWith("#")) {
                hashtagCount++;
                ar = ar.slice(1);
                if(ar.length > longestTag.length) longestTag = ar;
            }
        }

        return {hashtagCount, longestTag};
    }
}

// console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));;
console.log(countHashtags("#ai #ml data science"));
