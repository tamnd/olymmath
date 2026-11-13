---
tag: N50AYESBQE
kind: problem
type: answer
answer: "107"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205982
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ y_0$ be chosen randomly from $ \{0, 50\}$, let $ y_1$ be chosen randomly from $ \{40, 60, 80\}$, let $ y_2$ be chosen randomly from $ \{10, 40, 70, 80\}$, and let $ y_3$ be chosen randomly from $ \{10, 30, 40, 70, 90\}$. (In each choice, the possible outcomes are equally likely to occur.) Let $ P$ be the unique polynomial of degree less than or equal to $ 3$ such that $ P(0) = y_0$, $ P(1) = y_1$, $ P(2) = y_2$, and $ P(3) = y_3$. What is the expected value of $ P(4)$?
