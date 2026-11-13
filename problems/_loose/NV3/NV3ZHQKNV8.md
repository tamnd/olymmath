---
tag: NV3ZHQKNV8
kind: problem
type: answer
answer: 3,8,15,24,35,48,63,80,99
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85535
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, if we multiply all numbers from 1 to $n$ together, we denote the result as $n$ ! ('$n$ factorial'). For example, $5 !=1 \cdot 2 \cdot 3 \cdot 4 \cdot 5=120$.

(a) Find all integers $n$ with $1 \leqslant n \leqslant 100$ such that $n ! \cdot (n+1)$ ! is the square of an integer. Also provide a proof that you have found all such numbers.

(b) Prove that for no positive integer $n$ does $n$ ! $\cdot (n+1) ! \cdot (n+2) ! \cdot (n+3)$ ! equal the square of an integer.
