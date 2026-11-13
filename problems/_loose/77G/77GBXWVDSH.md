---
tag: 77GBXWVDSH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h287052
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44821
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2002
    source: hf-ai-mo-aops
    label: 2002 Irish Math Olympiad
---
Let $ \alpha=2+\sqrt{3}$ . Prove that $ \alpha^n-[\alpha^n]=1-\alpha^{-n}$ for all $ n \in \mathbb{N}_0$ .
