---
tag: E8A3FVA7GG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h2349584
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44414
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240688
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2020
    source: hf-ai-mo-aops
    label: 2020 Iran MO (3rd Round)
---
find all $k$ distinct integers $a_1,a_2,...,a_k$ such that there exists an injective function $f$ from reals to themselves such that for each positive integer $n$ we have $$ \{f^n(x)-x| x \in \mathbb{R} \}=\{a_1+n,a_2+n,...,a_k+n\} $$ .
