---
tag: CRJAD8P355
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h473488
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8690
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2012
    source: hf-ai-mo-aops
    label: 2012 Romania National Olympiad
---
Let $m$ and $n$ be two nonzero natural numbers. Determine the minimum number of distinct complex roots of the polynomial $\prod_{k=1}^m (f+k)$ , when $f$ covers the set of $n^{\text{th}}$ - degree polynomials with complex coefficients.
