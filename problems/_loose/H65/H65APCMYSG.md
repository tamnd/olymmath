---
tag: H65APCMYSG
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is given positive integer $n$. Let $a_1, a_2,..., a_n$ be positive integers with sum $2S$, $S \in \mathbb{N}$. Positive integer $k$ is called separator if you can pick $k$ different indices $i_1, i_2,...,i_k$ from set $\{1,2,...,n\}$ such that $a_{i_1}+a_{i_2}+...+a_{i_k}=S$. Find, in terms of $n$, maximum number of separators
