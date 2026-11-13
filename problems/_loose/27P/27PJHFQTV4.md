---
tag: 27PJHFQTV4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161092
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n$, let $f(n)$ be the number written with the same digits but in reverse order (i.e., from right to left) if $n$ is not divisible by 10, and otherwise define $f(n)=0$. (For example, $f(123)=321$ and $f(30)=0$.)

a) If $n=3 f(n)$, prove that $n$ is divisible by 27.

b) If $n=2 f(n)$, prove that $n$ is divisible by 9.
