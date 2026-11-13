---
tag: SA06KKQVKJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2022
    url: https://artofproblemsolving.com/community/c6h3036689
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57250
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2022
    source: hf-ai-mo-aops
    label: Russian TST 2022
---
Let $n = 2k + 1$ be an odd positive integer, and $m$ be an integer realtively prime to $n{}$ . For each $j =1,2,\ldots,k$ we define $p_j$ as the unique integer from the interval $[-k, k]$ congruent to $m\cdot j$ modulo $n{}$ . Prove that there are equally many pairs $(i,j)$ for which $1\leqslant i<j\leqslant k$ which satisfy $|p_i|>|p_j|$ as those which satisfy $p_ip_j<0$ .
