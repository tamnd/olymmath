---
tag: AN72HH7QVQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h226711
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24876
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1989
    source: hf-ai-mo-aops
    label: 1989 IMO Longlists
---
The sequences $ a_0, a_1, \ldots$ and $ b_0, b_1, \ldots$ are defined for $ n = 0, 1, 2, \ldots$ by the equalities
$$ a_0 = \frac {\sqrt {2}}{2}, a_{n + 1} = \frac {\sqrt {2}}{2} \cdot \sqrt {1 - \sqrt {1 - a^2_n}}
$$
and
$$ b_0 = 1, b_{n + 1} = \frac {\sqrt {1 + b^2_n} - 1}{b_n}
$$
Prove the inequalities for every $ n = 0, 1, 2, \ldots$
$$ 2^{n + 2} a_n < \pi < 2^{n + 2} b_n.
$$
