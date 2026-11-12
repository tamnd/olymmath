---
tag: 95C6MECJRS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3647416
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2025
    source: hf-ai-mo-aops
    label: 2025 Iran MO (3rd Round)
---
Find all polynomials $ P(x) \in \mathbb{R}[x] $ of degree 1404 and all functions $ f: \mathbb{C} \to \mathbb{C} $ such that for every $ z \in \mathbb{C} $ and every $ a \in \mathbb{R} $, we have:
$$
f(z) = f(P(z) + a) \cdot f(|z| + a).
$$
