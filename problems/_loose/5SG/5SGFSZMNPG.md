---
tag: 5SGFSZMNPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h3034666
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 1
---
For every positive integer $M \geq 2$ , find the smallest real number $C_M$ such that for any integers $a_1, a_2,\ldots , a_{2023}$ , there always exist some integer $1 \leq k < M$ such that

$$\left\{\frac{ka_1}{M}\right\}+\left\{\frac{ka_2}{M}\right\}+\cdots+\left\{\frac{ka_{2023}}{M}\right\}\leq C_M.$$
Here, $\{x\}$ is the unique number in the interval $[0, 1)$ such that $x - \{x\}$ is an integer.
*Proposed by usjl*
