---
tag: MF3WXC2GQW
kind: problem
type: answer
answer: (1,1,1,1),(-1,-1,-1,-1),(-1,-1,1,1),(-1,1,-1,1),(-1,1,1,-1),(1,-1,-1,1),(1,-1,1,-1),(1,1,-1,-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integer solutions to the equation
$$
\frac{x y z}{w}+\frac{y z w}{x}+\frac{z w x}{y}+\frac{w x y}{z}=4
$$
