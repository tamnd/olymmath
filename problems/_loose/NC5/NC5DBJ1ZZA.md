---
tag: NC5DBJ1ZZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221689
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially on a blackboard, the equation $a_1x^2+b_1x+c=0$ is written where $a_1, b_1, c_1$ are integers and $(a_1+c_1)b_1 > 0$. At each move, if the equation $ax^2+bx+c=0$ is written on the board and there is a $x \in \mathbb{R}$ satisfying the equation, Alice turns this equation into $(b+c)x^2+(c+a)x+(a+b)=0$. Prove that Alice will stop after a finite number of moves.
