---
tag: GYDPCRT92Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h381505
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54036
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2002
    source: hf-ai-mo-aops
    label: 2002 Romania National Olympiad
---
Let $f:[0,1]\rightarrow\mathbb{R}$ be an integrable function such that:
$$0<\left\vert \int_{0}^{1}f(x) \text{d}x\right\vert\le 1.$$
Show that there exists $x_1\not= x_2, x_1,x_2\in [0,1]$ , such that:
$$\int_{x_1}^{x_2}f(x) \text{d}x=(x_1-x_2)^{2002}$$
