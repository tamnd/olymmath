---
tag: AYN29TRYF8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence of integers $a_1, a_2, \dots, a_k$ where every term $a_i \in \{1,2\}$, and let $S$ denote their sum. Another sequence of integers $t_1, t_2,\ldots, t_k$ is defined by $$t_i=\sqrt{a_i(S-a_i)},$$ for all $t_i$. Suppose that $\sum_{1 \leq i \leq k} t_i=4000.$ Find the value of $\sum_{1 \leq i \leq k} a^2_i$.

*Individual #8*
