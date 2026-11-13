---
tag: A8GM1HQZCP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 51st Ukrainian National Mathematical Olympiad, 4th Round
---
Prove that for any collection $a_1, a_2, \dots, a_{2011}$ of real numbers with $a_{2011} \neq 0$ there exists a function $f: \mathbb{R} \to \mathbb{R}$, such that for any real $x$ we have:
$$
a_1 f(x) + a_2 f(f(x)) + \dots + a_{2011} \underbrace{f(f(f\dots f(x)\dots))}_{2011} = x.
$$
