---
tag: YEZ8RB26PV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Check the accuracy of the equality:

$$
\sum_{k=1}^{n} \frac{(-1)^{k+1}}{k}\binom{n}{k}=1+\frac{1}{2}+\frac{1}{3}+\ldots+\frac{1}{n}
$$

where $n \in \mathbb{N}$.
