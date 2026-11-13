---
tag: JYRFQYCT8E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143656
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that the sequence $\left\{a_{n}\right\}$ is an arithmetic sequence with the first term 1 and a non-zero common difference, and $a_{2} 、 a_{4} 、 a_{8}$ form a geometric sequence, the sequence $\left\{b_{n}\right\}$ and its sum of the first $n$ terms $S_{n}$ satisfy
$$
\frac{1}{b_{n}-1}=\left(1+\frac{1}{a-1}\right) \frac{1}{S_{n}}(a>2) \text {. }
$$
(1) Find the general terms of the sequences $\left\{a_{n}\right\} 、\left\{b_{n}\right\}$;
(2) Prove: $\sum_{k=1}^{n} \frac{a_{k}}{b_{k}-1}<3\left(n \in \mathbf{Z}_{+}\right)$.
