---
tag: DNX9QDNQ47
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h611772
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11684
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213641
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Find the smallest positive integer $c$ for which the following statement holds: Let $k$ and $n$ be positive integers. Suppose there exist pairwise distinct subsets $S_1$ , $S_2$ , $\dots$ , $S_{2k}$ of $\{1, 2, \dots, n\}$ , such that $S_i \cap S_j \neq \varnothing$ and $S_i \cap S_{j+k} \neq \varnothing$ for all $1 \le i,j \le k$ . Then $1000k \le c \cdot 2^n$ .

*Proposed by Yang Liu*
