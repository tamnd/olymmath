---
tag: QQRBSX308R
kind: problem
type: answer
answer: '{0,1,2,3,4,5,6,7,8,9,18,19}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any integer $n \geqslant 0$, we name $s(n)$ the sum of the digits of $n$. Determine all integers $n \geqslant 0$ such that $n \leqslant 2 s(n)$.
