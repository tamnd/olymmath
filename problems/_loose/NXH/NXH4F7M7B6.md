---
tag: NXH4F7M7B6
kind: problem
type: answer
answer: 2\geqslant\sqrt[n]{1+\frac{\sqrt[n]{n}}{n}}+\sqrt[n]{1-\frac{\sqrt[n]{n}}{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110668
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbf{N}$, prove: $\sqrt[n]{n+\sqrt[n]{n}}+\sqrt[n]{n-\sqrt[n]{n}} \leqslant 2 \sqrt[n]{n}$.
