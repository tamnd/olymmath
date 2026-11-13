---
tag: BRV63PWW20
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=150894
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$[\mathbf{2 5}]$ Let $F$ and $G$ be two multiplicative functions, and define for positive integers $n$,
$$
H(n)=\sum_{d \mid n} F(d) G\left(\frac{n}{d}\right) .
$$

The number theoretic function $H$ is called the convolution of $F$ and $G$. Prove that $H$ is multiplicative.
