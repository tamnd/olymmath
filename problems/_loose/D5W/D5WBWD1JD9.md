---
tag: D5WBWD1JD9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=263
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We denote the set of all nonzero integers and the set of all nonnegative integers by $\mathbb{Z}^*$ and $\mathbb{N}_0$, respectively. Find all functions $f:\mathbb{Z}^* \to \mathbb{N}_0$ for which the following two conditions hold:

(1) for each $a,b \in \mathbb{Z}^*$ such that $a+b \in \mathbb{Z}^*$ it holds that $f(a+b) \ge \min\{f(a),f(b)\}$;

(2) for each $a,b \in \mathbb{Z}^*$ it holds that $f(ab)=f(a)+f(b)$.
