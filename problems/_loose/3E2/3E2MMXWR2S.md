---
tag: 3E2MMXWR2S
kind: problem
type: answer
answer: \frac{1}{2}\leqslantI_{n}<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Satisfy $b_{1}=1, b_{n+1}=b_{n}+\frac{b_{n}^{2}}{n}(n=1,2,3, \cdots)$, prove:
$$
\frac{1}{2} \leqslant \sum_{k=1}^{n} \frac{1}{\sqrt{a_{k+1} b_{k}+k a_{k+1}-b_{k}-k}}<1 .
$$
