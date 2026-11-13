---
tag: B7QCCT1PF0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequence $\left\{a_{n}\right\}$, it is known that
$$
a_{1}=2, a_{n+1}=\frac{2 a_{n}}{a_{n}+1} \text {. }
$$

Prove: (1) The sequence $\left\{\frac{1}{a_{n}}-1\right\}$ is a geometric sequence, and find the general term formula of the sequence $\left\{a_{n}\right\}$;
(2) $\sum_{i=1}^{n} a_{i}\left(a_{i}-1\right)<3$.
