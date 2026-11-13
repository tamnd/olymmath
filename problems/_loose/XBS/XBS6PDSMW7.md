---
tag: XBS6PDSMW7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141800
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive terms $\left\{a_{n}\right\}$ satisfying $S_{n}^{2}=a_{1}^{3}+a_{2}^{3}+\ldots+a_{n}^{3}\left(n \in N^{*}\right)$, where $S_{n}$ is the sum of the first $n$ terms of the sequence $\left\{a_{n}\right\}$.

Prove:
$$
\frac{2 n+1}{(n+1) \sqrt{n+1}}<\left(\frac{1}{a_{1}}\right)^{\frac{3}{2}}+\left(\frac{1}{a_{2}}\right)^{\frac{3}{2}}+\ldots+\left(\frac{1}{a_{2 n+1}}\right)^{\frac{3}{2}}<3
$$
