---
tag: 9XFZM6XMMD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h220397
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25081
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225770
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1992
    source: hf-ai-mo-aops
    label: 1992 IMO Longlists
---
Let $ f, g$ and $ a$ be polynomials with real coefficients, $ f$ and $ g$ in one variable and $ a$ in two variables. Suppose

$$ f(x) - f(y) = a(x, y)(g(x) - g(y)) \forall x,y \in \mathbb{R}$$

Prove that there exists a polynomial $ h$ with $ f(x) = h(g(x)) \text{ } \forall x \in \mathbb{R}.$
