---
tag: ERCAN55BWC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620754
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16828
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $p = 9001$ be a prime number and let $\mathbb{Z}/p\mathbb{Z}$ denote the additive group of integers modulo $p$ . Furthermore, if $A, B \subset \mathbb{Z}/p\mathbb{Z}$ , then denote $A+B = \{a+b \pmod{p} | a \in A, b \in B \}.$ Let $s_1, s_2, \dots, s_8$ are positive integers that are at least $2$ . Yang the Sheep notices that no matter how he chooses sets $T_1, T_2, \dots, T_8\subset \mathbb{Z}/p\mathbb{Z}$ such that $|T_i| = s_i$ for $1 \le i \le 8,$ $T_1+T_2+\dots + T_7$ is never equal to $\mathbb{Z}/p\mathbb{Z}$ , but $T_1+T_2+\dots+T_8$ must always be exactly $\mathbb{Z}/p\mathbb{Z}$ . What is the minimum possible value of $s_8$ ?

*Proposed by Yang Liu
