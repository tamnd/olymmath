---
tag: N8BH3ZT4RQ
kind: problem
type: answer
answer: "22228"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say a 2023-tuple of nonnegative integers $\left(a_{1}, a_{2}, \ldots a_{2023}\right)$ is sweet if the following conditions hold:

- $a_{1}+a_{2}+\ldots+a_{2023}=2023$,
- $\frac{a_{1}}{2^{1}}+\frac{a_{2}}{2^{2}}+\ldots+\frac{a_{2023}}{2^{2023}} \leqslant 1$.

Determine the greatest positive integer $L$ such that

$$
a_{1}+2 a_{2}+\ldots+2023 a_{2023} \geqslant L
$$

holds for every sweet 2023-tuple $\left(a_{1}, a_{2}, \ldots, a_{2023}\right)$.

(Ivan Novak)
