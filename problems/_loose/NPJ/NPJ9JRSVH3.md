---
tag: NPJ9JRSVH3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 IMO
    url: https://artofproblemsolving.com/community/c6h5570
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23567
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo/1980
    source: hf-ai-mo-aops
    label: 1980 IMO
  - at: ba-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Junior Regional Olympiad - FBH
  - at: pl-om/1981
    source: hf-ai-mo-aops
    label: 1981 Polish MO Finals
---
Find all pairs of solutions $(x,y)$ :

$$ x^3 + x^2y + xy^2 + y^3 = 8(x^2 + xy + y^2 + 1). $$
