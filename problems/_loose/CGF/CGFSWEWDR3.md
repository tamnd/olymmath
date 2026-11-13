---
tag: CGFSWEWDR3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h249171
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40044
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2008
    source: hf-ai-mo-aops
    label: 2008 Germany Team Selection Test
---
A sequence $ (S_n), n \geq 1$ of sets of natural numbers with $ S_1 = \{1\}, S_2 = \{2\}$ and
$${ S_{n + 1} = \{k \in }\mathbb{N}|k - 1 \in S_n \text{ XOR } k \in S_{n - 1}\}.
$$
Determine $ S_{1024}.$
