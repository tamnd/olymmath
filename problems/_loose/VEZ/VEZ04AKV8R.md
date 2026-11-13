---
tag: VEZ04AKV8R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2014660
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36019
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1986
    source: hf-ai-mo-aops
    label: 1986 National High School Mathematics League
---
In rectangular coordinate system, define that if and only if both $x$ -axis and $y$ -axis of a point are integers, we call it integral point. Please color all intengral points in white, red and black, satisfying:
(1) Points in every color appear on infinitely many lines that are parallel to $x$ -axis.
(2) For any white point $A$ , red point $B$ , black point $C$ , we can find another red point $D$ , such that $ABCD$ is a parallelogram.
