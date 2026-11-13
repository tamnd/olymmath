---
tag: 4K6NND4ZRM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h461250
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8073
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2012
    source: hf-ai-mo-aops
    label: 2012 International Zhautykov Olympiad
---
Let $P, Q,R$ be three polynomials with real coefficients such that $$P(Q(x)) + P(R(x))=\text{constant}$$ for all $x$ . Prove that $P(x)=\text{constant}$ or $Q(x)+R(x)=\text{constant}$ for all $x$ .
