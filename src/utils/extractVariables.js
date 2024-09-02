// Extraction of the variables from Text node written inside {{}}

export function extractVariables(text) {
    let regex = /{{(.*?)}}/g;
    let matches = [];
    let match;


    while ((match = regex.exec(text)) !== null) {
        matches?.push(match[1]);
    }
    return matches
}