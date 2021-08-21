package com.example.springboot.model;

import org.springframework.stereotype.Component;


@Component
public class Chessboard {

    Pieces[][] board = new Pieces[8][8];
    String deadPieces = "";

    public Chessboard(){
        for(int i = 0; i < 8; i++){
            for(int j = 0; j < 8; j++){
                board[i][j] = Pieces.EMPTY;
            }
        }
        board[0][0] = Pieces.BLACKROOK;
        board[0][1] = Pieces.BLACKKNIGHT;
        board[0][2] = Pieces.BLACKBISHOP;
        board[0][3] = Pieces.BLACKQUEEN;
        board[0][4] = Pieces.BLACKKING;
        board[0][5] = Pieces.BLACKBISHOP;
        board[0][6] = Pieces.BLACKKNIGHT;
        board[0][7] = Pieces.BLACKROOK;

        board[1][0] = Pieces.BLACKPAWN;
        board[1][1] = Pieces.BLACKPAWN;
        board[1][2] = Pieces.BLACKPAWN;
        board[1][3] = Pieces.BLACKPAWN;
        board[1][4] = Pieces.BLACKPAWN;
        board[1][5] = Pieces.BLACKPAWN;
        board[1][6] = Pieces.BLACKPAWN;
        board[1][7] = Pieces.BLACKPAWN;

        board[6][0] = Pieces.WHITEROOK;
        board[6][1] = Pieces.WHITEKNIGHT;
        board[6][2] = Pieces.WHITEBISHOP;
        board[6][3] = Pieces.WHITEKING;
        board[6][4] = Pieces.WHITEQUEEN;
        board[6][5] = Pieces.WHITEBISHOP;
        board[6][6] = Pieces.WHITEKNIGHT;
        board[6][7] = Pieces.WHITEROOK;

        board[7][0] = Pieces.WHITEPAWN;
        board[7][1] = Pieces.WHITEPAWN;
        board[7][2] = Pieces.WHITEPAWN;
        board[7][3] = Pieces.WHITEPAWN;
        board[7][4] = Pieces.WHITEPAWN;
        board[7][5] = Pieces.WHITEPAWN;
        board[7][6] = Pieces.WHITEPAWN;
        board[7][7] = Pieces.WHITEPAWN;

    }

    public void updateBoard(int currentPosition, int futurePosition, String deadPiece){

        int currentX = currentPosition;
        int currentY = currentPosition;

        int futureX = futurePosition;
        int futureY = futurePosition;

        board[futureX][futureY] = board[currentX][currentY];
        board[currentX][currentY] = Pieces.EMPTY;

        deadPieces += deadPiece;
    }

}
