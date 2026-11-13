---
tag: FY3C4HNCBC
kind: problem
type: answer
answer: f(z) = \frac{z^3 + 4z^2 + z}{6(z-1)^4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every complex number $z$ different from 0 and 1 we define the following function
$$ f(z) := \sum \frac 1 { \log^4 z } $$
where the sum is over all branches of the complex logarithm.

a) Prove that there are two polynomials $P$ and $Q$ such that $f(z) = \frac {P(z)}{Q(z)} $ for all $z\in\mathbb{C}-\{0,1\}$.

b) Prove that for all $z\in \mathbb{C}-\{0,1\}$ we have

$$ f(z) = \frac { z^3+4z^2+z}{6(z-1)^4}. $$
