---
tag: CGDE7F18G8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h98963
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35852
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2005
    source: hf-ai-mo-aops
    label: 2005 China Team Selection Test
---
Let $a_1,a_2 \dots a_n$ and $x_1, x_2 \dots x_n$ be integers and $r\geq 2$ be an integer. It is known that $$\sum_{j=0}^{n} a_j x_j^k =0 \text{for} k=1,2, \dots r.$$
Prove that
$$\sum_{j=0}^{n} a_j x_j^m \equiv 0 \pmod m, \text{for all} m \in \{ r+1, r+2, \cdots, 2r+1 \}.$$
