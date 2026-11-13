---
tag: 9Q3PVQ2NMB
kind: problem
type: answer
answer: "-1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{\epsilon_n\}^\infty_{n=1}$ be a sequence of positive reals with $\lim\limits_{n\rightarrow+\infty}\epsilon_n = 0$. Find $$ \lim\limits_{n\rightarrow\infty}\dfrac{1}{n}\sum\limits^{n}_{k=1}\ln\left(\dfrac{k}{n}+\epsilon_n\right) $$
