---
tag: VSKCS7220X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h3705156
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49207
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=73
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2025
    source: hf-ai-mo-aops
    label: 2025 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand NZMO Round Two
---
For which positive integers $n$ , does there exist a sequence of real numbers $(x_1,x_2,...,x_n)$ such that $\bullet$ $-2 <x_i <2$ for all $i$ $\bullet$ $x_1 +x_2 +x_3 +...+x_n = 0$ , and $\bullet$ $x_1^4 + x_2^4 + x_3^4 + ··· + x_n^4 \ge 32$ .
