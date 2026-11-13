---
tag: X7B6MNJ4RA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h197895
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35917
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2008
    source: hf-ai-mo-aops
    label: 2008 China Team Selection Test
---
Find the maximal constant $ M$ , such that for arbitrary integer $ n\geq 3,$ there exist two sequences of positive real number $ a_{1},a_{2},\cdots,a_{n},$ and $ b_{1},b_{2},\cdots,b_{n},$ satisfying
(1): $ \sum_{k = 1}^{n}b_{k} = 1,2b_{k}\geq b_{k - 1} + b_{k + 1},k = 2,3,\cdots,n - 1;$
(2): $ a_{k}^2\leq 1 + \sum_{i = 1}^{k}a_{i}b_{i},k = 1,2,3,\cdots,n, a_{n}\equiv M$ .
