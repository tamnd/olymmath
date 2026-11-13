---
tag: PE82SE3DZ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h2526361
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48223
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Moldova National Olympiad
---
Let $m\ge2$ be an integer. The sequence $(a_n)_{n\in\mathbb N}$ is defined by $a_0=0$ and $a_n=\left\lfloor\frac nm\right\rfloor+a_{\left\lfloor\frac nm\right\rfloor}$ for all $n$ . Determine $\lim_{n\to\infty}\frac{a_n}n$ .
