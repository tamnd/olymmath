---
tag: N6M92QZAT4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h97489
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35875
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2006
    source: hf-ai-mo-aops
    label: 2006 China Team Selection Test
---
$d$ and $n$ are positive integers such that $d \mid n$ . The n-number sets $(x_1, x_2, \cdots x_n)$ satisfy the following condition:
(1) $0 \leq x_1 \leq x_2 \leq \cdots \leq x_n \leq n$

(2) $d \mid (x_1+x_2+ \cdots x_n)$

Prove that in all the n-number sets that meet the conditions, there are exactly half satisfy $x_n=n$ .
