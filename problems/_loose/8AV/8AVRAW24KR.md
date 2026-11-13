---
tag: 8AVRAW24KR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ and $q$ be two natural integers that are coprime. For any integer $n$, we denote $r_{p}(\mathfrak{n})$ (respectively, $r_{q}(\mathfrak{n})$) the remainder in the Euclidean division of $n$ by $p$ (respectively $q$). Show that $\sum_{n=0}^{p q-1}(-1)^{r_{p}(n)+r_{q}(n)}$ is 0 if $p q$ is even, and 1 if $p q$ is odd.
