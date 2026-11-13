---
tag: A5ZQ9YH3FX
kind: problem
type: answer
answer: \frac{1}{4}\log\frac{x-1}{x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbb{R} \rightarrow (-1,1)$,

$$
f(x)=\frac{100^{-x}-100^{x}}{100^{-x}+100^{x}}
$$

Determine $f^{-1}(x)-f^{-1}(1+2 x)$.
