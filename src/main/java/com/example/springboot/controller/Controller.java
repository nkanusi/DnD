package com.example.springboot.controller;

import com.example.springboot.model.Chessboard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

	@Autowired
	Chessboard chessboard;

	@PostMapping("/newGame")
	public Chessboard newChessboard(@RequestParam(name="move", required=false, defaultValue="World") String name) {
		return new Chessboard();
	}

	@GetMapping("/updateBoard")
	public Chessboard updatedChessboard(@RequestParam(name="move", required=false, defaultValue="World") String name) {
		return chessboard;
	}

}
