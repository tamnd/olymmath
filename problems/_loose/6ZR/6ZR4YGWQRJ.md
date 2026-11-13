---
tag: 6ZR4YGWQRJ
kind: problem
type: answer
answer: f(x) = g(x) = f(1) x^{2008}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242516
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of functions $f; g : R \to R$ such that for all reals $x.y \ne 0$ :
$$f(x + y) = g \left(\frac{1}{x}+\frac{1}{y}\right) \cdot (xy)^{2008}$$
