---
tag: MCAEXS4QKF
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a finite sequence $x_{1,1}, x_{2,1}, \dots , x_{n,1}$ of integers $(n\ge 2)$, not all equal, define the sequences $x_{1,k}, \dots , x_{n,k}$ by
$$ x_{i,k+1}=\frac{1}{2}(x_{i,k}+x_{i+1,k}) \text{where }x_{n+1,k}=x_{1,k}.$$
Show that if $n$ is odd, then not all $x_{j,k}$ are integers. Is this also true for even $n$?
