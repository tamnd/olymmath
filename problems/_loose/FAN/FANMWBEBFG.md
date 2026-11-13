---
tag: FANMWBEBFG
kind: problem
type: answer
answer: x = k + \frac{2022}{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204008
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a real number $a$, $[a]$ denotes the largest integer not exceeding $a$.
Find all positive real numbers $x$ satisfying the equation
$$x\cdot [x]+2022=[x^2]$$
