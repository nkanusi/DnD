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
let Pawn1_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 2A, 2A}
let Pawn2_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 2B, 2B}
let Pawn3_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 2C, 2C}
let Pawn4_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 2D, 2D}
let Pawn5_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 2E, 2E}
let Pawn6_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 2F, 2F}
let Pawn7_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 2G, 2G}
let Pawn8_P1 = new Piece {Pawn, (-8, -16), (-9, -7), p1, alive, notSelected, 2H, 2H}

let Rook1_P1 = new Piece {Rook, forward or backwards or either side, forward or backwards or either side, p1, alive, notSelected, 1A, 1A}
let Rook2_P1 = new Piece {Rook, forward or backwards or either side, forward or backwards or either side, p1, alive, notSelected, 1H, 1H}

let Knight1_P1 = new Piece {Knight, (-15, -17, -6, -10, +15, +17, +6, +10), (-15, -17, -6, -10, +15, +17, +6, +10), p1, alive, notSelected, 1B, 1B}
let Knight2_P1 = new Piece {Knight, (-15, -17, -6, -10, +15, +17, +6, +10), (-15, -17, -6, -10, +15, +17, +6, +10), p1, alive, notSelected, 1G, 1G}

let Bishop1_P1 = new Piece {Bishop, (+m9, +m7, -m9, -m7), (+m9, +m7, -m9, -m7), p1, alive, notSelected, 1C, 1C}
let Bishop2_P1 = new Piece {Bishop, (+m9, +m7, -m9, -m7), (+m9, +m7, -m9, -m7), p1, alive, notSelected, 1F, 1F}

let Queen_P1 = new Piece {Queen, moves any direction, moves any direction, p1, alive, notSelected, 1D, 1D}

let King_P1 = new Piece {King, (+1, +7, +8, +9, -1, -7, -8, -9), (+1, +7, +8, +9, -1, -7, -8, -9), p1, alive, notSelected, 1E, 1E}


//p2
let Pawn1_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 7A, 7A}
let Pawn2_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 7B, 7B}
let Pawn3_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 7C, 7C}
let Pawn4_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 7D, 7D}
let Pawn5_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 7E, 7E}
let Pawn6_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 7F, 7F}
let Pawn7_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 7G, 7G}
let Pawn8_P2 = new Piece {Pawn, (-8, -16), (-9, -7), p2, alive, notSelected, 7H, 7H}

let Rook1_P2 = new Piece {Rook, forward or backwards or either side, forward or backwards or either side, p1, alive, notSelected, 8A, 8A}
let Rook2_P2 = new Piece {Rook, forward or backwards or either side, forward or backwards or either side, p1, alive, notSelected, 1H, 1H}

let Knight1_P2 = new Piece {Knight, (-15, -17, -6, -10, +15, +17, +6, +10), (-15, -17, -6, -10, +15, +17, +6, +10), p2, alive, notSelected, 8B, 8B}
let Knight2_P2 = new Piece {Knight, (-15, -17, -6, -10, +15, +17, +6, +10), (-15, -17, -6, -10, +15, +17, +6, +10), p2, alive, notSelected, 8G, 8G}

let Bishop1_P2 = new Piece {Bishop, (+m9, +m7, -m9, -m7), (+m9, +m7, -m9, -m7), p2, alive, notSelected, 8C, 8C}
let Bishop2_P2 = new Piece {Bishop, (+m9, +m7, -m9, -m7), (+m9, +m7, -m9, -m7), p2, alive, notSelected, 8F, 8F}

let Queen_P2 = new Piece {Queen, moves any direction, moves any direction, p2, alive, notSelected, 8D, 8D}

let King_P2 = new Piece {King, (+1, +7, +8, +9, -1, -7, -8, -9), (+1, +7, +8, +9, -1, -7, -8, -9), p2, alive, notSelected, 8E, 8E}
