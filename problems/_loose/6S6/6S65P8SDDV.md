---
tag: 6S65P8SDDV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h3335638
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28155
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=68641
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1991 Tournament Of Towns
---
Find all natural numbers $n$ , and all integers $x,y$ ( $x\ne y$ ) for which the following equation is satisfied: $$ x + x^2 + x^4 + ...+ x^{2^n} = y + y^2 + y^4 + ... + y^{2^n} . $$
