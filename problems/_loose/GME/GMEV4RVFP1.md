---
tag: GMEV4RVFP1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h402710
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7155
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2011
    source: hf-ai-mo-aops
    label: 2011 Romania National Olympiad
---
Let $g:\mathbb{R}\to\mathbb{R}$ be a continuous and strictly decreasing function with $g(\mathbb{R})=(-\infty,0)$ . Prove that there are no continuous functions $f:\mathbb{R}\to\mathbb{R}$ with the property that there exists a natural number $k\ge 2$ so that : $\underbrace{f\circ f\circ\ldots\circ f}_{k\text{ times}}=g$ .
