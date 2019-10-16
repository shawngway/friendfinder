const friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData)
    });

    app.post("/api/friends", function (req, res) {
        const newFriend = req.body
        let leastDiff = 10000;
        let currentDiff = 0;
        let bestFriendIndex;
        friendData.forEach((e, i) => {
            currentDiff = 0
            e.scores.forEach((s, j) => {
                currentDiff += Math.abs(s - (newFriend.scores[j]))
            });
            if (currentDiff < leastDiff) {
                leastDiff = currentDiff;
                bestFriendIndex = i;
            }
        });
        console.log(friendData[bestFriendIndex])
        friendData.push(req.body);
        res.json(friendData[bestFriendIndex])
    });
}