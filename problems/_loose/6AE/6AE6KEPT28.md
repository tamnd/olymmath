---
tag: 6AE6KEPT28
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263809
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_1$, $A_2$, $\ldots\,$, $A_n$ be finite sets. Prove that
$$
\Bigl| \bigcup_{1 \le i \le n} A_i \Bigr|
\ge \frac{1}{2} \sum_{1 \le i \le n} \left| A_i \right|
- \frac{1}{6} \sum_{1 \le i < j \le n} \left| A_i \cap A_j \right| .
$$
Recall that if $S$ is a finite set, then its cardinality $|S|$ is the number of elements of $S$.
