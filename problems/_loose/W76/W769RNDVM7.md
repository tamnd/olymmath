---
tag: W769RNDVM7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92723
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies: $a_{1}=1, a_{2}=1-2 \sin ^{2} \theta \cos ^{2} \theta, a_{n+2}-a_{n+1}+a_{n} \sin ^{2} \theta \cos ^{2} \theta=0, \theta \in\left(0, \frac{\pi}{2}\right)$, prove that: $\frac{1}{2^{n-1}} \leqslant a_{n} \leqslant 1-\sin ^{n} 2 \theta\left(1-\frac{1}{2^{n-1}}\right)$.
