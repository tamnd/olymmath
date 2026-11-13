---
tag: E9CTET3D1Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h2937046
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27690
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228078
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A ternary sequence is one whose terms all lie in the set $\{0, 1, 2\}$ . Let $w$ be a length $n$ ternary sequence $(a_1,\ldots,a_n)$ . Prove that $w$ can be extended leftwards and rightwards to a length $m=6n$ ternary sequence $$(d_1,\ldots,d_m) = (b_1,\ldots,b_p,a_1,\ldots,a_n,c_1,\ldots,c_q), p,q\geqslant 0,$$containing no length $t > 2n$ palindromic subsequence.

(A sequence is called palindromic if it reads the same rightwards and leftwards. A length $t$ subsequence of $(d_1,\ldots,d_m)$ is a sequence of the form $(d_{i_1},\ldots,d_{i_t})$ , where $1\leqslant i_1<\cdots<i_t \leqslant m$ .)
