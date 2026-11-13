---
tag: B8MX670JWY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Vietnam Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1411405
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16063
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Vietnam Team Selection Test
---
For each integer $n>0$ , a permutation $a_1,a_2,\dots ,a_{2n}$ of $1,2,\dots 2n$ is called *beautiful* if for every $1\leq i<j \leq 2n$ , $a_i+a_{n+i}=2n+1$ and $a_i-a_{i+1}\not \equiv a_j-a_{j+1}$ (mod $2n+1$ ) (suppose that $a_{2n+1}=a_1$ ).
a. For $n=6$ , point out a *beautiful* permutation.
b. Prove that there exists a *beautiful* permutation for every $n$ .
