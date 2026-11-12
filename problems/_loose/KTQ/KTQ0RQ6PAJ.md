---
tag: KTQ0RQ6PAJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33796
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(\Omega, \mathscr{F})$ be an arbitrary measurable space. Define a set function $\mu=\mu(B), B \in \mathscr{F}$ on this space by

$$
\mu(B)= \begin{cases}|B|, & \text { if } B \text { is finite, } \\ \infty & \text { in other cases }\end{cases}
$$

where $|B|$ is the cardinality of the set $B$. Show that the set function $\mu$ defined in this way is a non-negative $\sigma$-additive set function, i.e., a measure. This measure is called the counting measure and is $\sigma$-finite if and only if $\Omega$ is at most countable.
