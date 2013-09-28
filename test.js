var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "12876456",
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "5657676",
        address: ['33 Apple Way', 'Chicago', 'IL', '98564']
    },
    james: {
        firstName: "James",
        lastName: "Bown",
        number: "765675675",
        address: ['25 Brown Hill', 'Detroit','MI', '67767']
    }
};

var list = function (friend) {
    for(var field in friend) {
        console.log(field);
    }
};

var search = function (name) {
    for(var friend in friends) {
        var friendObj = friends[friend];
        if(friendObj.firstName === name) {
            return friendObj;
        }
    }  
};

console.log(search("Steve"));
