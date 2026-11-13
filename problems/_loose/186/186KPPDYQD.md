---
tag: 186KPPDYQD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164606
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$B$ and $C$ play the following game. $B$ places a queen on one of the squares in the top row of an $n \times n$ chessboard. Then they take turns moving the queen, following the rules of chess, but only to squares that are closer to the bottom-left corner than the one it previously occupied. $C$ moves first. The player who is forced to move the queen into the bottom-left corner loses. Who wins when $n=8$? Find an $n$ for which the other player has a winning strategy.
