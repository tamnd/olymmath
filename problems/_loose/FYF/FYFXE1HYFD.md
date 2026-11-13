---
tag: FYFXE1HYFD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h1533485
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43563
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2015
    source: hf-ai-mo-aops
    label: 2015 Indonesia MO
---
Given positive integers $a,b,c,d$ such that $a\mid c^d$ and $b\mid d^c$ . Prove that
$$
ab\mid (cd)^{max(a,b)}
$$
