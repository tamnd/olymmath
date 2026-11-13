---
tag: B86NVBEKRZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224331
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $ r > 0$ such that when $ f: \mathbb R^{2}\to \mathbb R$ is differentiable, $ \|\textrm{grad} f(0,0)\| = 1$, $ \|\textrm{grad} f(u) - \textrm{grad} f(v)\| \leq \| u - v\|$, then the max of $ f$ on the disk $ \|u\|\leq r$, is attained at exactly one point.
