---
tag: 569WV1AVFX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241663
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix $a_1, . . . , a_n \in (0, 1)$ and define $$f(I) = \prod_{i \in I} a_i \cdot \prod_{j \notin I} (1 - a_j)$$
for each $I \subseteq \{1, . . . , n\}$. Assuming that $$\sum_{I\subseteq \{1,...,n\}, |I| odd} {f(I)} = \frac12,$$
show that at least one $a_i$ has to be equal to $\frac12$.

(Paolo Leonetti)
