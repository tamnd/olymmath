---
tag: AFD8Z5WFGE
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo
    source: hf-mathnet
    label: North Macedonia Junior Balkan Mathematical Olympiad
---
A $5 \times 5$ board, consisting of 25 unit squares, a positive integer $k \le 25$ and an unlimited supply of $L$-shapes are given. Two players, $A$ and $B$, play the following game: starting with $A$ they alternatively mark a previously unmarked unit square until they mark a total of $k$ unit squares.

We say that a placement of $L$-shapes on unmarked unit squares is called good if the $L$-shapes do not overlap and each of them covers exactly three unmarked unit squares of the board. $B$ wins if every good placement of $L$-shapes leaves uncovered at least three unmarked unit squares. Determine the minimum value of $k$ for which $B$ has a winning strategy.
