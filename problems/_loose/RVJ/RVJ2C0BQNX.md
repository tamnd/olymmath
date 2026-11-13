---
tag: RVJ2C0BQNX
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100477
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Observe the following operations:
If $\overline{\mathrm{abc}}$ is a three-digit number, since $\overline{\mathrm{abc}}=100 a+10 b+c=99 a+9 b+(a+b+c)$,
Therefore, if $a+b+c$ is divisible by 9, $\overline{\mathrm{abc}}$ is divisible by 9.
This conclusion can be extended to any number of digits.
Using the above conclusion, solve the following problems:
(1) $N$ is a 2011-digit number, with each digit being 2, find the remainder when $N$ is divided by 9.
(2) $N$ is an $n$-digit number, with each digit being 7, and $n$ is a number that leaves a remainder of 3 when divided by 9. Find the remainder when $N$ is divided by 9.
