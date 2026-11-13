---
tag: P6J6VQE44C
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141096
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $n \times 6 (n \geqslant 2)$ rectangular grid of $6n$ unit squares, each unit square is filled with one of the numbers 0 or 1. If a filling method ensures that there does not exist a rectangular subgrid whose four corner squares are filled with the same number, then it is called an "$N$-filling", otherwise it is called a "$Y$-filling". Find the smallest positive integer $n$ such that no matter how the numbers are filled, the filling method is always a $Y$-filling.
