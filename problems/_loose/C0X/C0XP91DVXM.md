---
tag: C0XP91DVXM
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $n \geq 2$, consider the natural number $S(n)$ defined by

$$
S(n)=\underbrace{\overline{1 \ldots 1}}_{n \text { times }}+\underbrace{\overline{2 \ldots 2}}_{n \text { times }}+\ldots+\underbrace{\overline{9 \ldots 9}}_{n \text { times }}+10^{n}
$$

a) Calculate $S(3)$.

b) Determine the remainder of the division of $S(n)$ by 3.

c) Let $Q(n)$ be the quotient of the division of $S(n)$ by 3. Find the quotient of the division of the sum of the digits of $Q(n)$ by 9.

Emanuel Munteanu
