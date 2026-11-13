---
tag: VYQSP242G9
kind: problem
type: answer
answer: p(x)=x^3+bwhereb\leq0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162871
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $p$ of odd degree $z$ with real coefficients, for which

$$
p(p(x)) \leq (p(x))^{3}
$$

holds for all $x \in \mathbb{R}$ and which have the coefficient of $x^{2}$ equal to 0.
