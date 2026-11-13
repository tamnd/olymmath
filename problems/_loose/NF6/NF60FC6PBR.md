---
tag: NF60FC6PBR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Costa Rica - Final Round
    url: https://artofproblemsolving.com/community/c6h2675906
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37105
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235129
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cr-mo/2018
    source: hf-ai-mo-aops
    label: 2018 Costa Rica - Final Round
---
Determine if there exists a function f: $N^*\to N^*$ that satisfies that for all $n \in N^*$ , $$ 10^{f (n)} <10n + 1 <10^{f (n) +1}. $$ Justify your answer.

Note: $N^*$ denotes the set of positive integers.
