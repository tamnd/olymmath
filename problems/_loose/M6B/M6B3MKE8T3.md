---
tag: M6B3MKE8T3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1276406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14088
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2016
    source: hf-ai-mo-aops
    label: 2016 India IMO Training Camp
---
We say a natural number $n$ is perfect if the sum of all the positive divisors of $n$ is equal to $2n$ . For example, $6$ is perfect since its positive divisors $1,2,3,6$ add up to $12=2\times 6$ . Show that an odd perfect number has at least $3$ distinct prime divisors.

*Note: It is still not known whether odd perfect numbers exist. So assume such a number is there and prove the result.*
