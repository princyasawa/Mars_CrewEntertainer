/**
  * @desc This class represents the board, contains methods that checks board state, insert a symbol, etc..
  * @param {Array} state - an array representing the state of the board
*/
class Board {
    //Initializing the board
    constructor(state = ['','','','','','','','','']) {
        this.state = state;
    }
    //Logs a visualised board with the current state to the console
    printFormattedBoard() {
        let formattedString = '';
        this.state.forEach((cell, index) => {
            formattedString += cell ? ` ${cell} |` : '   |';
            if((index + 1) % 3 == 0)  {
                formattedString = formattedString.slice(0,-1);
                if(index < 8) formattedString += '\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n';
            }
        });
        console.log('%c' + formattedString, 'color: #6d4e42;font-size:16px');
    }
    //Checks if board has no symbols yet
    isEmpty() {
        return this.state.every(cell => !cell);
    }
    //Check if board has no spaces available
    isFull() {
        return this.state.every(cell => cell);
    }
    /**
     * Inserts a new symbol(x,o) into
     * @param {String} symbol 
     * @param {Number} position
     * @return {Boolean} boolean represent success of the operation
     */
    insert(symbol, position) {
        if(position > 8 || this.state[position]) return false; //Cell is either occupied or does not exist
        this.state[position] = symbol;
        return true;
    }
    //Returns an array containing available moves for the current state
    getAvailableMoves() {
        const moves = [];
        this.state.forEach((cell, index) => {
            if(!cell) moves.push(index); 
        });
        return moves;
    }
    /**
     * Checks if the board has a terminal state ie. a player wins or the board is full with no winner
     * @return {Object} an object containing the winner, direction of winning and row number
     */
    isTerminal() {
        //Return False if board in empty
        if(this.isEmpty()) return false;

        //Checking Horizontal Wins
        var nm=0;
        for(var i=0; i<=6; i=i+3){
            nm++;
            if(this.state[i] == this.state[i+1] && this.state[i] == this.state[i+2] && this.state[i]){
                return {'winner': this.state[i], 'direction': 'H', 'row': nm};
            }
        }

        nm=0;

        //Checking Vertical Wins
        for(var i=0; i<3; i++){
            nm++;
            if(this.state[i] == this.state[i+3] && this.state[i]==this.state[i+6] && this.state[i]){
                return {'winner': this.state[i], 'direction': 'V', 'row': nm};
            }
        }

        nm=0;

        //Checking Diagonal Wins
        if(this.state[0] == this.state[4] && this.state[0] == this.state[8] && this.state[0]) {
            return {'winner': this.state[0], 'direction': 'D', 'row': 1};
        }
        if(this.state[2] == this.state[4] && this.state[2] == this.state[6] && this.state[2]) {
            return {'winner': this.state[2], 'direction': 'D', 'row': 2};
        }


        //If no winner but the board is full, then it's a draw
        if(this.isFull()) {
            return {'winner': 'draw'};
        }
        
        //return false otherwise
        return false;
    }
}

export default Board;
