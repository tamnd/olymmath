---
tag: F049E5GMHR
kind: problem
type: answer
answer: ()^{21}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85795
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A5 According to a fixed rule, we transform a triplet of numbers $(a, b, c)$ into a new triplet as follows: from $(a, b, c)$ we make $(a b, b c, c a)$. So from $(2,4,3)$ we get $(2 \times 4,4 \times 3,3 \times 2)=(8,12,6)$. We start with a triplet of different positive numbers $(a, b, c)$ and repeat this process, so $(a, b, c) \rightarrow(a b, b c, c a) \rightarrow\left(a b^{2} c, b c^{2} a, c a^{2} b\right)$ and so on...

After a number of steps, we get a triplet $(p a, p b, p c)$, where the three numbers are again in the same ratio as the initial numbers, namely $a: b: c$.

Express $p$ in terms of $a, b$, and $c$.

Note! In a triplet, the order of the numbers is important, so $(2,3,4)$ is not the same as $(2,4,3)$
