---
tag: 8JYA2AMJTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3330140
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1766
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2024
    source: hf-ai-mo-aops
    label: 2024 India IMOTC
---
Let $n$ be a positive integer. Let $s: \mathbb N \to \{1, \ldots, n\}$ be a function such that $n$ divides $m-s(m)$ for all positive integers $m$ . Let $a_0, a_1, a_2, \ldots$ be a sequence such that $a_0=0$ and $$a_{k}=a_{k-1}+s(k) \text{ for all }k\ge 1.$$
Find all $n$ for which this sequence contains all the residues modulo $(n+1)^2$ .

*Proposed by N.V. Tejaswi*
