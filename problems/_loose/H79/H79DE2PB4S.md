---
tag: H79DE2PB4S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=a(a>2), a_{n+1}=\frac{a_{n}^{2}}{2\left(a_{n}-1\right)}\left(n \in \mathbf{N}^{*}\right)$. Prove:
(1) For all positive integers $n$, we have $a_{n}>a_{n+1}>2$;
(2) $a_{1}+a_{2}+\cdots+a_{n}<2(n+a-2)$.
