---
tag: 2TEQ0GPTWZ
kind: problem
type: answer
answer: f(x) = 3x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Find all functions $f : \mathbb{R} \to \mathbb{R}$ such that
(i) the set $\left\{ \frac{f(x)}{x} \mid x \ne 0 \right\}$ is finite,
(ii) $f(3x - 1 - f(x)) = 3(f(x) - 1 - 3x)$ for all $x \in \mathbb{R}$.
