---
tag: 7NXJQ0Z33S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h199125
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35936
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234401
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
Let $ S$ be a set that contains $ n$ elements. Let $ A_{1},A_{2},\cdots,A_{k}$ be $ k$ distinct subsets of $ S$ , where $ k\geq 2, |A_{i}| = a_{i}\geq 1 ( 1\leq i\leq k)$ . Prove that the number of subsets of $ S$ that don't contain any $ A_{i} (1\leq i\leq k)$ is greater than or equal to $ 2^n\prod_{i = 1}^k(1 - \frac {1}{2^{a_{i}}}).$
