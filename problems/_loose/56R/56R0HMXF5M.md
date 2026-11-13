---
tag: 56R0HMXF5M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1164283
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78545
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Let $a_1$ , $a_2, \dots, a_{2015}$ be a sequence of positive integers in $[1,100]$ .
Call a nonempty contiguous subsequence of this sequence *good* if the product of the integers in it leaves a remainder of $1$ when divided by $101$ .
In other words, it is a pair of integers $(x, y)$ such that $1 \le x \le y \le 2015$ and $$a_xa_{x+1}\dots a_{y-1}a_y \equiv 1 \pmod{101}. $$Find the minimum possible number of good subsequences across all possible $(a_i)$ .

*Proposed by Yang Liu*
