---
tag: AQ9XVK1KEB
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
    capture: hf-mathnet/JBMO/train/0000.parquet#row=288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo
    source: hf-mathnet
    label: JBMO Junior Balkan Mathematical Olympiad
---
We have a $5 \times 5$ chessboard and a supply of $\{L\}$-shaped triominoes, i.e. $2 \times 2$ squares with one corner missing. Two players $A$ and $B$ play the following game: A positive integer $k \leq 25$ is chosen. Starting with $A$, the players take alternating turns marking squares of the chessboard until they mark a total of $k$ squares. (In each turn a player has to mark exactly one new square.)

At the end of the process, player $A$ wins if he can cover without overlapping all but at most 2 unmarked squares with $\{L\}$-shaped triominoes, otherwise player $\boldsymbol{B}$ wins. It is not permitted any marked squares to be covered.

Find the smallest $\boldsymbol{k}$, if it exists, such that player $\boldsymbol{B}$ has a winning strategy.
