---
tag: 55HBMAA4A4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $a_i$ is defined as $a_1 = 1$ and
$$a_n = a_{\left\lfloor \dfrac{n}{2} \right\rfloor} + a_{\left\lfloor \dfrac{n}{3} \right\rfloor} + a_{\left\lfloor \dfrac{n}{4} \right\rfloor} + \cdots + a_{\left\lfloor \dfrac{n}{n} \right\rfloor} + 1$$
for every positive integer $n > 1$. Prove that there are infinitely many values of $n$ such that $a_n \equiv n \mod 2012$.
