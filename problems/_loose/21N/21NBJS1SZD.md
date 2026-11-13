---
tag: 21NBJS1SZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n>1$, for a positive integer $m$, let $S_{m}=\{1,2, \cdots, m n\}$. Suppose there exists a family of sets $\mathscr{F},|\mathscr{F}|=$ $2 n$ satisfying the conditions:
(1) Each set in the family $\mathscr{F}$ is an $m$-element subset of the set $S_{m}$;
(2) Any two sets in the family $\mathscr{F}$ have at most one common element;
(3) Each element of the set $S_{m}$ appears in exactly two sets in the family $\mathscr{F}$.
Find the maximum value of $m$.
(2005, USA National Team Selection Exam)
