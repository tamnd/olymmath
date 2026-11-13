---
tag: YAM70VZNZV
kind: problem
type: answer
answer: f(x) = 1 for all x, and f(x) = x for all x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{Z}^+ \to \mathbb{Z}^+$ such that the following conditions hold:
(i) $a - b \mid f(a) - f(b)$ for all positive integers $a \neq b$,
(ii) $f(\varphi(a)) = \varphi(f(a))$ for all $a \in \mathbb{Z}^+$.
Note. $\varphi$ is the Euler's totient function: $\varphi(n)$ is the total number of positive integers not exceeding $n$ and co-prime with $n$.
