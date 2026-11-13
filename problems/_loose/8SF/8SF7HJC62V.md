---
tag: 8SF7HJC62V
kind: problem
type: answer
answer: p(x)=\cdotx(x-1)(x-2)\cdots(x-2020),\in\mathbb{R}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all polynomials $p$ with real coefficients for which the equality

$$
x \cdot p(x-1)=(x-2021) \cdot p(x)
$$

is satisfied for all real numbers $x$.
