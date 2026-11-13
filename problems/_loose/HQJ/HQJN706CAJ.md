---
tag: HQJN706CAJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1301945
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14188
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215983
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Iran MO (3rd Round)
---
Find the number of all $\text{permutations}$ of $\left \{ 1,2,\cdots ,n \right \}$ like $p$ such that there exists a unique $i \in \left \{ 1,2,\cdots ,n \right \}$ that : $$ p(p(i)) \geq i $$
