---
tag: GXXY7RYYAM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3052517
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1073
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204739
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2023
    source: hf-ai-mo-aops
    label: 2023 Romania National Olympiad
---
Let $(G, \cdot)$ a finite group with order $n \in \mathbb{N}^{*},$ where $n \geq 2.$ We will say that group $(G, \cdot)$ is arrangeable if there is an ordering of its elements, such that

$$
G = \{ a_1, a_2, \ldots, a_k, \ldots , a_n \} = \{ a_1 \cdot a_2, a_2 \cdot a_3, \ldots, a_k \cdot a_{k + 1}, \ldots , a_{n} \cdot a_1 \}.
$$

a) Determine all positive integers $n$ for which the group $(Z_n, +)$ is arrangeable.

b) Give an example of a group of even order that is arrangeable.
