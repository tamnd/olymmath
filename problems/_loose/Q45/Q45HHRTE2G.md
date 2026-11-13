---
tag: Q45HHRTE2G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h2308096
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20091
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221592
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2021
    source: hf-ai-mo-aops
    label: 2021 Hong Kong TST
---
On the table there are $20$ coins of weights $1,2,3,\ldots,15,37,38,39,40$ and $41$ grams. They all look alike but their colours are all distinct. Now Miss Adams knows the weight and colour of each coin, but Mr. Bean knows only the weights of the coins. There is also a balance on the table, and each comparison of weights of two groups of coins is called an operation. Miss Adams wants to tell Mr. Bean which coin is the $1$ gram coin by performing some operations. What is the minimum number of operations she needs to perform?
