---
tag: D55S5YXY5K
kind: problem
type: answer
answer: -2,\quada_{6}=\frac{16}{11},\quada_{7}=\frac{19}{13},\quada_{8}=\frac{22}{15}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each real number $b$, let $\left(a_{n}\right)$ be the sequence defined by

$$
a_{n}=\frac{3 n+b}{2 n-1} (n=1,2, \ldots)
$$

Determine all integers $b$ for which the sequence defined by (1) has exactly three terms that satisfy the inequalities

$$
1.45<a_{n}<1.47
$$

For each such integer $b$ (if any exist), provide the three terms $a_{n}$ that satisfy (2).
