---
tag: MSMP517HDV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Vandermonde and anti-Vandermonde identities) Let $a, b, n$ be integers. We adopt the convention $\binom{n}{k}=0$ for $k>n$. Show that:

1.

$$
\sum_{k=0}^{n}\binom{a}{k}\binom{b}{n-k}=\binom{a+b}{n}
$$

2.

$$
\sum_{k=0}^{n}\binom{k}{a}\binom{n-k}{b}=\binom{n+1}{a+b+1}
$$
