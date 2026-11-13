---
tag: WTQ2NH17Q8
kind: problem
type: answer
answer: \sum_{k=1}^{n}a_{k}^{2}<\frac{7}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$, where $a_{1}=1, a_{2}=\frac{1}{4}$, and $a_{n+1}=\frac{(n-1) a_{n}}{n-a_{n}}(n=2,3,4, \cdots)$.
(1) Find the general term formula for the sequence $\left\{a_{n}\right\}$;
(2) Prove that for all $n \in \mathbf{N}_{+}$,

$\sum_{k=1}^{n} a_{k}^{2}<\frac{7}{6}$.
