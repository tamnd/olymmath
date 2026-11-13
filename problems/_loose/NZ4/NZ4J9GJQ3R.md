---
tag: NZ4J9GJQ3R
kind: problem
type: answer
answer: \frac{(n-1)(2n-1)}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 2, x_{1}, x_{2}, \cdots, x_{n}$ be $n$ distinct real numbers in the open interval $(0,1)$. Prove:
$$
\sum_{i=1}^{n} \sum_{j=1}^{n}\left\{x_{i}-x_{j}\right\}^{2} \geqslant \frac{(n-1)(2 n-1)}{6},
$$

where, $\{x\}=x-[x],[x]$ denotes the greatest integer not exceeding the real number $x$.
