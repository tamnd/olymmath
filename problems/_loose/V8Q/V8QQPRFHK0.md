---
tag: V8QQPRFHK0
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179923
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence of real numbers $\left(a_{n}\right)_{n \geq 0}$, defined by:

$$
a_{0}=0, a_{1}=1,13^{a_{n}}=12^{a_{n-1}}+5^{a_{n-2}}, \forall n \geq 2
$$

Show that the sequence $\left(a_{n}\right)_{n \geq 0}$ is convergent and determine $\lim _{n \rightarrow \infty} a_{n}$.
