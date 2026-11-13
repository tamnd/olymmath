---
tag: 105KM5VTSF
kind: problem
type: answer
answer: f(x) = x^3 + x^2 + x + 1, x^3 + 2x^2 + 2x + 2, 2x^3 + x^2 + 2x + 1, 2x^3 + 2x^2 + x + 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $f(x)\in \mathbb Z (x)$ that satisfies the following condition, with the lowest degree.
**Condition**: There exists $g(x),h(x)\in \mathbb Z (x)$ such that $$f(x)^4+2f(x)+2=(x^4+2x^2+2)g(x)+3h(x)$$.
