class TicTacToe {
    constructor() {
      this.array = [[null, null, null], [null, null, null], [null, null, null]];
      this.current_player_symbol = 'x';
    }

    getCurrentPlayerSymbol() {
      return this.current_player_symbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if(this.array[rowIndex][columnIndex] == null){
        if(this.current_player_symbol === 'o'){
          this.array[rowIndex][columnIndex] = this.current_player_symbol;
          this.current_player_symbol = 'x';
        } 
        else {
          this.array[rowIndex][columnIndex] = this.current_player_symbol;
          this.current_player_symbol = 'o';
        }
      }
    }

    isFinished() {
      if (this.getWinner() != null || this.isDraw () == true){
        return true;
      } else {
        return false;
      }
    }

    getWinner() {
      let winner;
      if (this.current_player_symbol === 'x') {
        winner = 'o';
        }
      else {
        winner = 'x';
      }
      
      if (this.array[0][0] === winner){
        if (this.array[0][0] === this.array[0][1] &&
            this.array[0][1] === this.array[0][2]){
              return winner;
         }
        if (this.array[0][0] === this.array[1][0] &&
            this.array[1][0] === this.array[2][0]){
              return winner;
         }
        if (this.array[0][0] === this.array[1][1] &&
            this.array[1][1] === this.array[2][2]){
              return winner;  
         }
      }
       if (this.array[1][1] === winner){
         if (this.array[1][1] === this.array[1][0] &&
             this.array[1][0] === this.array[1][2]){
              return winner;
         }
         if (this.array[1][1] === this.array[0][1] &&
             this.array[0][1] === this.array[2][1]){
              return winner;
         }
         if (this.array[1][1] === this.array[2][0] &&
             this.array[2][0] === this.array[0][2]){
              return winner;
         }
      }
      if (this.array[2][2] === winner){
         if (this.array[2][2] === this.array[1][2] &&
             this.array[1][2] === this.array[0][2]){
              return winner;
         }
         if (this.array[2][2] === this.array[2][1] &&
           this.array[2][1] === this.array[2][0]){
           return winner;
        }
      }
      return null;
    }

    noMoreTurns() {
      if((this.array[0][0] && this.array[0][1] && this.array[0][2] &&
           this.array[1][0] && this.array[1][1] && this.array[1][2] &&
           this.array[2][0] && this.array[2][1] && this.array[2][2]) != null){
        return true;
      } else {
        return false;
      }
    }

    isDraw() {
      if(((this.array[0][0] && this.array[0][1] && this.array[0][2] &&
           this.array[1][0] && this.array[1][1] && this.array[1][2] &&
           this.array[2][0] && this.array[2][1] && this.array[2][2]) != null) && (this.getWinner() == null)){
        return true;
      }
      else {
        return false;
      } 
    }

    getFieldValue(rowIndex, colIndex) {
      return this.array[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
