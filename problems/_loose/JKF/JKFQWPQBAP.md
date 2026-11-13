---
tag: JKFQWPQBAP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 CMIMC Geometry
    url: https://artofproblemsolving.com/community/c6h1374758
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70657
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261691
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2017
    source: hf-ai-mo-aops
    label: 2017 CMIMC Geometry
---
Two circles $\omega_1$ and $\omega_2$ are said to be $\textit{orthogonal}$ if they intersect each other at right angles. In other words, for any point $P$ lying on both $\omega_1$ and $\omega_2$ , if $\ell_1$ is the line tangent to $\omega_1$ at $P$ and $\ell_2$ is the line tangent to $\omega_2$ at $P$ , then $\ell_1\perp \ell_2$ . (Two circles which do not intersect are not orthogonal.)

Let $\triangle ABC$ be a triangle with area $20$ . Orthogonal circles $\omega_B$ and $\omega_C$ are drawn with $\omega_B$ centered at $B$ and $\omega_C$ centered at $C$ . Points $T_B$ and $T_C$ are placed on $\omega_B$ and $\omega_C$ respectively such that $AT_B$ is tangent to $\omega_B$ and $AT_C$ is tangent to $\omega_C$ . If $AT_B = 7$ and $AT_C = 11$ , what is $\tan\angle BAC$ ?
