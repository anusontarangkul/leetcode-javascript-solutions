var judgeCircle = function (moves) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "R": x++;
                break;

            case "L": x--;
                break;

            case "U": y++;
                break;

            case "D": y--;
                break;
        }
    }
    return x === 0 && y === 0;
};

module.exports = judgeCircle;

/*
Time Complexity: O(n)
Space Complexity: O(1)
1. Create "x" variable for left and right movements.
2. Create "y" variable for up and down movements.
3. Loop through moves.
    a. Case "R": Increment "x".
    b. Case "L": Decrement "x".
    c. Case "U": Increment "y".
    d. Case "D": Decrement "y".
4. Return if "x" and "y" equals to 0.
*/