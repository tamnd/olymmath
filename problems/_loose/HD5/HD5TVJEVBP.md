---
tag: HD5TVJEVBP
kind: problem
type: answer
answer: f(n)=\begin{cases}n&
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any strictly positive integer $k$, if $k$ is written on the board, it can be erased and replaced by the number $a+b$, provided that $a$ and $b$ are strictly positive integers such that $a b=k$ (for example, 20 can be replaced by 12, since $12=2+10$ and $20=2 \times 10$).

Initially, the integer $n>0$ is written on the board. Determine, depending on the values of $n$, the smallest number that can be written on the board after a finite number of replacements (possibly none).
