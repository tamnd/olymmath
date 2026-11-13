---
tag: ZPHCG8PYJ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h1626557
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61190
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Taiwan TST Round 3
---
Let $\{a_n\}_{n\geq 0}$ be an arithmetic sequence with difference $d$ and $1\leq a_0\leq d$ . Denote the sequence as $S_0$ , and define $S_n$ recursively by two operations below:
Step $1$ : Denote the first number of $S_n$ as $b_n$ , and remove $b_n$ .
Step $2$ : Add $1$ to the first $b_n$ numbers to get $S_{n+1}$ .
Prove that there exists a constant $c$ such that $b_n=[ca_n]$ for all $n\geq 0$ , where $[]$ is the floor function.
