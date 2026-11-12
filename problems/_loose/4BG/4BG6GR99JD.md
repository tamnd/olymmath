---
tag: 4BG6GR99JD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3647417
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44501
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
Find all functions $ f: \mathbb{R}^+ \to \mathbb{R}^+ $ such that for every three positive real numbers $ a, b, c $ satisfying:
$$
3(ab + bc + ac) > a^2 + b^2 + c^2,
$$
we have:
$$
3(af(b) + bf(c) + cf(a)) > f(a)^2 + f(b)^2 + f(c)^2 \geq af(b) + bf(c) + cf(a).
$$
