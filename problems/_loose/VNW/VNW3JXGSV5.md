---
tag: VNW3JXGSV5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h39817
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40012
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237015
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Germany Team Selection Test
---
Let $b$ and $c$ be any two positive integers. Define an integer sequence $a_n$ , for $n\geq 1$ , by $a_1=1$ , $a_2=1$ , $a_3=b$ and $a_{n+3}=ba_{n+2}a_{n+1}+ca_n$ .

Find all positive integers $r$ for which there exists a positive integer $n$ such that the number $a_n$ is divisible by $r$ .
