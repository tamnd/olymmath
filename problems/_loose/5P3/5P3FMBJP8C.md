---
tag: 5P3FMBJP8C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243306
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\sigma : \{1, 2, . . . , n\} \to \{1, 2, . . . , n\}$ be a bijective mapping. Let $S_n$ be the set of all such mappings and let $d_k(\sigma) = |\sigma(k) - \sigma(k + 1)|$, for all $k \in \{1, 2, ..., n\}$, where $\sigma (n + 1) = \sigma (1)$. Also let $d(\sigma) = \min \{d_k(\sigma) | 1 \le k \le n\}$. Find $\max_{\sigma \in S_n} d(\sigma)$.
