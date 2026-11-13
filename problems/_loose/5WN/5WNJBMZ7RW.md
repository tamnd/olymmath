---
tag: 5WNJBMZ7RW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If a positive integer $n \geq 2$ satisfies that for any integer $a$, there exists a positive integer $m$ such that $m^{m} \equiv a(\bmod n)$, then $n$ is called a "good number". Prove:
$n$ is a good number if and only if $(n, \varphi(n))=1$. (Here $\varphi(n)$ is the Euler's totient function, which represents the number of integers up to $n$ that are coprime with $n$)
