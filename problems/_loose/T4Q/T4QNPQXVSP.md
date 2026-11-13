---
tag: T4QNPQXVSP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h367769
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3680
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2009
    source: hf-ai-mo-aops
    label: 2009 Iran MO (2nd Round)
---
Let $ a_1<a_2<\cdots<a_n $ be positive integers such that for every distinct $1\leq{i,j}\leq{n}$ we have $ a_j-a_i $ divides $ a_i $ .
Prove that
$$ ia_j\leq{ja_i} \text{ for } 1\leq{i}<j\leq{n} $$
