---
tag: TA10WNC82D
kind: problem
type: answer
answer: d \equiv 2 \pmod{7}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246696
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d$ be a natural number. Given two natural numbers $M$ and $N$ with $d$ digits, $M$ is a friend of $N$ if and only if the $d$ numbers obtained substituting each one of the digits of $M$ by the digit of $N$ which is on the same position are all multiples of $7$. Find all the values of $d$ for which the following condition is valid:
For any two numbers $M$ and $N$ with $d$ digits, $M$ is a friend of $N$ if and only if $N$ is a friend of $M$.
