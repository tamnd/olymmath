---
tag: NTMHC2GET3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{a_1,...,a_n\}\subset \{-1,1\}$ and $a>0$ . Denote by $X$ and $Y$ the number of collections $\{\varepsilon_1,...,\varepsilon_n\}\subset \{-1,1\}$, such that $$max_{1\le k\le n}(\varepsilon_1a_1+...+\varepsilon_ka_k) >\alpha$$ and $$\varepsilon_1a_1+...+\varepsilon_na_n>a$$ respectively. Prove that $X\le 2Y$.
