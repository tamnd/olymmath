---
tag: 6GTSY0STBP
kind: problem
type: answer
answer: \frac{n}{4}+\frac{[\frac{n}{2}]}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110976
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The eighteenth question: Given an integer $n \geq 2$, let $x_{i} \in [0,1] (1 \leq i \leq n)$. Try to find the maximum value of $\sum_{i=1}^{n} x_{i}\left|x_{i}-x_{i+1}\right|$, where $\mathrm{x}_{\mathrm{n}+1}=\mathrm{x}_{1}$.
