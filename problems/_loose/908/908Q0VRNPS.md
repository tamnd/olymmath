---
tag: 908Q0VRNPS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1814872
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18144
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219719
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
For any set $S$ of integers, let $f(S)$ denote the number of integers $k$ with $0 \le k < 2019$ such that there exist $s_1, s_2 \in S$ satisfying $s_1 - s_2 = k$ . For any positive integer $m$ , let $x_m$ be the minimum possible value of $f(S_1) + \dots + f(S_m)$ where $S_1, \dots, S_m$ are nonempty sets partitioning the positive integers. Let $M$ be the minimum of $x_1, x_2, \dots$ , and let $N$ be the number of positive integers $m$ such that $x_m = M$ . Compute $100M + N$ .

*Proposed by Ankan Bhattacharya*
