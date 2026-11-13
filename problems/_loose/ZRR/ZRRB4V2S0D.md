---
tag: ZRRB4V2S0D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260515
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $c$ be a fixed positive integer, and let ${a_n}^{\inf}_{n=1}$ be a sequence of positive integers such that $a_n < a_{n+1} < a_n+c$ for every positive integer $n$. Let $s$ denote the infinite string of digits obtained by writing the terms in the sequence consecutively from left to right, starting from the first term. For every positive integer $k$, let $s_k$ denote the number whose decimal representation is identical to the $k$ most left digits of $s$. Prove that for every positive integer $m$ there exists a positive integer $k$ such that $s_k$ is divisible by $m$.
