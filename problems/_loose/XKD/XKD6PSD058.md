---
tag: XKD6PSD058
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $k$, the sequence $\left\{a_{n}\right\}$ satisfies
$$
a_{n}=k^{n+1}+k^{n}-1(n=1,2, \cdots) \text {. }
$$

Prove: For any positive integer $m$, there exist $m$ pairwise coprime terms in $\left\{a_{n}\right\}$.
