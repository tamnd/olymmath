---
tag: VYGEKCSNE5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Ukraine National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h387796
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4415
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2009
    source: hf-ai-mo-aops
    label: 2009 Ukraine National Mathematical Olympiad
---
Find all functions $f : \mathbb R \to \mathbb R$ such that
$$f\left(x+xy+f(y)\right)= \left( f(x)+\frac 12 \right) \left( f(y)+\frac 12 \right) \forall x,y \in \mathbb R.$$
