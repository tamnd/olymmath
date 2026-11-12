---
tag: EJWM9BMBZN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h3389451
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43603
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2024
    source: hf-ai-mo-aops
    label: 2024 Indonesia MO
---
Let $n \ge 2$ be a positive integer. Suppose $a_1, a_2, \dots, a_n$ are distinct integers. For $k = 1, 2, \dots, n$ , let
$$ s_k := \prod_{\substack{i \not= k, 1 \le i \le n}} |a_k - a_i|, $$
i.e. $s_k$ is the product of all terms of the form $|a_k - a_i|$ , where $i \in \{ 1, 2, \dots, n \}$ and $i \not= k$ .
Find the largest positive integer $M$ such that $M$ divides the least common multiple of $s_1, s_2, \dots, s_n$ for any choices of $a_1, a_2, \dots, a_n$ .
