class Piece {
    constructor(type, possibleMoves, player, status, selected, currentPosition, startingPosition) {
      this.type = type;
      this.possible_moves = possibleMoves;
      this.possible_attacks = possibleAttacks;
      this.player = player;
      this.status = status;
      this.selected = selected;
      this.posistion = currentPosition;
      this.starting_position = startingPosition;
    }
};
//p1
let Pawn1_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 49, 49}
let Pawn2_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 50, 50}
let Pawn3_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 51, 51}
let Pawn4_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 52, 52}
let Pawn5_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 53, 53}
let Pawn6_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 54, 54}
let Pawn7_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 55, 55}
let Pawn8_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 56, 56}

let Rook1_P1 = new Piece {Rook, forward or backwards or either side, forward or backwards or either side, p1, alive, notSelected, 57, 57}
let Rook2_P1 = new Piece {Rook, forward or backwards or either side, forward or backwards or either side, p1, alive, notSelected, 64, 64}

let Knight1_P1 = new Piece {Knight, (-15, -17, -6, -10, +15, +17, +6, +10), (-15, -17, -6, -10, +15, +17, +6, +10), p1, alive, notSelected, 58, 58}
let Knight2_P1 = new Piece {Knight, (-15, -17, -6, -10, +15, +17, +6, +10), (-15, -17, -6, -10, +15, +17, +6, +10), p1, alive, notSelected, 63, 63}

let Bishop1_P1 = new Piece {Bishop, (+m9, +m7, -m9, -m7), (+m9, +m7, -m9, -m7), p1, alive, notSelected, 59, 59}
let Bishop2_P1 = new Piece {Bishop, (+m9, +m7, -m9, -m7), (+m9, +m7, -m9, -m7), p1, alive, notSelected, 62, 62}

let Queen_P1 = new Piece {Queen, moves any direction, moves any direction, p1, alive, notSelected, 60, 60}

let King_P1 = new Piece {King, (+1, +7, +8, +9, -1, -7, -8, -9), (+1, +7, +8, +9, -1, -7, -8, -9), p1, alive, notSelected, 61, 61}


//p2
let Pawn1_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 9, 9}
let Pawn2_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 10, 10}
let Pawn3_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 11, 11}
let Pawn4_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 12, 12}
let Pawn5_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 13, 13}
let Pawn6_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 14, 14}
let Pawn7_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 15, 15}
let Pawn8_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 16, 16}

let Rook1_P2 = new Piece {Rook, forward or backwards or either side, forward or backwards or either side, p1, alive, notSelected, 1, 1}
let Rook2_P2 = new Piece {Rook, forward or backwards or either side, forward or backwards or either side, p1, alive, notSelected, 8, 8}

let Knight1_P2 = new Piece {Knight, (-15, -17, -6, -10, +15, +17, +6, +10), (-15, -17, -6, -10, +15, +17, +6, +10), p2, alive, notSelected, 2, 2}
let Knight2_P2 = new Piece {Knight, (-15, -17, -6, -10, +15, +17, +6, +10), (-15, -17, -6, -10, +15, +17, +6, +10), p2, alive, notSelected, 7, 7}

let Bishop1_P2 = new Piece {Bishop, (+m9, +m7, -m9, -m7), (+m9, +m7, -m9, -m7), p2, alive, notSelected, 3, 3}
let Bishop2_P2 = new Piece {Bishop, (+m9, +m7, -m9, -m7), (+m9, +m7, -m9, -m7), p2, alive, notSelected, 6, 6}

let Queen_P2 = new Piece {Queen, moves any direction, moves any direction, p2, alive, notSelected, 5, 5}

let King_P2 = new Piece {King, (+1, +7, +8, +9, -1, -7, -8, -9), (+1, +7, +8, +9, -1, -7, -8, -9), p2, alive, notSelected, 4, 4}
