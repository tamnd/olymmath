---
tag: WXX26H0KE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254986
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35832
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2004
    source: hf-ai-mo-aops
    label: 2004 China Team Selection Test
---
Given non-zero reals $ a$ , $ b$ , find all functions $ f: \mathbb{R} \longmapsto \mathbb{R}$ , such that for every $ x, y \in \mathbb{R}$ , $ y \neq 0$ , $ f(2x) = af(x) + bx$ and $ f(x)f(y) = f(xy) + f \left( \frac {x}{y} \right)$ .
