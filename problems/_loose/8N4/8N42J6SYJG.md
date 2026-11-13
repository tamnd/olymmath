---
tag: 8N42J6SYJG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251058
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $n$ be a given positive integer. Prove that there are infinitely many pairs of positive integers $(a, b)$ with $a, b > n$ such that
$$\prod_{i=1}^{2015} (a + i) | b(b + 2016), \prod_{i=1}^{2015}(a + i) \nmid b, \prod_{i=1}^{2015} (a + i)\mid (b + 2016)$$.
