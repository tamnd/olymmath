---
tag: BQ2RBASAT5
kind: problem
type: answer
answer: 2\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies
$$
a_{n}=\left[(2+\sqrt{5})^{n}+\frac{1}{2^{n}}\right]\left(n \in \mathbf{Z}_{+}\right) \text {, }
$$

where $[x]$ denotes the greatest integer not exceeding the real number $x$. Let $C$ be a real number such that for any positive integer $n$, we have
$$
\sum_{k=1}^{n} \frac{1}{a_{k} a_{k+2}} \leqslant C \text {. }
$$

Then the minimum value of $C$ is $ $
