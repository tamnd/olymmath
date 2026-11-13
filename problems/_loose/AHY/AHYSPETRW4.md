---
tag: AHYSPETRW4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Ukraine National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h387785
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4407
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206588
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
Build the set of points $( x, y )$ on coordinate plane, that satisfies equality:
$$ \sqrt{1-x^2}+\sqrt{1-y^2}=2-x^2-y^2.$$
