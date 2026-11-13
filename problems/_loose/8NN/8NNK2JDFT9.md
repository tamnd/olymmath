---
tag: 8NNK2JDFT9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1950 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h229167
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=41397
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238050
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/1950
    source: hf-ai-mo-aops
    label: 1950 Miklós Schweitzer
---
Let $ x$ be an arbitrary real number in $ (0,1)$ . For every positive integer $ k$ , let $ f_k(x)$ be the number of points $ mx\in [k,k + 1)$ $ m = 1,2,...$
Show that the sequence $ \sqrt [n]{f_1(x)f_2(x)\cdots f_n(x)}$ is convergent and find its limit.
