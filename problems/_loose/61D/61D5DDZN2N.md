---
tag: 61D5DDZN2N
kind: problem
type: answer
answer: \in(0,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93566
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=1, a_{n+1}=\sqrt{a_{n}^{2}-2 a_{n}+3}+c\left(n \in \mathbf{N}^{*}\right)$. Here, $c$ is a constant greater than 0.
(1) If $c=1$, find the general term formula of the sequence $\left\{a_{n}\right\}$;
(2) If the sequence $\left\{a_{n}\right\}$ has an upper bound, find the range of values for $c$.
