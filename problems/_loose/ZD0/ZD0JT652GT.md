---
tag: ZD0JT652GT
kind: problem
type: answer
answer: \ln2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that for any $n \in \mathbb{N}^{*}$ there exists a unique $c_{n} \in(0,1)$ such that

$$
\int_{0}^{1} \frac{1}{1+x^{n}} \mathrm{~d} x=\frac{1}{1+\left(c_{n}\right)^{n}}
$$

and compute $\lim _{n \rightarrow \infty} n\left(c_{n}\right)^{n}$.

Radu Pop
