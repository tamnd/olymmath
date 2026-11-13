---
tag: PNFCXCB8GE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h381507
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54037
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247587
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
Let $f:\mathbb{R}\rightarrow\mathbb{R}$ be a continuous and bounded function such that
$$x\int_{x}^{x+1}f(t) \text{d}t=\int_{0}^{x}f(t) \text{d}t, \text{for any}\ x\in\mathbb{R}.$$
Prove that $f$ is a constant function.
