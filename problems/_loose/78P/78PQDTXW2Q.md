---
tag: 78PQDTXW2Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h42532
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35652
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234173
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
There is a broken computer such that only three primitive data $c$ , $1$ and $-1$ are reserved. Only allowed operation may take $u$ and $v$ and output $u \cdot v + v.$ At the beginning, $u,v \in \{c, 1, -1\}.$ After then, it can also take the value of the previous step (only one step back) besides $\{c, 1, -1\}$ . Prove that for any polynomial $P_{n}(x) = a_0 \cdot x^n + a_1 \cdot x^{n-1} + \ldots + a_n$ with integer coefficients, the value of $P_n(c)$ can be computed using this computer after only finite operation.
