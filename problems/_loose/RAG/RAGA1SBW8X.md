---
tag: RAGA1SBW8X
kind: problem
type: answer
answer: a_{i}=i
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16337
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all permutations $\left(a_{1}, a_{2}, \ldots, a_{2021}\right)$ of the numbers $1,2, \ldots, 2021$ such that for any natural numbers $m, n$ satisfying the condition $|m-n|>20^{21}$, the inequality holds:

$$
\sum_{i=1}^{2021} \operatorname{GCD}\left(m+i, n+a_{i}\right)<2|m-n|
$$

(A permutation ( $a_{1}, a_{2}, \ldots, a_{2021}$ ) is a sequence in which each of the numbers $1,2, \ldots, 2021$ appears exactly once.)

(P. Kozlov)
