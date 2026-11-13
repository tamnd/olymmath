---
tag: R8KP2DHSMM
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=153963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 11 quadratic equations on the board, where each coefficient is replaced by a star. Initially, each of them looks like this
$$
\star x^{2}+\star x+\star=0 \text {. }
$$

Two players are playing a game making alternating moves. In one move each of them replaces one star with a real nonzero number.
The first player tries to make as many equations as possible without roots and the second player tries to make the number of equations without roots as small as possible.
What is the maximal number of equations without roots that the first player can achieve if the second player plays to her best? Describe the strategies of both players.
