---
tag: V5B7BYJZ2B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560338
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10094
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Let $ABC$ be a triangle with $AB = 5$ , $AC = 8$ , and $BC = 7$ . Let $D$ be on side $AC$ such that $AD = 5$ and $CD = 3$ . Let $I$ be the incenter of triangle $ABC$ and $E$ be the intersection of the perpendicular bisectors of $\overline{ID}$ and $\overline{BC}$ . Suppose $DE = \frac{a\sqrt{b}}{c}$ where $a$ and $c$ are relatively prime positive integers, and $b$ is a positive integer not divisible by the square of any prime. Find $a+b+c$ .

*Proposed by Ray Li*
