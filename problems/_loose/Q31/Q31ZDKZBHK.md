---
tag: Q31ZDKZBHK
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94904
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence $\left\{a_{n}\right\}, n \in \mathbf{N}_{+}$, where $a_{1}=1, a_{n}=a_{1} a_{2} \cdots a_{n-1}+1, n \geqslant 2$. Find the smallest real number $M$, such that for any $m \in \mathbf{N}_{+}, \sum_{n=1}^{m} \frac{1}{a_{n}}<M$ holds.
