---
tag: CQRVKJY4ZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254970
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35822
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2004
    source: hf-ai-mo-aops
    label: 2004 China Team Selection Test
---
Find all positive integer $ n$ satisfying the following condition: There exist positive integers $ m$ , $ a_1$ , $ a_2$ , $ \cdots$ , $ a_{m-1}$ , such that $ n = \sum_{i=1}^{m-1} a_i(m-a_i)$ , where $ a_1$ , $ a_2$ , $ \cdots$ , $ a_{m-1}$ may not distinct and $ 1 \leq a_i \leq m-1$ .
