---
tag: T2KXVWA3ZW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
* Let $P(x)$ be the polynomial $a x^{2}+b x+c$. Suppose there exists an integer $z \in \mathbb{Z}$ such that

$$
P(z) \equiv 0 \bmod p \text { and } 2 a z+b \not \equiv 0 \bmod p
$$

Show that, for all integers $n \geq 1$, there exists an integer $z_{n} \in \mathbb{Z}$ such that

$$
z_{n} \equiv z \bmod p \text { and } P\left(z_{n}\right) \equiv 0 \bmod p^{n}
$$
