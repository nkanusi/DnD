# Required Statement

A chess game that allows two people to play against eachother, or one person to play against the computer. Players can move each piece in accordance to the standard rules of chess.

## Functional Requirements


- FR01: Front end will communicate with backend
  - I01: Front end location
  - I02: Front end structure
  - I03: Back end location
  - I04: Back end structure
- FR02: Can play on one computer with two player capability
  - I05: Mode selected
  - I06: Number of players
- FR03: Pieces will display on the board
  - I07: Piece type
  - I08: Piece color
- FR04: Logic to determine where pieces should start
  - I07: Piece type
  - I08: Piece color
  - I09: Space ID
- FR05: Logic to delete pieces if captured
  - I07: Piece type
  - I08: Piece color
  - I09: Space ID
  - I10: Space occupied
- FR06: Logic to determine turns
  - I05: Mode selected
  - I06: Number of players
  - I11: Current player turn
- FR07: Logic to determine winner
  - I11: Current player turn
  - I12: King status
- FR08: Surrender button
  - I13: Button pressed
- FR09: Two screen capability
  - I05: Mode selected
  - I06: Number of players
- FR10: Flip board depending on player
  - I05: Mode selected
  - I06: Number of players
  - I11: Current player turn
- FR11: Display captured pieces list
  - I07: Piece type
  - I08: Piece color
  - I14: Piece status
- FR12: Highlight places where selected piece can move
  - I07: Piece type
  - I09: Space ID
  - I10: Space occupied
  - I15: Piece movement options
  - I16: Selected space ID
  - I17: Selected space piece color
- FR13: Track score over multiple games
  - I18: Current score
  - I19: Win status
- FR14: Play again button
  - I05: Mode selected
  - I06: Number of players
  - I13: Button pressed
  - I19: Win status
- FR15: Determine Check
  - I15: Piece movement options
  - I12: King status
- FR16: Determine Checkmate
  - I15: Piece movement options
  - I12: King status
  - I19: Win status
- FR17: AI player 2
  - I05: Mode selected
  - I06: Number of players
=======
* FR01: Front end will communicate with backend
	* I01: Front end location
	* I02: Front end structure
	* I03: Back end location
	* I04: Back end structure
	
* FR02: Can play on one computer with two player capability
	* I05: Mode selected
	* I06: Number of players
	
* FR03: Pieces will display on the board
	* I07: Piece type
	* I08: Piece color
	
* FR04: Logic to determine where pieces should start
	* I07: Piece type
	* I08: Piece color
	* I09: Space ID
	
* FR05: Logic to delete pieces if captured
	* I07: Piece type
	* I08: Piece color
	* I09: Space ID
	* I10: Space occupied
	
* FR06: Logic to determine turns
	* I05: Mode selected
	* I06: Number of players
	* I11: Current player turn
	
* FR07: Logic to determine winner
	* I11: Current player turn
	* I12: King status
	
* FR08: Surrender button
	* I13: Button pressed
	
* FR09: Two screen capability
	* I05: Mode selected
	* I06: Number of players
	
* FR10: Flip board depending on player
	* I05: Mode selected
	* I06: Number of players
	* I11: Current player turn
	
* FR11: Display captured pieces list
	* I07: Piece type
	* I08: Piece color
	* I14: Piece status
	
* FR12: Highlight places where selected piece can move
	* I07: Piece type
	* I09: Space ID
	* I10: Space occupied
	* I15: Piece movement options
	* I16: Selected space ID
	* I17: Selected space piece color
	
* FR13: Track score over multiple games
	* I18: Current score
	* I19: Win status
	
* FR14: Play again button
	* I05: Mode selected
	* I06: Number of players
	* I13: Button pressed
	* I19: Win status
	
* FR15: Determine Check
	* I15: Piece movement options
	* I12: King status
	
* FR16: Determine Checkmate
	* I15: Piece movement options
	* I12: King status
	* I19: Win status
	
* FR17: AI player 2
	* I05: Mode selected
	* I06: Number of players
