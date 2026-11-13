---
tag: JWNMDE7NBZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254980
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35828
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234304
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
Given arbitrary positive integer $ a$ larger than $ 1$ , show that for any positive integer $ n$ , there always exists a n-degree integral coefficient polynomial $ p(x)$ , such that $ p(0)$ , $ p(1)$ , $ \cdots$ , $ p(n)$ are pairwise distinct positive integers, and all have the form of $ 2a^k+3$ , where $ k$ is also an integer.
