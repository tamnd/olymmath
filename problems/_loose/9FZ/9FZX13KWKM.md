---
tag: 9FZX13KWKM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S = \{1, 2, \dots, n\}$, $n \ge 2$, and let $f : S \to S$ be a bijective function distinct from the identity. Let $u = \sum_{k=1}^{n} |f(k) - k|$ and let $v$ be the number of ordered pairs $(a, b)$ of elements of $S$ such that $a > b$ and $f(a) < f(b)$. Show that $v < u \le 2v$, and that $u = 2v$ if and only if there do not exist positive integers $a > b > c$ such that $f(a) < f(b) < f(c)$.
