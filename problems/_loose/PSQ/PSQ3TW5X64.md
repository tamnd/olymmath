---
tag: PSQ3TW5X64
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Chinese Theorem) Let $a, b, x$ and $y$ be four integers such that $a x + b y = 1$. Show that the application $\varphi: \mathbb{Z}^{2} \rightarrow \mathbb{Z} / a b \mathbb{Z}$ such that $\varphi(u, v) = u b y + v a x$ is a group homomorphism with kernel $\operatorname{Ker}(\varphi) = a \mathbb{Z} \times b \mathbb{Z}$.

Definition 80. (Order of an element) Let $(G, *)$ be a group and $g$ an element of $G$ and $n$ the smallest positive integer such that $g^{n} = e_{G}$ (if such an integer exists). We say that $n$ is the order of $g$ - and that $g$ is of infinite order if no such integer exists.
