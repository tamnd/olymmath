---
tag: MAC14TTETT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h365848
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4759
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206926
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
---
Let $A$ be a finite set, and $A_1,A_2,\cdots, A_n$ are subsets of $A$ with the following conditions:
(1) $|A_1|=|A_2|=\cdots=|A_n|=k$ , and $k>\frac{|A|}{2}$ ;
(2) for any $a,b\in A$ , there exist $A_r,A_s,A_t\,(1\leq r<s<t\leq n)$ such that $a,b\in A_r\cap A_s\cap A_t$ ;
(3) for any integer $i,j (1\leq i<j\leq n)$ , $|A_i\cap A_j|\leq 3$ .
Find all possible value(s) of $n$ when $k$ attains maximum among all possible systems $(A_1,A_2,\cdots, A_n,A)$ .
