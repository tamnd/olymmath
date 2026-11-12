---
tag: 8TNBVKQSK7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{n}$ be discrete random variables. Show that they are independent if and only if for any real numbers $x_{1}, \ldots, x_{n}$ the equality

$$
\mathrm{P}\left(\xi_{1}=x_{1}, \ldots, \xi_{n}=x_{n}\right)=\prod_{i=1}^{n} \mathrm{P}\left(\xi_{i}=x_{i}\right)
$$

holds.
