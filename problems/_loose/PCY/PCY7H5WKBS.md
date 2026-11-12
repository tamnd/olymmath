---
tag: PCY7H5WKBS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h3319406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/1998
    source: hf-ai-mo-aops
    label: 1998 Argentina National Olympiad
---
Given two integers $m\geq 2$ and $n\geq 2$ we consider two types of sequences of length $m\cdot n$ formed exclusively by $0$ and $1$ TYPE 1 sequences are all those that verify the following two conditions: $\bullet$ $a_ka_{k+m} = 0$ for all $k = 1, 2, 3, ...$ $\bullet$ If $a_ka_{k+1} = 1$ , then $k$ is a multiple of $m$ .

TYPE 2 sequences are all those that verify the following two conditions: $\bullet$ $a_ka_{k+n} = 0$ for all $k = 1, 2, 3, ...$ $\bullet$ If $a_ka_{k+1} = 1$ , then $k$ is a multiple of $n$ .

Prove that the number of sequences of type 1 is equal to the number of sequences of type 2.
