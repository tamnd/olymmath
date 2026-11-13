---
tag: WXFJQVEB8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geq 2$, whose canonical prime factorization is $n = p_1^{\alpha_1}p_2^{\alpha_2} \ldots p_k^{\alpha_k}$, we define the following functions:
$$\varphi(n) = n\bigg(1 -\frac{1}{p_1}\bigg) \bigg(1 -\frac{1}{p_2}\bigg) \ldots \bigg(1 -\frac {1}{p_k}\bigg) ; \overline{\varphi}(n) = n\bigg(1 +\frac{1}{p_1}\bigg) \bigg(1 +\frac{1}{p_2}\bigg) \ldots \bigg(1 + \frac{1}{p_k}\bigg)$$
Consider all positive integers $n$ such that $\overline{\varphi}(n)$ is a multiple of $n + \varphi(n) $.
(a) Prove that $n$ is even.
(b) Determine all positive integers $n$ that satisfy this property.
