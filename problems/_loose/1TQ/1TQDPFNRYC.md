---
tag: 1TQDPFNRYC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $F$ is defined on integers and takes integer values, and for each integer $c$ there exists a number $x$ such that $F(x) \neq c$. We call a number $a$ interesting if for any integer $x$ the following holds: $F(x) = F(a - x)$. Can each of the numbers 412, 414, and 451 be interesting?
