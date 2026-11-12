---
tag: E8DYQDCNFX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 SMO
    url: https://artofproblemsolving.com/community/c6h2251618
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2020
    source: hf-ai-mo-aops
    label: 2020 SMO
---
The sequence of positive integers $a_0, a_1, a_2, \ldots$ is recursively defined such that $a_0$ is not a power of $2$ , and for all nonnegative integers $n$ :

(i) if $a_n$ is even, then $a_{n+1} $ is the largest odd factor of $a_n$ (ii) if $a_n$ is odd, then $a_{n+1} = a_n + p^2$ where $p$ is the smallest prime factor of $a_n$ Prove that there exists some positive integer $M$ such that $a_{m+2} = a_m $ for all $m \geq M$ .

*Proposed by Andrew Wen*
