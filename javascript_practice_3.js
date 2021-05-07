let isSubstring = function(searchString,subString) {
    // let subSearch = searchString.split(' ');
    // for(let i < 0; i <subSearch.length; i++) {
        //nvm, I tend to overcomplicate things
    // }
    console.log(searchString.includes(subString));
}

isSubstring("time to program", "time");
isSubstring("Jump for joy", "joys");