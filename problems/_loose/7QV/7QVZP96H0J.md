---
tag: 7QVZP96H0J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 Romania TST for IMO
    url: https://artofproblemsolving.com/community/c6h347400
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54400
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1994
    source: hf-ai-mo-aops
    label: 1994 Romania TST for IMO
  - at: ro-tst/1995
    source: hf-ai-mo-aops
    label: 1995 Romania Team Selection Test
---
Find a sequence of positive integer $f(n)$ , $n \in \mathbb{N}$ such that $(1)$ $f(n) \leq n^8$ for any $n \geq 2$ , $(2)$ for any pairwisely distinct natural numbers $a_1,a_2,\cdots, a_k$ and $n$ , we have that $$ f(n) \neq f(a_1)+f(a_2)+ \cdots + f(a_k) $$
