---
tag: JHRX8K6BTD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1,a_2,\dots,a_{100}$ be a sequence of integers. Initially, $a_1=1$, $a_2=-1$ and the remaining numbers are $0$. After every second, we perform the following process on the sequence: for $i=1,2,\dots,99$, replace $a_i$ with $a_i+a_{i+1}$, and replace $a_{100}$ with $a_{100}+a_1$. (All of this is done simultaneously, so each new term is the sum of two terms of the sequence from before any replacements.) Show that for any integer $M$, there is some index $i$ and some time $t$ for which $|a_i|>M$ at time $t$.
