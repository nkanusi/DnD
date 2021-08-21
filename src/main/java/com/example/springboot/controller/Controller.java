package com.example.springboot.controller;

import com.example.springboot.model.Chessboard;
import com.example.springboot.model.Move;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

//	@Autowired
	Chessboard chessboard;

	@GetMapping("/newGame")
	public Chessboard newChessboard() {
		chessboard = new Chessboard();

		return chessboard;
	}

	@GetMapping("/updateBoard")
	public Chessboard updatedChessboard(Move move) {
		int currentPosition = move.getCurrentPosition();
		int futurePosition = move.getFuturePosition();
		String deadPiece = move.getDeadPiece();
		chessboard.updateBoard(currentPosition, futurePosition, deadPiece);
		return chessboard;
	}

}
