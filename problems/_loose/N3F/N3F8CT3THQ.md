---
tag: N3F8CT3THQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Let $x$ be a real number. Prove that $x$ is an integer if and only if
$$
[x] + [2x] + [3x] + \dots + [nx] = \frac{n([x] + [nx])}{2}
$$
holds for all positive integers $n$ (here, $[a]$ denotes the integer part (floor function) of the real number $a$).
