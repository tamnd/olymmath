---
tag: ZD0TZV52GK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3275443
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70127
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2018
    source: hf-ai-mo-aops
    label: 2018 BMT Spring
---
Let $f : Z^2 \to C$ be a function such that $f(x+11, y) = f(x, y+11) = f(x, y)$ , and $f(x, y)f(z,w) = f(xz - yw,xw + yz)$ . How many possible values can $f(1, 1)$ have?
