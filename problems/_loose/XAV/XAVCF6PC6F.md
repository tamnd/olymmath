---
tag: XAVCF6PC6F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Peru MO (ONEM)
    url: https://artofproblemsolving.com/community/c6h2967164
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50642
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-mo/2009
    source: hf-ai-mo-aops
    label: 2009 Peru MO (ONEM)
---
For each positive integer $n$ , let $c(n)$ be the number of digits of $n$ . Let $A$ be a set of positive integers with the following property: If $a$ and $b$ are two distinct elements in $A$ , then $c(a +b)+2 > c(a)+c(b)$ . Find the largest number of elements that $A$ can have.

PS. In the original wording: c(n) = ''cantidad de dıgitos''
