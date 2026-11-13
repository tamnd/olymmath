---
tag: HS08K0VWPN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254395
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m \leq n$ be positive integers and $p$ be a prime. Let $p-$expansions of $m$ and $n$ be
$$m = a_0 + a_1p + \dots + a_rp^r$$$$n = b_0 + b_1p + \dots + b_sp^s$$
respectively, where $a_r, b_s \neq 0$, for all $i \in \{0,1,\dots,r\}$ and for all $j \in \{0,1,\dots,s\}$, we have $0 \leq a_i, b_j \leq p-1$ .
If $a_i \leq b_i$ for all $i \in \{0,1,\dots,r\}$, we write $ m \prec_p n$. Prove that
$$p \nmid {{n}\choose{m}} \Leftrightarrow m \prec_p n$$.
