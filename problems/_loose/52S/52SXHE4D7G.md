---
tag: 52SXHE4D7G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-mathnet
    label: China 2025 International Mathematical Olympiad China National Team Selection Test
---
Find all functions $f : \mathbb{Z} \to \mathbb{Z}$ satisfying:
(1) For any positive integer $M$, there exists an integer $k$ with $|f(k)| \ge M$;
(2) For any integers $m, n$,
$$2f(m)f(n) - f(m - n) - 1$$ is a perfect square.
