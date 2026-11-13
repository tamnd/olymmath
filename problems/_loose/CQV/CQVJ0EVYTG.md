---
tag: CQVJ0EVYTG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ points on a circle denoted consecutively by $A_{1}, A_{2}, \ldots, A_{n}(n \geq 3)$. Initially 1 is written at $A_{1}$ and 0 at all remaining points. The following operation is allowed: choose a point $A_{i}$ where a 1 is written and replace the numbers $a, b$ and $c$ written at the points $A_{i-1}, A_{i}$ and $A_{i+1}$ by $1-a, 1-b$ and $1-c$, respectively. (Here $A_{0}$ means $A_{n}$ and $A_{n+1}$ means $A_{1}$.)

a) If $n=1999$, is it possible to have a 0 in all points after performing the described operation a finite number of times?
b) Find all values of $n$ such that it is not possible to have a 0 in all points after finite number of operations.

Kiril Bankov
