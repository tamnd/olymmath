---
tag: 6YMVE80ANS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h2238367
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31210
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230656
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Belarusian National Olympiad
---
Given a quadrilateral $ABCD$ with $\angle ABC = \angle ADC$ . Let $BM$ be the altitude of the triangle $ABC$ , and $M$ belongs to $AC$ . Point $M'$ is marked on the diagonal $AC$ so that $$ \frac{AM \cdot CM'}{ AM' \cdot CM}= \frac{AB \cdot CD }{ BC \cdot AD} $$ Prove that the intersection point of $DM'$ and $BM$ coincides with the orthocenter of the triangle $ABC$ .

(M. Zhikhovich)
