---
tag: BHF19RAK5Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33603
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathfrak{J}_{i}, i \in I,$ be arbitrary sets. Establish that the following relation always holds:

$$
\bigcup_{i \in \mathfrak{I}} \bigcap_{j \in \mathfrak{J}_{i}} A_{i j}=\bigcap_{j_{\infty}} \bigcup_{i \in \mathfrak{I}} A_{i j_{i}}
$$

where the intersection is taken over all "paths" $j_{\infty}=\left(j_{i}, i \in \mathfrak{I}\right), j_{i} \in \mathfrak{J}_{i}$.

Also show that

$$
\bigcap_{i \in \mathfrak{J}} \bigcup_{j \in \mathfrak{J}_{i}} A_{i j}=\bigcup_{j_{\infty}} \bigcap_{i \in \mathfrak{J}} A_{i j_{i}} .
$$
