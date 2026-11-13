---
tag: CJGXTH1N99
kind: problem
type: answer
answer: "14"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135751
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given $n$ identical cubes, each of size $1 \times 1 \times 1$. We arrange all of these $n$ cubes to produce one or more congruent rectangular solids, and let $B(n)$ be the number of ways to do this. For example, if $n=12$, then one arrangement is twelve $1 \times 1 \times 1$ cubes, another is one $3 \times 2 \times 2$ solid, another is three $2 \times 2 \times 1$ solids, another is three $4 \times 1 \times 1$ solids, etc. We do not consider, say, $2 \times 2 \times 1$ and $1 \times 2 \times 2$ to be different; these solids are congruent. You may wish to verify, for example, that $B(12)=11$.
Find, with proof, the integer $m$ such that $10^{m}<B\left(2015^{100}\right)<10^{m+1}$.
