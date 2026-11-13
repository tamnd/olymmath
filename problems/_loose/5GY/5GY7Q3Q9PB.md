---
tag: 5GY7Q3Q9PB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Peru MO (ONEM)
    url: https://artofproblemsolving.com/community/c6h2966869
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50635
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Peru MO (ONEM)
---
Find all values of $A$ such that $0^o < A < 360^o$ and also

$\frac{\sin A}{\cos A - 1} \ge 1$ and $\frac{3\cos A - 1}{\sin A} \ge 1.$
