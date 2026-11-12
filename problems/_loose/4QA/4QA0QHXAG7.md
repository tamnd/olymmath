---
tag: 4QA0QHXAG7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3585208
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2663
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
Let $n$ be a natural number. We define a sequence $(a_i)_{i \geqslant 1}$ as follows: $a_1=1, a_2=2, a_3=3, a_4=4,$ and $a_5=n$ , and $$ a_{i+5} = \frac{\left(a_i+a_{i+1}+a_{i+2}+a_{i+3}+a_{i+4}\right)}{5} $$ for all $i \geqslant 1$ . Find all possible values of $n$ for which the following holds: given any natural number $N$ , there exist natural numbers $r>N, s>N$ such that $a_r<2025<a_s$ .

*Proposed by Tejaswi Navilarekallu*
