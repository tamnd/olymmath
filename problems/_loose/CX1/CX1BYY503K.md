---
tag: CX1BYY503K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1984 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h397770
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=79217
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/1984
    source: hf-ai-mo-aops
    label: 1984 Vietnam National Olympiad
---
The sequence $(u_n)$ is defined by $u_1 = 1, u_2 = 2$ and $u_{n+1} = 3u_n - u_{n-1}$ for $n \ge 2$ . Set $v_n =\sum_{k=1}^n \text{arccot }u_k$ . Compute $\lim_{n\to\infty} v_n$ .
