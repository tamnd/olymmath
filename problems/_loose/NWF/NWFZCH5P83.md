---
tag: NWFZCH5P83
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2097550
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1999 Tournament Of Towns
---
Two people play a game on a $9 \times 9$ board. They move alternately. On each move, the first player draws a cross in an empty cell, and the second player draws a nought in an empty cell. When all $81$ cells are filled, the number $K$ of rows and columns in which there are more crosses and the number $H$ of rows and columns in which there are more noughts are counted. The score for the first player is the difference $B = K- H$ . Find a value of $B$ such that the first player can guarantee a score of at least $B$ , while the second player can hold the first player's score to at most B, regardless how the opponent plays.

(A Kanel)
