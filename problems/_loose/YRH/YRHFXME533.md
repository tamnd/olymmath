---
tag: YRHFXME533
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3585209
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2664
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2025
    source: hf-ai-mo-aops
    label: 2025 India IMOTC
---
Suppose Alice's grimoire has the number $1$ written on the first page and $n$ empty pages. Suppose in each of the next $n$ seconds, Alice can flip to the next page, and write down the sum or product of two numbers (possibly the same) which are already written in her grimoire. Let $F(n)$ be the largest possible number such that for any $k < F(n)$ , Alice can write down the number $k$ on the last page of her grimoire. Prove that there exists a positive integer $N$ such that for all $n>N$ , we have that $$n^{0.99n}\leqslant F(n)\leqslant n^{1.01n}.$$

*Proposed by Rohan Goyal and Pranjal Srivastava*
