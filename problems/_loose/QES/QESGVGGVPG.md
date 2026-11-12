---
tag: QESGVGGVPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h6324
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1991
    source: hf-ai-mo-aops
    label: 1991 Bundeswettbewerb Mathematik
---
Given wo non-negative integers $a$ and $b$ , one of them is odd and the other one even. By the following rule we define two sequences $(a_n),(b_n)$ :

$$ a_0 = a, a_1 = b, a_{n+1} = 2a_n - a_{n-1} + 2 (n = 1,2,3, \ldots)$$
$$ b_0 = b, b_1 = a, b_{n+1} = 2a_n - b_{n-1} + 2 (n = 1,2,3, \ldots)$$

Prove that none of these two sequences contain a negative element if and only if we have $|\sqrt{a} - \sqrt{b}| \leq 1$ .
