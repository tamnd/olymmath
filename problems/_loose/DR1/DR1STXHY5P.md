---
tag: DR1STXHY5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $g : \mathbb{R} \to \mathbb{R}$ be a continuous function. Prove that:

a) if the inequality $g\left(\int_0^1 f(t) dt\right) \le \int_0^1 g(f(t)) dt$ holds for every integrable function $f : [0, 1] \to \mathbb{R}$, then $g$ is convex;

b) if the inequality $g\left(\int_0^1 f(t) dt\right) \le \int_0^1 g(f(t)) dt$ holds for every continuous function $f : [0, 1] \to \mathbb{R}$, then $g$ is convex.
