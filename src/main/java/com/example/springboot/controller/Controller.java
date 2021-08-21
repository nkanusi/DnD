package com.example.springboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

	@GetMapping("/chess")
	public String chessboard(@RequestParam(name="move", required=false, defaultValue="World") String name) {
		return "Insert Chessboard Here: ";
	}

}
