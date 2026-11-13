---
tag: Y9G3TEARDD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81301
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f$ from $\mathbb{R}$ to $\mathbb{R}$ satisfying the following condition:

$$
\forall x, y \in \mathbb{R}, f(x f(x)+f(y))=y+f(x)^{2}
$$
