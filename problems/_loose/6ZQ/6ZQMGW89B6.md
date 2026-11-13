---
tag: 6ZQMGW89B6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive numbers $\left\{a_{n}\right\}$, the sum of the first $n$ terms is $S_{n}$, and $a_{n}^{2}+a_{n}=2 S_{n}$. Prove:
(1) $S_{n}<\frac{a_{n}^{2}+a_{n+1}^{2}}{4}$;
(2) $\frac{S_{n}}{\sqrt{2}}<\sum_{i=1}^{n} \sqrt{S_{i}}<\frac{S_{n+1}-1}{\sqrt{2}}$.
