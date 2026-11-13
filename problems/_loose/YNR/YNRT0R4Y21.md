---
tag: YNRT0R4Y21
kind: problem
type: answer
answer: f(x)=ax+b
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{Q} \rightarrow \mathbb{Q}$ such that for all real numbers $x, y$:

$$
f\left(\frac{x+y}{2}\right)=\frac{f(x)}{2}+\frac{f(y)}{2}
$$
