---
tag: 1RAA3QXV0N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264025
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $N$ is called *googolicious* if there are exactly $10^{100}$ positive integers $x$ that satisfy $$\left\lfloor \frac{N}{\left\lfloor \frac{N}{x} \right\rfloor } \right\rfloor = x,$$ where $z$ denotes the greatest integer less than $z.$ Find, with proof, all googolicious integers $N.$
