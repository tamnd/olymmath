---
tag: KN28MZS5B2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3535379
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-ai-mo-aops
    label: 2025 China Team Selection Test
---
Prove: there exist integer $x_1,x_2,\cdots x_{10},y_1,y_2,\cdots y_{10}$ satisfying the following conditions: $(1)$ $|x_i|,|y_i|\le 10^{10} $ for all $1\le i \le 10$ $(2)$ Define the set $$S = \left\{ \left( \sum_{i=1}^{10} a_i x_i, \sum_{i=1}^{10} a_i y_i \right) : a_1, a_2, \cdots, a_{10} \in \{0, 1\} \right\},$$
then $|S| = 1024$，and any rectangular strip of width 1 covers at most two points of S.
