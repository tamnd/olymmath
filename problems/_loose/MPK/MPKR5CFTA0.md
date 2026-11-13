---
tag: MPKR5CFTA0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1904492
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27967
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1985 Tournament Of Towns
---
(a)The game of "super- chess" is played on a $30 \times 30$ board and involves $20$ different pieces. Each piece moves according to its own rules , but cannot move from any square to more than $20$ other squares . A piece "captures" another piece which is on a square to which it has moved. A permitted move (e.g. $m$ squares forward and $n$ squares to the right) does not depend on the piece 's starting square . Prove that
(i) A piece cannot cap ture a piece on a given square from more than $20$ starting squares.
(ii) It is possible to arrange all $20$ pieces on the board in such a way that not one of them can capture any of the others in one move.

(b) The game of "super-chess" is played on a $100 \times 100$ board and involves $20$ different pieces. Each piece moves according to its own rules , but cannot move from any square to more than $20$ other squares. A piece "captures" another piece which is on a square to which it has moved. It is possible that a permitted move (e.g. $m$ squares forward and $n$ squares to the right) may vary, depending on the piece's position .
Prove that one can arrange all $20$ pieces on the board in such a way that not one of them can capture any of the others in one move.

( A . K . Tolpygo, Kiev)

PS. (a) for Juniors , (b) for Seniors
