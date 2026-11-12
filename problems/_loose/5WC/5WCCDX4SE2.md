---
tag: 5WCCDX4SE2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286291
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44762
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1996
    source: hf-ai-mo-aops
    label: 1996 Irish Math Olympiad
---
The following game is played on a rectangular chessboard $ 5 \times 9$ (with five rows and nine columns). Initially, a number of discs are randomly placed on some of the squares of the chessboard, with at most one disc on each square. A complete move consists of the moving every disc subject to the following rules:
$ (1)$ Each disc may be moved one square up, down, left or right;
$ (2)$ If a particular disc is moved up or down as part of a complete move, then it must be moved left or right in the next complete move;
$ (3)$ If a particular disc is moved left or right as part of a complete move, then it must be moved up or down in the next complete move;
$ (4)$ At the end of a complete move, no two discs can be on the same square.
The game stops if it becomes impossible to perform a complete move. Prove that if initially $ 33$ discs are placed on the board then the game must eventually stop. Prove also that it is possible to place $ 32$ discs on the boards in such a way that the game could go on forever.
