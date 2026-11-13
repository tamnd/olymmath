---
tag: ZBG1CPPYD1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h42534
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35654
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96983
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1989
    source: hf-ai-mo-aops
    label: 1989 China Team Selection Test
---
Let $v_0 = 0, v_1 = 1$ and $v_{n+1} = 8 \cdot v_n - v_{n-1},$ $n = 1,2, ...$ . Prove that in the sequence $\{v_n\}$ there aren't terms of the form $3^{\alpha} \cdot 5^{\beta}$ with $\alpha, \beta \in \mathbb{N}.$
