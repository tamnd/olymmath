---
tag: VFEP60CFCX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221924
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13799
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
David, when submitting a problem for CMIMC, wrote his answer as $100\tfrac xy$ , where $x$ and $y$ are two positive integers with $x<y$ . Andrew interpreted the expression as a product of two rational numbers, while Patrick interpreted the answer as a mixed fraction. In this case, Patrick's number was exactly double Andrew's! What is the smallest possible value of $x+y$ ?
