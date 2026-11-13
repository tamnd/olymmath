---
tag: JBYVRFZSGZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's determine the following sum

$$
\sum_{k=0}^{n}\binom{2 k}{k} \cdot\binom{2 n-2 k}{n-k} \cdot \frac{m}{k+m}
$$

where $m$ is a natural number. We interpret the symbol $\binom{0}{0}$ as 1. (By determining the sum, we mean producing an equivalent expression that does not involve the summation symbol.)
