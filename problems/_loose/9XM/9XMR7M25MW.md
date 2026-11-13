---
tag: 9XMR7M25MW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h1673742
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32884
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2015
    source: hf-ai-mo-aops
    label: 2015 Olympic Revenge
---
For $n \in \mathbb{N}$ , let $P(n)$ denote the product of distinct prime factors of $n$ , with $P(1) = 1$ . Show that for any $a_0 \in \mathbb{N}$ , if we define a sequence $a_{k+1} = a_k + P(a_k)$ for $k \ge 0$ , there exists some $k \in \mathbb{N}$ with $a_k/P(a_k) = 2015$ .
