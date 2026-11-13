---
tag: T6N019YGBC
kind: problem
type: answer
answer: k^{2}-1,k\in\mathbb{N}^{*}-{1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177920
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
2.a) Calculate:

$\frac{1}{1+\sqrt{2}}+\frac{1}{\sqrt{2}+\sqrt{3}}+\cdots+\frac{1}{\sqrt{n}+\sqrt{n+1}}$.

b) Determine $n \in \mathbb{N}^{*}$ for which the number:

$\frac{1-a_{1}(1-\sqrt{2})}{a_{1}+1+\sqrt{2}}+\frac{1-a_{2}(\sqrt{2}-\sqrt{3})}{a_{2}+\sqrt{2}+\sqrt{3}}+\cdots+\frac{1-a_{n}(\sqrt{n}-\sqrt{n+1})}{a_{n}+\sqrt{n}+\sqrt{n+1}} \in \mathbb{N}, \forall a_{1}, a_{2}, \ldots a_{n} \in \mathbb{Q}_{+}^{*}$.
