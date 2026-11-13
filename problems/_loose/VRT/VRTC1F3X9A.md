---
tag: VRTC1F3X9A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Vietnam Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1411391
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16062
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217745
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Vietnam Team Selection Test
---
Given $2017$ positive real numbers $a_1,a_2,\dots ,a_{2017}$ . For each $n>2017$ , set $$ a_n=\max\{ a_{i_1}a_{i_2}a_{i_3}|i_1+i_2+i_3=n, 1\leq i_1\leq i_2\leq i_3\leq n-1\}. $$ Prove that there exists a positive integer $m\leq 2017$ and a positive integer $N>4m$ such that $a_na_{n-4m}=a_{n-2m}^2$ for every $n>N$ .
