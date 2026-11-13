---
tag: DWYGZP6CWQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Peru Iberoamerican Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2301135
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50495
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246129
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-ibero-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Peru Iberoamerican Team Selection Test
---
For each positive integer $m$ , be $P(m)$ the product of all the digits of $m$ . It defines the succession $a_1,a_2, a_3\cdots, $ as follows:
. $a_1$ is a positive integer less than 2018
. $a_{n+1}=a_n+P(a_n)$ for each integer $n\ge 1$ Prove that for every integer $n \ge1$ it is true that $a_n \le 2^{2018}.$
