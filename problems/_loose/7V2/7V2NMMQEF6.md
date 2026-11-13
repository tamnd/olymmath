---
tag: 7V2NMMQEF6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h534000
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7911
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209995
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2012
    source: hf-ai-mo-aops
    label: 2012 Greece National Olympiad
---
Find all the non-zero polynomials $P(x),Q(x)$ with real coefficients and the minimum degree,such that for all $x \in \mathbb{R}$ :
$$ P(x^2)+Q(x)=P(x)+x^5Q(x) $$
