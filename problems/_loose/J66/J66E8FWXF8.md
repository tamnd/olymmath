---
tag: J66E8FWXF8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1222039
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13817
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215654
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
For how many permutations $\pi$ of $\{1,2,\ldots,9\}$ does there exist an integer $N$ such that $$N\equiv \pi(i)\pmod{i}\text{ for all integers }1\leq i\leq 9?$$
