---
tag: HP55N33MVS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2011119
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54337
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247837
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1990
    source: hf-ai-mo-aops
    label: 1990 Romania Team Selection Test
---
Let a,b,n be positive integers such that $(a,b) = 1$ .
Prove that if $(x,y)$ is a solution of the equation $ax+by = a^n + b^n$ then $$ \left[\frac{x}{b}\right]+\left[\frac{y}{a}\right]=\left[\frac{a^{n-1}}{b}\right]+\left[\frac{b^{n-1}}{a}\right] $$
