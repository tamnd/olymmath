---
tag: 3TJVV9KWE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264547
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a polynomial $p(x)$ with positive integer roots *corrupt* if there exists an integer that cannot be expressed as a sum of (not necessarily positive) multiples of its roots. The polynomial $A(x)$ is monic, corrupt, and has distinct roots. As well, $A(0)$ has $7$ positive divisors. Find the least possible value of $|A(1)|$.
