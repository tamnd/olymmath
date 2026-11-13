---
tag: MXSFPKATG9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245801
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{Q}^{+}\to \mathbb{Q}^{+}$ such that for all $x,y \in \mathbb{Q}$: $$f \left( x+\frac{y}{x}\right) =f(x)+\frac{f(y)}{f(x)}+2y, x,y \in \mathbb{Q}^{+}.$$
