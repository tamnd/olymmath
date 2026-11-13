---
tag: GBTRGGKCRJ
kind: problem
type: answer
answer: \frac{7}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}: a_{n}=\sum_{i=1}^{n} \frac{1}{i!}$. If the sequence $\left\{b_{n}\right\}$ satisfies $b_{n}=(n+1)!a_{n}$, prove:
$$
\prod_{i=1}^{2019}\left(1+\frac{1}{b_{i}}\right)<\frac{7}{4} .
$$
