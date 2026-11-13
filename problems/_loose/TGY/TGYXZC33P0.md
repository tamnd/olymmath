---
tag: TGYXZC33P0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620764
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16835
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218475
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $n=2^{2018}$ and let $S=\{1,2,\ldots,n\}$ . For subsets $S_1,S_2,\ldots,S_n\subseteq S$ , we call an ordered pair $(i,j)$ *murine* if and only if $\{i,j\}$ is a subset of at least one of $S_i, S_j$ . Then, a sequence of subsets $(S_1,\ldots, S_n)$ of $S$ is called *tasty* if and only if:

1) For all $i$ , $i\in S_i$ .
2) For all $i$ , $ \bigcup_{j\in S_i} S_j=S_i$ .
3) There do not exist pairwise distinct integers $a_1,a_2,\ldots,a_k$ with $k\ge 3$ such that for each $i$ , $(a_i, a_{i+1})$ is murine, where indices are taken modulo $k$ .
4) $n$ divides $1+|S_1|+|S_2|+\ldots+|S_n|$ .

Find the largest integer $x$ such that $2^x$ divides the number of tasty sequences $(S_1,\ldots, S_n)$ .

*Proposed by Vincent Huang and Brandon Wang
