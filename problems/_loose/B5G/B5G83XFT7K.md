---
tag: B5G83XFT7K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214332
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence $\{a_n\}$ by $a_1=1, a_{2n}=a_{2n-1}+a_{n}$ ,$ a_{2n+1}=a_{2n} $ $(n=1,2,\cdots).$
For all positive integer $n$ ，prove that$$a_{2^n}>2^{\frac{n^2}{4}}.$$
