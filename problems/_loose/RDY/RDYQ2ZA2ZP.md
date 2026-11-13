---
tag: RDYQ2ZA2ZP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h622193
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12876
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2015
    source: hf-ai-mo-aops
    label: 2015 NIMO Problems
---
Let $a, b, c, d, e,$ and $f$ be real numbers. Define the polynomials $$
P(x) = 2x^4 - 26x^3 + ax^2 + bx + c \text{ and } Q(x) = 5x^4 - 80x^3 + dx^2 + ex + f. $$ Let $S$ be the set of all complex numbers which are a root of *either* $P$ or $Q$ (or both). Given that $S = \{1,2,3,4,5\}$ , compute $P(6) \cdot Q(6).$ *Proposed by Michael Tang*
