---
tag: R7ACWN2YQ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots a_{n}$ be positive integers satisfying

$$
\sum_{i=1}^{n} \frac{1}{a_{i}} \leqslant \frac{1}{2}
$$

Each year, the organizers of the International Olympiad publish a quality report based on $n$ criteria. For the $i$-th criterion, the report assigns a score which is an integer between 1 and $a_{i}$. The report is said to be optimistic if at least $n-1$ of the $n$ criteria have a score strictly higher than the score they had the previous year. The organizers will publish the first report in 2021. Show that they can arrange to publish an optimistic report every year from 2022 onwards.
