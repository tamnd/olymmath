---
tag: 9T1HP3ATJY
kind: problem
type: answer
answer: s_{n}=2\times3^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $u_{1}, u_{2}, \ldots, u_{n}$ composed of the integers $1,2, \ldots, n$ is quasi-increasing if, for every index $k, u_{k} \leq u_{k+1}+2$. For example, the sequence $1,6,4,2,5,3$ is quasi-increasing but the sequence $1,4,6,2,5,3$ is not. Determine the number of quasi-increasing sequences of $n$ terms.
