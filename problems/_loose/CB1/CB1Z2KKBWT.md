---
tag: CB1Z2KKBWT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive real numbers $a_{1}, a_{2}, \cdots, a_{n}, \cdots$ satisfying:
(1) $a_{n+1}=a_{1}^{2} a_{2}^{2} \cdots a_{n}^{2}-3\left(n \in \mathbf{Z}_{+}\right)$;
(2) $\frac{1}{2}\left(a_{1}+\sqrt{a_{2}-1}\right) \in \mathbf{Z}_{+}$.
Prove: $\frac{1}{2}\left(a_{1} a_{2} \cdots a_{n}+\sqrt{a_{n+1}-1}\right) \in \mathbf{Z}_{+}$.
