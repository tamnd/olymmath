---
tag: TZN5H960AG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XXXI Brazilian Math Olympiad
---
Find all functions $f: \mathbb{Z} \to \mathbb{Z}$ such that
(i) $f(f(n)) = f(n+1)$ for all $n \in \mathbb{Z}$;
(ii) $f(2009n + 2008) = 2009 \cdot f(n)$ for all $n \in \mathbb{Z}$.
