"use strict"

function Driver () {}

Driver.prototype.login = function () {}

Driver.prototype.getPersons = function () {
    var defer = new $.Deferred()
    // Let's imagine this data came from server.
    var imaginaryData = [
        {
            firstName: "harry",
            lastName: "simpson",
            location: "dolor",
            uid: "453nj45njk34njk6",
            age: 22,
            gender: "m"
        },
        {
            firstName: "betty",
            lastName: "morales",
            location: "adipiscing",
            uid: "kkh43k6455454",
            age: 45,
            gender: "f"
        },
        {
            firstName: "walter",
            lastName: "adams",
            location: "exorcist",
            uid: "y32u5fu4326",
            age: 16,
            gender: "f"
        },
        {
            firstName: "doris",
            lastName: "simpson",
            location: "that",
            uid: "65in48l4knlkbk",
            age: 24,
            gender: "m"
        },
        {
            firstName: "delgado",
            lastName: "montgomery",
            location: "into",
            uid: "mnb743621432k4312",
            age: 34,
            gender: "f"
        },
        {
            firstName: "eugene",
            lastName: "kelley",
            location: "piped",
            uid: "lk76nkl4n874kl6767",
            age: 26,
            gender: "t"
        }
    ]
    setTimeout(function () {
        defer.resolve(imaginaryData)
    }, 1000)

    return defer
}

module.exports = new Driver()