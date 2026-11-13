---
tag: 80J1NYVAF2
kind: problem
type: answer
answer: (2,2^{\mathrm{k}}),\mathrm{k}\in\mathrm{Z}^{+}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of positive integers $(m, a)$ such that the sequence $\left\{a_{n}\right\}_{n \in Z^{+}}: a_{1}=a, a_{n+1}=$ $\left\{\begin{array}{c}a_{n}^{2}+2^{m}, \text { when } a_{n}<2^{m} \\ \frac{a_{n}}{2}, \text { when } a_{n} \geq 2^{m}\end{array}\right.$ consists of integers for all terms.
