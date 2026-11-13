---
tag: NQD98F3J7P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2525356
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48618
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244531
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Mongolian Mathematical Olympiad
---
Prove that for every positive integer $n$ there exists a polynomial $p(x)$ of degree $n$ with real coefficients, having $n$ distinct real roots and satisfying $$ p(x)p(4-x)=p(x(4-x)) $$
