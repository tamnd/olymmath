---
tag: FT882AMHNX
kind: problem
type: answer
answer: f(x)=\frac{x^{3}-x^{2}-1}{2x(x-1)},\forallx\in{R}-{0,1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbf{R} \rightarrow \mathbf{R}$, and $f(x)+f\left(\frac{x-1}{x}\right) \geqslant 1+x$, try to solve this functional inequality.
