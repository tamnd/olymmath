---
tag: YZEMMPW4A4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Vietnam Team Selection Test
    url: https://artofproblemsolving.com/community/c6h373495
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6023
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208166
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 Vietnam Team Selection Test
---
Let $n$ be a positive integer. Let $T_n$ be a set of positive integers such that:
$${T_n={ \{11(k+h)+10(n^k+n^h)| (1 \leq k,h \leq 10)}}\}$$
Find all $n$ for which there don't exist two distinct positive integers $a, b \in T_n$ such that $a\equiv b \pmod{110}$
