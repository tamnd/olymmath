---
tag: XRZX3G07XS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h514551
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55708
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249093
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1998
    source: hf-ai-mo-aops
    label: 1998 All-Russian Olympiad
---
A maze is an $8 \times 8$ board with some adjacent squares separated by walls, so that any two squares can be connected by a path not meeting any wall. Given a command LEFT, RIGHT, UP, DOWN, a pawn makes a step in the corresponding direction unless it encounters a wall or an edge of the chessboard. God writes a program consisting of a finite sequence of commands and gives it to the Devil, who then constructs a maze and places the pawn on one of the squares. Can God write a program which guarantees the pawn will visit every square despite the Devil's efforts?
