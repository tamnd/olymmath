---
tag: 2DEJCT3AKR
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 2$ be an integer. A game is played on an $n \times n$ board by two players X and Y as follows.

* **Order:** The two players take turns to play. X plays in the 1st round, Y plays the 2nd round, then X plays the 3rd round and so on.
* **Rule:** In the $k$th round, one has to choose $k$ unmarked consecutive cells in the same row or in the same column and mark each of these cells.
* **Winner:** The first player who cannot complete the task will lose the game.

The player who is expected to carry out the $(n+1)$st round is called the *natural loser*, as there are no $(n+1)$ consecutive cells on the board. Find the smallest $n$ for which the natural loser has a winning strategy.
