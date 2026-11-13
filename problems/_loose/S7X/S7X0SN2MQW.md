---
tag: S7X0SN2MQW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1065737
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12862
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214770
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
Let $ABCD$ be a rectangle with $AB = 6$ and $BC = 6 \sqrt 3$ . We construct four semicircles $\omega_1$ , $\omega_2$ , $\omega_3$ , $\omega_4$ whose diameters are the segments $AB$ , $BC$ , $CD$ , $DA$ . It is given that $\omega_i$ and $\omega_{i+1}$ intersect at some point $X_i$ in the interior of $ABCD$ for every $i=1,2,3,4$ (indices taken modulo $4$ ). Compute the square of the area of $X_1X_2X_3X_4$ .

*Proposed by Evan Chen*
