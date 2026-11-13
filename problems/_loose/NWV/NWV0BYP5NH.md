---
tag: NWV0BYP5NH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A infinite sequence $\{ a_n \}_{n \ge 0}$ of real numbers satisfy $a_n \ge n^2$. Suppose that for each $i, j \ge 0$ there exist $k, l$ with $(i,j) \neq (k,l)$, $l - k = j - i$, and $a_l - a_k = a_j - a_i$. Prove that $a_n \ge (n + 2016)^2$ for some $n$.
