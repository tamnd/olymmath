---
tag: NTY0WRCCPW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154903
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each integer $n \geq 1$, let $f(n)$ be the number of lists of different positive integers starting with 1 and ending with $n$, in which each term except the last divides its successor. Prove that for each integer $N \geq 1$ there is an integer $n \geq 1$ such that $N$ divides $f(n)$. (So $f(1)=1, f(2)=1$ and $f(6)=3$.)
