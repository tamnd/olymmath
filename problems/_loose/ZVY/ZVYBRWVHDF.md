---
tag: ZVYBRWVHDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h485995
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42235
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238820
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=35
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2006
    source: hf-ai-mo-aops
    label: 2006 India IMO Training Camp
  - at: in-tst/2006
    source: hf-mathnet
    label: India Indija TS 2006
---
Let $n$ be a positive integer divisible by $4$ . Find the number of permutations $\sigma$ of $(1,2,3,\cdots,n)$ which satisfy the condition $\sigma(j)+\sigma^{-1}(j)=n+1$ for all $j \in \{1,2,3,\cdots,n\}$ .
