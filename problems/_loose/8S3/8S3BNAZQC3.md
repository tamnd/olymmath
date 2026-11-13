---
tag: 8S3BNAZQC3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2009115
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54318
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1989
    source: hf-ai-mo-aops
    label: 1989 Romania Team Selection Test
---
Let $r,n$ be positive integers. For a set $A$ , let ${A \choose r}$ denote the family of all $r$ -element subsets of $A$ . Prove that if $A$ is infinite and $f : {A \choose r} \to {1,2,...,n}$ is any function, then there exists an infinite subset $B$ of $A$ such that $f(X) = f(Y)$ for all $X,Y \in {B \choose r}$ .
