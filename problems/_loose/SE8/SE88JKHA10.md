---
tag: SE88JKHA10
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d(n)$ be the number of positive divisors of the positive integer $n$, and define the sequence $\left\{a_{n}\right\}$ as follows: $a_{1}=A, a_{n+1}=d\left(\left[\frac{3}{2} a_{n}\right]\right)+2011$ (where $[x]$ denotes the greatest integer not exceeding the real number $x$). Prove: For any positive integer $A$, $\left\{a_{n}\right\}$ is eventually periodic.
