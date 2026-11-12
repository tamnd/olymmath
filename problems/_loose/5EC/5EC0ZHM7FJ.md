---
tag: 5EC0ZHM7FJ
kind: problem
type: answer
answer: 9^4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cyclic permutation $P(a)$ of a natural number $a=\overline{a_{1} a_{2} \ldots a_{n}}, a_{n} \neq 0$ is the number $b=\overline{a_{n} a_{1} a_{2} \ldots a_{n-1}}$ written with the same digits but in a different order: the last digit becomes the first, and the rest are shifted one position to the right. How many eight-digit numbers $a$ exist for which $P(P(P(P(a))))=a$? Find these numbers. Prove that for a prime $n>3$, the equation $P(P(P(P(a))))=a$ has no solutions $a$ with distinct digits.
