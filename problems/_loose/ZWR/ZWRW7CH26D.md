---
tag: ZWRW7CH26D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A natural number $x$ is written on the board. In one move, we can take the number on the board and between any two of its digits in its decimal notation we can we put a sign $+$, or we may not put it, then we calculate the obtained result and we write it on the board in place of $x$. For example, from the number $819$. we can get $18$ by $8 + 1 + 9$, $90$ by $81 + 9$, and $27$ by $8 + 19$. Prove that no matter what $x$ is, we can reach a single digit number with at most $4$ moves.
