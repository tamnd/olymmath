---
tag: 790PDHSFQQ
kind: problem
type: answer
answer: '|u_n| \leq 1'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sequence ${u_n}$ is defined with $u_0=0,u_1=\frac{1}{3}$ and
$$\frac{2}{3}u_n=\frac{1}{2}(u_{n+1}+u_{n-1})$$ $\forall n=1,2,...$
Show that $|u_n|\leq1$ $\forall n\in\mathbb{N}.$
