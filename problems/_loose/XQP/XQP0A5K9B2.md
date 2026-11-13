---
tag: XQP0A5K9B2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Serbia National Math Olympiad
    url: https://artofproblemsolving.com/community/c6h152992
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=58944
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rs-smo/2007
    source: hf-ai-mo-aops
    label: 2007 Serbia National Math Olympiad
---
Let $k$ be a given natural number. Prove that for any positive numbers $x; y; z$ with
the sum $1$ the following inequality holds:
$$\frac{x^{k+2}}{x^{k+1}+y^{k}+z^{k}}+\frac{y^{k+2}}{y^{k+1}+z^{k}+x^{k}}+\frac{z^{k+2}}{z^{k+1}+x^{k}+y^{k}}\geq \frac{1}{7}.$$
When does equality occur?
