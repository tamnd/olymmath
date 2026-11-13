---
tag: TB6T2SWC1P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205838
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n \ge 2009$ be an integer and define the set:
$$ S = \{2^x|7 \le x \le n, x \in \mathbb{N}\}.
$$
Let $ A$ be a subset of $ S$ and the sum of last three digits of each element of $ A$ is $ 8$. Let $ n(X)$ be the number of elements of $ X$. Prove that
$$ \frac {28}{2009} < \frac {n(A)}{n(S)} < \frac {82}{2009}.
$$
