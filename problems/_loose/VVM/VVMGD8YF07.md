---
tag: VVMGD8YF07
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h2123622
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27672
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228060
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all the functions $f:\mathbb R\mapsto\mathbb R$ satisfies the equation $f(a^2 +ab+ f(b^2))=af(b)+b^2+ f(a^2)\,\forall a,b\in\mathbb R $
