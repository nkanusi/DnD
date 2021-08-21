package com.example.springboot.model;

public class Move {

    public int currentPosition;

    public int getCurrentPosition() {
        return currentPosition;
    }

    public void setCurrentPosition(int currentPosition) {
        this.currentPosition = currentPosition;
    }

    public int getFuturePosition() {
        return futurePosition;
    }

    public void setFuturePosition(int futurePosition) {
        this.futurePosition = futurePosition;
    }

    public String getDeadPiece() {
        return deadPiece;
    }

    public void setDeadPiece(String deadPiece) {
        this.deadPiece = deadPiece;
    }

    public int futurePosition;
    public String deadPiece;
}
