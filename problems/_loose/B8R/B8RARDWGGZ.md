---
tag: B8RARDWGGZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244474
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(x_n)_{n\geq1}$ be a sequence that verifies: $$x_1=1, x_2=7, x_{n+1}=x_n+3x_{n-1}, \forall n \geq 2.$$
Prove that for every prime number $p$ the number $x_p-1$ is divisible by $3p.$
