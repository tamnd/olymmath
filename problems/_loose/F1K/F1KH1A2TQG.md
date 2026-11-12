---
tag: F1KH1A2TQG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h3144849
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43590
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2023
    source: hf-ai-mo-aops
    label: 2023 Indonesia MO
---
A natural number $n$ is written on a board. On every step, Neneng and Asep changes the number on the board with the following rule: Suppose the number on the board is $X$ . Initially, Neneng chooses the sign up or down. Then, Asep will pick a positive divisor $d$ of $X$ , and replace $X$ with $X+d$ if Neneng chose the sign "up" or $X-d$ if Neneng chose "down". This procedure is then repeated. Asep wins if the number on the board is a nonzero perfect square, and loses if at any point he writes zero.

Prove that if $n \geq 14$ , Asep can win in at most $(n-5)/4$ steps.
