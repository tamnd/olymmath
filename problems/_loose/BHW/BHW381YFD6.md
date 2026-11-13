---
tag: BHW381YFD6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286818
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44783
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241021
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1999
    source: hf-ai-mo-aops
    label: 1999 Irish Math Olympiad
---
Find all real numbers $ x$ which satisfy: $ \frac{x^2}{(x+1-\sqrt{x+1})^2}<\frac{x^2+3x+18}{(x+1)^2}.$
