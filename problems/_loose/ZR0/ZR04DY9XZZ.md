---
tag: ZR04DY9XZZ
kind: problem
type: answer
answer: a_{n}=\\theta\cosn\theta,b_{n}=\\theta\sinn\theta
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequences of real numbers $\left\{a_{n}\right\},\left\{b_{n}\right\}$, where all terms are non-zero, and $a_{n}=a_{n-1} \cos \theta-b_{n-1} \sin \theta, b_{n}=$ $a_{n-1} \sin \theta+b_{n-1} \cos \theta$, and $a_{1}=1, b_{1}=\tan \theta, \theta$ is a known number. Find the general formulas for $\left\{a_{n}\right\},\left\{b_{n}\right\}$.
