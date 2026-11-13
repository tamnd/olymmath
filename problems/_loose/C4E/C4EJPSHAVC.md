---
tag: C4EJPSHAVC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h398963
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44138
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240411
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/1996
    source: hf-ai-mo-aops
    label: 1996 Iran MO (3rd Round)
---
Find all sets of real numbers $\{a_1,a_2,\ldots, _{1375}\}$ such that
$$2 \left( \sqrt{a_n - (n-1)}\right) \geq a_{n+1} - (n-1), \forall n \in \{1,2,\ldots,1374\},$$
and
$$2 \left( \sqrt{a_{1375}-1374} \right) \geq a_1 +1.$$
