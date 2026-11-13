---
tag: 8V5BBXHGEY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h42529
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35649
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1988
    source: hf-ai-mo-aops
    label: 1988 China Team Selection Test
---
Let $k \in \mathbb{N},$ $S_k = \{(a, b) | a, b = 1, 2, \ldots, k \}.$ Any two elements $(a, b)$ , $(c, d)$ $\in S_k$ are called "undistinguishing" in $S_k$ if $a - c \equiv 0$ or $\pm 1 \pmod{k}$ and $b - d \equiv 0$ or $\pm 1 \pmod{k}$ ; otherwise, we call them "distinguishing". For example, $(1, 1)$ and $(2, 5)$ are undistinguishing in $S_5$ . Considering the subset $A$ of $S_k$ such that the elements of $A$ are pairwise distinguishing. Let $r_k$ be the maximum possible number of elements of $A$ .

(i) Find $r_5$ .
(ii) Find $r_7$ .
(iii) Find $r_k$ for $k \in \mathbb{N}$ .
