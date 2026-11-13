---
tag: QHRB2J7GTV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231676
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for all integers $n\ge3$ there exists a set $A_n=\{a_1,a_2,\ldots,a_n\}$ of $n$ distinct natural numbers such that, for each $i=1,2,\ldots,n$,
$$\prod_{\small{\begin{matrix}1\le k\le n\\k\ne i\end{matrix}}}a_k\equiv1\pmod{a_i}.$$
