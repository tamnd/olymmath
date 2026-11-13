---
tag: 20F9MADG4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221740
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13761
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Let $\ell$ be a real number satisfying the equation $\tfrac{(1+\ell)^2}{1+\ell^2}=\tfrac{13}{37}$ . Then
$$\frac{(1+\ell)^3}{1+\ell^3}=\frac mn,$$ where $m$ and $n$ are positive coprime integers. Find $m+n$ .
