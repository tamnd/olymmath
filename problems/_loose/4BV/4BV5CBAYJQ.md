---
tag: 4BV5CBAYJQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $\left(a_{n}\right)_{n \geq 1}$ defined as follows: $a_{1}=1, a_{n+1}=\frac{2 a_{n}^{2}+1}{2 a_{n}}$, for any $n \in \mathbb{N}^{*}$. Show that:

a) the sequence $\left(a_{n}\right)_{n \geq 1}$ is strictly increasing;
b) $n \leq a_{n}^{2}<n+\sqrt{n}$, for any $n \in \mathbb{N}^{*}$;
c) $\lim _{n \rightarrow+\infty} \frac{a_{n}}{\sqrt{n}}=1$.
