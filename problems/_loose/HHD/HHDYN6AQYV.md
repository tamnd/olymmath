---
tag: HHDYN6AQYV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are two boxes $ L$ and $ R$ such that $ L$ contains $ x$ balls and $ R$ contains $ 30 - x$ balls for $ 0\leq x\leq 30$.
Repeat the following operation (#):

(#) Let $ z$ be the number of ball in $ L$. Flip a coin with equal probability of coming up Head and Tails, if Head comes up, we move $ K(z)$' s balls from box $ R$ to box $ L$ and if Tails comes up, we move $ K(z)$'s balls from box $ L$ to box $ R$ . Note that $ K(z) = z$ when $ 0\leq z\leq 15,\ K(z) = 30 - z$ when $ 16\leq z\leq 30$.

After $ m^{th}$ operation, denote by $ P_m(x)$ the probability such that the number of balls in box $ L$ is 30. For example, $ P_1(15) = P_2(15) = \frac 12$. Answer the following questions (1), (2), (3).

(1) For $ m\geq 2$, by selecting $ y$ for $ x$ successfully, express $ P_m(x)$ in terms of $ P_{m - 1}(y)$.

(2) For each natural number $ n$, find $ P_{2n}(10)$.

in addition to, for applicants for Science,

(3) For each natural number $ n$, find $ P_{4n}(6)$.
