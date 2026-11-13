---
tag: TE89VXQGM8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2016
    url: https://artofproblemsolving.com/community/c6h3056209
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57169
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249988
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2016
    source: hf-ai-mo-aops
    label: Russian TST 2016
---
Prove that for any points $A,B,C,D$ in the plane, the following inequality holds $$\frac{AB}{DA+DB}+\frac{BC}{DB+DC}\geqslant\frac{AC}{DA+DC}.$$
