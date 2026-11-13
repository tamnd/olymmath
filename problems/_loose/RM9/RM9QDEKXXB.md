---
tag: RM9QDEKXXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h367767
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3678
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205861
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2009
    source: hf-ai-mo-aops
    label: 2009 Iran MO (2nd Round)
---
Let $ p(x) $ be a quadratic polynomial for which :
$$ |p(x)| \leq 1 \forall x \in \{-1,0,1\} $$
Prove that:
$$ \ |p(x)|\leq\frac{5}{4} \forall x \in [-1,1]$$
