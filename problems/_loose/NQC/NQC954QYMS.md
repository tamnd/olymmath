---
tag: NQC954QYMS
kind: problem
type: answer
answer: \frac{n+1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56698
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the board, there are $n$ expressions of the form ${ }^{*} \chi^{2}+*_{X}+*=0$ (where $n$ is an odd number). Two players play a game. They take turns. On a turn, a player is allowed to replace one of the asterisks with a number not equal to zero. After $3 n$ moves, $n$ quadratic equations will be obtained. The first player aims to have as many of these equations as possible have no roots, while the second player tries to prevent this. What is the maximum number of equations without roots that the first player can achieve regardless of the second player's moves?
