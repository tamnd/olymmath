---
tag: SVCG0R931V
kind: problem
type: answer
answer: \frac{4}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $a, b, c, d \in \mathbf{R}^{+}$, try to find
$f(a, b, c, d)=\frac{a}{b+c+d}+\frac{b}{c+d+a}+\frac{c}{a+b+d}+\frac{d}{a+b+c}$ the minimum value.
