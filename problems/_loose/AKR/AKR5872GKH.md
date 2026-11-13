---
tag: AKR5872GKH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1445930
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15839
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217535
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2017
    source: hf-ai-mo-aops
    label: 2017 NIMO Problems
---
For each positive integer $n$ , let $r_n$ be the smallest positive root of the equation $x^n = 7x - 4$ . There are positive real numbers $a$ , $b$ , and $c$ such that $$\lim_{n \to \infty} a^n (r_n - b) = c.$$ If $100a + 10b + c = \frac{p}{7}$ for some integer $p$ , find $p$ .

*Proposed by Mehtaab Sawhney*
