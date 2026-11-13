---
tag: DQ5PF8RCQX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Istmo Centroamericano MO
    url: https://artofproblemsolving.com/community/c6h2667241
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29502
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: istmo/2018
    source: hf-ai-mo-aops
    label: 2018 Istmo Centroamericano MO
---
A sequence of positive integers $g_1$ , $g_2$ , $g_3$ , $. . . $ is defined as follows: $g_1 = 1$ and for every positive integer $n$ , $$ g_{n + 1} = g^2_n + g_n + 1. $$ Show that $g^2_{n} + 1$ divides $g^2_{n + 1}+1$ for every positive integer $n$ .
