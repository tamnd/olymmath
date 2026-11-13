---
tag: KHRWM2DBDH
kind: problem
type: answer
answer: 2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for positive numbers $x_{1}, x_{2}, \ldots, x_{n}$, not exceeding 1, the inequality

$$
\left(1+x_{1}\right)^{\frac{1}{x_{2}}}\left(1+x_{2}\right)^{\frac{1}{x_{3}}} \ldots\left(1+x_{n}\right)^{\frac{1}{x_{1}}}>2^{n}
$$

holds.
