---
tag: 3RGR3MQ93H
kind: problem
type: answer
answer: "81"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266565
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, let $f(n)$ be the greatest common divisor of all numbers obtained by permuting the digits of $n$, including the permutations that have leading zeroes. For example, $f(1110)=\gcd(1110,1101,1011,0111)=3$. Among all positive integers $n$ with $f(n) \neq n$, what is the largest possible value of $f(n)$?
