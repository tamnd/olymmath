---
tag: GDQYMAZDSK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1876802
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17778
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2019
    source: hf-ai-mo-aops
    label: 2019 India IMO Training Camp
---
Let $n\ge 2$ be an integer. Solve in reals:
$$|a_1-a_2|=2|a_2-a_3|=3|a_3-a_4|=\cdots=n|a_n-a_1|.$$
