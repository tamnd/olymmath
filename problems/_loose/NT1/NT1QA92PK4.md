---
tag: NT1QA92PK4
kind: problem
type: answer
answer: "46"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=153682
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong Hong Kong Preliminary Selection Contest
---
If a sequence $\left\{a_{1}, a_{2}, \ldots, a_{n}\right\}$ of positive integers (where $n$ is a positive integer) has the property that the last digit of $a_{k}$ is the same as the first digit of $a_{k+1}$ (here $k=1,2, \ldots, n$ and we define $\left.a_{n+1}=a_{1}\right)$, then the sequence is said to be a 'dragon sequence'. For example, $\{414\},\{208,82\}$ and $\{1,17,73,321\}$ are all 'dragon sequences'. At least how many two-digit numbers must be chosen at random to ensure that a 'dragon sequence' can be formed among some of the chosen numbers?
