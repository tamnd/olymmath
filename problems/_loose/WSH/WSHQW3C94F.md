---
tag: WSHQW3C94F
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n $ be a positive integer. A sequence $(a_1,a_2,\ldots,a_n)$ of length is called $balanced$ if for every $ k $ $(1\leq k\leq n)$ the term $ a_k $ is equal with the number of distinct numbers from the subsequence $(a_1,a_2,\ldots,a_k).$
a) How many balanced sequences $(a_1,a_2,\ldots,a_n)$ of length $ n $ do exist?
b) For every positive integer $m$ find how many balanced sequences $(a_1,a_2,\ldots,a_n)$ of length $ n $ exist such that $a_n=m.$
