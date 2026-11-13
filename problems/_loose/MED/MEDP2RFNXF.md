---
tag: MEDP2RFNXF
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166865
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\mathrm{Az}$

$$
a_{n}=\frac{(n+3)^{2}+3}{n(n+1)(n+2)} \cdot \frac{1}{2^{n+1}}
$$

is a sequence defined by its general term. We form the sequence

$$
b_{n}=\sum_{k=1}^{n} a_{k}
$$

Determine the limit of the sequence $b_{n}$ as $n \rightarrow+\infty$.
