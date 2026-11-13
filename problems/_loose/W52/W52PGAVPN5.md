---
tag: W52PGAVPN5
kind: problem
type: answer
answer: (23,42,23,42)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any three positive integers $x, y, z$, let
$$
f(x, y, z)=[1+2+3+\cdots+(x+y-2)]-z .
$$

Find all positive integer quadruples $(a, b, c, d)$, such that
$$
f(a, b, c)=f(c, d, a)=1993 .
$$
