---
tag: QVCQHFHM6J
kind: problem
type: answer
answer: C \left( \frac{m^2 \cdot \sqrt[m-1]{x}}{\log(x)} + n \right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231828
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there exists a constant $C > 0$ such that, for any integers $m, n$ with $n \geq m > 1$ and any real number $x > 1$, $$\sum_{k=m}^{n}\sqrt[k]{x} \leq C\bigg(\frac{m^2 \cdot \sqrt[m-1]{x}}{\log{x}} + n\bigg)$$
