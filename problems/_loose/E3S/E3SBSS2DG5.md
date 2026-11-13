---
tag: E3SBSS2DG5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2537479
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48610
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Mongolian Mathematical Olympiad
---
Let $m,n,k$ be positive integers with $m\ge2$ and $k\ge\log_2(m-1)$ . Prove that $$ \prod_{s=1}^n\frac{ms-1}{ms}<\sqrt[2^{k+1}]{\frac1{2n+1}}. $$
