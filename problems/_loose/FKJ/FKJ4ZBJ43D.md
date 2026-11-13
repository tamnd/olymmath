---
tag: FKJ4ZBJ43D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1831643
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17699
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219278
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2019
    source: hf-ai-mo-aops
    label: 2019 Hong Kong TST
---
Determine all sequences $p_1, p_2, \dots $ of prime numbers for which there exists an integer $k$ such that the recurrence relation
$$ p_{n+2} = p_{n+1} + p_n + k $$
holds for all positive integers $n$ .
