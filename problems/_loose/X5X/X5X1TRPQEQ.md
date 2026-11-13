---
tag: X5X1TRPQEQ
kind: problem
type: answer
answer: Player A
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=22
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian mathematical olympiad
---
In the plane, all the points with integer coordinates $(x, y)$ such that $x^2 + y^2 \le 10^{10}$, are marked. Two players $A$ and $B$ play the following game. They move turn by turn. On the first move, $A$ places a token in some marked point and erases this point. After that, by each move the next player moves the token into some other marked point and erases this point. The constraints are the following. The length of each move should be strictly greater than the length of the previous move (made by the other player); moreover, it is prohibited to move the token from a point to the point symmetrical to it with respect to the origin. The player loses when he cannot make a move. Determine which player can win regardless by the opponent's moves.

$(I. Bogdanov)$
