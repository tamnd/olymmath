---
tag: SHE5X81BEF
kind: problem
type: answer
answer: p(x) = (2 + \sqrt{3}) x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all polynomials $p$ with real coefficients for which $p(0)=0$ and
$$f(f(n))+n=4f(n) \text{for all }n\in\mathbb N,$$where $f(n)=\lfloor p(n)\rfloor$.
