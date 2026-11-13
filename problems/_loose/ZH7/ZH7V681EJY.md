---
tag: ZH7V681EJY
kind: problem
type: answer
answer: You can win the game if and only if M is odd.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland IRL_ABooklet
---
At the start of a game, a positive integer $M$ is fixed and you are given boxes $B_i$ for each $i \in \mathbb{N}$, all are empty. You can adjust the number of marbles in the boxes by making a series of moves. The allowable moves are as follows:
**Move A:** Add a marble to $B_1$ and to $B_2$.
**Move B:** Add a marble to $B_1$ and to $B_M$.
**Move C_k:** Take two marbles from $B_k$ for some $k$ and add a marble to $B_{k+1}$.
Moves can be repeated if you wish. You can do a move of the form $C_k$ for any desired values of $k$, as long as Box $B_k$ contains at least two marbles.
You win the game if you reach a stage where one box has a single marble and all other boxes are empty.
Since the game depends on the number $M$, we call it the $M$-game. As an example, the following sequence of moves allows you to win the 3-game. We also give the number of marbles in the first few boxes after each listed move; later boxes are all empty.
```
A: 1 1
B: 2 1 1
C₁: 0 2 1
C₂: 0 0 2
C₃: 0 0 0 1 (winning position)
```
For which values of $M \in \mathbb{N}$ is it possible to win the $M$-game? Explain carefully for each $M$ how you can win or why you can't win.
