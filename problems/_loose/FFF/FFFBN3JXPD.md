---
tag: FFFBN3JXPD
kind: problem
type: answer
answer: \frac{2022!\cdot2019!!}{1012!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90838
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Mathlandia has 2022 cities. Show that the number of ways to construct 2021 roads connecting pairs of cities such that it is possible to get between any two cities, there are no loops, and each city has exactly one or three roads coming out of it is given by

$$
\frac{2022 ! \cdot 2019 ! !}{1012 !}
$$

(The notation 2019!! means $2019 \cdot 2017 \cdot \cdots \cdot 3 \cdot 1$.)
