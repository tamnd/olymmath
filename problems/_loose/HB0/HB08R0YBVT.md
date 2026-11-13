---
tag: HB08R0YBVT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the natural numbers $a_{1}, a_{3}, \ldots, a_{19}, b_{1}, b_{2}, \ldots, b_{21}$, it holds that

$$
1 \leq a_{1}<a_{3}<\ldots<a_{19} \leq 200, 1 \leq b_{1}<b_{2}<\ldots<b_{21} \leq 200
$$

Prove that among them, there exist numbers $a_{i}, a_{j}, b_{p}, b_{q}$ such that

$$
a_{i}<a_{j}, b_{p}<b_{q} \text { and } a_{j}-a_{i}=b_{q}-b_{p} .
$$
