---
tag: 5XX6GGPHFB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h463246
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4200
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2009
    source: hf-ai-mo-aops
    label: 2009 Stanford Mathematics Tournament
---
Find the shortest distance between the point $(6,12)$ and the parabola given by the equation $x=\frac{y^2}{2}$
