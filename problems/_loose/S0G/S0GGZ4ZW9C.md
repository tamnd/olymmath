---
tag: S0GGZ4ZW9C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Singapore Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2042147
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59210
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2010
    source: hf-ai-mo-aops
    label: 2010 Singapore Junior Math Olympiad
---
Let $a_1, a_2, ..., a_n$ be positive integers, not necessarily distinct but with at least five distinct values. Suppose that for any $1 \le i < j \le n$ , there exist $k,\ell$ , both different from $i$ and $j$ such that $a_i + a_j = a_k + a_{\ell}$ . What is the smallest possible value of $n$ ?
