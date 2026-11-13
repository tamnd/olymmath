---
tag: CBYWG0TVZM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}<a_{2}<\ldots<a_{n}$ be a sequence of positive integers with the property that for $i<j$ the decimal representation of $a_{j}$ does not start with that of $a_{i}$ (for example, the numbers 137 and 13729 cannot both occur in the sequence). Prove that the following applies

$$
\sum_{i=1}^{n} \frac{1}{a_{i}} \leq \frac{1}{1}+\frac{1}{2}+\frac{1}{3}+\ldots+\frac{1}{9}
$$
