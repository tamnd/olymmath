---
tag: CWNNCVD6QA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Probabilistic proof of Euler's formula for the number of prime numbers not exceeding a given number.) Let $\varphi(n)$ be the Euler's function - the number of prime numbers $p$ such that $1<p \leqslant n$. Using probabilistic arguments, prove the following Euler's formula:

$$
\frac{\varphi(n)}{n}=\prod_{p \mid n}\left(1-\frac{1}{p}\right)
$$

(the notation $p \mid n$, as usual, means that $p$ divides $n$).
