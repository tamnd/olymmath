---
tag: S8SKTRHYJC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246034
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $\mu: \mathbb{N}\to \mathbb{C}$ is defined by $$\mu(n) = \sum^{}_{k \in R_{n}}\left( \cos \frac{2k\pi}{n}+i \sin \frac{2k\pi}{n}\right),$$ where $R_{n}=\{ k \in \mathbb{N}\vert 1 \le k \le n, \gcd(k, n)=1 \}$. Show that $\mu(n)$ is an integer for all positive integer $n$.
