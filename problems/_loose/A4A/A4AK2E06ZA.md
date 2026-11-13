---
tag: A4AK2E06ZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Thailand/train/0000.parquet#row=3
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Genji the ninja is to jump along the real axis, starting at the point $0$. In doing so, he alternates between the following two types of jumps, his first jump being type 1.

**Type 1:** Genji jumps from the current position $x$ to a point $y$ in the set
$$
\{x, x+1, x+2, x+3, x+4, x+5, x+6\}.
$$

**Type 2:** Genji jumps from the current position $y$ to $(\sqrt{2}-3)y$.

Let $a$ and $b$ be integers. Prove that there exists a finite sequence of jumps that allows Genji to land on the point $a+b\sqrt{2}$.
