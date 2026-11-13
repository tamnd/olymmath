---
tag: NPE5JBZCWA
kind: problem
type: answer
answer: "30"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243893
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the smallest natural number $n =>2$ with the property:
For every positive integers $a_1, a_2,. . . , a_n$ the product of all differences $a_j-a_i$,
$1 <=i <j <=n$, is divisible by 2001.
