---
tag: A1ZFWEYX2R
kind: problem
type: answer
answer: \frac{n(n+5)}{8(n+1)(n+4)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Calculate the following sum:

$$
\frac{3}{1 \cdot 2 \cdot 4 \cdot 5}+\frac{4}{2 \cdot 3 \cdot 5 \cdot 6}+\frac{5}{3 \cdot 4 \cdot 6 \cdot 7}+\ldots+\frac{n+2}{n \cdot(n+1) \cdot(n+3) \cdot(n+4)}
$$
