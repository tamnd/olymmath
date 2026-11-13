---
tag: RCTQX7DGK4
kind: problem
type: answer
answer: \frac{1+\sqrt{5}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left(a_{n}\right)_{n \geq 1}$ be defined by

$$
a_{1}=1 \text { and } a_{n+1}=\sqrt{a_{n}+\frac{n}{n+1}},(\forall) n \geq 1
$$

Show that the sequence is convergent and compute $\lim _{n \rightarrow \infty} a_{n}$.

Florian Dumitrel
