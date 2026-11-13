---
tag: R0DW9F3CXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265917
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a function $P(n)$ from the set of positive integers to itself, where $P(1)=1$ and if an integer $n > 1$ has prime factorization $$n = p_1^{a_1}p_2^{a_2} \dots p_k^{a_k}$$
then $$P(n) = a_1^{p_1}a_2^{p_2} \dots a_k^{p_k}.$$
Prove that $P(P(n)) \le n$ for all positive integers $n.$

*Proposed by Evan Chang (squareman), USA*
