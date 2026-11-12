---
tag: BYXFVC7560
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471762
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70620
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
You place $n^2$ indistinguishable pieces on an $n\times n$ chessboard, where $n=2^{90}\approx 1.27\times10^{27}$ . Of these pieces, $n$ of them are slightly lighter than usual, while the rest are all the same standard weight, but you are unable to discern this simply by feeling the pieces.

However, beneath each row and column of the chessboard, you have set up a scale, which, when turned on, will tell you *only* whether the average weight of all the pieces on that row or column is the standard weight, or lighter than standard. On a given step, you are allowed to rearrange every piece on the chessboard, and then turn on all the scales simultaneously, and record their outputs, before turning them all off again. (Note that you can only turn on the scales if all $n^2$ pieces are placed in different squares on the board.)

Find an algorithm that, in at most $k$ steps, will always allow you to rearrange the pieces in such a way that every row and column measures lighter than standard on the final step.

An algorithm that completes in at most $k$ steps will be awarded:

1 pt for $k>10^{55}$ 10 pts for $k=10^{55}$ 30 pts for $k=10^{30}$ 50 pts for $k=10^{28}$ 65 pts for $k=10^{20}$ 80 pts for $k=10^5$ 90 pts for $k=2021$ 100 pts for $k=500$
