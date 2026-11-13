---
tag: 4EB1JQ8EMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n$ be a positive integer. We consider the set $ P$ of all partitions of $ n$ into a sum of positive integers (the order is irrelevant). For every partition $ \alpha$, let $ a_{k}(\alpha)$ be the number of summands in $ \alpha$ that are equal to $ k, k = 1,2,...,n.$ Prove that
$ \sum_{\alpha\in P}\frac{1}{1^{a_{1}(\alpha)}a_{1}(\alpha)!\cdot 2^{a_{2}(\alpha)}a_{2}(\alpha)!...n^{a_{n}(\alpha)}a_{n}(\alpha)!}=1.$
