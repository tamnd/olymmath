---
tag: ARPA1NHT41
kind: problem
type: answer
answer: \frac{1}{n+1}C_{2n}^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x_{i} \in\{1,-1\}, i=1,2,3 \cdots \cdots, 2 n$, and $x_{1}+x_{2}+\cdots \cdots+$ $x_{i} \geqslant 0$, where $i=1,2,3 \cdots \cdots, 2 n-1, x_{1}+x_{2}+x_{3}+\cdots \cdots+x_{2 n}=0$, find the number of ordered tuples $\left(x_{1}, x_{2}, x_{3}, \cdots \cdots, x_{2 n}\right)$.
