---
tag: ZJCY5JMXV0
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A total of $2^{n}$ coins are distributed among several children. If during the distribution of the coins, one of the children has at least half of the coins, then that child gives to each of the remaining children as many coins as they already have. In the case where all the coins are with one child, there is no redistribution of the coins, and if two children have more than half of the coins, then one of them gives all the coins to the other. Determine the maximum possible number of consecutive redistributions of the coins. (For example, if 32 coins are initially distributed among 6 children as $17,2,9,1,2,1$, then after the first redistribution, the children will have $2,4,18,2,4,2$ coins, and after the second redistribution, the children will have $4,8,4,4,8,4$ coins, so there are only two redistributions.)
