---
tag: BZAVJE5AGM
kind: problem
type: answer
answer: n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118775
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
3 Given a positive integer $n$, find the smallest positive number $\lambda$, such that for any $\theta_{i} \in \left(0, \frac{\pi}{2}\right)(i=1,2, \cdots, n)$, if $\tan \theta_{1} \cdot \tan \theta_{2} \cdots \cdots \cdot \tan \theta_{n} = 2^{\frac{n}{2}}$, then $\cos \theta_{1}+\cos \theta_{2}+\cdots+\cos \theta_{n}$ is not greater than $\lambda$.
