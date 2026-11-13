---
tag: SDMQNV946R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286805
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44773
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1998
    source: hf-ai-mo-aops
    label: 1998 Irish Math Olympiad
---
Prove that if $ x \not= 0$ is a real number, then: $ x^8-x^5-\frac{1}{x}+\frac{1}{x^4} \ge 0$ .
