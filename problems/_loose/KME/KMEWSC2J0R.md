---
tag: KMEWSC2J0R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h364143
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4749
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206916
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Let $A=\{a_1,a_2,\cdots,a_{2010}\}$ and $B=\{b_1,b_2,\cdots,b_{2010}\}$ be two sets of complex numbers. Suppose
$$\sum_{1\leq i<j\leq 2010} (a_i+a_j)^k=\sum_{1\leq i<j\leq 2010}(b_i+b_j)^k$$
holds for every $k=1,2,\cdots, 2010$ . Prove that $A=B$ .
