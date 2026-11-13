---
tag: 6X00DPCACD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84391
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number. Show that there exists an integer $k$ of order $p-1$ modulo $p$ and of order $p(p-1)$ modulo $p^{2}$.

Suppose now that $n$ is composite. We will say that an integer $x \in \mathbb{Z} / n \mathbb{Z}$ is loyal if choosing $u=x$ in line 6 shows that $n$ is composite, and that $x$ is disloyal otherwise.
