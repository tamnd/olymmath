---
tag: 58WNJRQXV0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Federal Competition For Advanced Students, Part 2
    url: https://artofproblemsolving.com/community/c6h483103
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7882
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209966
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo/2012
    source: hf-ai-mo-aops
    label: 2012 Federal Competition For Advanced Students, Part 2
---
Given a sequence $<a_1,a_2,a_3,\cdots >$ of real numbers, we define $m_n$ as the arithmetic mean of the numbers $a_1$ to $a_n$ for $n\in\mathbb{Z}^+$ .
If there is a real number $C$ , such that
$$ (i-j)m_k+(j-k)m_i+(k-i)m_j=C$$
for every triple $(i,j,k)$ of distinct positive integers, prove that the sequence $<a_1,a_2,a_3,\cdots >$ is an arithmetic progression.
