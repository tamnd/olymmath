---
tag: JXFB5XSFDJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266800
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a positive integer $n$ is *nice* if we can split the numbers $1,2,\ldots,n$ into three sets, so that the sum of the numbers in each set is the same. For example, the number $12$ is nice because we can divide the numbers $1,2,\ldots,12$ into the sets $\left\{1,2,4,5,6,8\right\}$, $\left\{7,9,10\right\}$, and $\left\{3,11,12\right\}$, and the sum of the numbers in each set is $26$.

Find all nice positive integers.
