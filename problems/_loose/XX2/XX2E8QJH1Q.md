---
tag: XX2E8QJH1Q
kind: problem
type: answer
answer: (c,d)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231831
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs $(c, d) \in \mathbb{R}^2$ of real constants such that there is a sequence $(a_n)_{n\geq1}$ of positive real numbers such that, for all $n \geq 1$, $$a_n \geq c \cdot a_{n+1} + d \cdot \sum_{1 \leq j < n} a_j .$$
